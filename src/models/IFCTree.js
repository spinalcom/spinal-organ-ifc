const IFCEntity = require("./IFCEntity");
const TreeNode = require("./TreeNode");

let IfcJson = {
  type: "entity",
  name: "Ifc",
  properties: [],
  abstract: [{
    abstract: "SUBTYPE_OF",
    list_id: ["Model"]
  }]
};

var Ifc = new IFCEntity(IfcJson);

class IFCTreeNode extends TreeNode {
  constructor(_element) {
    super(_element);
  }

  createChild(_element) {
    let child = new IFCTreeNode(_element);
    child.parent = this;
    this.addChild(child);
  }

  addChild(_child) {
    this.children.push(_child);
  }

  createChildren(_element) {
    for (let i = 0; i < _element.length; i++) {
      this.createChild(_element[i]);
    }
  }

  getAllParams() {
    let res = [];
    res = this.getElement().getPropertiesNames();
    if (!this.isRoot()) {
      let parentParams = this.getParent().getAllParams();
      for (let i = parentParams.length - 1; i >= 0; i--) {
        const element = parentParams[i];
        res.unshift(element);
      }
    }
    return res;
  }

  getByName(_name) {
    let tree = this.breadthFirstWalk();
    for (let i = 0; i < tree.length; i++) {
      const element = tree[i];
      if (element.getElement().getName() === _name) return element;
    }
    return null;
  }
}

class IFCTree extends IFCTreeNode {
  constructor(_entities) {
    super(Ifc);
    this.reconstructIfcTree(_entities);
  }
  reconstructIfcTree(_entities) {
    // var IfcAsSupercount = 0;
    // var othersAsSupercount = 0;
    // var whileCounter = 0;
    let fifo = _entities;
    let done = [];
    done.push(this.getElement().getName());
    while (fifo.length > 0) {
      const entity = fifo.shift();
      // console.log(entity.name, "poped")
      // whileCounter++;
      if (!done.includes(entity.name)) {
        var newEntity = new IFCEntity(entity);
        if (!newEntity.IsAbstractSub()) {
          this.createChild(newEntity);
          // IfcAsSupercount++;
          done.push(newEntity.getName());
        } else {
          let parentName = newEntity.getAbstractSubOf();
          if (done.includes(parentName) && this.getByName(parentName)) {
            let parentNode = this.getByName(parentName);
            parentNode.createChild(newEntity);
            // othersAsSupercount++;
            done.push(newEntity.getName());
          } else {
            delete IFCEntity.newEntity;
            fifo.push(entity);
            // console.log(entity.name, "pushed")
          }
        }
        // console.log("invariant", done.length + fifo.length)
      }
    }
    // console.log("done", done.length)
    // console.log("IfcAsSupercount", IfcAsSupercount)
    // console.log("othersAsSupercount", othersAsSupercount)
    // console.log("createdChildren", IfcAsSupercount + othersAsSupercount)
    // console.log("whileCounter", whileCounter)
  }

  getEntitiesByOrder() {
    return this.breadthFirstWalk();
  }

  getEntitiesNamesByOrder() {
    let res = [];
    let t = this.breadthFirstWalk();
    for (let i = 0; i < t.length; i++) {
      const element = t[i];
      res.push(element.getElement().getName());
    }
    return res;
  }
}
module.exports = IFCTree;