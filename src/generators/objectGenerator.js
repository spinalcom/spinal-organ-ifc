const fs = require("fs");
const path = require("path");
const spinalcore = require("spinal-core-connectorjs");
const JSONC = require("circular-json");
const _cliProgress = require("cli-progress");

const TreeNode = require("../models/TreeNode");
const SpinalTreeNode = require("../models/SpinalTreeNode");

const globalType = typeof window === "undefined" ? global : window;

function readAndPrepare(_file) {
  const inputFile = path.resolve(
    __dirname + "/../../processing_files/" + _file + ".json"
  );
  let jsonStringBrut = fs.readFileSync(inputFile, "utf8");
  let jsonString = jsonStringBrut;
  //change () tables into [] tables
  jsonString = jsonString.replace(/\(/g, "[");
  jsonString = jsonString.replace(/\)/g, "]");
  jsonString = jsonString.replace(/"\[/g, '"(');
  jsonString = jsonString.replace(/\]"/g, ')"');
  jsonString = jsonString.replace(/([A-Z]+)\[/g, "$1(");
  jsonString = jsonString.replace(/([A-Z]+\([^[][^\],]*)(\])/g, "$1)");
  jsonString = jsonString.replace(
    /([A-Z]+\(\[(?:(?!],)[^;])+)]([;,])/g,
    "$1)$2)"
  );
  jsonString = jsonString.replace(/\('([0-9-])*\[\?\)'\]/g, "('$1(?)')");

  jsonString = jsonString.replace(/([,(])?(\$)([,)])/g, "$1'$$'$3");
  // jsonString = jsonString.replace(/\$/g, "'$$'");
  // jsonString = jsonString.replace(/([$\d\w'])(\$)'/g, "$1$2");
  // jsonString = jsonString.replace(/'(\$)(['$\d\w])/g, "$1$2");

  jsonString = jsonString.replace(/\*/g, "'*'");
  jsonString = jsonString.replace(/#([0-9]*)/g, "_res[$1]");
  jsonString = jsonString.replace(/(\.[a-zA-Z_0-9]*\.)([,)])/g, "'$1'$2");
  jsonString = jsonString.replace(
    /([,[(])([A-Z]+\([^)]*\))/g,
    "$1new TYPES.$2"
  );
  jsonString = jsonString.replace(/\\/g, "\\\\");

  jsonString = jsonString.replace(/''/g, "");
  jsonString = jsonString.replace(/,,,/g, ",'','',");
  jsonString = jsonString.replace(/,,/g, ",'',");
  jsonString = jsonString.replace(/\(,/g, "('',");
  // jsonString = jsonString.replace(
  //   /([A-Z]+\((?:(?!],)[^;[])+)]([;,])/g,
  //   "$1)$2"
  // );

  const afterRegex = path.resolve(
    __dirname + "/../../processing_files/" + _file + "_after_regex.json"
  );
  fs.writeFileSync(afterRegex, jsonString);
  return jsonString;
}

function popById(_array, _id, _reverseObj) {
  // for (let index = 0; index < _array.length; index++) {
  //   const element = _array[index];
  //   if (element._id === _id) {
  //     _array.splice(index, 1);
  //     return element;
  //   }
  // }
  let element = _reverseObj[_id];
  // console.log(element);
  _array.splice(_array.indexOf(element), 1);
  return element;
}

function getById(_id, _reverseObj) {
  let element = _reverseObj[_id];
  return element;
}

function createObject(
  _element,
  _array,
  _res,
  _reverseObj,
  _version,
  _initialLength,
  _bar,
  _count,
  _streamer
) {
  // console.log("_array", _array);
  // console.log("_element", _element);
  if (typeof _res[_element._id] === "undefined") {
    // console.time(_element._id);
    _count.c++;
    const ENTITIES = require("../../ifc_models/" + _version + "_entities");
    const TYPES = require("../../ifc_models/" + _version + "_types");
    ENTITIES;
    TYPES;

    // var value = _element.type + "";
    let id = _element._id;
    let dependsOn = [];

    let myRegexp = /res\[([0-9]+)\]/g;
    let match = myRegexp.exec(_element.line);
    while (match != null) {
      dependsOn.push(match[1]);
      match = myRegexp.exec(_element.line);
    }

    for (let i = 0; i < dependsOn.length; i++) {
      const dOid = dependsOn[i];

      if (typeof _res[dOid] === "undefined") {
        let element = getById(dOid, _reverseObj);
        createObject(
          element,
          _array,
          _res,
          _reverseObj,
          _version,
          _initialLength,
          _bar,
          _count,
          _streamer
        );
      }
    }
    let objectData = null;
    let s = `objectData =  (new ENTITIES.${_element.type}${_element.line})`;
    // console.log(id);
    // try {
    //   _streamer.write(_count.c + "\n");
    // } catch (error) {
    //   console.log(id);
    // }
    // eval(s);

    // _streamer.write();
    try {
      eval(s);
      objectData.add_attr({
        ifcId: id
      });
    } catch (e) {
      _streamer.write(id + " :  " + s + "\n" + e + "\n");
    }
    // objectData = eval(_element.type);

    // let composedObject = {
    //   MetaData: {
    //     Number: id,
    //     Name: _element.type
    //   },
    //   ObjectData: objectData
    // };

    // composedObject;
    _res[id] = objectData;
    // console.timeEnd(_element._id);
    // printProgress(_count);
    try {
      // _bar.increment();
      _bar.update(_count.c);
    } catch (e) {
      // streamer.write(e);
    }
  }
}

function createObjects(_jsonString, _version) {
  const bar = new _cliProgress.Bar({}, _cliProgress.Presets.shades_classic);
  var count = {};
  count.c = 0;
  var streamer = fs.createWriteStream("test.txt");
  let obj = JSON.parse(_jsonString);
  let array = Object.values(obj.input._readableState.pipes.lines);
  let res = {};
  let initialLength = array.length;
  console.log("initial", initialLength);
  bar.start(initialLength, 0);

  // let reverse = array.reverse();
  let reverse = array;
  let reverseObj = {};
  for (let index = 0; index < reverse.length; index++) {
    let element = reverse[index];
    // element.index = index;
    reverseObj[element._id] = element;
    // reverseObj.index = index;
  }
  // while (reverse.length > 0) {
  //   const element = reverse.pop();
  //   createObject(
  //     element,
  //     reverse,
  //     res,
  //     reverseObj,
  //     _version,
  //     initialLength,
  //     bar,
  //     count,
  //     streamer
  //   );
  // }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    createObject(
      element,
      reverse,
      res,
      reverseObj,
      _version,
      initialLength,
      bar,
      count,
      streamer
    );
  }

  // console.log("count", count);
  // console.log("res", res);
  // console.log("reverse", reverse);
  // console.log("\n");

  bar.stop();
  console.log(count.c);
  return res;
}

function writeToJson(_objectsArray, _outputFile) {
  let streamer = fs.createWriteStream(_outputFile);
  streamer.write("[");
  // let s = "";
  let b = true;
  for (const key in _objectsArray) {
    if (_objectsArray.hasOwnProperty(key)) {
      const element = _objectsArray[key];
      if (b) {
        b = false;
      } else {
        streamer.write(", ");
      }
      // console.log(element);

      streamer.write(JSON.stringify(element.get(), null, 2));
      // s +=;
    }
  }
  streamer.write("]");
  // let toPrintJson = JSON.stringify(s, null, 2);
}

function writeToJsonWithoutGet(_objectsArray, _outputFile) {
  let streamer = fs.createWriteStream(_outputFile);
  streamer.write("[");
  let b = true;
  for (const key in _objectsArray) {
    if (_objectsArray.hasOwnProperty(key)) {
      const element = _objectsArray[key];
      if (b) {
        b = false;
      } else {
        streamer.write(", ");
      }
      streamer.write(JSONC.stringify(element, null, 2));
    }
  }
  streamer.write("]");
}

function filter(_objectsArray, _type) {
  let filteredArray = [];
  for (let index = 1; index < _objectsArray.length; index++) {
    const element = _objectsArray[index];
    if (element.MetaData.Name === _type) filteredArray.push(element);
  }
  return filteredArray;
}

function toTree(_filteredArray) {
  let tree = new TreeNode(_filteredArray);
  return tree;
}

function createAggregateRelations(_objectsArray) {
  let filteredArray = filter(_objectsArray, "IFCRELAGGREGATES");
  let tree = toTree(filteredArray);
  return tree;
}

function toLst(_objects) {
  let res = new globalType.Lst();
  let count = 0;
  for (const key in _objects) {
    if (_objects.hasOwnProperty(key)) {
      if (count === 40) return res;
      res.push(_objects[key]);
      count++;
    }
  }
  return res;
}

function getClassNames(_objects) {
  let classNames = [];
  for (const key in _objects) {
    if (_objects.hasOwnProperty(key) && _objects[key] != null) {
      if (!classNames.includes(_objects[key].constructor.name))
        classNames.push(_objects[key].constructor.name);
    }
  }
  return classNames;
}

function classify(_objects, _classNames) {
  let res = new globalType.Model();
  for (let index = 0; index < _classNames.length; index++) {
    // let value = _classNames[index] + "_list";
    // let s = `  var ${value} =  new globalType.Lst(); `;
    // console.log(s);
    // eval(s);
    // let test = eval(_classNames[index] + "_list");
    // let _classNamesObj = {
    //   [_classNames[index]]: new globalType.Lst()
    // };
    // res.push(_classNamesObj);
    // res.$ {
    //   _classNames[index]
    // } = new globalType.Lst();
    res.add_attr({
      [_classNames[index]]: new globalType.Lst()
    });
  }
  for (const key in _objects) {
    if (_objects.hasOwnProperty(key)) {
      // for (const key2 in res) {
      // if (res.hasOwnProperty(key2)) {
      // if (key2 === _objects[key].constructor.name) {
      if (_objects[key] != null)
        res[_objects[key].constructor.name].push(_objects[key]);
      // }
      // }
      // }
    }
  }
  return res;
}

function relAggregate(_listPerClass) {
  let res = new globalType.Lst();
  if (_listPerClass.IFCRELAGGREGATES)
    for (
      let index = 0; index < _listPerClass.IFCRELAGGREGATES.length; index++
    ) {
      const element = _listPerClass.IFCRELAGGREGATES[index];
      res.push(element);
    }
  // if (_listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE)
  //   for (
  //     let index = 0;
  //     index < _listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE.length;
  //     index++
  //   ) {
  //     const element = _listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE[index];
  //     res.push(element);
  //   }
  return res;
}

function relContained(_listPerClass) {
  let res = new globalType.Lst();
  if (_listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE)
    for (
      let index = 0; index < _listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE.length; index++
    ) {
      const element = _listPerClass.IFCRELCONTAINEDINSPATIALSTRUCTURE[index];
      res.push(element);
    }
  return res;
}

function addChildren(_element, _children, treeType) {
  if (_element instanceof globalType.Model) {
    if (_element[treeType + "Children"]) {
      _element[treeType + "Children"].push(_children);
    } else {
      _element.add_attr({
        [treeType + "Children"]: new globalType.Lst(_children)
      });
    }
  }
}

// function findRoot(_listAggregate, treeType) {
//   let root = null;
//   let success = true;
//   for (let index = 0; index < _listAggregate.length; index++) {
//     const rootCandidate = _listAggregate[index];
//     for (let index = 0; index < _listAggregate.length; index++) {
//       const examinater = _listAggregate[index];
//       for (
//         let index = 0; index < examinater[treeType + "children"].length; index++
//       ) {
//         const element = examinater[treeType + "children"][index];
//         if (rootCandidate === element) {
//           success = false;
//           break;
//         }
//       }
//       if (!success) break;
//     }
//     return root;
//   }
// }

function findRoot(_listAggregate, treeType) {
  let rootCandidates = [];
  let allExaminators = [];
  let root = null;
  let rootCounter = 0;
  let success = true;
  for (let index = 0; index < _listAggregate.length; index++) {
    const candidate = _listAggregate[index].RelatingObject;
    rootCandidates.push(candidate);
    const examinators = _listAggregate[index].RelatedObjects;
    for (let index = 0; index < examinators.length; index++) {
      const element = examinators[index];
      allExaminators.push(element);
    }
  }

  for (let index = 0; index < rootCandidates.length; index++) {
    const candidate = rootCandidates[index];

    for (let index = 0; index < allExaminators.length; index++) {
      const examinator = allExaminators[index];
      // console.log(examinator.constructor.name);
      if (candidate === examinator) {
        success = false;
        break;
      }
    }
    if (success) {
      root = candidate;
      rootCounter++;
    }
  }
  console.log("rootCounter", rootCounter);

  return root;
}

function creatRelTree(_listAggregate, _listContain) {
  for (let index = 0; index < _listAggregate.length; index++) {
    const element = _listAggregate[index];
    addChildren(element.RelatingObject, element.RelatedObjects, "Aggregate");
  }
  for (let index = 0; index < _listContain.length; index++) {
    const element = _listContain[index];
    addChildren(element.RelatingStructure, element.RelatedElements, "Contains");
  }
  return findRoot(_listAggregate, "Aggregate");
}

function relTreeContainer(_listAggregate) {
  let res = new globalType.Lst();
  for (let index = 0; index < _listAggregate.length; index++) {
    const element = _listAggregate[index];
    // console.log(element.RelatingObject);
    let tree = new SpinalTreeNode(element.RelatingObject);
    tree.createChildren(element.RelatedObjects);
    res.push(tree);
  }
  // let done = [];
  // for (let treeIndex = 0; treeIndex < res.length; treeIndex++) {
  //   const tree = res[treeIndex];
  //   if (!done.includes(tree.id)) {
  //     const children = tree.getChildren();
  //     for (let childIndex = 0; childIndex < children.length; childIndex++) {
  //       const child = children[childIndex];
  //       for (let index = 0; index < res.length; index++) {
  //         const element = res[index];
  //         if (element.id === child.id)

  //       }
  //     }
  //   }
  //   done.push(tree.id);
  // }
  return res;
}

function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

let objectGenerator = function(_model, _inputFiles, _version) {
  console.log("_inputFiles", _inputFiles.length);

  _inputFiles.forEach(file => {
    const outputFile = path.resolve(
      __dirname + "/../../output/" + file + "_objs.json"
    );
    console.time("readAndPrepare");
    let json = readAndPrepare(file);
    console.timeEnd("readAndPrepare");

    console.time("createObjects");
    let objects = createObjects(json, _version);
    // console.log(objects);
    console.timeEnd("createObjects");

    console.time("toLst");
    let ptr = new globalType.Ptr();
    let list = toLst(objects);
    // list.name.set("test");
    ptr.set(list);
    console.timeEnd("toLst");

    console.time("getClassNames");
    let ptr2 = new globalType.Ptr();
    let listPerName = getClassNames(objects);
    ptr2.set(new globalType.Lst(listPerName));
    console.timeEnd("getClassNames");

    console.time("classify");
    let ptr3 = new globalType.Ptr();
    let listPerClass = classify(objects, listPerName);
    ptr3.set(listPerClass);
    console.timeEnd("classify");

    console.time("relAggregate");
    let ptr4 = new globalType.Ptr();
    let listAggregate = relAggregate(listPerClass);
    ptr4.set(listAggregate);
    console.timeEnd("relAggregate");

    console.time("relContained");
    let ptr5 = new globalType.Ptr();
    let listContain = relContained(listPerClass);
    ptr5.set(listContain);
    console.timeEnd("relContained");

    console.time("relTree");
    let ptr6 = new globalType.Ptr();
    let relTree = creatRelTree(listAggregate, listContain);
    ptr6.set(relTree);
    console.timeEnd("relTree");
    // console.log("in", list);
    // process.env.SPINALHUB_IP = "localhost";
    // process.env.SPINALHUB_PORT = 7777;

    // let connection = spinalcore.connect(
    //   "http://168:JHGgcz45JKilmzknzelf65ddDadggftIO98P@" +
    //     process.env.SPINALHUB_IP +
    //     ":" +
    //     process.env.SPINALHUB_PORT +
    //     "/__users__/admin/"
    // );

    // spinalcore.store(connection, list, "listModelIfc", function() {
    //   console.log("stored");
    //   process.exit();
    // });
    // writeToJsonWithoutGet(objects, outputFile);
    // createAggregateRelations(objects);
    _model.add_child(ptr);
    _model.add_child(ptr2);
    _model.add_child(ptr3);
    _model.add_child(ptr4);
    _model.add_child(ptr5);
    _model.add_child(ptr6);


    // return objects;
  });
};
module.exports = objectGenerator;