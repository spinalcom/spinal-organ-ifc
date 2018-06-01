const fs = require("fs");
const path = require("path")
const SCHEMA = require("./readExpressSchema");
const ExpressParser = require("./parseExpressFile").ExpressParser;
const classGenerator = require("../generators/classGenerator");


let ifcSpecificationsParser = function(_inputFiles) {

  _inputFiles.forEach(file => {
    const inputFile = path.resolve(__dirname +
      "/../../ifc_specifications/" + file + ".exp");
    const outputFile = path.resolve(__dirname +
      "/../../processing_files/" + file + ".json");

    SCHEMA.readSchema(inputFile, function(err, grammar) {
      if (err) {
        console.log(err);
      } else {
        const json = JSON.stringify(grammar, null, 2);
        fs.writeFileSync(outputFile, json);
        classGenerator.generateTypes(grammar, file);
        classGenerator.generateEntities(grammar, file);
      }
    });
  });

}
module.exports = ifcSpecificationsParser;