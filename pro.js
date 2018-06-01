#!/usr/bin/env node

const SpinalIfcFile = require("./SpinalIfcFile");
const spinalCore = require("spinal-core-connectorjs");
const q = require("q");
var IfcFileItem = require("./spinal-models_ifcfile/ifcfile").IfcFileItem;

let SpinalIfcSystem = function(model) {
  let d = q.defer();
  let version = "IFC4_2";
  var file_name = model.name
    .get()
    .replace(/ *\t*(%20)*\(([0-9]*)\)(%20)* *\t*/, "");

  let cb = function() {
    let extension = file_name.match(/\.[^/.]+$/);
    file_name = file_name.replace(/\.[^/.]+$/, ""); //remove extension
    if (model.state.get() === "parse Ifc") {
      const ifcParser = require("./src/parsers/ifcParser");
      return ifcParser([file_name], extension).then(() => {
        const objectGenerator = require("./src/generators/objectGenerator");
        objectGenerator(model, [file_name], version, extension);
        d.resolve();
        console.log("done");
      });
    }
  };

  var spinalIfcFile = new SpinalIfcFile(model, file_name);
  spinalIfcFile.download_file(cb);
  return d.promise;
};

let isReady = function(model, cb) {
  let toBeChecked = model._children[model._children.length - 1];
  if (
    !toBeChecked._server_id ||
    global.FileSystem._tmp_objects[toBeChecked._server_id]
  )
    setTimeout(() => {
      isReady(model, cb);
    }, 1000);
  else cb();
};

let cb = function() {
  process.exit(0);
};

let loadWithServerId = function(_serverId) {
  process.env.SPINALHUB_IP = "localhost";
  process.env.SPINALHUB_PORT = 7777;

  let connection = spinalCore.connect(
    "http://168:JHGgcz45JKilmzknzelf65ddDadggftIO98P@" +
      process.env.SPINALHUB_IP +
      ":" +
      process.env.SPINALHUB_PORT +
      "/"
  );

  connection.load_ptr(_serverId, function(model) {
    if (model instanceof global.Model) {
      console.log("start Translating");
      SpinalIfcSystem(model)
        .then(() => {
          isReady(model, cb);
        })
        .catch(e => {
          console.log(e);
        });
    }
  });
};

loadWithServerId(process.argv[2]);
