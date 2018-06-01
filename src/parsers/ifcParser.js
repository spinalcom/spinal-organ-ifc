const fs = require("fs");
const path = require("path");
const STEP = require("./readStep");
const JSON = require("circular-json");

let ifcParser = function(_inputFiles, _ext) {
  console.time("ifcParser");
  let promises = _inputFiles.map(file => {
    // const inputFile = path.resolve(__dirname + "/../../ifc/" + file + _ext);
    const inputFile = path.resolve(__dirname + "/../../" + file + _ext);
    const outputFile = path.resolve(
      __dirname + "/../../processing_files/" + file + ".json"
    );

    let reader = new STEP.StepReader();

    return new Promise((res, rej) => {
      reader.read(inputFile, function(err) {
        if (err) {
          console.log("failure :" + err);
          return;
        }
        const json = JSON.stringify(reader, null, 2);
        fs.writeFileSync(outputFile, json);
        console.timeEnd("ifcParser");
        res();
      });
    });
  });

  return Promise.all(promises);
};
module.exports = ifcParser;
