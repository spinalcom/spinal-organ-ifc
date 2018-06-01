class IFCEntity {
  constructor(_entity) {
    this.id = IFCEntity.entityId++;
    this.name = _entity.name;
    this.properties = [];
    this.abstract = false;
    this.abstractSub = null;
    this.abstractSuper = [];
    if (_entity.properties) this.addProperties(_entity.properties);
    if (_entity.abstract) this.addAbstract(_entity.abstract);
  }

  getId() {
    return this.id;
  }

  setName(_name) {
    this.name = _name;
  }

  getName() {
    return this.name;
  }

  addProperty(_prop, _type, _bool) {
    this.properties.push({
      [_prop]: {
        [_type]: _bool
      }
    });
  }

  addProperties(_entity_properties) {
    for (let i = 0; i < _entity_properties.length; i++) {
      const element = _entity_properties[i];
      if (element.hasOwnProperty("identifier")) {
        this.addProperty(
          element.identifier,
          element.composite_type,
          element.optional
        );
      }
    }
  }

  hasProperties() {
    return Object.keys(this.properties).length !== 0;
  }

  getProperties() {
    return this.properties;
  }

  getPropertiesNames() {
    let res = [];
    for (let i = 0; i < this.properties.length; i++) {
      const element = this.properties[i];
      res.push(Object.keys(element)[0]);
    }
    return res;
  }

  isAbstract() {
    return this.abstract;
  }

  addSub(_element) {
    this.abstractSub = _element.list_id[0];
  }

  addSuper(_element) {
    for (let i = 0; i < _element.list_id.length; i++) {
      const el = _element.list_id[i];
      this.abstractSuper.push[el];
    }
  }

  addAbstract(_entity_abstract) {
    for (let i = 0; i < _entity_abstract.length; i++) {
      const element = _entity_abstract[i];
      switch (element.abstract) {
        case "SUBTYPE_OF":
          this.addSub(element);
          break;

        case "SUPERTYPE_OF_ONEOF":
          this.addSuper(element);
          break;

        case "ABSTRACT_SUPERTYPE_OF_ONEOF":
          this.addSuper(element);
          this.abstract = true;
          break;
      }
    }
  }

  IsAbstractSub() {
    return this.abstractSub !== null;
  }

  getAbstractSubOf() {
    return this.abstractSub;
  }

  IsAbstractSuper() {
    return this.abstractSuper.length !== 0;
  }

  getAbstractSuperOf() {
    return this.abstractSuper;
  }
}
IFCEntity.entityId = 0
module.exports = IFCEntity;