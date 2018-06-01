const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;

class SpinalTreeNode extends globalType.Model {
  constructor(_element, _children) {
    super();
    if (globalType.FileSystem._sig_server) {
      this.add_attr({
        id: SpinalTreeNode.SpinaltreeNodeId++,
        element: _element || new globalType.Ptr(0),
        parent: new globalType.Ptr(0),
        children: _children || new globalType.Lst()
      });
    }
  }

  getId() {
    return this.id.get();
  }

  setElement(_element) {
    if (this.element.constructor.name === _element.constructor.name)
      this.element.set(_element);
    else {
      this.rem_attr(this.element);
      this.add_attr({
        element: _element
      });
      // this.mod_attr(element, _element);
      // console.log(this.element.constructor.name);
    }
  }

  getElement() {
    return this.element.get();
  }

  createChild(_element) {
    let child = new SpinalTreeNode(_element);
    child.setParent(this);
    this.addChild(child);
  }

  addChild(_child) {
    this.children.push(_child);
  }

  createChildren(_elements) {
    for (let i = 0; i < _elements.length; i++) {
      this.createChild(_elements[i]);
    }
  }

  getChildren() {
    return this.children.get();
  }

  removeChild(_child) {
    this.children.splice(this.children.indexOf(_child), 1);
  }

  removeChildren() {
    this.children.clear();
  }

  setParent(_parent) {
    if (this.parent.constructor.name === _parent.constructor.name)
      this.parent.set(_parent);
    else {
      this.mod_attr("parent", _parent);
      // this.mod_attr('parent', _parent);
      // console.log(this.parent.constructor.name);
    }
  }

  getParent() {
    return this.parent.get();
  }

  removeParent() {
    this.setParent(new globalType.Ptr(0));
  }

  isLeaf() {
    return this.children.length === 0;
  }

  isRoot() {
    return (
      this.parent.constructor.name === "Ptr" && this.parent.data.value === 0
    );
  }

  treeWalk() {
    let array = [];
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      array = array.concat(child);
      array = array.concat(child.treeWalk());
    }
    return array;
  }

  breadthFirstWalk() {
    let fifo = [];
    let done = [];
    let res = [];
    fifo.push(this);
    done.push(this);
    while (fifo.length > 0) {
      let node = fifo.shift();
      res.push(node);
      for (let i = 0; i < node.getChildren().length; i++) {
        const neigh = node.getChildren()[i];
        if (!done.includes(neigh)) {
          fifo.push(neigh);
          done.push(neigh);
        }
      }
    }
    return res;
  }
}
SpinalTreeNode.SpinaltreeNodeId = 0;

spinalCore.register_models([SpinalTreeNode]);
module.exports = SpinalTreeNode;
