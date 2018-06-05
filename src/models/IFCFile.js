// Copyright 2015 SpinalCom  www.spinalcom.com

// This file is part of SpinalCore.

// SpinalCore is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Soda is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with Soda. If not, see <http://www.gnu.org/licenses/>.
const spinalCore = require("spinal-core-connectorjs");

var exports = (module.exports = {});
let organType = typeof window === "undefined" ? global : window;

var IfcFileItem = class IfcFileItem extends organType.Model {
  constructor(name = "Ifc File") {
    super();
    let tmp = {
      _name: name,
      _viewable: false,
      _children: new organType.Model(),
      name: name,
      filepath: new organType.Path(),
      state: new organType.Choice(0, [
        "Initial",
        "parse Ifc",
        "Translating",
        "Translating completed",
        "Export completed",
        "Failed"
      ])
    };
    this.add_attr(tmp);
  }
  add_child(_name, _child) {
    this._children.add_attr({
      [_name]: _child
    });
  }
  //   accept_child(ch) {
  //     return ch instanceof IfcFileDerivativesItem;
  //   }
};

exports.IfcFileItem = IfcFileItem;

spinalCore.register_models([IfcFileItem]);
