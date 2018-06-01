var fs = require("fs");
const path = require("path");
const IFCTree = require("../models/IFCTree");

var exports = (module.exports = {});



function getProps(properties) {
  let s = "";
  if (properties.length > 0) {
    s += "this.add_attr({\n";
    // let structure = "";
    for (let i = 0; i < properties.length - 1; i++) {
      const element = properties[i];
      s +=
        element.identifier +
        ": _" +
        element.identifier +
        ", //" +
        element.composite_type +
        "\n";
    }
    const element = properties[properties.length - 1];
    s += element.identifier +
      ": _" +
      element.identifier +
      " //" +
      element.composite_type +
      "\n";
    s += "});";
  }

  return s;
}

function transformParams(params) {
  let s = "";
  if (params.length > 0) s += "_" + params[0];
  for (let i = 1; i < params.length; i++) {
    const element = params[i];
    s += ", _" + element;
  }
  return s;
}

function getType(type_type) {
  let type = "";
  let newNeeded = false;
  switch (type_type) {
    case "REAL":
      type = 0;
      break;
    case "INTEGER":
      type = 0;
      break;
    case "NUMBER":
      type = 0;
      break;
    case "SCIENTNUMBER":
      type = 0;
      break;
    case "STRING":
      type = "''";
      break;
    case "LOGICAL":
      type = 0;
      break;
    case "BINARY":
      type = 0;
      break;
    case "BOOLEAN":
      type = true;
      break;
    default:
      type = type_type.toUpperCase();
      newNeeded = true;
      break;
  }
  let s = "";
  if (!newNeeded)
    s += "this.add_attr({\n" + "value" + ": _param || " + type + "\n" + "});";
  else
    s += "this.add_attr({\n" + "value" + ": new " + type + "(_param)\n" + "});";
  return s;
}

function typeClassGenerator(obj) {
  let name = obj.name.toUpperCase();
  let parent = "Ifc".toUpperCase();
  let type = getType(obj.type_type);
  const res =
    `
     class ${name} extends ${parent} {
        constructor(_param) {
                super();
                ${type}
                }
    }
    exports.${name} = ${name};
  `;
  return res;
}

function excludeFrom(_params, _myParams_length) {
  let res = [];
  for (let i = 0; i < _params.length - _myParams_length; i++) {
    res.push(_params[i]);
  }
  return res;
}

function entityClassGenerator(obj, tree) {
  let parent = "types.Ifc".toUpperCase();
  let props = "";
  let params = "";
  let myParams = "";
  let parentParams = "";
  let name = obj.name.toUpperCase();

  let node = tree.getByName(obj.name);

  if (node.getElement().IsAbstractSub())
    parent = node
    .getParent()
    .getElement()
    .getName()
    .toUpperCase();

  if (obj.properties) {
    props = getProps(obj.properties);
    params = node.getAllParams();
    myParams = node.getElement().getPropertiesNames();

    if (node.getElement().IsAbstractSub()) {
      parentParams = excludeFrom(params, myParams.length);
      parentParams = transformParams(parentParams);
    }
    params = transformParams(params);
    myParams = transformParams(myParams);
  }

  const res =
    `
       class ${name} extends ${parent} {
          constructor(${params}) {
                  super(${parentParams});
                  ${props}
                  }
      }
      exports.${name} = ${name};
    `;

  return res;
}

exports.generateTypes = function(res, _file) {
  const typesFile = path.resolve(__dirname + "/../../ifc_models/" + _file +
    "_types.js");
  let className = "Ifc".toUpperCase();
  let s =
    `const spinalCore = require("spinal-core-connectorjs");
      spinalCore;
     const globalType = typeof window === "undefined" ? global : window;      
     
     var exports = (module.exports = {});
    
    class ${className} extends globalType.Model {
    constructor() {
      super();
    }
  }
  exports.${className} = ${className};
  `;

  let typesTable = [];

  let types = Object.values(res._types);

  for (let i = 0; i < types.length; i++) {
    const element = types[i];
    s += typeClassGenerator(element);
    typesTable.push(element.name);
  }
  fs.writeFileSync(typesFile, s);

  return typesTable;
};

exports.generateEntities = function(res, _file) {

  const entitiesFile = path.resolve(__dirname +
    "/../../ifc_models/" + _file + "_entities.js");
  let s =
    `var TYPES = require("./${_file}_types");
  
  var exports = (module.exports = {});
  `;

  let entities = Object.values(res._entities);
  //attention entities is a stack, can get poped
  let tree = new IFCTree(entities);
  let NamesTree = tree.getEntitiesNamesByOrder();

  // 0 is Ifc that was added manually
  for (let i = 1; i < NamesTree.length; i++) {
    const element = res._entities[NamesTree[i]];
    s += entityClassGenerator(element, tree);
  }
  fs.writeFileSync(entitiesFile, s);
};