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
    // console.log(model);

    let extension = file_name.match(/\.[^/.]+$/);
    file_name = file_name.replace(/\.[^/.]+$/, ""); //remove extension
    if (model.state.get() === "parse Ifc") {
      console.log("start Translating");
      model.state.set("Translating");
      const ifcParser = require("./src/parsers/ifcParser");
      return ifcParser([file_name], extension).then(() => {
        const objectGenerator = require("./src/generators/objectGenerator");
        objectGenerator(model, [file_name], version, extension);
        d.resolve();
        model.state.set("Translating completed");
        console.log("done");
      });
    }
  };

  var spinalIfcFile = new SpinalIfcFile(model, file_name);
  spinalIfcFile.download_file(cb);
  return d.promise;
};

let isReady = function(model, cb) {
  let keys = model._children._attribute_names;
  let toBeChecked = model._children[keys[keys.length - 1]];

  if (
    !toBeChecked._server_id ||
    global.FileSystem._tmp_objects[toBeChecked._server_id]
  )
    setTimeout(() => {
      isReady(model, cb.bind(null, model));
    }, 1000);
  else cb();
};

let cb = function(_model) {
  _model.state.set("Export completed");
  console.log("spawn exited");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
};

var loadWithServerId = function(_serverId) {
  process.env.SPINALHUB_IP = "localhost";
  process.env.SPINALHUB_PORT = 7777;

  let connection = spinalCore.connect(
    "http://168:JHGgcz45JKilmzknzelf65ddDadggftIO98P@" +
      process.env.SPINALHUB_IP +
      ":" +
      process.env.SPINALHUB_PORT +
      "/"
  );
  // console.log(global.FileSystem.get_inst());
  // global.FileSystem._disp = true;

  connection.load_ptr(_serverId, function(model) {
    if (model instanceof global.Model) {
      SpinalIfcSystem(model)
        .then(() => {
          isReady(model, cb.bind(null, model));
        })
        .catch(e => {
          console.log("Error writing the model " + e);
        });
    }
  });
};

module.exports = loadWithServerId;
loadWithServerId(process.argv[3]);
