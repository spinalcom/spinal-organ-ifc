class TreeNode {
  constructor(_element) {
    this.id = TreeNode.treeNodeId++;
    this.element = _element || null;
    this.parent = null;
    this.children = [];
  }

  getId() {
    return this.id;
  }

  setElement(_element) {
    this.element = _element;
  }

  getElement() {
    return this.element;
  }

  createChild(_element) {
    let child = new TreeNode(_element);
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

  getChildren() {
    return this.children;
  }

  removeChildren() {
    this.children = null;
  }

  setParent(_parent) {
    this.parent = _parent;
  }

  getParent() {
    return this.parent;
  }

  removeParent() {
    this.parent = null;
  }

  isLeaf() {
    return this.children.length === 0;
  }

  isRoot() {
    return this.parent === null;
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
TreeNode.treeNodeId = 0;

module.exports = TreeNode;