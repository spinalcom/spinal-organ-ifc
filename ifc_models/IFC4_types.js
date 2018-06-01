const spinalCore = require("spinal-core-connectorjs");
      spinalCore;
     const globalType = typeof window === "undefined" ? global : window;      
     
     var exports = (module.exports = {});
    
    class IFC extends globalType.Model {
    constructor() {
      super();
    }
  }
  exports.IFC = IFC;
  
     class IFCABSORBEDDOSEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCABSORBEDDOSEMEASURE = IFCABSORBEDDOSEMEASURE;
  
     class IFCACCELERATIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCACCELERATIONMEASURE = IFCACCELERATIONMEASURE;
  
     class IFCAMOUNTOFSUBSTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCAMOUNTOFSUBSTANCEMEASURE = IFCAMOUNTOFSUBSTANCEMEASURE;
  
     class IFCANGULARVELOCITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCANGULARVELOCITYMEASURE = IFCANGULARVELOCITYMEASURE;
  
     class IFCAREADENSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCAREADENSITYMEASURE = IFCAREADENSITYMEASURE;
  
     class IFCAREAMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCAREAMEASURE = IFCAREAMEASURE;
  
     class IFCBOOLEAN extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || true
});
                }
    }
    exports.IFCBOOLEAN = IFCBOOLEAN;
  
     class IFCBOXALIGNMENT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCLABEL(_param)
});
                }
    }
    exports.IFCBOXALIGNMENT = IFCBOXALIGNMENT;
  
     class IFCCARDINALPOINTREFERENCE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCCARDINALPOINTREFERENCE = IFCCARDINALPOINTREFERENCE;
  
     class IFCCONTEXTDEPENDENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCCONTEXTDEPENDENTMEASURE = IFCCONTEXTDEPENDENTMEASURE;
  
     class IFCCOUNTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCCOUNTMEASURE = IFCCOUNTMEASURE;
  
     class IFCCURVATUREMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCCURVATUREMEASURE = IFCCURVATUREMEASURE;
  
     class IFCDATE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCDATE = IFCDATE;
  
     class IFCDATETIME extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCDATETIME = IFCDATETIME;
  
     class IFCDAYINMONTHNUMBER extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCDAYINMONTHNUMBER = IFCDAYINMONTHNUMBER;
  
     class IFCDAYINWEEKNUMBER extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCDAYINWEEKNUMBER = IFCDAYINWEEKNUMBER;
  
     class IFCDESCRIPTIVEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCDESCRIPTIVEMEASURE = IFCDESCRIPTIVEMEASURE;
  
     class IFCDIMENSIONCOUNT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCDIMENSIONCOUNT = IFCDIMENSIONCOUNT;
  
     class IFCDOSEEQUIVALENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCDOSEEQUIVALENTMEASURE = IFCDOSEEQUIVALENTMEASURE;
  
     class IFCDURATION extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCDURATION = IFCDURATION;
  
     class IFCDYNAMICVISCOSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCDYNAMICVISCOSITYMEASURE = IFCDYNAMICVISCOSITYMEASURE;
  
     class IFCELECTRICCAPACITANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICCAPACITANCEMEASURE = IFCELECTRICCAPACITANCEMEASURE;
  
     class IFCELECTRICCHARGEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICCHARGEMEASURE = IFCELECTRICCHARGEMEASURE;
  
     class IFCELECTRICCONDUCTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICCONDUCTANCEMEASURE = IFCELECTRICCONDUCTANCEMEASURE;
  
     class IFCELECTRICCURRENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICCURRENTMEASURE = IFCELECTRICCURRENTMEASURE;
  
     class IFCELECTRICRESISTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICRESISTANCEMEASURE = IFCELECTRICRESISTANCEMEASURE;
  
     class IFCELECTRICVOLTAGEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCELECTRICVOLTAGEMEASURE = IFCELECTRICVOLTAGEMEASURE;
  
     class IFCENERGYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCENERGYMEASURE = IFCENERGYMEASURE;
  
     class IFCFONTSTYLE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCFONTSTYLE = IFCFONTSTYLE;
  
     class IFCFONTVARIANT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCFONTVARIANT = IFCFONTVARIANT;
  
     class IFCFONTWEIGHT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCFONTWEIGHT = IFCFONTWEIGHT;
  
     class IFCFORCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCFORCEMEASURE = IFCFORCEMEASURE;
  
     class IFCFREQUENCYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCFREQUENCYMEASURE = IFCFREQUENCYMEASURE;
  
     class IFCGLOBALLYUNIQUEID extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCGLOBALLYUNIQUEID = IFCGLOBALLYUNIQUEID;
  
     class IFCHEATFLUXDENSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCHEATFLUXDENSITYMEASURE = IFCHEATFLUXDENSITYMEASURE;
  
     class IFCHEATINGVALUEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCHEATINGVALUEMEASURE = IFCHEATINGVALUEMEASURE;
  
     class IFCIDENTIFIER extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCIDENTIFIER = IFCIDENTIFIER;
  
     class IFCILLUMINANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCILLUMINANCEMEASURE = IFCILLUMINANCEMEASURE;
  
     class IFCINDUCTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCINDUCTANCEMEASURE = IFCINDUCTANCEMEASURE;
  
     class IFCINTEGER extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCINTEGER = IFCINTEGER;
  
     class IFCINTEGERCOUNTRATEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCINTEGERCOUNTRATEMEASURE = IFCINTEGERCOUNTRATEMEASURE;
  
     class IFCIONCONCENTRATIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCIONCONCENTRATIONMEASURE = IFCIONCONCENTRATIONMEASURE;
  
     class IFCISOTHERMALMOISTURECAPACITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCISOTHERMALMOISTURECAPACITYMEASURE = IFCISOTHERMALMOISTURECAPACITYMEASURE;
  
     class IFCKINEMATICVISCOSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCKINEMATICVISCOSITYMEASURE = IFCKINEMATICVISCOSITYMEASURE;
  
     class IFCLABEL extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCLABEL = IFCLABEL;
  
     class IFCLANGUAGEID extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCIDENTIFIER(_param)
});
                }
    }
    exports.IFCLANGUAGEID = IFCLANGUAGEID;
  
     class IFCLENGTHMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLENGTHMEASURE = IFCLENGTHMEASURE;
  
     class IFCLINEARFORCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLINEARFORCEMEASURE = IFCLINEARFORCEMEASURE;
  
     class IFCLINEARMOMENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLINEARMOMENTMEASURE = IFCLINEARMOMENTMEASURE;
  
     class IFCLINEARSTIFFNESSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLINEARSTIFFNESSMEASURE = IFCLINEARSTIFFNESSMEASURE;
  
     class IFCLINEARVELOCITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLINEARVELOCITYMEASURE = IFCLINEARVELOCITYMEASURE;
  
     class IFCLOGICAL extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLOGICAL = IFCLOGICAL;
  
     class IFCLUMINOUSFLUXMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLUMINOUSFLUXMEASURE = IFCLUMINOUSFLUXMEASURE;
  
     class IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE = IFCLUMINOUSINTENSITYDISTRIBUTIONMEASURE;
  
     class IFCLUMINOUSINTENSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCLUMINOUSINTENSITYMEASURE = IFCLUMINOUSINTENSITYMEASURE;
  
     class IFCMAGNETICFLUXDENSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMAGNETICFLUXDENSITYMEASURE = IFCMAGNETICFLUXDENSITYMEASURE;
  
     class IFCMAGNETICFLUXMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMAGNETICFLUXMEASURE = IFCMAGNETICFLUXMEASURE;
  
     class IFCMASSDENSITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMASSDENSITYMEASURE = IFCMASSDENSITYMEASURE;
  
     class IFCMASSFLOWRATEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMASSFLOWRATEMEASURE = IFCMASSFLOWRATEMEASURE;
  
     class IFCMASSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMASSMEASURE = IFCMASSMEASURE;
  
     class IFCMASSPERLENGTHMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMASSPERLENGTHMEASURE = IFCMASSPERLENGTHMEASURE;
  
     class IFCMODULUSOFELASTICITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMODULUSOFELASTICITYMEASURE = IFCMODULUSOFELASTICITYMEASURE;
  
     class IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE = IFCMODULUSOFLINEARSUBGRADEREACTIONMEASURE;
  
     class IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE = IFCMODULUSOFROTATIONALSUBGRADEREACTIONMEASURE;
  
     class IFCMODULUSOFSUBGRADEREACTIONMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMODULUSOFSUBGRADEREACTIONMEASURE = IFCMODULUSOFSUBGRADEREACTIONMEASURE;
  
     class IFCMOISTUREDIFFUSIVITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMOISTUREDIFFUSIVITYMEASURE = IFCMOISTUREDIFFUSIVITYMEASURE;
  
     class IFCMOLECULARWEIGHTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMOLECULARWEIGHTMEASURE = IFCMOLECULARWEIGHTMEASURE;
  
     class IFCMOMENTOFINERTIAMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMOMENTOFINERTIAMEASURE = IFCMOMENTOFINERTIAMEASURE;
  
     class IFCMONETARYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMONETARYMEASURE = IFCMONETARYMEASURE;
  
     class IFCMONTHINYEARNUMBER extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCMONTHINYEARNUMBER = IFCMONTHINYEARNUMBER;
  
     class IFCNONNEGATIVELENGTHMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCLENGTHMEASURE(_param)
});
                }
    }
    exports.IFCNONNEGATIVELENGTHMEASURE = IFCNONNEGATIVELENGTHMEASURE;
  
     class IFCNORMALISEDRATIOMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCRATIOMEASURE(_param)
});
                }
    }
    exports.IFCNORMALISEDRATIOMEASURE = IFCNORMALISEDRATIOMEASURE;
  
     class IFCNUMERICMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCNUMERICMEASURE = IFCNUMERICMEASURE;
  
     class IFCPHMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPHMEASURE = IFCPHMEASURE;
  
     class IFCPARAMETERVALUE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPARAMETERVALUE = IFCPARAMETERVALUE;
  
     class IFCPLANARFORCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPLANARFORCEMEASURE = IFCPLANARFORCEMEASURE;
  
     class IFCPLANEANGLEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPLANEANGLEMEASURE = IFCPLANEANGLEMEASURE;
  
     class IFCPOSITIVELENGTHMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCLENGTHMEASURE(_param)
});
                }
    }
    exports.IFCPOSITIVELENGTHMEASURE = IFCPOSITIVELENGTHMEASURE;
  
     class IFCPOSITIVEPLANEANGLEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCPLANEANGLEMEASURE(_param)
});
                }
    }
    exports.IFCPOSITIVEPLANEANGLEMEASURE = IFCPOSITIVEPLANEANGLEMEASURE;
  
     class IFCPOSITIVERATIOMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: new IFCRATIOMEASURE(_param)
});
                }
    }
    exports.IFCPOSITIVERATIOMEASURE = IFCPOSITIVERATIOMEASURE;
  
     class IFCPOWERMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPOWERMEASURE = IFCPOWERMEASURE;
  
     class IFCPRESENTABLETEXT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCPRESENTABLETEXT = IFCPRESENTABLETEXT;
  
     class IFCPRESSUREMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCPRESSUREMEASURE = IFCPRESSUREMEASURE;
  
     class IFCRADIOACTIVITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCRADIOACTIVITYMEASURE = IFCRADIOACTIVITYMEASURE;
  
     class IFCRATIOMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCRATIOMEASURE = IFCRATIOMEASURE;
  
     class IFCREAL extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCREAL = IFCREAL;
  
     class IFCROTATIONALFREQUENCYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCROTATIONALFREQUENCYMEASURE = IFCROTATIONALFREQUENCYMEASURE;
  
     class IFCROTATIONALMASSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCROTATIONALMASSMEASURE = IFCROTATIONALMASSMEASURE;
  
     class IFCROTATIONALSTIFFNESSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCROTATIONALSTIFFNESSMEASURE = IFCROTATIONALSTIFFNESSMEASURE;
  
     class IFCSECTIONMODULUSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSECTIONMODULUSMEASURE = IFCSECTIONMODULUSMEASURE;
  
     class IFCSECTIONALAREAINTEGRALMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSECTIONALAREAINTEGRALMEASURE = IFCSECTIONALAREAINTEGRALMEASURE;
  
     class IFCSHEARMODULUSMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSHEARMODULUSMEASURE = IFCSHEARMODULUSMEASURE;
  
     class IFCSOLIDANGLEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSOLIDANGLEMEASURE = IFCSOLIDANGLEMEASURE;
  
     class IFCSOUNDPOWERLEVELMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSOUNDPOWERLEVELMEASURE = IFCSOUNDPOWERLEVELMEASURE;
  
     class IFCSOUNDPOWERMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSOUNDPOWERMEASURE = IFCSOUNDPOWERMEASURE;
  
     class IFCSOUNDPRESSURELEVELMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSOUNDPRESSURELEVELMEASURE = IFCSOUNDPRESSURELEVELMEASURE;
  
     class IFCSOUNDPRESSUREMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSOUNDPRESSUREMEASURE = IFCSOUNDPRESSUREMEASURE;
  
     class IFCSPECIFICHEATCAPACITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSPECIFICHEATCAPACITYMEASURE = IFCSPECIFICHEATCAPACITYMEASURE;
  
     class IFCSPECULAREXPONENT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSPECULAREXPONENT = IFCSPECULAREXPONENT;
  
     class IFCSPECULARROUGHNESS extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCSPECULARROUGHNESS = IFCSPECULARROUGHNESS;
  
     class IFCTEMPERATUREGRADIENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTEMPERATUREGRADIENTMEASURE = IFCTEMPERATUREGRADIENTMEASURE;
  
     class IFCTEMPERATURERATEOFCHANGEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTEMPERATURERATEOFCHANGEMEASURE = IFCTEMPERATURERATEOFCHANGEMEASURE;
  
     class IFCTEXT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTEXT = IFCTEXT;
  
     class IFCTEXTALIGNMENT extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTEXTALIGNMENT = IFCTEXTALIGNMENT;
  
     class IFCTEXTDECORATION extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTEXTDECORATION = IFCTEXTDECORATION;
  
     class IFCTEXTFONTNAME extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTEXTFONTNAME = IFCTEXTFONTNAME;
  
     class IFCTEXTTRANSFORMATION extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTEXTTRANSFORMATION = IFCTEXTTRANSFORMATION;
  
     class IFCTHERMALADMITTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMALADMITTANCEMEASURE = IFCTHERMALADMITTANCEMEASURE;
  
     class IFCTHERMALCONDUCTIVITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMALCONDUCTIVITYMEASURE = IFCTHERMALCONDUCTIVITYMEASURE;
  
     class IFCTHERMALEXPANSIONCOEFFICIENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMALEXPANSIONCOEFFICIENTMEASURE = IFCTHERMALEXPANSIONCOEFFICIENTMEASURE;
  
     class IFCTHERMALRESISTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMALRESISTANCEMEASURE = IFCTHERMALRESISTANCEMEASURE;
  
     class IFCTHERMALTRANSMITTANCEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMALTRANSMITTANCEMEASURE = IFCTHERMALTRANSMITTANCEMEASURE;
  
     class IFCTHERMODYNAMICTEMPERATUREMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTHERMODYNAMICTEMPERATUREMEASURE = IFCTHERMODYNAMICTEMPERATUREMEASURE;
  
     class IFCTIME extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCTIME = IFCTIME;
  
     class IFCTIMEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTIMEMEASURE = IFCTIMEMEASURE;
  
     class IFCTIMESTAMP extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTIMESTAMP = IFCTIMESTAMP;
  
     class IFCTORQUEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCTORQUEMEASURE = IFCTORQUEMEASURE;
  
     class IFCURIREFERENCE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || ''
});
                }
    }
    exports.IFCURIREFERENCE = IFCURIREFERENCE;
  
     class IFCVAPORPERMEABILITYMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCVAPORPERMEABILITYMEASURE = IFCVAPORPERMEABILITYMEASURE;
  
     class IFCVOLUMEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCVOLUMEMEASURE = IFCVOLUMEMEASURE;
  
     class IFCVOLUMETRICFLOWRATEMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCVOLUMETRICFLOWRATEMEASURE = IFCVOLUMETRICFLOWRATEMEASURE;
  
     class IFCWARPINGCONSTANTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCWARPINGCONSTANTMEASURE = IFCWARPINGCONSTANTMEASURE;
  
     class IFCWARPINGMOMENTMEASURE extends IFC {
        constructor(_param) {
                super();
                this.add_attr({
value: _param || 0
});
                }
    }
    exports.IFCWARPINGMOMENTMEASURE = IFCWARPINGMOMENTMEASURE;
  