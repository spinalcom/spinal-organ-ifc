/**
 * Copyright 2015 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

var spinalCore = require("spinal-core-connectorjs");
const fs = require("fs");
var Q = require("q");
var IfcFileItem = require("./spinal-models_ifcfile/ifcfile").IfcFileItem;
var SpinalIfcFile = require("./SpinalIfcFile");
// const exec = require("child_process").exec;
var spawn = require("child_process").spawn;

if (!process.env.CLIENT_ID) {
  console.log("default config");
  process.env.SPINAL_USER_ID = "168";
  process.env.SPINAL_PASSWORD = "JHGgcz45JKilmzknzelf65ddDadggftIO98P";
  process.env.SPINALHUB_IP = "localhost";
  process.env.SPINALHUB_PORT = 7777;
}
spinalCore.register_models([IfcFileItem]);

const connect_opt =
  "http://" +
  process.env.SPINAL_USER_ID +
  ":" +
  process.env.SPINAL_PASSWORD +
  "@" +
  process.env.SPINALHUB_IP +
  ":" +
  process.env.SPINALHUB_PORT +
  "/";

var conn = spinalCore.connect(connect_opt);

var err_connect = function(err) {
  if (!err) console.log("Error Connect.");
  else console.log("Error Connect : " + err);
  process.exit(0);
};
let organType = typeof window === "undefined" ? global : window;

let wait_for_endround_loop = (_file, defer) => {
  if (organType.FileSystem._sig_server === false) {
    setTimeout(() => {
      defer.resolve(wait_for_endround_loop(_file, defer));
    }, 100);
  } else defer.resolve(_file);
  return defer.promise;
};
let wait_for_endround = file => {
  let deferred = Q.defer();
  return wait_for_endround_loop(file, deferred);
};

let callback_success = file => {
  wait_for_endround(file).then(() => {
    if (
      file &&
      file._info &&
      file._info.model_type &&
      (file._info.model_type.get() === "BIM Project" ||
        file._info.model_type.get() === "Ifc twin")
    ) {
      if (file._ptr && file._ptr.data.value === 0) {
        let ifcFileItem = new IfcFileItem();
        if (file._info.ifc) {
          file._info.ifc.load(tmp => {
            if (!tmp) return;
            let ext = "ifc"; // default
            if (file._info.ext && file._info.ext.get()) {
              ext = file._info.ext.get();
            }
            ifcFileItem.name.set(file.name.get().toLowerCase() + "." + ext);
            file._ptr.set(ifcFileItem);
            ifcFileItem.mod_attr("filepath", tmp);
            // ifcFileItem.state.set("Uploading completed");
            setTimeout(function() {
              file._info.add_attr({
                state: ifcFileItem.state
              });
            }, 1000);
            // new SpinalIfcSystem(ifcFileItem, file);

            // exec("SpinalIfcSystem(ifcFileItem, file);", (e, stdout, stderr) => {
            //   if (e instanceof Error) {
            //     console.error(e);
            //     throw e;
            //   }
            //   console.log("stdout ", stdout);
            //   console.log("stderr ", stderr);
            // });
            let cb = function(script, model) {
              let child = spawn("./" + script, [model._server_id.toString()]);
              child.stdout.on("data", function(data) {
                console.log(data.toString());
              });
              child.stderr.on("data", function(data) {
                console.error(data.toString());
              });
            };
            // spawn("ls");

            isReady(ifcFileItem, cb.bind(null, "pro.js", ifcFileItem));
          });
        }
      }
    }
  });
};
spinalCore.load_type(conn, "File", callback_success, err_connect);

let isReady = function(model, cb) {
  if (!model._server_id || global.FileSystem._tmp_objects[model._server_id])
    setTimeout(() => {
      isReady(model, cb);
    }, 1000);
  else {
    cb();
    console.log("ready");
  }
};

let SpinalIfcSystem = function(model) {
  let version = "IFC4_2";
  // let speInputFolder = "ifc_specifications";
  // let speArray = [];
  // fs.readdirSync(speInputFolder).forEach(file => {
  //   file = file.replace(/\.[^/.]+$/, ""); //remove extension
  //   speArray.push(file);
  // });
  // const ifcSpecificationsParser = require("./src/parsers/ifcSpecificationsParser");
  // ifcSpecificationsParser(speArray);

  // const ifcParser = require("./src/parsers/ifcParser");
  // return ifcParser(["test"]).then(() => {
  //   const objectGenerator = require("./src/generators/objectGenerator");
  //   objectGenerator(["test"], version);
  //   console.log("done");
  // });

  // var _self = this;
  // SpinalForgeSystem.super(this, model);
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
        // console.log(list);
        // model.add_child(list);
        console.log("done");
      });
    }
  };

  var spinalIfcFile = new SpinalIfcFile(model, file_name);
  spinalIfcFile.download_file(cb);
};
