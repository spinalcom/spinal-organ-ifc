var TYPES = require("./IFC4_2_types");
  
  var exports = (module.exports = {});
  
       class IFCACTORROLE extends TYPES.IFC {
          constructor(_Role, _UserDefinedRole, _Description) {
                  super();
                  this.add_attr({
Role: _Role, //IfcRoleEnum
UserDefinedRole: _UserDefinedRole, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCACTORROLE = IFCACTORROLE;
    
       class IFCADDRESS extends TYPES.IFC {
          constructor(_Purpose, _Description, _UserDefinedPurpose) {
                  super();
                  this.add_attr({
Purpose: _Purpose, //IfcAddressTypeEnum
Description: _Description, //IfcText
UserDefinedPurpose: _UserDefinedPurpose //IfcLabel
});
                  }
      }
      exports.IFCADDRESS = IFCADDRESS;
    
       class IFCAPPLICATION extends TYPES.IFC {
          constructor(_ApplicationDeveloper, _Version, _ApplicationFullName, _ApplicationIdentifier) {
                  super();
                  this.add_attr({
ApplicationDeveloper: _ApplicationDeveloper, //IfcOrganization
Version: _Version, //IfcLabel
ApplicationFullName: _ApplicationFullName, //IfcLabel
ApplicationIdentifier: _ApplicationIdentifier //IfcIdentifier
});
                  }
      }
      exports.IFCAPPLICATION = IFCAPPLICATION;
    
       class IFCAPPLIEDVALUE extends TYPES.IFC {
          constructor(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate, _Category, _Condition, _ArithmeticOperator, _Components) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
AppliedValue: _AppliedValue, //IfcAppliedValueSelect
UnitBasis: _UnitBasis, //IfcMeasureWithUnit
ApplicableDate: _ApplicableDate, //IfcDate
FixedUntilDate: _FixedUntilDate, //IfcDate
Category: _Category, //IfcLabel
Condition: _Condition, //IfcLabel
ArithmeticOperator: _ArithmeticOperator, //IfcArithmeticOperatorEnum
Components: _Components //[object Object]
});
                  }
      }
      exports.IFCAPPLIEDVALUE = IFCAPPLIEDVALUE;
    
       class IFCAPPROVAL extends TYPES.IFC {
          constructor(_Identifier, _Name, _Description, _TimeOfApproval, _Status, _Level, _Qualifier, _RequestingApproval, _GivingApproval) {
                  super();
                  this.add_attr({
Identifier: _Identifier, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
TimeOfApproval: _TimeOfApproval, //IfcDateTime
Status: _Status, //IfcLabel
Level: _Level, //IfcLabel
Qualifier: _Qualifier, //IfcText
RequestingApproval: _RequestingApproval, //IfcActorSelect
GivingApproval: _GivingApproval //IfcActorSelect
});
                  }
      }
      exports.IFCAPPROVAL = IFCAPPROVAL;
    
       class IFCBOUNDARYCONDITION extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCBOUNDARYCONDITION = IFCBOUNDARYCONDITION;
    
       class IFCCONNECTIONGEOMETRY extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCCONNECTIONGEOMETRY = IFCCONNECTIONGEOMETRY;
    
       class IFCCONSTRAINT extends TYPES.IFC {
          constructor(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
ConstraintGrade: _ConstraintGrade, //IfcConstraintEnum
ConstraintSource: _ConstraintSource, //IfcLabel
CreatingActor: _CreatingActor, //IfcActorSelect
CreationTime: _CreationTime, //IfcDateTime
UserDefinedGrade: _UserDefinedGrade //IfcLabel
});
                  }
      }
      exports.IFCCONSTRAINT = IFCCONSTRAINT;
    
       class IFCCOORDINATEOPERATION extends TYPES.IFC {
          constructor(_SourceCRS, _TargetCRS) {
                  super();
                  this.add_attr({
SourceCRS: _SourceCRS, //IfcCoordinateReferenceSystemSelect
TargetCRS: _TargetCRS //IfcCoordinateReferenceSystem
});
                  }
      }
      exports.IFCCOORDINATEOPERATION = IFCCOORDINATEOPERATION;
    
       class IFCCOORDINATEREFERENCESYSTEM extends TYPES.IFC {
          constructor(_Name, _Description, _GeodeticDatum, _VerticalDatum) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
GeodeticDatum: _GeodeticDatum, //IfcIdentifier
VerticalDatum: _VerticalDatum //IfcIdentifier
});
                  }
      }
      exports.IFCCOORDINATEREFERENCESYSTEM = IFCCOORDINATEREFERENCESYSTEM;
    
       class IFCDERIVEDUNIT extends TYPES.IFC {
          constructor(_Elements, _UnitType, _UserDefinedType) {
                  super();
                  this.add_attr({
Elements: _Elements, //[object Object]
UnitType: _UnitType, //IfcDerivedUnitEnum
UserDefinedType: _UserDefinedType //IfcLabel
});
                  }
      }
      exports.IFCDERIVEDUNIT = IFCDERIVEDUNIT;
    
       class IFCDERIVEDUNITELEMENT extends TYPES.IFC {
          constructor(_Unit, _Exponent) {
                  super();
                  this.add_attr({
Unit: _Unit, //IfcNamedUnit
Exponent: _Exponent //INTEGER
});
                  }
      }
      exports.IFCDERIVEDUNITELEMENT = IFCDERIVEDUNITELEMENT;
    
       class IFCDIMENSIONALEXPONENTS extends TYPES.IFC {
          constructor(_LengthExponent, _MassExponent, _TimeExponent, _ElectricCurrentExponent, _ThermodynamicTemperatureExponent, _AmountOfSubstanceExponent, _LuminousIntensityExponent) {
                  super();
                  this.add_attr({
LengthExponent: _LengthExponent, //INTEGER
MassExponent: _MassExponent, //INTEGER
TimeExponent: _TimeExponent, //INTEGER
ElectricCurrentExponent: _ElectricCurrentExponent, //INTEGER
ThermodynamicTemperatureExponent: _ThermodynamicTemperatureExponent, //INTEGER
AmountOfSubstanceExponent: _AmountOfSubstanceExponent, //INTEGER
LuminousIntensityExponent: _LuminousIntensityExponent //INTEGER
});
                  }
      }
      exports.IFCDIMENSIONALEXPONENTS = IFCDIMENSIONALEXPONENTS;
    
       class IFCEXTERNALINFORMATION extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCEXTERNALINFORMATION = IFCEXTERNALINFORMATION;
    
       class IFCEXTERNALREFERENCE extends TYPES.IFC {
          constructor(_Location, _Identification, _Name) {
                  super();
                  this.add_attr({
Location: _Location, //IfcURIReference
Identification: _Identification, //IfcIdentifier
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCEXTERNALREFERENCE = IFCEXTERNALREFERENCE;
    
       class IFCGRIDAXIS extends TYPES.IFC {
          constructor(_AxisTag, _AxisCurve, _SameSense) {
                  super();
                  this.add_attr({
AxisTag: _AxisTag, //IfcLabel
AxisCurve: _AxisCurve, //IfcCurve
SameSense: _SameSense //IfcBoolean
});
                  }
      }
      exports.IFCGRIDAXIS = IFCGRIDAXIS;
    
       class IFCIRREGULARTIMESERIESVALUE extends TYPES.IFC {
          constructor(_TimeStamp, _ListValues) {
                  super();
                  this.add_attr({
TimeStamp: _TimeStamp, //IfcDateTime
ListValues: _ListValues //[object Object]
});
                  }
      }
      exports.IFCIRREGULARTIMESERIESVALUE = IFCIRREGULARTIMESERIESVALUE;
    
       class IFCLIGHTDISTRIBUTIONDATA extends TYPES.IFC {
          constructor(_MainPlaneAngle, _SecondaryPlaneAngle, _LuminousIntensity) {
                  super();
                  this.add_attr({
MainPlaneAngle: _MainPlaneAngle, //IfcPlaneAngleMeasure
SecondaryPlaneAngle: _SecondaryPlaneAngle, //[object Object]
LuminousIntensity: _LuminousIntensity //[object Object]
});
                  }
      }
      exports.IFCLIGHTDISTRIBUTIONDATA = IFCLIGHTDISTRIBUTIONDATA;
    
       class IFCLIGHTINTENSITYDISTRIBUTION extends TYPES.IFC {
          constructor(_LightDistributionCurve, _DistributionData) {
                  super();
                  this.add_attr({
LightDistributionCurve: _LightDistributionCurve, //IfcLightDistributionCurveEnum
DistributionData: _DistributionData //[object Object]
});
                  }
      }
      exports.IFCLIGHTINTENSITYDISTRIBUTION = IFCLIGHTINTENSITYDISTRIBUTION;
    
       class IFCMATERIALCLASSIFICATIONRELATIONSHIP extends TYPES.IFC {
          constructor(_MaterialClassifications, _ClassifiedMaterial) {
                  super();
                  this.add_attr({
MaterialClassifications: _MaterialClassifications, //[object Object]
ClassifiedMaterial: _ClassifiedMaterial //IfcMaterial
});
                  }
      }
      exports.IFCMATERIALCLASSIFICATIONRELATIONSHIP = IFCMATERIALCLASSIFICATIONRELATIONSHIP;
    
       class IFCMATERIALDEFINITION extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCMATERIALDEFINITION = IFCMATERIALDEFINITION;
    
       class IFCMATERIALLIST extends TYPES.IFC {
          constructor(_Materials) {
                  super();
                  this.add_attr({
Materials: _Materials //[object Object]
});
                  }
      }
      exports.IFCMATERIALLIST = IFCMATERIALLIST;
    
       class IFCMATERIALUSAGEDEFINITION extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCMATERIALUSAGEDEFINITION = IFCMATERIALUSAGEDEFINITION;
    
       class IFCMEASUREWITHUNIT extends TYPES.IFC {
          constructor(_ValueComponent, _UnitComponent) {
                  super();
                  this.add_attr({
ValueComponent: _ValueComponent, //IfcValue
UnitComponent: _UnitComponent //IfcUnit
});
                  }
      }
      exports.IFCMEASUREWITHUNIT = IFCMEASUREWITHUNIT;
    
       class IFCMONETARYUNIT extends TYPES.IFC {
          constructor(_Currency) {
                  super();
                  this.add_attr({
Currency: _Currency //IfcLabel
});
                  }
      }
      exports.IFCMONETARYUNIT = IFCMONETARYUNIT;
    
       class IFCNAMEDUNIT extends TYPES.IFC {
          constructor(_Dimensions, _UnitType) {
                  super();
                  this.add_attr({
Dimensions: _Dimensions, //IfcDimensionalExponents
UnitType: _UnitType //IfcUnitEnum
});
                  }
      }
      exports.IFCNAMEDUNIT = IFCNAMEDUNIT;
    
       class IFCOBJECTPLACEMENT extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCOBJECTPLACEMENT = IFCOBJECTPLACEMENT;
    
       class IFCORGANIZATION extends TYPES.IFC {
          constructor(_Identification, _Name, _Description, _Roles, _Addresses) {
                  super();
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Roles: _Roles, //[object Object]
Addresses: _Addresses //[object Object]
});
                  }
      }
      exports.IFCORGANIZATION = IFCORGANIZATION;
    
       class IFCOWNERHISTORY extends TYPES.IFC {
          constructor(_OwningUser, _OwningApplication, _State, _ChangeAction, _LastModifiedDate, _LastModifyingUser, _LastModifyingApplication, _CreationDate) {
                  super();
                  this.add_attr({
OwningUser: _OwningUser, //IfcPersonAndOrganization
OwningApplication: _OwningApplication, //IfcApplication
State: _State, //IfcStateEnum
ChangeAction: _ChangeAction, //IfcChangeActionEnum
LastModifiedDate: _LastModifiedDate, //IfcTimeStamp
LastModifyingUser: _LastModifyingUser, //IfcPersonAndOrganization
LastModifyingApplication: _LastModifyingApplication, //IfcApplication
CreationDate: _CreationDate //IfcTimeStamp
});
                  }
      }
      exports.IFCOWNERHISTORY = IFCOWNERHISTORY;
    
       class IFCPERSON extends TYPES.IFC {
          constructor(_Identification, _FamilyName, _GivenName, _MiddleNames, _PrefixTitles, _SuffixTitles, _Roles, _Addresses) {
                  super();
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
FamilyName: _FamilyName, //IfcLabel
GivenName: _GivenName, //IfcLabel
MiddleNames: _MiddleNames, //[object Object]
PrefixTitles: _PrefixTitles, //[object Object]
SuffixTitles: _SuffixTitles, //[object Object]
Roles: _Roles, //[object Object]
Addresses: _Addresses //[object Object]
});
                  }
      }
      exports.IFCPERSON = IFCPERSON;
    
       class IFCPERSONANDORGANIZATION extends TYPES.IFC {
          constructor(_ThePerson, _TheOrganization, _Roles) {
                  super();
                  this.add_attr({
ThePerson: _ThePerson, //IfcPerson
TheOrganization: _TheOrganization, //IfcOrganization
Roles: _Roles //[object Object]
});
                  }
      }
      exports.IFCPERSONANDORGANIZATION = IFCPERSONANDORGANIZATION;
    
       class IFCPHYSICALQUANTITY extends TYPES.IFC {
          constructor(_Name, _Description) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCPHYSICALQUANTITY = IFCPHYSICALQUANTITY;
    
       class IFCPRESENTATIONITEM extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCPRESENTATIONITEM = IFCPRESENTATIONITEM;
    
       class IFCPRESENTATIONLAYERASSIGNMENT extends TYPES.IFC {
          constructor(_Name, _Description, _AssignedItems, _Identifier) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
AssignedItems: _AssignedItems, //[object Object]
Identifier: _Identifier //IfcIdentifier
});
                  }
      }
      exports.IFCPRESENTATIONLAYERASSIGNMENT = IFCPRESENTATIONLAYERASSIGNMENT;
    
       class IFCPRESENTATIONSTYLE extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCPRESENTATIONSTYLE = IFCPRESENTATIONSTYLE;
    
       class IFCPRESENTATIONSTYLEASSIGNMENT extends TYPES.IFC {
          constructor(_Styles) {
                  super();
                  this.add_attr({
Styles: _Styles //[object Object]
});
                  }
      }
      exports.IFCPRESENTATIONSTYLEASSIGNMENT = IFCPRESENTATIONSTYLEASSIGNMENT;
    
       class IFCPRODUCTREPRESENTATION extends TYPES.IFC {
          constructor(_Name, _Description, _Representations) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Representations: _Representations //[object Object]
});
                  }
      }
      exports.IFCPRODUCTREPRESENTATION = IFCPRODUCTREPRESENTATION;
    
       class IFCPROFILEDEF extends TYPES.IFC {
          constructor(_ProfileType, _ProfileName) {
                  super();
                  this.add_attr({
ProfileType: _ProfileType, //IfcProfileTypeEnum
ProfileName: _ProfileName //IfcLabel
});
                  }
      }
      exports.IFCPROFILEDEF = IFCPROFILEDEF;
    
       class IFCPROPERTYABSTRACTION extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCPROPERTYABSTRACTION = IFCPROPERTYABSTRACTION;
    
       class IFCRECURRENCEPATTERN extends TYPES.IFC {
          constructor(_RecurrenceType, _DayComponent, _WeekdayComponent, _MonthComponent, _Position, _Interval, _Occurrences, _TimePeriods) {
                  super();
                  this.add_attr({
RecurrenceType: _RecurrenceType, //IfcRecurrenceTypeEnum
DayComponent: _DayComponent, //[object Object]
WeekdayComponent: _WeekdayComponent, //[object Object]
MonthComponent: _MonthComponent, //[object Object]
Position: _Position, //IfcInteger
Interval: _Interval, //IfcInteger
Occurrences: _Occurrences, //IfcInteger
TimePeriods: _TimePeriods //[object Object]
});
                  }
      }
      exports.IFCRECURRENCEPATTERN = IFCRECURRENCEPATTERN;
    
       class IFCREFERENCE extends TYPES.IFC {
          constructor(_TypeIdentifier, _AttributeIdentifier, _InstanceName, _ListPositions, _InnerReference) {
                  super();
                  this.add_attr({
TypeIdentifier: _TypeIdentifier, //IfcIdentifier
AttributeIdentifier: _AttributeIdentifier, //IfcIdentifier
InstanceName: _InstanceName, //IfcLabel
ListPositions: _ListPositions, //[object Object]
InnerReference: _InnerReference //IfcReference
});
                  }
      }
      exports.IFCREFERENCE = IFCREFERENCE;
    
       class IFCREPRESENTATION extends TYPES.IFC {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super();
                  this.add_attr({
ContextOfItems: _ContextOfItems, //IfcRepresentationContext
RepresentationIdentifier: _RepresentationIdentifier, //IfcLabel
RepresentationType: _RepresentationType, //IfcLabel
Items: _Items //[object Object]
});
                  }
      }
      exports.IFCREPRESENTATION = IFCREPRESENTATION;
    
       class IFCREPRESENTATIONCONTEXT extends TYPES.IFC {
          constructor(_ContextIdentifier, _ContextType) {
                  super();
                  this.add_attr({
ContextIdentifier: _ContextIdentifier, //IfcLabel
ContextType: _ContextType //IfcLabel
});
                  }
      }
      exports.IFCREPRESENTATIONCONTEXT = IFCREPRESENTATIONCONTEXT;
    
       class IFCREPRESENTATIONITEM extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCREPRESENTATIONITEM = IFCREPRESENTATIONITEM;
    
       class IFCREPRESENTATIONMAP extends TYPES.IFC {
          constructor(_MappingOrigin, _MappedRepresentation) {
                  super();
                  this.add_attr({
MappingOrigin: _MappingOrigin, //IfcAxis2Placement
MappedRepresentation: _MappedRepresentation //IfcRepresentation
});
                  }
      }
      exports.IFCREPRESENTATIONMAP = IFCREPRESENTATIONMAP;
    
       class IFCRESOURCELEVELRELATIONSHIP extends TYPES.IFC {
          constructor(_Name, _Description) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCRESOURCELEVELRELATIONSHIP = IFCRESOURCELEVELRELATIONSHIP;
    
       class IFCROOT extends TYPES.IFC {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super();
                  this.add_attr({
GlobalId: _GlobalId, //IfcGloballyUniqueId
OwnerHistory: _OwnerHistory, //IfcOwnerHistory
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCROOT = IFCROOT;
    
       class IFCSCHEDULINGTIME extends TYPES.IFC {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
DataOrigin: _DataOrigin, //IfcDataOriginEnum
UserDefinedDataOrigin: _UserDefinedDataOrigin //IfcLabel
});
                  }
      }
      exports.IFCSCHEDULINGTIME = IFCSCHEDULINGTIME;
    
       class IFCSHAPEASPECT extends TYPES.IFC {
          constructor(_ShapeRepresentations, _Name, _Description, _ProductDefinitional, _PartOfProductDefinitionShape) {
                  super();
                  this.add_attr({
ShapeRepresentations: _ShapeRepresentations, //[object Object]
Name: _Name, //IfcLabel
Description: _Description, //IfcText
ProductDefinitional: _ProductDefinitional, //IfcLogical
PartOfProductDefinitionShape: _PartOfProductDefinitionShape //IfcProductRepresentationSelect
});
                  }
      }
      exports.IFCSHAPEASPECT = IFCSHAPEASPECT;
    
       class IFCSTRUCTURALCONNECTIONCONDITION extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCSTRUCTURALCONNECTIONCONDITION = IFCSTRUCTURALCONNECTIONCONDITION;
    
       class IFCSTRUCTURALLOAD extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCSTRUCTURALLOAD = IFCSTRUCTURALLOAD;
    
       class IFCTABLE extends TYPES.IFC {
          constructor(_Name, _Rows, _Columns) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Rows: _Rows, //[object Object]
Columns: _Columns //[object Object]
});
                  }
      }
      exports.IFCTABLE = IFCTABLE;
    
       class IFCTABLECOLUMN extends TYPES.IFC {
          constructor(_Identifier, _Name, _Description, _Unit, _ReferencePath) {
                  super();
                  this.add_attr({
Identifier: _Identifier, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Unit: _Unit, //IfcUnit
ReferencePath: _ReferencePath //IfcReference
});
                  }
      }
      exports.IFCTABLECOLUMN = IFCTABLECOLUMN;
    
       class IFCTABLEROW extends TYPES.IFC {
          constructor(_RowCells, _IsHeading) {
                  super();
                  this.add_attr({
RowCells: _RowCells, //[object Object]
IsHeading: _IsHeading //IfcBoolean
});
                  }
      }
      exports.IFCTABLEROW = IFCTABLEROW;
    
       class IFCTIMEPERIOD extends TYPES.IFC {
          constructor(_StartTime, _EndTime) {
                  super();
                  this.add_attr({
StartTime: _StartTime, //IfcTime
EndTime: _EndTime //IfcTime
});
                  }
      }
      exports.IFCTIMEPERIOD = IFCTIMEPERIOD;
    
       class IFCTIMESERIES extends TYPES.IFC {
          constructor(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
StartTime: _StartTime, //IfcDateTime
EndTime: _EndTime, //IfcDateTime
TimeSeriesDataType: _TimeSeriesDataType, //IfcTimeSeriesDataTypeEnum
DataOrigin: _DataOrigin, //IfcDataOriginEnum
UserDefinedDataOrigin: _UserDefinedDataOrigin, //IfcLabel
Unit: _Unit //IfcUnit
});
                  }
      }
      exports.IFCTIMESERIES = IFCTIMESERIES;
    
       class IFCTIMESERIESVALUE extends TYPES.IFC {
          constructor(_ListValues) {
                  super();
                  this.add_attr({
ListValues: _ListValues //[object Object]
});
                  }
      }
      exports.IFCTIMESERIESVALUE = IFCTIMESERIESVALUE;
    
       class IFCUNITASSIGNMENT extends TYPES.IFC {
          constructor(_Units) {
                  super();
                  this.add_attr({
Units: _Units //[object Object]
});
                  }
      }
      exports.IFCUNITASSIGNMENT = IFCUNITASSIGNMENT;
    
       class IFCVIRTUALGRIDINTERSECTION extends TYPES.IFC {
          constructor(_IntersectingAxes, _OffsetDistances) {
                  super();
                  this.add_attr({
IntersectingAxes: _IntersectingAxes, //[object Object]
OffsetDistances: _OffsetDistances //[object Object]
});
                  }
      }
      exports.IFCVIRTUALGRIDINTERSECTION = IFCVIRTUALGRIDINTERSECTION;
    
       class IFCPOSTALADDRESS extends IFCADDRESS {
          constructor(_Purpose, _Description, _UserDefinedPurpose, _InternalLocation, _AddressLines, _PostalBox, _Town, _Region, _PostalCode, _Country) {
                  super(_Purpose, _Description, _UserDefinedPurpose);
                  this.add_attr({
InternalLocation: _InternalLocation, //IfcLabel
AddressLines: _AddressLines, //[object Object]
PostalBox: _PostalBox, //IfcLabel
Town: _Town, //IfcLabel
Region: _Region, //IfcLabel
PostalCode: _PostalCode, //IfcLabel
Country: _Country //IfcLabel
});
                  }
      }
      exports.IFCPOSTALADDRESS = IFCPOSTALADDRESS;
    
       class IFCTELECOMADDRESS extends IFCADDRESS {
          constructor(_Purpose, _Description, _UserDefinedPurpose, _TelephoneNumbers, _FacsimileNumbers, _PagerNumber, _ElectronicMailAddresses, _WWWHomePageURL, _MessagingIDs) {
                  super(_Purpose, _Description, _UserDefinedPurpose);
                  this.add_attr({
TelephoneNumbers: _TelephoneNumbers, //[object Object]
FacsimileNumbers: _FacsimileNumbers, //[object Object]
PagerNumber: _PagerNumber, //IfcLabel
ElectronicMailAddresses: _ElectronicMailAddresses, //[object Object]
WWWHomePageURL: _WWWHomePageURL, //IfcURIReference
MessagingIDs: _MessagingIDs //[object Object]
});
                  }
      }
      exports.IFCTELECOMADDRESS = IFCTELECOMADDRESS;
    
       class IFCCOSTVALUE extends IFCAPPLIEDVALUE {
          constructor(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate, _Category, _Condition, _ArithmeticOperator, _Components) {
                  super(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate, _Category, _Condition, _ArithmeticOperator, _Components);
                  
                  }
      }
      exports.IFCCOSTVALUE = IFCCOSTVALUE;
    
       class IFCBOUNDARYEDGECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _TranslationalStiffnessByLengthX, _TranslationalStiffnessByLengthY, _TranslationalStiffnessByLengthZ, _RotationalStiffnessByLengthX, _RotationalStiffnessByLengthY, _RotationalStiffnessByLengthZ) {
                  super(_Name);
                  this.add_attr({
TranslationalStiffnessByLengthX: _TranslationalStiffnessByLengthX, //IfcModulusOfTranslationalSubgradeReactionSelect
TranslationalStiffnessByLengthY: _TranslationalStiffnessByLengthY, //IfcModulusOfTranslationalSubgradeReactionSelect
TranslationalStiffnessByLengthZ: _TranslationalStiffnessByLengthZ, //IfcModulusOfTranslationalSubgradeReactionSelect
RotationalStiffnessByLengthX: _RotationalStiffnessByLengthX, //IfcModulusOfRotationalSubgradeReactionSelect
RotationalStiffnessByLengthY: _RotationalStiffnessByLengthY, //IfcModulusOfRotationalSubgradeReactionSelect
RotationalStiffnessByLengthZ: _RotationalStiffnessByLengthZ //IfcModulusOfRotationalSubgradeReactionSelect
});
                  }
      }
      exports.IFCBOUNDARYEDGECONDITION = IFCBOUNDARYEDGECONDITION;
    
       class IFCBOUNDARYFACECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _TranslationalStiffnessByAreaX, _TranslationalStiffnessByAreaY, _TranslationalStiffnessByAreaZ) {
                  super(_Name);
                  this.add_attr({
TranslationalStiffnessByAreaX: _TranslationalStiffnessByAreaX, //IfcModulusOfSubgradeReactionSelect
TranslationalStiffnessByAreaY: _TranslationalStiffnessByAreaY, //IfcModulusOfSubgradeReactionSelect
TranslationalStiffnessByAreaZ: _TranslationalStiffnessByAreaZ //IfcModulusOfSubgradeReactionSelect
});
                  }
      }
      exports.IFCBOUNDARYFACECONDITION = IFCBOUNDARYFACECONDITION;
    
       class IFCBOUNDARYNODECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _TranslationalStiffnessX, _TranslationalStiffnessY, _TranslationalStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ) {
                  super(_Name);
                  this.add_attr({
TranslationalStiffnessX: _TranslationalStiffnessX, //IfcTranslationalStiffnessSelect
TranslationalStiffnessY: _TranslationalStiffnessY, //IfcTranslationalStiffnessSelect
TranslationalStiffnessZ: _TranslationalStiffnessZ, //IfcTranslationalStiffnessSelect
RotationalStiffnessX: _RotationalStiffnessX, //IfcRotationalStiffnessSelect
RotationalStiffnessY: _RotationalStiffnessY, //IfcRotationalStiffnessSelect
RotationalStiffnessZ: _RotationalStiffnessZ //IfcRotationalStiffnessSelect
});
                  }
      }
      exports.IFCBOUNDARYNODECONDITION = IFCBOUNDARYNODECONDITION;
    
       class IFCCONNECTIONPOINTGEOMETRY extends IFCCONNECTIONGEOMETRY {
          constructor(_PointOnRelatingElement, _PointOnRelatedElement) {
                  super();
                  this.add_attr({
PointOnRelatingElement: _PointOnRelatingElement, //IfcPointOrVertexPoint
PointOnRelatedElement: _PointOnRelatedElement //IfcPointOrVertexPoint
});
                  }
      }
      exports.IFCCONNECTIONPOINTGEOMETRY = IFCCONNECTIONPOINTGEOMETRY;
    
       class IFCCONNECTIONSURFACEGEOMETRY extends IFCCONNECTIONGEOMETRY {
          constructor(_SurfaceOnRelatingElement, _SurfaceOnRelatedElement) {
                  super();
                  this.add_attr({
SurfaceOnRelatingElement: _SurfaceOnRelatingElement, //IfcSurfaceOrFaceSurface
SurfaceOnRelatedElement: _SurfaceOnRelatedElement //IfcSurfaceOrFaceSurface
});
                  }
      }
      exports.IFCCONNECTIONSURFACEGEOMETRY = IFCCONNECTIONSURFACEGEOMETRY;
    
       class IFCCONNECTIONVOLUMEGEOMETRY extends IFCCONNECTIONGEOMETRY {
          constructor(_VolumeOnRelatingElement, _VolumeOnRelatedElement) {
                  super();
                  this.add_attr({
VolumeOnRelatingElement: _VolumeOnRelatingElement, //IfcSolidOrShell
VolumeOnRelatedElement: _VolumeOnRelatedElement //IfcSolidOrShell
});
                  }
      }
      exports.IFCCONNECTIONVOLUMEGEOMETRY = IFCCONNECTIONVOLUMEGEOMETRY;
    
       class IFCCONNECTIONCURVEGEOMETRY extends IFCCONNECTIONGEOMETRY {
          constructor(_CurveOnRelatingElement, _CurveOnRelatedElement) {
                  super();
                  this.add_attr({
CurveOnRelatingElement: _CurveOnRelatingElement, //IfcCurveOrEdgeCurve
CurveOnRelatedElement: _CurveOnRelatedElement //IfcCurveOrEdgeCurve
});
                  }
      }
      exports.IFCCONNECTIONCURVEGEOMETRY = IFCCONNECTIONCURVEGEOMETRY;
    
       class IFCMETRIC extends IFCCONSTRAINT {
          constructor(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade, _Benchmark, _ValueSource, _DataValue, _ReferencePath) {
                  super(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade);
                  this.add_attr({
Benchmark: _Benchmark, //IfcBenchmarkEnum
ValueSource: _ValueSource, //IfcLabel
DataValue: _DataValue, //IfcMetricValueSelect
ReferencePath: _ReferencePath //IfcReference
});
                  }
      }
      exports.IFCMETRIC = IFCMETRIC;
    
       class IFCOBJECTIVE extends IFCCONSTRAINT {
          constructor(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade, _BenchmarkValues, _LogicalAggregator, _ObjectiveQualifier, _UserDefinedQualifier) {
                  super(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade);
                  this.add_attr({
BenchmarkValues: _BenchmarkValues, //[object Object]
LogicalAggregator: _LogicalAggregator, //IfcLogicalOperatorEnum
ObjectiveQualifier: _ObjectiveQualifier, //IfcObjectiveEnum
UserDefinedQualifier: _UserDefinedQualifier //IfcLabel
});
                  }
      }
      exports.IFCOBJECTIVE = IFCOBJECTIVE;
    
       class IFCMAPCONVERSION extends IFCCOORDINATEOPERATION {
          constructor(_SourceCRS, _TargetCRS, _Eastings, _Northings, _OrthogonalHeight, _XAxisAbscissa, _XAxisOrdinate, _Scale) {
                  super(_SourceCRS, _TargetCRS);
                  this.add_attr({
Eastings: _Eastings, //IfcLengthMeasure
Northings: _Northings, //IfcLengthMeasure
OrthogonalHeight: _OrthogonalHeight, //IfcLengthMeasure
XAxisAbscissa: _XAxisAbscissa, //IfcReal
XAxisOrdinate: _XAxisOrdinate, //IfcReal
Scale: _Scale //IfcReal
});
                  }
      }
      exports.IFCMAPCONVERSION = IFCMAPCONVERSION;
    
       class IFCPROJECTEDCRS extends IFCCOORDINATEREFERENCESYSTEM {
          constructor(_Name, _Description, _GeodeticDatum, _VerticalDatum, _MapProjection, _MapZone, _MapUnit) {
                  super(_Name, _Description, _GeodeticDatum, _VerticalDatum);
                  this.add_attr({
MapProjection: _MapProjection, //IfcIdentifier
MapZone: _MapZone, //IfcIdentifier
MapUnit: _MapUnit //IfcNamedUnit
});
                  }
      }
      exports.IFCPROJECTEDCRS = IFCPROJECTEDCRS;
    
       class IFCLIBRARYINFORMATION extends IFCEXTERNALINFORMATION {
          constructor(_Name, _Version, _Publisher, _VersionDate, _Location, _Description) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Version: _Version, //IfcLabel
Publisher: _Publisher, //IfcActorSelect
VersionDate: _VersionDate, //IfcDateTime
Location: _Location, //IfcURIReference
Description: _Description //IfcText
});
                  }
      }
      exports.IFCLIBRARYINFORMATION = IFCLIBRARYINFORMATION;
    
       class IFCCLASSIFICATION extends IFCEXTERNALINFORMATION {
          constructor(_Source, _Edition, _EditionDate, _Name, _Description, _Location, _ReferenceTokens) {
                  super();
                  this.add_attr({
Source: _Source, //IfcLabel
Edition: _Edition, //IfcLabel
EditionDate: _EditionDate, //IfcDate
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Location: _Location, //IfcURIReference
ReferenceTokens: _ReferenceTokens //[object Object]
});
                  }
      }
      exports.IFCCLASSIFICATION = IFCCLASSIFICATION;
    
       class IFCDOCUMENTINFORMATION extends IFCEXTERNALINFORMATION {
          constructor(_Identification, _Name, _Description, _Location, _Purpose, _IntendedUse, _Scope, _Revision, _DocumentOwner, _Editors, _CreationTime, _LastRevisionTime, _ElectronicFormat, _ValidFrom, _ValidUntil, _Confidentiality, _Status) {
                  super();
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Location: _Location, //IfcURIReference
Purpose: _Purpose, //IfcText
IntendedUse: _IntendedUse, //IfcText
Scope: _Scope, //IfcText
Revision: _Revision, //IfcLabel
DocumentOwner: _DocumentOwner, //IfcActorSelect
Editors: _Editors, //[object Object]
CreationTime: _CreationTime, //IfcDateTime
LastRevisionTime: _LastRevisionTime, //IfcDateTime
ElectronicFormat: _ElectronicFormat, //IfcIdentifier
ValidFrom: _ValidFrom, //IfcDate
ValidUntil: _ValidUntil, //IfcDate
Confidentiality: _Confidentiality, //IfcDocumentConfidentialityEnum
Status: _Status //IfcDocumentStatusEnum
});
                  }
      }
      exports.IFCDOCUMENTINFORMATION = IFCDOCUMENTINFORMATION;
    
       class IFCEXTERNALLYDEFINEDHATCHSTYLE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name) {
                  super(_Location, _Identification, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDHATCHSTYLE = IFCEXTERNALLYDEFINEDHATCHSTYLE;
    
       class IFCEXTERNALLYDEFINEDSURFACESTYLE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name) {
                  super(_Location, _Identification, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDSURFACESTYLE = IFCEXTERNALLYDEFINEDSURFACESTYLE;
    
       class IFCEXTERNALLYDEFINEDTEXTFONT extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name) {
                  super(_Location, _Identification, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDTEXTFONT = IFCEXTERNALLYDEFINEDTEXTFONT;
    
       class IFCLIBRARYREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name, _Description, _Language, _ReferencedLibrary) {
                  super(_Location, _Identification, _Name);
                  this.add_attr({
Description: _Description, //IfcText
Language: _Language, //IfcLanguageId
ReferencedLibrary: _ReferencedLibrary //IfcLibraryInformation
});
                  }
      }
      exports.IFCLIBRARYREFERENCE = IFCLIBRARYREFERENCE;
    
       class IFCCLASSIFICATIONREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name, _ReferencedSource, _Description, _Sort) {
                  super(_Location, _Identification, _Name);
                  this.add_attr({
ReferencedSource: _ReferencedSource, //IfcClassificationReferenceSelect
Description: _Description, //IfcText
Sort: _Sort //IfcIdentifier
});
                  }
      }
      exports.IFCCLASSIFICATIONREFERENCE = IFCCLASSIFICATIONREFERENCE;
    
       class IFCDOCUMENTREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _Identification, _Name, _Description, _ReferencedDocument) {
                  super(_Location, _Identification, _Name);
                  this.add_attr({
Description: _Description, //IfcText
ReferencedDocument: _ReferencedDocument //IfcDocumentInformation
});
                  }
      }
      exports.IFCDOCUMENTREFERENCE = IFCDOCUMENTREFERENCE;
    
       class IFCMATERIALLAYER extends IFCMATERIALDEFINITION {
          constructor(_Material, _LayerThickness, _IsVentilated, _Name, _Description, _Category, _Priority) {
                  super();
                  this.add_attr({
Material: _Material, //IfcMaterial
LayerThickness: _LayerThickness, //IfcNonNegativeLengthMeasure
IsVentilated: _IsVentilated, //IfcLogical
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Category: _Category, //IfcLabel
Priority: _Priority //IfcInteger
});
                  }
      }
      exports.IFCMATERIALLAYER = IFCMATERIALLAYER;
    
       class IFCMATERIALLAYERSET extends IFCMATERIALDEFINITION {
          constructor(_MaterialLayers, _LayerSetName, _Description) {
                  super();
                  this.add_attr({
MaterialLayers: _MaterialLayers, //[object Object]
LayerSetName: _LayerSetName, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCMATERIALLAYERSET = IFCMATERIALLAYERSET;
    
       class IFCMATERIALPROFILE extends IFCMATERIALDEFINITION {
          constructor(_Name, _Description, _Material, _Profile, _Priority, _Category) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Material: _Material, //IfcMaterial
Profile: _Profile, //IfcProfileDef
Priority: _Priority, //IfcInteger
Category: _Category //IfcLabel
});
                  }
      }
      exports.IFCMATERIALPROFILE = IFCMATERIALPROFILE;
    
       class IFCMATERIALPROFILESET extends IFCMATERIALDEFINITION {
          constructor(_Name, _Description, _MaterialProfiles, _CompositeProfile) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
MaterialProfiles: _MaterialProfiles, //[object Object]
CompositeProfile: _CompositeProfile //IfcCompositeProfileDef
});
                  }
      }
      exports.IFCMATERIALPROFILESET = IFCMATERIALPROFILESET;
    
       class IFCMATERIAL extends IFCMATERIALDEFINITION {
          constructor(_Name, _Description, _Category) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Category: _Category //IfcLabel
});
                  }
      }
      exports.IFCMATERIAL = IFCMATERIAL;
    
       class IFCMATERIALCONSTITUENT extends IFCMATERIALDEFINITION {
          constructor(_Name, _Description, _Material, _Fraction, _Category) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Material: _Material, //IfcMaterial
Fraction: _Fraction, //IfcNormalisedRatioMeasure
Category: _Category //IfcLabel
});
                  }
      }
      exports.IFCMATERIALCONSTITUENT = IFCMATERIALCONSTITUENT;
    
       class IFCMATERIALCONSTITUENTSET extends IFCMATERIALDEFINITION {
          constructor(_Name, _Description, _MaterialConstituents) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
MaterialConstituents: _MaterialConstituents //[object Object]
});
                  }
      }
      exports.IFCMATERIALCONSTITUENTSET = IFCMATERIALCONSTITUENTSET;
    
       class IFCMATERIALLAYERSETUSAGE extends IFCMATERIALUSAGEDEFINITION {
          constructor(_ForLayerSet, _LayerSetDirection, _DirectionSense, _OffsetFromReferenceLine, _ReferenceExtent) {
                  super();
                  this.add_attr({
ForLayerSet: _ForLayerSet, //IfcMaterialLayerSet
LayerSetDirection: _LayerSetDirection, //IfcLayerSetDirectionEnum
DirectionSense: _DirectionSense, //IfcDirectionSenseEnum
OffsetFromReferenceLine: _OffsetFromReferenceLine, //IfcLengthMeasure
ReferenceExtent: _ReferenceExtent //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCMATERIALLAYERSETUSAGE = IFCMATERIALLAYERSETUSAGE;
    
       class IFCMATERIALPROFILESETUSAGE extends IFCMATERIALUSAGEDEFINITION {
          constructor(_ForProfileSet, _CardinalPoint, _ReferenceExtent) {
                  super();
                  this.add_attr({
ForProfileSet: _ForProfileSet, //IfcMaterialProfileSet
CardinalPoint: _CardinalPoint, //IfcCardinalPointReference
ReferenceExtent: _ReferenceExtent //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCMATERIALPROFILESETUSAGE = IFCMATERIALPROFILESETUSAGE;
    
       class IFCSIUNIT extends IFCNAMEDUNIT {
          constructor(_Dimensions, _UnitType, _Prefix, _Name) {
                  super(_Dimensions, _UnitType);
                  this.add_attr({
Prefix: _Prefix, //IfcSIPrefix
Name: _Name //IfcSIUnitName
});
                  }
      }
      exports.IFCSIUNIT = IFCSIUNIT;
    
       class IFCCONTEXTDEPENDENTUNIT extends IFCNAMEDUNIT {
          constructor(_Dimensions, _UnitType, _Name) {
                  super(_Dimensions, _UnitType);
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCCONTEXTDEPENDENTUNIT = IFCCONTEXTDEPENDENTUNIT;
    
       class IFCCONVERSIONBASEDUNIT extends IFCNAMEDUNIT {
          constructor(_Dimensions, _UnitType, _Name, _ConversionFactor) {
                  super(_Dimensions, _UnitType);
                  this.add_attr({
Name: _Name, //IfcLabel
ConversionFactor: _ConversionFactor //IfcMeasureWithUnit
});
                  }
      }
      exports.IFCCONVERSIONBASEDUNIT = IFCCONVERSIONBASEDUNIT;
    
       class IFCGRIDPLACEMENT extends IFCOBJECTPLACEMENT {
          constructor(_PlacementLocation, _PlacementRefDirection) {
                  super();
                  this.add_attr({
PlacementLocation: _PlacementLocation, //IfcVirtualGridIntersection
PlacementRefDirection: _PlacementRefDirection //IfcGridPlacementDirectionSelect
});
                  }
      }
      exports.IFCGRIDPLACEMENT = IFCGRIDPLACEMENT;
    
       class IFCLOCALPLACEMENT extends IFCOBJECTPLACEMENT {
          constructor(_PlacementRelTo, _RelativePlacement) {
                  super();
                  this.add_attr({
PlacementRelTo: _PlacementRelTo, //IfcObjectPlacement
RelativePlacement: _RelativePlacement //IfcAxis2Placement
});
                  }
      }
      exports.IFCLOCALPLACEMENT = IFCLOCALPLACEMENT;
    
       class IFCPHYSICALSIMPLEQUANTITY extends IFCPHYSICALQUANTITY {
          constructor(_Name, _Description, _Unit) {
                  super(_Name, _Description);
                  this.add_attr({
Unit: _Unit //IfcNamedUnit
});
                  }
      }
      exports.IFCPHYSICALSIMPLEQUANTITY = IFCPHYSICALSIMPLEQUANTITY;
    
       class IFCPHYSICALCOMPLEXQUANTITY extends IFCPHYSICALQUANTITY {
          constructor(_Name, _Description, _HasQuantities, _Discrimination, _Quality, _Usage) {
                  super(_Name, _Description);
                  this.add_attr({
HasQuantities: _HasQuantities, //[object Object]
Discrimination: _Discrimination, //IfcLabel
Quality: _Quality, //IfcLabel
Usage: _Usage //IfcLabel
});
                  }
      }
      exports.IFCPHYSICALCOMPLEXQUANTITY = IFCPHYSICALCOMPLEXQUANTITY;
    
       class IFCSURFACESTYLELIGHTING extends IFCPRESENTATIONITEM {
          constructor(_DiffuseTransmissionColour, _DiffuseReflectionColour, _TransmissionColour, _ReflectanceColour) {
                  super();
                  this.add_attr({
DiffuseTransmissionColour: _DiffuseTransmissionColour, //IfcColourRgb
DiffuseReflectionColour: _DiffuseReflectionColour, //IfcColourRgb
TransmissionColour: _TransmissionColour, //IfcColourRgb
ReflectanceColour: _ReflectanceColour //IfcColourRgb
});
                  }
      }
      exports.IFCSURFACESTYLELIGHTING = IFCSURFACESTYLELIGHTING;
    
       class IFCSURFACESTYLEREFRACTION extends IFCPRESENTATIONITEM {
          constructor(_RefractionIndex, _DispersionFactor) {
                  super();
                  this.add_attr({
RefractionIndex: _RefractionIndex, //IfcReal
DispersionFactor: _DispersionFactor //IfcReal
});
                  }
      }
      exports.IFCSURFACESTYLEREFRACTION = IFCSURFACESTYLEREFRACTION;
    
       class IFCSURFACESTYLESHADING extends IFCPRESENTATIONITEM {
          constructor(_SurfaceColour, _Transparency) {
                  super();
                  this.add_attr({
SurfaceColour: _SurfaceColour, //IfcColourRgb
Transparency: _Transparency //IfcNormalisedRatioMeasure
});
                  }
      }
      exports.IFCSURFACESTYLESHADING = IFCSURFACESTYLESHADING;
    
       class IFCSURFACESTYLEWITHTEXTURES extends IFCPRESENTATIONITEM {
          constructor(_Textures) {
                  super();
                  this.add_attr({
Textures: _Textures //[object Object]
});
                  }
      }
      exports.IFCSURFACESTYLEWITHTEXTURES = IFCSURFACESTYLEWITHTEXTURES;
    
       class IFCSURFACETEXTURE extends IFCPRESENTATIONITEM {
          constructor(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter) {
                  super();
                  this.add_attr({
RepeatS: _RepeatS, //IfcBoolean
RepeatT: _RepeatT, //IfcBoolean
Mode: _Mode, //IfcIdentifier
TextureTransform: _TextureTransform, //IfcCartesianTransformationOperator2D
Parameter: _Parameter //[object Object]
});
                  }
      }
      exports.IFCSURFACETEXTURE = IFCSURFACETEXTURE;
    
       class IFCTEXTSTYLEFORDEFINEDFONT extends IFCPRESENTATIONITEM {
          constructor(_Colour, _BackgroundColour) {
                  super();
                  this.add_attr({
Colour: _Colour, //IfcColour
BackgroundColour: _BackgroundColour //IfcColour
});
                  }
      }
      exports.IFCTEXTSTYLEFORDEFINEDFONT = IFCTEXTSTYLEFORDEFINEDFONT;
    
       class IFCTEXTSTYLETEXTMODEL extends IFCPRESENTATIONITEM {
          constructor(_TextIndent, _TextAlign, _TextDecoration, _LetterSpacing, _WordSpacing, _TextTransform, _LineHeight) {
                  super();
                  this.add_attr({
TextIndent: _TextIndent, //IfcSizeSelect
TextAlign: _TextAlign, //IfcTextAlignment
TextDecoration: _TextDecoration, //IfcTextDecoration
LetterSpacing: _LetterSpacing, //IfcSizeSelect
WordSpacing: _WordSpacing, //IfcSizeSelect
TextTransform: _TextTransform, //IfcTextTransformation
LineHeight: _LineHeight //IfcSizeSelect
});
                  }
      }
      exports.IFCTEXTSTYLETEXTMODEL = IFCTEXTSTYLETEXTMODEL;
    
       class IFCTEXTURECOORDINATE extends IFCPRESENTATIONITEM {
          constructor(_Maps) {
                  super();
                  this.add_attr({
Maps: _Maps //[object Object]
});
                  }
      }
      exports.IFCTEXTURECOORDINATE = IFCTEXTURECOORDINATE;
    
       class IFCTEXTUREVERTEX extends IFCPRESENTATIONITEM {
          constructor(_Coordinates) {
                  super();
                  this.add_attr({
Coordinates: _Coordinates //[object Object]
});
                  }
      }
      exports.IFCTEXTUREVERTEX = IFCTEXTUREVERTEX;
    
       class IFCTEXTUREVERTEXLIST extends IFCPRESENTATIONITEM {
          constructor(_TexCoordsList) {
                  super();
                  this.add_attr({
TexCoordsList: _TexCoordsList //[object Object]
});
                  }
      }
      exports.IFCTEXTUREVERTEXLIST = IFCTEXTUREVERTEXLIST;
    
       class IFCCOLOURRGBLIST extends IFCPRESENTATIONITEM {
          constructor(_ColourList) {
                  super();
                  this.add_attr({
ColourList: _ColourList //[object Object]
});
                  }
      }
      exports.IFCCOLOURRGBLIST = IFCCOLOURRGBLIST;
    
       class IFCCOLOURSPECIFICATION extends IFCPRESENTATIONITEM {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCCOLOURSPECIFICATION = IFCCOLOURSPECIFICATION;
    
       class IFCCURVESTYLEFONT extends IFCPRESENTATIONITEM {
          constructor(_Name, _PatternList) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
PatternList: _PatternList //[object Object]
});
                  }
      }
      exports.IFCCURVESTYLEFONT = IFCCURVESTYLEFONT;
    
       class IFCCURVESTYLEFONTANDSCALING extends IFCPRESENTATIONITEM {
          constructor(_Name, _CurveFont, _CurveFontScaling) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
CurveFont: _CurveFont, //IfcCurveStyleFontSelect
CurveFontScaling: _CurveFontScaling //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCCURVESTYLEFONTANDSCALING = IFCCURVESTYLEFONTANDSCALING;
    
       class IFCCURVESTYLEFONTPATTERN extends IFCPRESENTATIONITEM {
          constructor(_VisibleSegmentLength, _InvisibleSegmentLength) {
                  super();
                  this.add_attr({
VisibleSegmentLength: _VisibleSegmentLength, //IfcLengthMeasure
InvisibleSegmentLength: _InvisibleSegmentLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCURVESTYLEFONTPATTERN = IFCCURVESTYLEFONTPATTERN;
    
       class IFCINDEXEDCOLOURMAP extends IFCPRESENTATIONITEM {
          constructor(_MappedTo, _Opacity, _Colours, _ColourIndex) {
                  super();
                  this.add_attr({
MappedTo: _MappedTo, //IfcTessellatedFaceSet
Opacity: _Opacity, //IfcNormalisedRatioMeasure
Colours: _Colours, //IfcColourRgbList
ColourIndex: _ColourIndex //[object Object]
});
                  }
      }
      exports.IFCINDEXEDCOLOURMAP = IFCINDEXEDCOLOURMAP;
    
       class IFCPREDEFINEDITEM extends IFCPRESENTATIONITEM {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCPREDEFINEDITEM = IFCPREDEFINEDITEM;
    
       class IFCPRESENTATIONLAYERWITHSTYLE extends IFCPRESENTATIONLAYERASSIGNMENT {
          constructor(_Name, _Description, _AssignedItems, _Identifier, _LayerOn, _LayerFrozen, _LayerBlocked, _LayerStyles) {
                  super(_Name, _Description, _AssignedItems, _Identifier);
                  this.add_attr({
LayerOn: _LayerOn, //IfcLogical
LayerFrozen: _LayerFrozen, //IfcLogical
LayerBlocked: _LayerBlocked, //IfcLogical
LayerStyles: _LayerStyles //[object Object]
});
                  }
      }
      exports.IFCPRESENTATIONLAYERWITHSTYLE = IFCPRESENTATIONLAYERWITHSTYLE;
    
       class IFCSURFACESTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _Side, _Styles) {
                  super(_Name);
                  this.add_attr({
Side: _Side, //IfcSurfaceSide
Styles: _Styles //[object Object]
});
                  }
      }
      exports.IFCSURFACESTYLE = IFCSURFACESTYLE;
    
       class IFCTEXTSTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _TextCharacterAppearance, _TextStyle, _TextFontStyle, _ModelOrDraughting) {
                  super(_Name);
                  this.add_attr({
TextCharacterAppearance: _TextCharacterAppearance, //IfcTextStyleForDefinedFont
TextStyle: _TextStyle, //IfcTextStyleTextModel
TextFontStyle: _TextFontStyle, //IfcTextFontSelect
ModelOrDraughting: _ModelOrDraughting //IfcBoolean
});
                  }
      }
      exports.IFCTEXTSTYLE = IFCTEXTSTYLE;
    
       class IFCCURVESTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _CurveFont, _CurveWidth, _CurveColour, _ModelOrDraughting) {
                  super(_Name);
                  this.add_attr({
CurveFont: _CurveFont, //IfcCurveFontOrScaledCurveFontSelect
CurveWidth: _CurveWidth, //IfcSizeSelect
CurveColour: _CurveColour, //IfcColour
ModelOrDraughting: _ModelOrDraughting //IfcBoolean
});
                  }
      }
      exports.IFCCURVESTYLE = IFCCURVESTYLE;
    
       class IFCFILLAREASTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _FillStyles, _ModelorDraughting) {
                  super(_Name);
                  this.add_attr({
FillStyles: _FillStyles, //[object Object]
ModelorDraughting: _ModelorDraughting //IfcBoolean
});
                  }
      }
      exports.IFCFILLAREASTYLE = IFCFILLAREASTYLE;
    
       class IFCMATERIALDEFINITIONREPRESENTATION extends IFCPRODUCTREPRESENTATION {
          constructor(_Name, _Description, _Representations, _RepresentedMaterial) {
                  super(_Name, _Description, _Representations);
                  this.add_attr({
RepresentedMaterial: _RepresentedMaterial //IfcMaterial
});
                  }
      }
      exports.IFCMATERIALDEFINITIONREPRESENTATION = IFCMATERIALDEFINITIONREPRESENTATION;
    
       class IFCPRODUCTDEFINITIONSHAPE extends IFCPRODUCTREPRESENTATION {
          constructor(_Name, _Description, _Representations) {
                  super(_Name, _Description, _Representations);
                  
                  }
      }
      exports.IFCPRODUCTDEFINITIONSHAPE = IFCPRODUCTDEFINITIONSHAPE;
    
       class IFCARBITRARYCLOSEDPROFILEDEF extends IFCPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _OuterCurve) {
                  super(_ProfileType, _ProfileName);
                  this.add_attr({
OuterCurve: _OuterCurve //IfcCurve
});
                  }
      }
      exports.IFCARBITRARYCLOSEDPROFILEDEF = IFCARBITRARYCLOSEDPROFILEDEF;
    
       class IFCARBITRARYOPENPROFILEDEF extends IFCPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Curve) {
                  super(_ProfileType, _ProfileName);
                  this.add_attr({
Curve: _Curve //IfcBoundedCurve
});
                  }
      }
      exports.IFCARBITRARYOPENPROFILEDEF = IFCARBITRARYOPENPROFILEDEF;
    
       class IFCCOMPOSITEPROFILEDEF extends IFCPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Profiles, _Label) {
                  super(_ProfileType, _ProfileName);
                  this.add_attr({
Profiles: _Profiles, //[object Object]
Label: _Label //IfcLabel
});
                  }
      }
      exports.IFCCOMPOSITEPROFILEDEF = IFCCOMPOSITEPROFILEDEF;
    
       class IFCDERIVEDPROFILEDEF extends IFCPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _ParentProfile, _Operator, _Label) {
                  super(_ProfileType, _ProfileName);
                  this.add_attr({
ParentProfile: _ParentProfile, //IfcProfileDef
Operator: _Operator, //IfcCartesianTransformationOperator2D
Label: _Label //IfcLabel
});
                  }
      }
      exports.IFCDERIVEDPROFILEDEF = IFCDERIVEDPROFILEDEF;
    
       class IFCPARAMETERIZEDPROFILEDEF extends IFCPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position) {
                  super(_ProfileType, _ProfileName);
                  this.add_attr({
Position: _Position //IfcAxis2Placement2D
});
                  }
      }
      exports.IFCPARAMETERIZEDPROFILEDEF = IFCPARAMETERIZEDPROFILEDEF;
    
       class IFCPROPERTYENUMERATION extends IFCPROPERTYABSTRACTION {
          constructor(_Name, _EnumerationValues, _Unit) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
EnumerationValues: _EnumerationValues, //[object Object]
Unit: _Unit //IfcUnit
});
                  }
      }
      exports.IFCPROPERTYENUMERATION = IFCPROPERTYENUMERATION;
    
       class IFCEXTENDEDPROPERTIES extends IFCPROPERTYABSTRACTION {
          constructor(_Name, _Description, _Properties) {
                  super();
                  this.add_attr({
Name: _Name, //IfcIdentifier
Description: _Description, //IfcText
Properties: _Properties //[object Object]
});
                  }
      }
      exports.IFCEXTENDEDPROPERTIES = IFCEXTENDEDPROPERTIES;
    
       class IFCPREDEFINEDPROPERTIES extends IFCPROPERTYABSTRACTION {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCPREDEFINEDPROPERTIES = IFCPREDEFINEDPROPERTIES;
    
       class IFCPROPERTY extends IFCPROPERTYABSTRACTION {
          constructor(_Name, _Description) {
                  super();
                  this.add_attr({
Name: _Name, //IfcIdentifier
Description: _Description //IfcText
});
                  }
      }
      exports.IFCPROPERTY = IFCPROPERTY;
    
       class IFCSHAPEMODEL extends IFCREPRESENTATION {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items);
                  
                  }
      }
      exports.IFCSHAPEMODEL = IFCSHAPEMODEL;
    
       class IFCSTYLEMODEL extends IFCREPRESENTATION {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items);
                  
                  }
      }
      exports.IFCSTYLEMODEL = IFCSTYLEMODEL;
    
       class IFCGEOMETRICREPRESENTATIONCONTEXT extends IFCREPRESENTATIONCONTEXT {
          constructor(_ContextIdentifier, _ContextType, _CoordinateSpaceDimension, _Precision, _WorldCoordinateSystem, _TrueNorth) {
                  super(_ContextIdentifier, _ContextType);
                  this.add_attr({
CoordinateSpaceDimension: _CoordinateSpaceDimension, //IfcDimensionCount
Precision: _Precision, //IfcReal
WorldCoordinateSystem: _WorldCoordinateSystem, //IfcAxis2Placement
TrueNorth: _TrueNorth //IfcDirection
});
                  }
      }
      exports.IFCGEOMETRICREPRESENTATIONCONTEXT = IFCGEOMETRICREPRESENTATIONCONTEXT;
    
       class IFCSTYLEDITEM extends IFCREPRESENTATIONITEM {
          constructor(_Item, _Styles, _Name) {
                  super();
                  this.add_attr({
Item: _Item, //IfcRepresentationItem
Styles: _Styles, //[object Object]
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCSTYLEDITEM = IFCSTYLEDITEM;
    
       class IFCTOPOLOGICALREPRESENTATIONITEM extends IFCREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCTOPOLOGICALREPRESENTATIONITEM = IFCTOPOLOGICALREPRESENTATIONITEM;
    
       class IFCGEOMETRICREPRESENTATIONITEM extends IFCREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCGEOMETRICREPRESENTATIONITEM = IFCGEOMETRICREPRESENTATIONITEM;
    
       class IFCMAPPEDITEM extends IFCREPRESENTATIONITEM {
          constructor(_MappingSource, _MappingTarget) {
                  super();
                  this.add_attr({
MappingSource: _MappingSource, //IfcRepresentationMap
MappingTarget: _MappingTarget //IfcCartesianTransformationOperator
});
                  }
      }
      exports.IFCMAPPEDITEM = IFCMAPPEDITEM;
    
       class IFCAPPROVALRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingApproval, _RelatedApprovals) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingApproval: _RelatingApproval, //IfcApproval
RelatedApprovals: _RelatedApprovals //[object Object]
});
                  }
      }
      exports.IFCAPPROVALRELATIONSHIP = IFCAPPROVALRELATIONSHIP;
    
       class IFCCURRENCYRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingMonetaryUnit, _RelatedMonetaryUnit, _ExchangeRate, _RateDateTime, _RateSource) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingMonetaryUnit: _RelatingMonetaryUnit, //IfcMonetaryUnit
RelatedMonetaryUnit: _RelatedMonetaryUnit, //IfcMonetaryUnit
ExchangeRate: _ExchangeRate, //IfcPositiveRatioMeasure
RateDateTime: _RateDateTime, //IfcDateTime
RateSource: _RateSource //IfcLibraryInformation
});
                  }
      }
      exports.IFCCURRENCYRELATIONSHIP = IFCCURRENCYRELATIONSHIP;
    
       class IFCDOCUMENTINFORMATIONRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingDocument, _RelatedDocuments, _RelationshipType) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingDocument: _RelatingDocument, //IfcDocumentInformation
RelatedDocuments: _RelatedDocuments, //[object Object]
RelationshipType: _RelationshipType //IfcLabel
});
                  }
      }
      exports.IFCDOCUMENTINFORMATIONRELATIONSHIP = IFCDOCUMENTINFORMATIONRELATIONSHIP;
    
       class IFCEXTERNALREFERENCERELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingReference, _RelatedResourceObjects) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingReference: _RelatingReference, //IfcExternalReference
RelatedResourceObjects: _RelatedResourceObjects //[object Object]
});
                  }
      }
      exports.IFCEXTERNALREFERENCERELATIONSHIP = IFCEXTERNALREFERENCERELATIONSHIP;
    
       class IFCMATERIALRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingMaterial, _RelatedMaterials, _Expression) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingMaterial: _RelatingMaterial, //IfcMaterial
RelatedMaterials: _RelatedMaterials, //[object Object]
Expression: _Expression //IfcLabel
});
                  }
      }
      exports.IFCMATERIALRELATIONSHIP = IFCMATERIALRELATIONSHIP;
    
       class IFCORGANIZATIONRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingOrganization, _RelatedOrganizations) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingOrganization: _RelatingOrganization, //IfcOrganization
RelatedOrganizations: _RelatedOrganizations //[object Object]
});
                  }
      }
      exports.IFCORGANIZATIONRELATIONSHIP = IFCORGANIZATIONRELATIONSHIP;
    
       class IFCPROPERTYDEPENDENCYRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _DependingProperty, _DependantProperty, _Expression) {
                  super(_Name, _Description);
                  this.add_attr({
DependingProperty: _DependingProperty, //IfcProperty
DependantProperty: _DependantProperty, //IfcProperty
Expression: _Expression //IfcText
});
                  }
      }
      exports.IFCPROPERTYDEPENDENCYRELATIONSHIP = IFCPROPERTYDEPENDENCYRELATIONSHIP;
    
       class IFCRESOURCEAPPROVALRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatedResourceObjects, _RelatingApproval) {
                  super(_Name, _Description);
                  this.add_attr({
RelatedResourceObjects: _RelatedResourceObjects, //[object Object]
RelatingApproval: _RelatingApproval //IfcApproval
});
                  }
      }
      exports.IFCRESOURCEAPPROVALRELATIONSHIP = IFCRESOURCEAPPROVALRELATIONSHIP;
    
       class IFCRESOURCECONSTRAINTRELATIONSHIP extends IFCRESOURCELEVELRELATIONSHIP {
          constructor(_Name, _Description, _RelatingConstraint, _RelatedResourceObjects) {
                  super(_Name, _Description);
                  this.add_attr({
RelatingConstraint: _RelatingConstraint, //IfcConstraint
RelatedResourceObjects: _RelatedResourceObjects //[object Object]
});
                  }
      }
      exports.IFCRESOURCECONSTRAINTRELATIONSHIP = IFCRESOURCECONSTRAINTRELATIONSHIP;
    
       class IFCOBJECTDEFINITION extends IFCROOT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCOBJECTDEFINITION = IFCOBJECTDEFINITION;
    
       class IFCPROPERTYDEFINITION extends IFCROOT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCPROPERTYDEFINITION = IFCPROPERTYDEFINITION;
    
       class IFCRELATIONSHIP extends IFCROOT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCRELATIONSHIP = IFCRELATIONSHIP;
    
       class IFCTASKTIME extends IFCSCHEDULINGTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _DurationType, _ScheduleDuration, _ScheduleStart, _ScheduleFinish, _EarlyStart, _EarlyFinish, _LateStart, _LateFinish, _FreeFloat, _TotalFloat, _IsCritical, _StatusTime, _ActualDuration, _ActualStart, _ActualFinish, _RemainingTime, _Completion) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin);
                  this.add_attr({
DurationType: _DurationType, //IfcTaskDurationEnum
ScheduleDuration: _ScheduleDuration, //IfcDuration
ScheduleStart: _ScheduleStart, //IfcDateTime
ScheduleFinish: _ScheduleFinish, //IfcDateTime
EarlyStart: _EarlyStart, //IfcDateTime
EarlyFinish: _EarlyFinish, //IfcDateTime
LateStart: _LateStart, //IfcDateTime
LateFinish: _LateFinish, //IfcDateTime
FreeFloat: _FreeFloat, //IfcDuration
TotalFloat: _TotalFloat, //IfcDuration
IsCritical: _IsCritical, //IfcBoolean
StatusTime: _StatusTime, //IfcDateTime
ActualDuration: _ActualDuration, //IfcDuration
ActualStart: _ActualStart, //IfcDateTime
ActualFinish: _ActualFinish, //IfcDateTime
RemainingTime: _RemainingTime, //IfcDuration
Completion: _Completion //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCTASKTIME = IFCTASKTIME;
    
       class IFCWORKTIME extends IFCSCHEDULINGTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _RecurrencePattern, _Start, _Finish) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin);
                  this.add_attr({
RecurrencePattern: _RecurrencePattern, //IfcRecurrencePattern
Start: _Start, //IfcDate
Finish: _Finish //IfcDate
});
                  }
      }
      exports.IFCWORKTIME = IFCWORKTIME;
    
       class IFCEVENTTIME extends IFCSCHEDULINGTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _ActualDate, _EarlyDate, _LateDate, _ScheduleDate) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin);
                  this.add_attr({
ActualDate: _ActualDate, //IfcDateTime
EarlyDate: _EarlyDate, //IfcDateTime
LateDate: _LateDate, //IfcDateTime
ScheduleDate: _ScheduleDate //IfcDateTime
});
                  }
      }
      exports.IFCEVENTTIME = IFCEVENTTIME;
    
       class IFCLAGTIME extends IFCSCHEDULINGTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _LagValue, _DurationType) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin);
                  this.add_attr({
LagValue: _LagValue, //IfcTimeOrRatioSelect
DurationType: _DurationType //IfcTaskDurationEnum
});
                  }
      }
      exports.IFCLAGTIME = IFCLAGTIME;
    
       class IFCRESOURCETIME extends IFCSCHEDULINGTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _ScheduleWork, _ScheduleUsage, _ScheduleStart, _ScheduleFinish, _ScheduleContour, _LevelingDelay, _IsOverAllocated, _StatusTime, _ActualWork, _ActualUsage, _ActualStart, _ActualFinish, _RemainingWork, _RemainingUsage, _Completion) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin);
                  this.add_attr({
ScheduleWork: _ScheduleWork, //IfcDuration
ScheduleUsage: _ScheduleUsage, //IfcPositiveRatioMeasure
ScheduleStart: _ScheduleStart, //IfcDateTime
ScheduleFinish: _ScheduleFinish, //IfcDateTime
ScheduleContour: _ScheduleContour, //IfcLabel
LevelingDelay: _LevelingDelay, //IfcDuration
IsOverAllocated: _IsOverAllocated, //IfcBoolean
StatusTime: _StatusTime, //IfcDateTime
ActualWork: _ActualWork, //IfcDuration
ActualUsage: _ActualUsage, //IfcPositiveRatioMeasure
ActualStart: _ActualStart, //IfcDateTime
ActualFinish: _ActualFinish, //IfcDateTime
RemainingWork: _RemainingWork, //IfcDuration
RemainingUsage: _RemainingUsage, //IfcPositiveRatioMeasure
Completion: _Completion //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCRESOURCETIME = IFCRESOURCETIME;
    
       class IFCFAILURECONNECTIONCONDITION extends IFCSTRUCTURALCONNECTIONCONDITION {
          constructor(_Name, _TensionFailureX, _TensionFailureY, _TensionFailureZ, _CompressionFailureX, _CompressionFailureY, _CompressionFailureZ) {
                  super(_Name);
                  this.add_attr({
TensionFailureX: _TensionFailureX, //IfcForceMeasure
TensionFailureY: _TensionFailureY, //IfcForceMeasure
TensionFailureZ: _TensionFailureZ, //IfcForceMeasure
CompressionFailureX: _CompressionFailureX, //IfcForceMeasure
CompressionFailureY: _CompressionFailureY, //IfcForceMeasure
CompressionFailureZ: _CompressionFailureZ //IfcForceMeasure
});
                  }
      }
      exports.IFCFAILURECONNECTIONCONDITION = IFCFAILURECONNECTIONCONDITION;
    
       class IFCSLIPPAGECONNECTIONCONDITION extends IFCSTRUCTURALCONNECTIONCONDITION {
          constructor(_Name, _SlippageX, _SlippageY, _SlippageZ) {
                  super(_Name);
                  this.add_attr({
SlippageX: _SlippageX, //IfcLengthMeasure
SlippageY: _SlippageY, //IfcLengthMeasure
SlippageZ: _SlippageZ //IfcLengthMeasure
});
                  }
      }
      exports.IFCSLIPPAGECONNECTIONCONDITION = IFCSLIPPAGECONNECTIONCONDITION;
    
       class IFCSTRUCTURALLOADCONFIGURATION extends IFCSTRUCTURALLOAD {
          constructor(_Name, _Values, _Locations) {
                  super(_Name);
                  this.add_attr({
Values: _Values, //[object Object]
Locations: _Locations //[object Object]
});
                  }
      }
      exports.IFCSTRUCTURALLOADCONFIGURATION = IFCSTRUCTURALLOADCONFIGURATION;
    
       class IFCSTRUCTURALLOADORRESULT extends IFCSTRUCTURALLOAD {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCSTRUCTURALLOADORRESULT = IFCSTRUCTURALLOADORRESULT;
    
       class IFCIRREGULARTIMESERIES extends IFCTIMESERIES {
          constructor(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit, _Values) {
                  super(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit);
                  this.add_attr({
Values: _Values //[object Object]
});
                  }
      }
      exports.IFCIRREGULARTIMESERIES = IFCIRREGULARTIMESERIES;
    
       class IFCREGULARTIMESERIES extends IFCTIMESERIES {
          constructor(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit, _TimeStep, _Values) {
                  super(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit);
                  this.add_attr({
TimeStep: _TimeStep, //IfcTimeMeasure
Values: _Values //[object Object]
});
                  }
      }
      exports.IFCREGULARTIMESERIES = IFCREGULARTIMESERIES;
    
       class IFCBOUNDARYNODECONDITIONWARPING extends IFCBOUNDARYNODECONDITION {
          constructor(_Name, _TranslationalStiffnessX, _TranslationalStiffnessY, _TranslationalStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ, _WarpingStiffness) {
                  super(_Name, _TranslationalStiffnessX, _TranslationalStiffnessY, _TranslationalStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ);
                  this.add_attr({
WarpingStiffness: _WarpingStiffness //IfcWarpingStiffnessSelect
});
                  }
      }
      exports.IFCBOUNDARYNODECONDITIONWARPING = IFCBOUNDARYNODECONDITIONWARPING;
    
       class IFCCONNECTIONPOINTECCENTRICITY extends IFCCONNECTIONPOINTGEOMETRY {
          constructor(_PointOnRelatingElement, _PointOnRelatedElement, _EccentricityInX, _EccentricityInY, _EccentricityInZ) {
                  super(_PointOnRelatingElement, _PointOnRelatedElement);
                  this.add_attr({
EccentricityInX: _EccentricityInX, //IfcLengthMeasure
EccentricityInY: _EccentricityInY, //IfcLengthMeasure
EccentricityInZ: _EccentricityInZ //IfcLengthMeasure
});
                  }
      }
      exports.IFCCONNECTIONPOINTECCENTRICITY = IFCCONNECTIONPOINTECCENTRICITY;
    
       class IFCMATERIALLAYERWITHOFFSETS extends IFCMATERIALLAYER {
          constructor(_Material, _LayerThickness, _IsVentilated, _Name, _Description, _Category, _Priority, _OffsetDirection, _OffsetValues) {
                  super(_Material, _LayerThickness, _IsVentilated, _Name, _Description, _Category, _Priority);
                  this.add_attr({
OffsetDirection: _OffsetDirection, //IfcLayerSetDirectionEnum
OffsetValues: _OffsetValues //[object Object]
});
                  }
      }
      exports.IFCMATERIALLAYERWITHOFFSETS = IFCMATERIALLAYERWITHOFFSETS;
    
       class IFCMATERIALPROFILEWITHOFFSETS extends IFCMATERIALPROFILE {
          constructor(_Name, _Description, _Material, _Profile, _Priority, _Category, _OffsetValues) {
                  super(_Name, _Description, _Material, _Profile, _Priority, _Category);
                  this.add_attr({
OffsetValues: _OffsetValues //[object Object]
});
                  }
      }
      exports.IFCMATERIALPROFILEWITHOFFSETS = IFCMATERIALPROFILEWITHOFFSETS;
    
       class IFCMATERIALPROFILESETUSAGETAPERING extends IFCMATERIALPROFILESETUSAGE {
          constructor(_ForProfileSet, _CardinalPoint, _ReferenceExtent, _ForProfileEndSet, _CardinalEndPoint) {
                  super(_ForProfileSet, _CardinalPoint, _ReferenceExtent);
                  this.add_attr({
ForProfileEndSet: _ForProfileEndSet, //IfcMaterialProfileSet
CardinalEndPoint: _CardinalEndPoint //IfcCardinalPointReference
});
                  }
      }
      exports.IFCMATERIALPROFILESETUSAGETAPERING = IFCMATERIALPROFILESETUSAGETAPERING;
    
       class IFCCONVERSIONBASEDUNITWITHOFFSET extends IFCCONVERSIONBASEDUNIT {
          constructor(_Dimensions, _UnitType, _Name, _ConversionFactor, _ConversionOffset) {
                  super(_Dimensions, _UnitType, _Name, _ConversionFactor);
                  this.add_attr({
ConversionOffset: _ConversionOffset //IfcReal
});
                  }
      }
      exports.IFCCONVERSIONBASEDUNITWITHOFFSET = IFCCONVERSIONBASEDUNITWITHOFFSET;
    
       class IFCQUANTITYAREA extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _AreaValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
AreaValue: _AreaValue, //IfcAreaMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYAREA = IFCQUANTITYAREA;
    
       class IFCQUANTITYCOUNT extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _CountValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
CountValue: _CountValue, //IfcCountMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYCOUNT = IFCQUANTITYCOUNT;
    
       class IFCQUANTITYLENGTH extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _LengthValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
LengthValue: _LengthValue, //IfcLengthMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYLENGTH = IFCQUANTITYLENGTH;
    
       class IFCQUANTITYTIME extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _TimeValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
TimeValue: _TimeValue, //IfcTimeMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYTIME = IFCQUANTITYTIME;
    
       class IFCQUANTITYVOLUME extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _VolumeValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
VolumeValue: _VolumeValue, //IfcVolumeMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYVOLUME = IFCQUANTITYVOLUME;
    
       class IFCQUANTITYWEIGHT extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _WeightValue, _Formula) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
WeightValue: _WeightValue, //IfcMassMeasure
Formula: _Formula //IfcLabel
});
                  }
      }
      exports.IFCQUANTITYWEIGHT = IFCQUANTITYWEIGHT;
    
       class IFCSURFACESTYLERENDERING extends IFCSURFACESTYLESHADING {
          constructor(_SurfaceColour, _Transparency, _DiffuseColour, _TransmissionColour, _DiffuseTransmissionColour, _ReflectionColour, _SpecularColour, _SpecularHighlight, _ReflectanceMethod) {
                  super(_SurfaceColour, _Transparency);
                  this.add_attr({
DiffuseColour: _DiffuseColour, //IfcColourOrFactor
TransmissionColour: _TransmissionColour, //IfcColourOrFactor
DiffuseTransmissionColour: _DiffuseTransmissionColour, //IfcColourOrFactor
ReflectionColour: _ReflectionColour, //IfcColourOrFactor
SpecularColour: _SpecularColour, //IfcColourOrFactor
SpecularHighlight: _SpecularHighlight, //IfcSpecularHighlightSelect
ReflectanceMethod: _ReflectanceMethod //IfcReflectanceMethodEnum
});
                  }
      }
      exports.IFCSURFACESTYLERENDERING = IFCSURFACESTYLERENDERING;
    
       class IFCBLOBTEXTURE extends IFCSURFACETEXTURE {
          constructor(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter, _RasterFormat, _RasterCode) {
                  super(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter);
                  this.add_attr({
RasterFormat: _RasterFormat, //IfcIdentifier
RasterCode: _RasterCode //IfcBinary
});
                  }
      }
      exports.IFCBLOBTEXTURE = IFCBLOBTEXTURE;
    
       class IFCIMAGETEXTURE extends IFCSURFACETEXTURE {
          constructor(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter, _URLReference) {
                  super(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter);
                  this.add_attr({
URLReference: _URLReference //IfcURIReference
});
                  }
      }
      exports.IFCIMAGETEXTURE = IFCIMAGETEXTURE;
    
       class IFCPIXELTEXTURE extends IFCSURFACETEXTURE {
          constructor(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter, _Width, _Height, _ColourComponents, _Pixel) {
                  super(_RepeatS, _RepeatT, _Mode, _TextureTransform, _Parameter);
                  this.add_attr({
Width: _Width, //IfcInteger
Height: _Height, //IfcInteger
ColourComponents: _ColourComponents, //IfcInteger
Pixel: _Pixel //[object Object]
});
                  }
      }
      exports.IFCPIXELTEXTURE = IFCPIXELTEXTURE;
    
       class IFCTEXTURECOORDINATEGENERATOR extends IFCTEXTURECOORDINATE {
          constructor(_Maps, _Mode, _Parameter) {
                  super(_Maps);
                  this.add_attr({
Mode: _Mode, //IfcLabel
Parameter: _Parameter //[object Object]
});
                  }
      }
      exports.IFCTEXTURECOORDINATEGENERATOR = IFCTEXTURECOORDINATEGENERATOR;
    
       class IFCTEXTUREMAP extends IFCTEXTURECOORDINATE {
          constructor(_Maps, _Vertices, _MappedTo) {
                  super(_Maps);
                  this.add_attr({
Vertices: _Vertices, //[object Object]
MappedTo: _MappedTo //IfcFace
});
                  }
      }
      exports.IFCTEXTUREMAP = IFCTEXTUREMAP;
    
       class IFCINDEXEDTEXTUREMAP extends IFCTEXTURECOORDINATE {
          constructor(_Maps, _MappedTo, _TexCoords) {
                  super(_Maps);
                  this.add_attr({
MappedTo: _MappedTo, //IfcTessellatedFaceSet
TexCoords: _TexCoords //IfcTextureVertexList
});
                  }
      }
      exports.IFCINDEXEDTEXTUREMAP = IFCINDEXEDTEXTUREMAP;
    
       class IFCCOLOURRGB extends IFCCOLOURSPECIFICATION {
          constructor(_Name, _Red, _Green, _Blue) {
                  super(_Name);
                  this.add_attr({
Red: _Red, //IfcNormalisedRatioMeasure
Green: _Green, //IfcNormalisedRatioMeasure
Blue: _Blue //IfcNormalisedRatioMeasure
});
                  }
      }
      exports.IFCCOLOURRGB = IFCCOLOURRGB;
    
       class IFCPREDEFINEDTEXTFONT extends IFCPREDEFINEDITEM {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDTEXTFONT = IFCPREDEFINEDTEXTFONT;
    
       class IFCPREDEFINEDCOLOUR extends IFCPREDEFINEDITEM {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDCOLOUR = IFCPREDEFINEDCOLOUR;
    
       class IFCPREDEFINEDCURVEFONT extends IFCPREDEFINEDITEM {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDCURVEFONT = IFCPREDEFINEDCURVEFONT;
    
       class IFCARBITRARYPROFILEDEFWITHVOIDS extends IFCARBITRARYCLOSEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _OuterCurve, _InnerCurves) {
                  super(_ProfileType, _ProfileName, _OuterCurve);
                  this.add_attr({
InnerCurves: _InnerCurves //[object Object]
});
                  }
      }
      exports.IFCARBITRARYPROFILEDEFWITHVOIDS = IFCARBITRARYPROFILEDEFWITHVOIDS;
    
       class IFCCENTERLINEPROFILEDEF extends IFCARBITRARYOPENPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Curve, _Thickness) {
                  super(_ProfileType, _ProfileName, _Curve);
                  this.add_attr({
Thickness: _Thickness //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCENTERLINEPROFILEDEF = IFCCENTERLINEPROFILEDEF;
    
       class IFCMIRROREDPROFILEDEF extends IFCDERIVEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _ParentProfile, _Operator, _Label) {
                  super(_ProfileType, _ProfileName, _ParentProfile, _Operator, _Label);
                  
                  }
      }
      exports.IFCMIRROREDPROFILEDEF = IFCMIRROREDPROFILEDEF;
    
       class IFCRECTANGLEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _XDim, _YDim) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
XDim: _XDim, //IfcPositiveLengthMeasure
YDim: _YDim //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCRECTANGLEPROFILEDEF = IFCRECTANGLEPROFILEDEF;
    
       class IFCTSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _FlangeWidth, _WebThickness, _FlangeThickness, _FilletRadius, _FlangeEdgeRadius, _WebEdgeRadius, _WebSlope, _FlangeSlope) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
FlangeWidth: _FlangeWidth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcNonNegativeLengthMeasure
FlangeEdgeRadius: _FlangeEdgeRadius, //IfcNonNegativeLengthMeasure
WebEdgeRadius: _WebEdgeRadius, //IfcNonNegativeLengthMeasure
WebSlope: _WebSlope, //IfcPlaneAngleMeasure
FlangeSlope: _FlangeSlope //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCTSHAPEPROFILEDEF = IFCTSHAPEPROFILEDEF;
    
       class IFCTRAPEZIUMPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _BottomXDim, _TopXDim, _YDim, _TopXOffset) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
BottomXDim: _BottomXDim, //IfcPositiveLengthMeasure
TopXDim: _TopXDim, //IfcPositiveLengthMeasure
YDim: _YDim, //IfcPositiveLengthMeasure
TopXOffset: _TopXOffset //IfcLengthMeasure
});
                  }
      }
      exports.IFCTRAPEZIUMPROFILEDEF = IFCTRAPEZIUMPROFILEDEF;
    
       class IFCUSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _FlangeWidth, _WebThickness, _FlangeThickness, _FilletRadius, _EdgeRadius, _FlangeSlope) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
FlangeWidth: _FlangeWidth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcNonNegativeLengthMeasure
EdgeRadius: _EdgeRadius, //IfcNonNegativeLengthMeasure
FlangeSlope: _FlangeSlope //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCUSHAPEPROFILEDEF = IFCUSHAPEPROFILEDEF;
    
       class IFCZSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _FlangeWidth, _WebThickness, _FlangeThickness, _FilletRadius, _EdgeRadius) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
FlangeWidth: _FlangeWidth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcNonNegativeLengthMeasure
EdgeRadius: _EdgeRadius //IfcNonNegativeLengthMeasure
});
                  }
      }
      exports.IFCZSHAPEPROFILEDEF = IFCZSHAPEPROFILEDEF;
    
       class IFCASYMMETRICISHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _BottomFlangeWidth, _OverallDepth, _WebThickness, _BottomFlangeThickness, _BottomFlangeFilletRadius, _TopFlangeWidth, _TopFlangeThickness, _TopFlangeFilletRadius, _BottomFlangeEdgeRadius, _BottomFlangeSlope, _TopFlangeEdgeRadius, _TopFlangeSlope) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
BottomFlangeWidth: _BottomFlangeWidth, //IfcPositiveLengthMeasure
OverallDepth: _OverallDepth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
BottomFlangeThickness: _BottomFlangeThickness, //IfcPositiveLengthMeasure
BottomFlangeFilletRadius: _BottomFlangeFilletRadius, //IfcNonNegativeLengthMeasure
TopFlangeWidth: _TopFlangeWidth, //IfcPositiveLengthMeasure
TopFlangeThickness: _TopFlangeThickness, //IfcPositiveLengthMeasure
TopFlangeFilletRadius: _TopFlangeFilletRadius, //IfcNonNegativeLengthMeasure
BottomFlangeEdgeRadius: _BottomFlangeEdgeRadius, //IfcNonNegativeLengthMeasure
BottomFlangeSlope: _BottomFlangeSlope, //IfcPlaneAngleMeasure
TopFlangeEdgeRadius: _TopFlangeEdgeRadius, //IfcNonNegativeLengthMeasure
TopFlangeSlope: _TopFlangeSlope //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCASYMMETRICISHAPEPROFILEDEF = IFCASYMMETRICISHAPEPROFILEDEF;
    
       class IFCCSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _Width, _WallThickness, _Girth, _InternalFilletRadius) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
Width: _Width, //IfcPositiveLengthMeasure
WallThickness: _WallThickness, //IfcPositiveLengthMeasure
Girth: _Girth, //IfcPositiveLengthMeasure
InternalFilletRadius: _InternalFilletRadius //IfcNonNegativeLengthMeasure
});
                  }
      }
      exports.IFCCSHAPEPROFILEDEF = IFCCSHAPEPROFILEDEF;
    
       class IFCCIRCLEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Radius) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCIRCLEPROFILEDEF = IFCCIRCLEPROFILEDEF;
    
       class IFCELLIPSEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _SemiAxis1, _SemiAxis2) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
SemiAxis1: _SemiAxis1, //IfcPositiveLengthMeasure
SemiAxis2: _SemiAxis2 //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCELLIPSEPROFILEDEF = IFCELLIPSEPROFILEDEF;
    
       class IFCISHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _OverallWidth, _OverallDepth, _WebThickness, _FlangeThickness, _FilletRadius, _FlangeEdgeRadius, _FlangeSlope) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
OverallWidth: _OverallWidth, //IfcPositiveLengthMeasure
OverallDepth: _OverallDepth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcNonNegativeLengthMeasure
FlangeEdgeRadius: _FlangeEdgeRadius, //IfcNonNegativeLengthMeasure
FlangeSlope: _FlangeSlope //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCISHAPEPROFILEDEF = IFCISHAPEPROFILEDEF;
    
       class IFCLSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _Width, _Thickness, _FilletRadius, _EdgeRadius, _LegSlope) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
Width: _Width, //IfcPositiveLengthMeasure
Thickness: _Thickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcNonNegativeLengthMeasure
EdgeRadius: _EdgeRadius, //IfcNonNegativeLengthMeasure
LegSlope: _LegSlope //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCLSHAPEPROFILEDEF = IFCLSHAPEPROFILEDEF;
    
       class IFCMATERIALPROPERTIES extends IFCEXTENDEDPROPERTIES {
          constructor(_Name, _Description, _Properties, _Material) {
                  super(_Name, _Description, _Properties);
                  this.add_attr({
Material: _Material //IfcMaterialDefinition
});
                  }
      }
      exports.IFCMATERIALPROPERTIES = IFCMATERIALPROPERTIES;
    
       class IFCPROFILEPROPERTIES extends IFCEXTENDEDPROPERTIES {
          constructor(_Name, _Description, _Properties, _ProfileDefinition) {
                  super(_Name, _Description, _Properties);
                  this.add_attr({
ProfileDefinition: _ProfileDefinition //IfcProfileDef
});
                  }
      }
      exports.IFCPROFILEPROPERTIES = IFCPROFILEPROPERTIES;
    
       class IFCREINFORCEMENTBARPROPERTIES extends IFCPREDEFINEDPROPERTIES {
          constructor(_TotalCrossSectionArea, _SteelGrade, _BarSurface, _EffectiveDepth, _NominalBarDiameter, _BarCount) {
                  super();
                  this.add_attr({
TotalCrossSectionArea: _TotalCrossSectionArea, //IfcAreaMeasure
SteelGrade: _SteelGrade, //IfcLabel
BarSurface: _BarSurface, //IfcReinforcingBarSurfaceEnum
EffectiveDepth: _EffectiveDepth, //IfcLengthMeasure
NominalBarDiameter: _NominalBarDiameter, //IfcPositiveLengthMeasure
BarCount: _BarCount //IfcCountMeasure
});
                  }
      }
      exports.IFCREINFORCEMENTBARPROPERTIES = IFCREINFORCEMENTBARPROPERTIES;
    
       class IFCSECTIONPROPERTIES extends IFCPREDEFINEDPROPERTIES {
          constructor(_SectionType, _StartProfile, _EndProfile) {
                  super();
                  this.add_attr({
SectionType: _SectionType, //IfcSectionTypeEnum
StartProfile: _StartProfile, //IfcProfileDef
EndProfile: _EndProfile //IfcProfileDef
});
                  }
      }
      exports.IFCSECTIONPROPERTIES = IFCSECTIONPROPERTIES;
    
       class IFCSECTIONREINFORCEMENTPROPERTIES extends IFCPREDEFINEDPROPERTIES {
          constructor(_LongitudinalStartPosition, _LongitudinalEndPosition, _TransversePosition, _ReinforcementRole, _SectionDefinition, _CrossSectionReinforcementDefinitions) {
                  super();
                  this.add_attr({
LongitudinalStartPosition: _LongitudinalStartPosition, //IfcLengthMeasure
LongitudinalEndPosition: _LongitudinalEndPosition, //IfcLengthMeasure
TransversePosition: _TransversePosition, //IfcLengthMeasure
ReinforcementRole: _ReinforcementRole, //IfcReinforcingBarRoleEnum
SectionDefinition: _SectionDefinition, //IfcSectionProperties
CrossSectionReinforcementDefinitions: _CrossSectionReinforcementDefinitions //[object Object]
});
                  }
      }
      exports.IFCSECTIONREINFORCEMENTPROPERTIES = IFCSECTIONREINFORCEMENTPROPERTIES;
    
       class IFCSIMPLEPROPERTY extends IFCPROPERTY {
          constructor(_Name, _Description) {
                  super(_Name, _Description);
                  
                  }
      }
      exports.IFCSIMPLEPROPERTY = IFCSIMPLEPROPERTY;
    
       class IFCCOMPLEXPROPERTY extends IFCPROPERTY {
          constructor(_Name, _Description, _UsageName, _HasProperties) {
                  super(_Name, _Description);
                  this.add_attr({
UsageName: _UsageName, //IfcIdentifier
HasProperties: _HasProperties //[object Object]
});
                  }
      }
      exports.IFCCOMPLEXPROPERTY = IFCCOMPLEXPROPERTY;
    
       class IFCSHAPEREPRESENTATION extends IFCSHAPEMODEL {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items);
                  
                  }
      }
      exports.IFCSHAPEREPRESENTATION = IFCSHAPEREPRESENTATION;
    
       class IFCTOPOLOGYREPRESENTATION extends IFCSHAPEMODEL {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items);
                  
                  }
      }
      exports.IFCTOPOLOGYREPRESENTATION = IFCTOPOLOGYREPRESENTATION;
    
       class IFCSTYLEDREPRESENTATION extends IFCSTYLEMODEL {
          constructor(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items) {
                  super(_ContextOfItems, _RepresentationIdentifier, _RepresentationType, _Items);
                  
                  }
      }
      exports.IFCSTYLEDREPRESENTATION = IFCSTYLEDREPRESENTATION;
    
       class IFCGEOMETRICREPRESENTATIONSUBCONTEXT extends IFCGEOMETRICREPRESENTATIONCONTEXT {
          constructor(_ContextIdentifier, _ContextType, _CoordinateSpaceDimension, _Precision, _WorldCoordinateSystem, _TrueNorth, _ParentContext, _TargetScale, _TargetView, _UserDefinedTargetView) {
                  super(_ContextIdentifier, _ContextType, _CoordinateSpaceDimension, _Precision, _WorldCoordinateSystem, _TrueNorth);
                  this.add_attr({
ParentContext: _ParentContext, //IfcGeometricRepresentationContext
TargetScale: _TargetScale, //IfcPositiveRatioMeasure
TargetView: _TargetView, //IfcGeometricProjectionEnum
UserDefinedTargetView: _UserDefinedTargetView //IfcLabel
});
                  }
      }
      exports.IFCGEOMETRICREPRESENTATIONSUBCONTEXT = IFCGEOMETRICREPRESENTATIONSUBCONTEXT;
    
       class IFCVERTEX extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCVERTEX = IFCVERTEX;
    
       class IFCCONNECTEDFACESET extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor(_CfsFaces) {
                  super();
                  this.add_attr({
CfsFaces: _CfsFaces //[object Object]
});
                  }
      }
      exports.IFCCONNECTEDFACESET = IFCCONNECTEDFACESET;
    
       class IFCEDGE extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor(_EdgeStart, _EdgeEnd) {
                  super();
                  this.add_attr({
EdgeStart: _EdgeStart, //IfcVertex
EdgeEnd: _EdgeEnd //IfcVertex
});
                  }
      }
      exports.IFCEDGE = IFCEDGE;
    
       class IFCFACE extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor(_Bounds) {
                  super();
                  this.add_attr({
Bounds: _Bounds //[object Object]
});
                  }
      }
      exports.IFCFACE = IFCFACE;
    
       class IFCFACEBOUND extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor(_Bound, _Orientation) {
                  super();
                  this.add_attr({
Bound: _Bound, //IfcLoop
Orientation: _Orientation //IfcBoolean
});
                  }
      }
      exports.IFCFACEBOUND = IFCFACEBOUND;
    
       class IFCLOOP extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCLOOP = IFCLOOP;
    
       class IFCPATH extends IFCTOPOLOGICALREPRESENTATIONITEM {
          constructor(_EdgeList) {
                  super();
                  this.add_attr({
EdgeList: _EdgeList //[object Object]
});
                  }
      }
      exports.IFCPATH = IFCPATH;
    
       class IFCGEOMETRICSET extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Elements) {
                  super();
                  this.add_attr({
Elements: _Elements //[object Object]
});
                  }
      }
      exports.IFCGEOMETRICSET = IFCGEOMETRICSET;
    
       class IFCHALFSPACESOLID extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_BaseSurface, _AgreementFlag) {
                  super();
                  this.add_attr({
BaseSurface: _BaseSurface, //IfcSurface
AgreementFlag: _AgreementFlag //IfcBoolean
});
                  }
      }
      exports.IFCHALFSPACESOLID = IFCHALFSPACESOLID;
    
       class IFCLIGHTSOURCE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
LightColour: _LightColour, //IfcColourRgb
AmbientIntensity: _AmbientIntensity, //IfcNormalisedRatioMeasure
Intensity: _Intensity //IfcNormalisedRatioMeasure
});
                  }
      }
      exports.IFCLIGHTSOURCE = IFCLIGHTSOURCE;
    
       class IFCPLACEMENT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Location) {
                  super();
                  this.add_attr({
Location: _Location //IfcCartesianPoint
});
                  }
      }
      exports.IFCPLACEMENT = IFCPLACEMENT;
    
       class IFCPLANAREXTENT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_SizeInX, _SizeInY) {
                  super();
                  this.add_attr({
SizeInX: _SizeInX, //IfcLengthMeasure
SizeInY: _SizeInY //IfcLengthMeasure
});
                  }
      }
      exports.IFCPLANAREXTENT = IFCPLANAREXTENT;
    
       class IFCPOINT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCPOINT = IFCPOINT;
    
       class IFCSECTIONEDSPINE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_SpineCurve, _CrossSections, _CrossSectionPositions) {
                  super();
                  this.add_attr({
SpineCurve: _SpineCurve, //IfcCompositeCurve
CrossSections: _CrossSections, //[object Object]
CrossSectionPositions: _CrossSectionPositions //[object Object]
});
                  }
      }
      exports.IFCSECTIONEDSPINE = IFCSECTIONEDSPINE;
    
       class IFCSHELLBASEDSURFACEMODEL extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_SbsmBoundary) {
                  super();
                  this.add_attr({
SbsmBoundary: _SbsmBoundary //[object Object]
});
                  }
      }
      exports.IFCSHELLBASEDSURFACEMODEL = IFCSHELLBASEDSURFACEMODEL;
    
       class IFCSOLIDMODEL extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCSOLIDMODEL = IFCSOLIDMODEL;
    
       class IFCSURFACE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCSURFACE = IFCSURFACE;
    
       class IFCTESSELLATEDITEM extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCTESSELLATEDITEM = IFCTESSELLATEDITEM;
    
       class IFCTEXTLITERAL extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Literal, _Placement, _Path) {
                  super();
                  this.add_attr({
Literal: _Literal, //IfcPresentableText
Placement: _Placement, //IfcAxis2Placement
Path: _Path //IfcTextPath
});
                  }
      }
      exports.IFCTEXTLITERAL = IFCTEXTLITERAL;
    
       class IFCVECTOR extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Orientation, _Magnitude) {
                  super();
                  this.add_attr({
Orientation: _Orientation, //IfcDirection
Magnitude: _Magnitude //IfcLengthMeasure
});
                  }
      }
      exports.IFCVECTOR = IFCVECTOR;
    
       class IFCANNOTATIONFILLAREA extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_OuterBoundary, _InnerBoundaries) {
                  super();
                  this.add_attr({
OuterBoundary: _OuterBoundary, //IfcCurve
InnerBoundaries: _InnerBoundaries //[object Object]
});
                  }
      }
      exports.IFCANNOTATIONFILLAREA = IFCANNOTATIONFILLAREA;
    
       class IFCBOOLEANRESULT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Operator, _FirstOperand, _SecondOperand) {
                  super();
                  this.add_attr({
Operator: _Operator, //IfcBooleanOperator
FirstOperand: _FirstOperand, //IfcBooleanOperand
SecondOperand: _SecondOperand //IfcBooleanOperand
});
                  }
      }
      exports.IFCBOOLEANRESULT = IFCBOOLEANRESULT;
    
       class IFCBOUNDINGBOX extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Corner, _XDim, _YDim, _ZDim) {
                  super();
                  this.add_attr({
Corner: _Corner, //IfcCartesianPoint
XDim: _XDim, //IfcPositiveLengthMeasure
YDim: _YDim, //IfcPositiveLengthMeasure
ZDim: _ZDim //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCBOUNDINGBOX = IFCBOUNDINGBOX;
    
       class IFCCARTESIANPOINTLIST extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCCARTESIANPOINTLIST = IFCCARTESIANPOINTLIST;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale) {
                  super();
                  this.add_attr({
Axis1: _Axis1, //IfcDirection
Axis2: _Axis2, //IfcDirection
LocalOrigin: _LocalOrigin, //IfcCartesianPoint
Scale: _Scale //IfcReal
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR = IFCCARTESIANTRANSFORMATIONOPERATOR;
    
       class IFCCOMPOSITECURVESEGMENT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Transition, _SameSense, _ParentCurve) {
                  super();
                  this.add_attr({
Transition: _Transition, //IfcTransitionCode
SameSense: _SameSense, //IfcBoolean
ParentCurve: _ParentCurve //IfcCurve
});
                  }
      }
      exports.IFCCOMPOSITECURVESEGMENT = IFCCOMPOSITECURVESEGMENT;
    
       class IFCCSGPRIMITIVE3D extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Position) {
                  super();
                  this.add_attr({
Position: _Position //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCCSGPRIMITIVE3D = IFCCSGPRIMITIVE3D;
    
       class IFCCURVE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCCURVE = IFCCURVE;
    
       class IFCDIRECTION extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_DirectionRatios) {
                  super();
                  this.add_attr({
DirectionRatios: _DirectionRatios //[object Object]
});
                  }
      }
      exports.IFCDIRECTION = IFCDIRECTION;
    
       class IFCFACEBASEDSURFACEMODEL extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_FbsmFaces) {
                  super();
                  this.add_attr({
FbsmFaces: _FbsmFaces //[object Object]
});
                  }
      }
      exports.IFCFACEBASEDSURFACEMODEL = IFCFACEBASEDSURFACEMODEL;
    
       class IFCFILLAREASTYLEHATCHING extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_HatchLineAppearance, _StartOfNextHatchLine, _PointOfReferenceHatchLine, _PatternStart, _HatchLineAngle) {
                  super();
                  this.add_attr({
HatchLineAppearance: _HatchLineAppearance, //IfcCurveStyle
StartOfNextHatchLine: _StartOfNextHatchLine, //IfcHatchLineDistanceSelect
PointOfReferenceHatchLine: _PointOfReferenceHatchLine, //IfcCartesianPoint
PatternStart: _PatternStart, //IfcCartesianPoint
HatchLineAngle: _HatchLineAngle //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCFILLAREASTYLEHATCHING = IFCFILLAREASTYLEHATCHING;
    
       class IFCFILLAREASTYLETILES extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_TilingPattern, _Tiles, _TilingScale) {
                  super();
                  this.add_attr({
TilingPattern: _TilingPattern, //[object Object]
Tiles: _Tiles, //[object Object]
TilingScale: _TilingScale //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCFILLAREASTYLETILES = IFCFILLAREASTYLETILES;
    
       class IFCTYPEOBJECT extends IFCOBJECTDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
ApplicableOccurrence: _ApplicableOccurrence, //IfcIdentifier
HasPropertySets: _HasPropertySets //[object Object]
});
                  }
      }
      exports.IFCTYPEOBJECT = IFCTYPEOBJECT;
    
       class IFCCONTEXT extends IFCOBJECTDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
ObjectType: _ObjectType, //IfcLabel
LongName: _LongName, //IfcLabel
Phase: _Phase, //IfcLabel
RepresentationContexts: _RepresentationContexts, //[object Object]
UnitsInContext: _UnitsInContext //IfcUnitAssignment
});
                  }
      }
      exports.IFCCONTEXT = IFCCONTEXT;
    
       class IFCOBJECT extends IFCOBJECTDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
ObjectType: _ObjectType //IfcLabel
});
                  }
      }
      exports.IFCOBJECT = IFCOBJECT;
    
       class IFCPROPERTYSETDEFINITION extends IFCPROPERTYDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCPROPERTYSETDEFINITION = IFCPROPERTYSETDEFINITION;
    
       class IFCPROPERTYTEMPLATEDEFINITION extends IFCPROPERTYDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCPROPERTYTEMPLATEDEFINITION = IFCPROPERTYTEMPLATEDEFINITION;
    
       class IFCRELASSIGNS extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects, //[object Object]
RelatedObjectsType: _RelatedObjectsType //IfcObjectTypeEnum
});
                  }
      }
      exports.IFCRELASSIGNS = IFCRELASSIGNS;
    
       class IFCRELASSOCIATES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects //[object Object]
});
                  }
      }
      exports.IFCRELASSOCIATES = IFCRELASSOCIATES;
    
       class IFCRELCONNECTS extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCRELCONNECTS = IFCRELCONNECTS;
    
       class IFCRELDECLARES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingContext, _RelatedDefinitions) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingContext: _RelatingContext, //IfcContext
RelatedDefinitions: _RelatedDefinitions //[object Object]
});
                  }
      }
      exports.IFCRELDECLARES = IFCRELDECLARES;
    
       class IFCRELDECOMPOSES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCRELDECOMPOSES = IFCRELDECOMPOSES;
    
       class IFCRELDEFINES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCRELDEFINES = IFCRELDEFINES;
    
       class IFCTASKTIMERECURRING extends IFCTASKTIME {
          constructor(_Name, _DataOrigin, _UserDefinedDataOrigin, _DurationType, _ScheduleDuration, _ScheduleStart, _ScheduleFinish, _EarlyStart, _EarlyFinish, _LateStart, _LateFinish, _FreeFloat, _TotalFloat, _IsCritical, _StatusTime, _ActualDuration, _ActualStart, _ActualFinish, _RemainingTime, _Completion, _Recurrence) {
                  super(_Name, _DataOrigin, _UserDefinedDataOrigin, _DurationType, _ScheduleDuration, _ScheduleStart, _ScheduleFinish, _EarlyStart, _EarlyFinish, _LateStart, _LateFinish, _FreeFloat, _TotalFloat, _IsCritical, _StatusTime, _ActualDuration, _ActualStart, _ActualFinish, _RemainingTime, _Completion);
                  this.add_attr({
Recurrence: _Recurrence //IfcRecurrencePattern
});
                  }
      }
      exports.IFCTASKTIMERECURRING = IFCTASKTIMERECURRING;
    
       class IFCSTRUCTURALLOADSTATIC extends IFCSTRUCTURALLOADORRESULT {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCSTRUCTURALLOADSTATIC = IFCSTRUCTURALLOADSTATIC;
    
       class IFCSURFACEREINFORCEMENTAREA extends IFCSTRUCTURALLOADORRESULT {
          constructor(_Name, _SurfaceReinforcement1, _SurfaceReinforcement2, _ShearReinforcement) {
                  super(_Name);
                  this.add_attr({
SurfaceReinforcement1: _SurfaceReinforcement1, //[object Object]
SurfaceReinforcement2: _SurfaceReinforcement2, //[object Object]
ShearReinforcement: _ShearReinforcement //IfcRatioMeasure
});
                  }
      }
      exports.IFCSURFACEREINFORCEMENTAREA = IFCSURFACEREINFORCEMENTAREA;
    
       class IFCINDEXEDTRIANGLETEXTUREMAP extends IFCINDEXEDTEXTUREMAP {
          constructor(_Maps, _MappedTo, _TexCoords, _TexCoordIndex) {
                  super(_Maps, _MappedTo, _TexCoords);
                  this.add_attr({
TexCoordIndex: _TexCoordIndex //[object Object]
});
                  }
      }
      exports.IFCINDEXEDTRIANGLETEXTUREMAP = IFCINDEXEDTRIANGLETEXTUREMAP;
    
       class IFCTEXTSTYLEFONTMODEL extends IFCPREDEFINEDTEXTFONT {
          constructor(_Name, _FontFamily, _FontStyle, _FontVariant, _FontWeight, _FontSize) {
                  super(_Name);
                  this.add_attr({
FontFamily: _FontFamily, //[object Object]
FontStyle: _FontStyle, //IfcFontStyle
FontVariant: _FontVariant, //IfcFontVariant
FontWeight: _FontWeight, //IfcFontWeight
FontSize: _FontSize //IfcSizeSelect
});
                  }
      }
      exports.IFCTEXTSTYLEFONTMODEL = IFCTEXTSTYLEFONTMODEL;
    
       class IFCDRAUGHTINGPREDEFINEDCOLOUR extends IFCPREDEFINEDCOLOUR {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCDRAUGHTINGPREDEFINEDCOLOUR = IFCDRAUGHTINGPREDEFINEDCOLOUR;
    
       class IFCDRAUGHTINGPREDEFINEDCURVEFONT extends IFCPREDEFINEDCURVEFONT {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCDRAUGHTINGPREDEFINEDCURVEFONT = IFCDRAUGHTINGPREDEFINEDCURVEFONT;
    
       class IFCROUNDEDRECTANGLEPROFILEDEF extends IFCRECTANGLEPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _XDim, _YDim, _RoundingRadius) {
                  super(_ProfileType, _ProfileName, _Position, _XDim, _YDim);
                  this.add_attr({
RoundingRadius: _RoundingRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCROUNDEDRECTANGLEPROFILEDEF = IFCROUNDEDRECTANGLEPROFILEDEF;
    
       class IFCRECTANGLEHOLLOWPROFILEDEF extends IFCRECTANGLEPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _XDim, _YDim, _WallThickness, _InnerFilletRadius, _OuterFilletRadius) {
                  super(_ProfileType, _ProfileName, _Position, _XDim, _YDim);
                  this.add_attr({
WallThickness: _WallThickness, //IfcPositiveLengthMeasure
InnerFilletRadius: _InnerFilletRadius, //IfcNonNegativeLengthMeasure
OuterFilletRadius: _OuterFilletRadius //IfcNonNegativeLengthMeasure
});
                  }
      }
      exports.IFCRECTANGLEHOLLOWPROFILEDEF = IFCRECTANGLEHOLLOWPROFILEDEF;
    
       class IFCCIRCLEHOLLOWPROFILEDEF extends IFCCIRCLEPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Radius, _WallThickness) {
                  super(_ProfileType, _ProfileName, _Position, _Radius);
                  this.add_attr({
WallThickness: _WallThickness //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCIRCLEHOLLOWPROFILEDEF = IFCCIRCLEHOLLOWPROFILEDEF;
    
       class IFCPROPERTYBOUNDEDVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _UpperBoundValue, _LowerBoundValue, _Unit, _SetPointValue) {
                  super(_Name, _Description);
                  this.add_attr({
UpperBoundValue: _UpperBoundValue, //IfcValue
LowerBoundValue: _LowerBoundValue, //IfcValue
Unit: _Unit, //IfcUnit
SetPointValue: _SetPointValue //IfcValue
});
                  }
      }
      exports.IFCPROPERTYBOUNDEDVALUE = IFCPROPERTYBOUNDEDVALUE;
    
       class IFCPROPERTYENUMERATEDVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _EnumerationValues, _EnumerationReference) {
                  super(_Name, _Description);
                  this.add_attr({
EnumerationValues: _EnumerationValues, //[object Object]
EnumerationReference: _EnumerationReference //IfcPropertyEnumeration
});
                  }
      }
      exports.IFCPROPERTYENUMERATEDVALUE = IFCPROPERTYENUMERATEDVALUE;
    
       class IFCPROPERTYLISTVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _ListValues, _Unit) {
                  super(_Name, _Description);
                  this.add_attr({
ListValues: _ListValues, //[object Object]
Unit: _Unit //IfcUnit
});
                  }
      }
      exports.IFCPROPERTYLISTVALUE = IFCPROPERTYLISTVALUE;
    
       class IFCPROPERTYREFERENCEVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _UsageName, _PropertyReference) {
                  super(_Name, _Description);
                  this.add_attr({
UsageName: _UsageName, //IfcText
PropertyReference: _PropertyReference //IfcObjectReferenceSelect
});
                  }
      }
      exports.IFCPROPERTYREFERENCEVALUE = IFCPROPERTYREFERENCEVALUE;
    
       class IFCPROPERTYSINGLEVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _NominalValue, _Unit) {
                  super(_Name, _Description);
                  this.add_attr({
NominalValue: _NominalValue, //IfcValue
Unit: _Unit //IfcUnit
});
                  }
      }
      exports.IFCPROPERTYSINGLEVALUE = IFCPROPERTYSINGLEVALUE;
    
       class IFCPROPERTYTABLEVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _DefiningValues, _DefinedValues, _Expression, _DefiningUnit, _DefinedUnit, _CurveInterpolation) {
                  super(_Name, _Description);
                  this.add_attr({
DefiningValues: _DefiningValues, //[object Object]
DefinedValues: _DefinedValues, //[object Object]
Expression: _Expression, //IfcText
DefiningUnit: _DefiningUnit, //IfcUnit
DefinedUnit: _DefinedUnit, //IfcUnit
CurveInterpolation: _CurveInterpolation //IfcCurveInterpolationEnum
});
                  }
      }
      exports.IFCPROPERTYTABLEVALUE = IFCPROPERTYTABLEVALUE;
    
       class IFCVERTEXPOINT extends IFCVERTEX {
          constructor(_VertexGeometry) {
                  super();
                  this.add_attr({
VertexGeometry: _VertexGeometry //IfcPoint
});
                  }
      }
      exports.IFCVERTEXPOINT = IFCVERTEXPOINT;
    
       class IFCOPENSHELL extends IFCCONNECTEDFACESET {
          constructor(_CfsFaces) {
                  super(_CfsFaces);
                  
                  }
      }
      exports.IFCOPENSHELL = IFCOPENSHELL;
    
       class IFCCLOSEDSHELL extends IFCCONNECTEDFACESET {
          constructor(_CfsFaces) {
                  super(_CfsFaces);
                  
                  }
      }
      exports.IFCCLOSEDSHELL = IFCCLOSEDSHELL;
    
       class IFCEDGECURVE extends IFCEDGE {
          constructor(_EdgeStart, _EdgeEnd, _EdgeGeometry, _SameSense) {
                  super(_EdgeStart, _EdgeEnd);
                  this.add_attr({
EdgeGeometry: _EdgeGeometry, //IfcCurve
SameSense: _SameSense //IfcBoolean
});
                  }
      }
      exports.IFCEDGECURVE = IFCEDGECURVE;
    
       class IFCORIENTEDEDGE extends IFCEDGE {
          constructor(_EdgeStart, _EdgeEnd, _EdgeElement, _Orientation) {
                  super(_EdgeStart, _EdgeEnd);
                  this.add_attr({
EdgeElement: _EdgeElement, //IfcEdge
Orientation: _Orientation //IfcBoolean
});
                  }
      }
      exports.IFCORIENTEDEDGE = IFCORIENTEDEDGE;
    
       class IFCSUBEDGE extends IFCEDGE {
          constructor(_EdgeStart, _EdgeEnd, _ParentEdge) {
                  super(_EdgeStart, _EdgeEnd);
                  this.add_attr({
ParentEdge: _ParentEdge //IfcEdge
});
                  }
      }
      exports.IFCSUBEDGE = IFCSUBEDGE;
    
       class IFCFACESURFACE extends IFCFACE {
          constructor(_Bounds, _FaceSurface, _SameSense) {
                  super(_Bounds);
                  this.add_attr({
FaceSurface: _FaceSurface, //IfcSurface
SameSense: _SameSense //IfcBoolean
});
                  }
      }
      exports.IFCFACESURFACE = IFCFACESURFACE;
    
       class IFCFACEOUTERBOUND extends IFCFACEBOUND {
          constructor(_Bound, _Orientation) {
                  super(_Bound, _Orientation);
                  
                  }
      }
      exports.IFCFACEOUTERBOUND = IFCFACEOUTERBOUND;
    
       class IFCPOLYLOOP extends IFCLOOP {
          constructor(_Polygon) {
                  super();
                  this.add_attr({
Polygon: _Polygon //[object Object]
});
                  }
      }
      exports.IFCPOLYLOOP = IFCPOLYLOOP;
    
       class IFCVERTEXLOOP extends IFCLOOP {
          constructor(_LoopVertex) {
                  super();
                  this.add_attr({
LoopVertex: _LoopVertex //IfcVertex
});
                  }
      }
      exports.IFCVERTEXLOOP = IFCVERTEXLOOP;
    
       class IFCEDGELOOP extends IFCLOOP {
          constructor(_EdgeList) {
                  super();
                  this.add_attr({
EdgeList: _EdgeList //[object Object]
});
                  }
      }
      exports.IFCEDGELOOP = IFCEDGELOOP;
    
       class IFCGEOMETRICCURVESET extends IFCGEOMETRICSET {
          constructor(_Elements) {
                  super(_Elements);
                  
                  }
      }
      exports.IFCGEOMETRICCURVESET = IFCGEOMETRICCURVESET;
    
       class IFCPOLYGONALBOUNDEDHALFSPACE extends IFCHALFSPACESOLID {
          constructor(_BaseSurface, _AgreementFlag, _Position, _PolygonalBoundary) {
                  super(_BaseSurface, _AgreementFlag);
                  this.add_attr({
Position: _Position, //IfcAxis2Placement3D
PolygonalBoundary: _PolygonalBoundary //IfcBoundedCurve
});
                  }
      }
      exports.IFCPOLYGONALBOUNDEDHALFSPACE = IFCPOLYGONALBOUNDEDHALFSPACE;
    
       class IFCBOXEDHALFSPACE extends IFCHALFSPACESOLID {
          constructor(_BaseSurface, _AgreementFlag, _Enclosure) {
                  super(_BaseSurface, _AgreementFlag);
                  this.add_attr({
Enclosure: _Enclosure //IfcBoundingBox
});
                  }
      }
      exports.IFCBOXEDHALFSPACE = IFCBOXEDHALFSPACE;
    
       class IFCLIGHTSOURCEAMBIENT extends IFCLIGHTSOURCE {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity) {
                  super(_Name, _LightColour, _AmbientIntensity, _Intensity);
                  
                  }
      }
      exports.IFCLIGHTSOURCEAMBIENT = IFCLIGHTSOURCEAMBIENT;
    
       class IFCLIGHTSOURCEDIRECTIONAL extends IFCLIGHTSOURCE {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity, _Orientation) {
                  super(_Name, _LightColour, _AmbientIntensity, _Intensity);
                  this.add_attr({
Orientation: _Orientation //IfcDirection
});
                  }
      }
      exports.IFCLIGHTSOURCEDIRECTIONAL = IFCLIGHTSOURCEDIRECTIONAL;
    
       class IFCLIGHTSOURCEGONIOMETRIC extends IFCLIGHTSOURCE {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity, _Position, _ColourAppearance, _ColourTemperature, _LuminousFlux, _LightEmissionSource, _LightDistributionDataSource) {
                  super(_Name, _LightColour, _AmbientIntensity, _Intensity);
                  this.add_attr({
Position: _Position, //IfcAxis2Placement3D
ColourAppearance: _ColourAppearance, //IfcColourRgb
ColourTemperature: _ColourTemperature, //IfcThermodynamicTemperatureMeasure
LuminousFlux: _LuminousFlux, //IfcLuminousFluxMeasure
LightEmissionSource: _LightEmissionSource, //IfcLightEmissionSourceEnum
LightDistributionDataSource: _LightDistributionDataSource //IfcLightDistributionDataSourceSelect
});
                  }
      }
      exports.IFCLIGHTSOURCEGONIOMETRIC = IFCLIGHTSOURCEGONIOMETRIC;
    
       class IFCLIGHTSOURCEPOSITIONAL extends IFCLIGHTSOURCE {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity, _Position, _Radius, _ConstantAttenuation, _DistanceAttenuation, _QuadricAttenuation) {
                  super(_Name, _LightColour, _AmbientIntensity, _Intensity);
                  this.add_attr({
Position: _Position, //IfcCartesianPoint
Radius: _Radius, //IfcPositiveLengthMeasure
ConstantAttenuation: _ConstantAttenuation, //IfcReal
DistanceAttenuation: _DistanceAttenuation, //IfcReal
QuadricAttenuation: _QuadricAttenuation //IfcReal
});
                  }
      }
      exports.IFCLIGHTSOURCEPOSITIONAL = IFCLIGHTSOURCEPOSITIONAL;
    
       class IFCAXIS1PLACEMENT extends IFCPLACEMENT {
          constructor(_Location, _Axis) {
                  super(_Location);
                  this.add_attr({
Axis: _Axis //IfcDirection
});
                  }
      }
      exports.IFCAXIS1PLACEMENT = IFCAXIS1PLACEMENT;
    
       class IFCAXIS2PLACEMENT2D extends IFCPLACEMENT {
          constructor(_Location, _RefDirection) {
                  super(_Location);
                  this.add_attr({
RefDirection: _RefDirection //IfcDirection
});
                  }
      }
      exports.IFCAXIS2PLACEMENT2D = IFCAXIS2PLACEMENT2D;
    
       class IFCAXIS2PLACEMENT3D extends IFCPLACEMENT {
          constructor(_Location, _Axis, _RefDirection) {
                  super(_Location);
                  this.add_attr({
Axis: _Axis, //IfcDirection
RefDirection: _RefDirection //IfcDirection
});
                  }
      }
      exports.IFCAXIS2PLACEMENT3D = IFCAXIS2PLACEMENT3D;
    
       class IFCPLANARBOX extends IFCPLANAREXTENT {
          constructor(_SizeInX, _SizeInY, _Placement) {
                  super(_SizeInX, _SizeInY);
                  this.add_attr({
Placement: _Placement //IfcAxis2Placement
});
                  }
      }
      exports.IFCPLANARBOX = IFCPLANARBOX;
    
       class IFCPOINTONCURVE extends IFCPOINT {
          constructor(_BasisCurve, _PointParameter) {
                  super();
                  this.add_attr({
BasisCurve: _BasisCurve, //IfcCurve
PointParameter: _PointParameter //IfcParameterValue
});
                  }
      }
      exports.IFCPOINTONCURVE = IFCPOINTONCURVE;
    
       class IFCPOINTONSURFACE extends IFCPOINT {
          constructor(_BasisSurface, _PointParameterU, _PointParameterV) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcSurface
PointParameterU: _PointParameterU, //IfcParameterValue
PointParameterV: _PointParameterV //IfcParameterValue
});
                  }
      }
      exports.IFCPOINTONSURFACE = IFCPOINTONSURFACE;
    
       class IFCCARTESIANPOINT extends IFCPOINT {
          constructor(_Coordinates) {
                  super();
                  this.add_attr({
Coordinates: _Coordinates //[object Object]
});
                  }
      }
      exports.IFCCARTESIANPOINT = IFCCARTESIANPOINT;
    
       class IFCSWEPTAREASOLID extends IFCSOLIDMODEL {
          constructor(_SweptArea, _Position) {
                  super();
                  this.add_attr({
SweptArea: _SweptArea, //IfcProfileDef
Position: _Position //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCSWEPTAREASOLID = IFCSWEPTAREASOLID;
    
       class IFCSWEPTDISKSOLID extends IFCSOLIDMODEL {
          constructor(_Directrix, _Radius, _InnerRadius, _StartParam, _EndParam) {
                  super();
                  this.add_attr({
Directrix: _Directrix, //IfcCurve
Radius: _Radius, //IfcPositiveLengthMeasure
InnerRadius: _InnerRadius, //IfcPositiveLengthMeasure
StartParam: _StartParam, //IfcParameterValue
EndParam: _EndParam //IfcParameterValue
});
                  }
      }
      exports.IFCSWEPTDISKSOLID = IFCSWEPTDISKSOLID;
    
       class IFCCSGSOLID extends IFCSOLIDMODEL {
          constructor(_TreeRootExpression) {
                  super();
                  this.add_attr({
TreeRootExpression: _TreeRootExpression //IfcCsgSelect
});
                  }
      }
      exports.IFCCSGSOLID = IFCCSGSOLID;
    
       class IFCMANIFOLDSOLIDBREP extends IFCSOLIDMODEL {
          constructor(_Outer) {
                  super();
                  this.add_attr({
Outer: _Outer //IfcClosedShell
});
                  }
      }
      exports.IFCMANIFOLDSOLIDBREP = IFCMANIFOLDSOLIDBREP;
    
       class IFCSWEPTSURFACE extends IFCSURFACE {
          constructor(_SweptCurve, _Position) {
                  super();
                  this.add_attr({
SweptCurve: _SweptCurve, //IfcProfileDef
Position: _Position //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCSWEPTSURFACE = IFCSWEPTSURFACE;
    
       class IFCBOUNDEDSURFACE extends IFCSURFACE {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCBOUNDEDSURFACE = IFCBOUNDEDSURFACE;
    
       class IFCELEMENTARYSURFACE extends IFCSURFACE {
          constructor(_Position) {
                  super();
                  this.add_attr({
Position: _Position //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCELEMENTARYSURFACE = IFCELEMENTARYSURFACE;
    
       class IFCINDEXEDPOLYGONALFACE extends IFCTESSELLATEDITEM {
          constructor(_CoordIndex) {
                  super();
                  this.add_attr({
CoordIndex: _CoordIndex //[object Object]
});
                  }
      }
      exports.IFCINDEXEDPOLYGONALFACE = IFCINDEXEDPOLYGONALFACE;
    
       class IFCTESSELLATEDFACESET extends IFCTESSELLATEDITEM {
          constructor(_Coordinates) {
                  super();
                  this.add_attr({
Coordinates: _Coordinates //IfcCartesianPointList3D
});
                  }
      }
      exports.IFCTESSELLATEDFACESET = IFCTESSELLATEDFACESET;
    
       class IFCTEXTLITERALWITHEXTENT extends IFCTEXTLITERAL {
          constructor(_Literal, _Placement, _Path, _Extent, _BoxAlignment) {
                  super(_Literal, _Placement, _Path);
                  this.add_attr({
Extent: _Extent, //IfcPlanarExtent
BoxAlignment: _BoxAlignment //IfcBoxAlignment
});
                  }
      }
      exports.IFCTEXTLITERALWITHEXTENT = IFCTEXTLITERALWITHEXTENT;
    
       class IFCBOOLEANCLIPPINGRESULT extends IFCBOOLEANRESULT {
          constructor(_Operator, _FirstOperand, _SecondOperand) {
                  super(_Operator, _FirstOperand, _SecondOperand);
                  
                  }
      }
      exports.IFCBOOLEANCLIPPINGRESULT = IFCBOOLEANCLIPPINGRESULT;
    
       class IFCCARTESIANPOINTLIST2D extends IFCCARTESIANPOINTLIST {
          constructor(_CoordList) {
                  super();
                  this.add_attr({
CoordList: _CoordList //[object Object]
});
                  }
      }
      exports.IFCCARTESIANPOINTLIST2D = IFCCARTESIANPOINTLIST2D;
    
       class IFCCARTESIANPOINTLIST3D extends IFCCARTESIANPOINTLIST {
          constructor(_CoordList) {
                  super();
                  this.add_attr({
CoordList: _CoordList //[object Object]
});
                  }
      }
      exports.IFCCARTESIANPOINTLIST3D = IFCCARTESIANPOINTLIST3D;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR2D extends IFCCARTESIANTRANSFORMATIONOPERATOR {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale);
                  
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR2D = IFCCARTESIANTRANSFORMATIONOPERATOR2D;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR3D extends IFCCARTESIANTRANSFORMATIONOPERATOR {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale, _Axis3) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale);
                  this.add_attr({
Axis3: _Axis3 //IfcDirection
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR3D = IFCCARTESIANTRANSFORMATIONOPERATOR3D;
    
       class IFCREPARAMETRISEDCOMPOSITECURVESEGMENT extends IFCCOMPOSITECURVESEGMENT {
          constructor(_Transition, _SameSense, _ParentCurve, _ParamLength) {
                  super(_Transition, _SameSense, _ParentCurve);
                  this.add_attr({
ParamLength: _ParamLength //IfcParameterValue
});
                  }
      }
      exports.IFCREPARAMETRISEDCOMPOSITECURVESEGMENT = IFCREPARAMETRISEDCOMPOSITECURVESEGMENT;
    
       class IFCRECTANGULARPYRAMID extends IFCCSGPRIMITIVE3D {
          constructor(_Position, _XLength, _YLength, _Height) {
                  super(_Position);
                  this.add_attr({
XLength: _XLength, //IfcPositiveLengthMeasure
YLength: _YLength, //IfcPositiveLengthMeasure
Height: _Height //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCRECTANGULARPYRAMID = IFCRECTANGULARPYRAMID;
    
       class IFCRIGHTCIRCULARCONE extends IFCCSGPRIMITIVE3D {
          constructor(_Position, _Height, _BottomRadius) {
                  super(_Position);
                  this.add_attr({
Height: _Height, //IfcPositiveLengthMeasure
BottomRadius: _BottomRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCRIGHTCIRCULARCONE = IFCRIGHTCIRCULARCONE;
    
       class IFCRIGHTCIRCULARCYLINDER extends IFCCSGPRIMITIVE3D {
          constructor(_Position, _Height, _Radius) {
                  super(_Position);
                  this.add_attr({
Height: _Height, //IfcPositiveLengthMeasure
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCRIGHTCIRCULARCYLINDER = IFCRIGHTCIRCULARCYLINDER;
    
       class IFCSPHERE extends IFCCSGPRIMITIVE3D {
          constructor(_Position, _Radius) {
                  super(_Position);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSPHERE = IFCSPHERE;
    
       class IFCBLOCK extends IFCCSGPRIMITIVE3D {
          constructor(_Position, _XLength, _YLength, _ZLength) {
                  super(_Position);
                  this.add_attr({
XLength: _XLength, //IfcPositiveLengthMeasure
YLength: _YLength, //IfcPositiveLengthMeasure
ZLength: _ZLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCBLOCK = IFCBLOCK;
    
       class IFCLINE extends IFCCURVE {
          constructor(_Pnt, _Dir) {
                  super();
                  this.add_attr({
Pnt: _Pnt, //IfcCartesianPoint
Dir: _Dir //IfcVector
});
                  }
      }
      exports.IFCLINE = IFCLINE;
    
       class IFCOFFSETCURVE2D extends IFCCURVE {
          constructor(_BasisCurve, _Distance, _SelfIntersect) {
                  super();
                  this.add_attr({
BasisCurve: _BasisCurve, //IfcCurve
Distance: _Distance, //IfcLengthMeasure
SelfIntersect: _SelfIntersect //IfcLogical
});
                  }
      }
      exports.IFCOFFSETCURVE2D = IFCOFFSETCURVE2D;
    
       class IFCOFFSETCURVE3D extends IFCCURVE {
          constructor(_BasisCurve, _Distance, _SelfIntersect, _RefDirection) {
                  super();
                  this.add_attr({
BasisCurve: _BasisCurve, //IfcCurve
Distance: _Distance, //IfcLengthMeasure
SelfIntersect: _SelfIntersect, //IfcLogical
RefDirection: _RefDirection //IfcDirection
});
                  }
      }
      exports.IFCOFFSETCURVE3D = IFCOFFSETCURVE3D;
    
       class IFCPCURVE extends IFCCURVE {
          constructor(_BasisSurface, _ReferenceCurve) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcSurface
ReferenceCurve: _ReferenceCurve //IfcCurve
});
                  }
      }
      exports.IFCPCURVE = IFCPCURVE;
    
       class IFCSURFACECURVE extends IFCCURVE {
          constructor(_Curve3D, _AssociatedGeometry, _MasterRepresentation) {
                  super();
                  this.add_attr({
Curve3D: _Curve3D, //IfcCurve
AssociatedGeometry: _AssociatedGeometry, //[object Object]
MasterRepresentation: _MasterRepresentation //IfcPreferredSurfaceCurveRepresentation
});
                  }
      }
      exports.IFCSURFACECURVE = IFCSURFACECURVE;
    
       class IFCBOUNDEDCURVE extends IFCCURVE {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCBOUNDEDCURVE = IFCBOUNDEDCURVE;
    
       class IFCCONIC extends IFCCURVE {
          constructor(_Position) {
                  super();
                  this.add_attr({
Position: _Position //IfcAxis2Placement
});
                  }
      }
      exports.IFCCONIC = IFCCONIC;
    
       class IFCTYPEPROCESS extends IFCTYPEOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets);
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
LongDescription: _LongDescription, //IfcText
ProcessType: _ProcessType //IfcLabel
});
                  }
      }
      exports.IFCTYPEPROCESS = IFCTYPEPROCESS;
    
       class IFCTYPEPRODUCT extends IFCTYPEOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets);
                  this.add_attr({
RepresentationMaps: _RepresentationMaps, //[object Object]
Tag: _Tag //IfcLabel
});
                  }
      }
      exports.IFCTYPEPRODUCT = IFCTYPEPRODUCT;
    
       class IFCTYPERESOURCE extends IFCTYPEOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets);
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
LongDescription: _LongDescription, //IfcText
ResourceType: _ResourceType //IfcLabel
});
                  }
      }
      exports.IFCTYPERESOURCE = IFCTYPERESOURCE;
    
       class IFCPROJECT extends IFCCONTEXT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext);
                  
                  }
      }
      exports.IFCPROJECT = IFCPROJECT;
    
       class IFCPROJECTLIBRARY extends IFCCONTEXT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext);
                  
                  }
      }
      exports.IFCPROJECTLIBRARY = IFCPROJECTLIBRARY;
    
       class IFCPROCESS extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
LongDescription: _LongDescription //IfcText
});
                  }
      }
      exports.IFCPROCESS = IFCPROCESS;
    
       class IFCPRODUCT extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ObjectPlacement: _ObjectPlacement, //IfcObjectPlacement
Representation: _Representation //IfcProductRepresentation
});
                  }
      }
      exports.IFCPRODUCT = IFCPRODUCT;
    
       class IFCRESOURCE extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
LongDescription: _LongDescription //IfcText
});
                  }
      }
      exports.IFCRESOURCE = IFCRESOURCE;
    
       class IFCACTOR extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TheActor) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
TheActor: _TheActor //IfcActorSelect
});
                  }
      }
      exports.IFCACTOR = IFCACTOR;
    
       class IFCCONTROL extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Identification: _Identification //IfcIdentifier
});
                  }
      }
      exports.IFCCONTROL = IFCCONTROL;
    
       class IFCGROUP extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCGROUP = IFCGROUP;
    
       class IFCQUANTITYSET extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCQUANTITYSET = IFCQUANTITYSET;
    
       class IFCPREDEFINEDPROPERTYSET extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCPREDEFINEDPROPERTYSET = IFCPREDEFINEDPROPERTYSET;
    
       class IFCPROPERTYSET extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _HasProperties) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
HasProperties: _HasProperties //[object Object]
});
                  }
      }
      exports.IFCPROPERTYSET = IFCPROPERTYSET;
    
       class IFCPROPERTYSETTEMPLATE extends IFCPROPERTYTEMPLATEDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _TemplateType, _ApplicableEntity, _HasPropertyTemplates) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
TemplateType: _TemplateType, //IfcPropertySetTemplateTypeEnum
ApplicableEntity: _ApplicableEntity, //IfcIdentifier
HasPropertyTemplates: _HasPropertyTemplates //[object Object]
});
                  }
      }
      exports.IFCPROPERTYSETTEMPLATE = IFCPROPERTYSETTEMPLATE;
    
       class IFCPROPERTYTEMPLATE extends IFCPROPERTYTEMPLATEDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  
                  }
      }
      exports.IFCPROPERTYTEMPLATE = IFCPROPERTYTEMPLATE;
    
       class IFCRELASSIGNSTOACTOR extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingActor, _ActingRole) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingActor: _RelatingActor, //IfcActor
ActingRole: _ActingRole //IfcActorRole
});
                  }
      }
      exports.IFCRELASSIGNSTOACTOR = IFCRELASSIGNSTOACTOR;
    
       class IFCRELASSIGNSTOCONTROL extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingControl: _RelatingControl //IfcControl
});
                  }
      }
      exports.IFCRELASSIGNSTOCONTROL = IFCRELASSIGNSTOCONTROL;
    
       class IFCRELASSIGNSTOGROUP extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingGroup) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingGroup: _RelatingGroup //IfcGroup
});
                  }
      }
      exports.IFCRELASSIGNSTOGROUP = IFCRELASSIGNSTOGROUP;
    
       class IFCRELASSIGNSTOPROCESS extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingProcess, _QuantityInProcess) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingProcess: _RelatingProcess, //IfcProcessSelect
QuantityInProcess: _QuantityInProcess //IfcMeasureWithUnit
});
                  }
      }
      exports.IFCRELASSIGNSTOPROCESS = IFCRELASSIGNSTOPROCESS;
    
       class IFCRELASSIGNSTOPRODUCT extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingProduct) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingProduct: _RelatingProduct //IfcProductSelect
});
                  }
      }
      exports.IFCRELASSIGNSTOPRODUCT = IFCRELASSIGNSTOPRODUCT;
    
       class IFCRELASSIGNSTORESOURCE extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingResource) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingResource: _RelatingResource //IfcResourceSelect
});
                  }
      }
      exports.IFCRELASSIGNSTORESOURCE = IFCRELASSIGNSTORESOURCE;
    
       class IFCRELASSOCIATESAPPROVAL extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingApproval) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingApproval: _RelatingApproval //IfcApproval
});
                  }
      }
      exports.IFCRELASSOCIATESAPPROVAL = IFCRELASSOCIATESAPPROVAL;
    
       class IFCRELASSOCIATESCLASSIFICATION extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingClassification) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingClassification: _RelatingClassification //IfcClassificationSelect
});
                  }
      }
      exports.IFCRELASSOCIATESCLASSIFICATION = IFCRELASSOCIATESCLASSIFICATION;
    
       class IFCRELASSOCIATESCONSTRAINT extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _Intent, _RelatingConstraint) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
Intent: _Intent, //IfcLabel
RelatingConstraint: _RelatingConstraint //IfcConstraint
});
                  }
      }
      exports.IFCRELASSOCIATESCONSTRAINT = IFCRELASSOCIATESCONSTRAINT;
    
       class IFCRELASSOCIATESDOCUMENT extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingDocument) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingDocument: _RelatingDocument //IfcDocumentSelect
});
                  }
      }
      exports.IFCRELASSOCIATESDOCUMENT = IFCRELASSOCIATESDOCUMENT;
    
       class IFCRELASSOCIATESLIBRARY extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingLibrary) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingLibrary: _RelatingLibrary //IfcLibrarySelect
});
                  }
      }
      exports.IFCRELASSOCIATESLIBRARY = IFCRELASSOCIATESLIBRARY;
    
       class IFCRELASSOCIATESMATERIAL extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingMaterial) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingMaterial: _RelatingMaterial //IfcMaterialSelect
});
                  }
      }
      exports.IFCRELASSOCIATESMATERIAL = IFCRELASSOCIATESMATERIAL;
    
       class IFCRELCONNECTSELEMENTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ConnectionGeometry, _RelatingElement, _RelatedElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
ConnectionGeometry: _ConnectionGeometry, //IfcConnectionGeometry
RelatingElement: _RelatingElement, //IfcElement
RelatedElement: _RelatedElement //IfcElement
});
                  }
      }
      exports.IFCRELCONNECTSELEMENTS = IFCRELCONNECTSELEMENTS;
    
       class IFCRELCONNECTSPORTTOELEMENT extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingPort, _RelatedElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingPort: _RelatingPort, //IfcPort
RelatedElement: _RelatedElement //IfcDistributionElement
});
                  }
      }
      exports.IFCRELCONNECTSPORTTOELEMENT = IFCRELCONNECTSPORTTOELEMENT;
    
       class IFCRELCONNECTSPORTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingPort, _RelatedPort, _RealizingElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingPort: _RelatingPort, //IfcPort
RelatedPort: _RelatedPort, //IfcPort
RealizingElement: _RealizingElement //IfcElement
});
                  }
      }
      exports.IFCRELCONNECTSPORTS = IFCRELCONNECTSPORTS;
    
       class IFCRELCONNECTSSTRUCTURALACTIVITY extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingElement, _RelatedStructuralActivity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingElement: _RelatingElement, //IfcStructuralActivityAssignmentSelect
RelatedStructuralActivity: _RelatedStructuralActivity //IfcStructuralActivity
});
                  }
      }
      exports.IFCRELCONNECTSSTRUCTURALACTIVITY = IFCRELCONNECTSSTRUCTURALACTIVITY;
    
       class IFCRELCONNECTSSTRUCTURALMEMBER extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingStructuralMember, _RelatedStructuralConnection, _AppliedCondition, _AdditionalConditions, _SupportedLength, _ConditionCoordinateSystem) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingStructuralMember: _RelatingStructuralMember, //IfcStructuralMember
RelatedStructuralConnection: _RelatedStructuralConnection, //IfcStructuralConnection
AppliedCondition: _AppliedCondition, //IfcBoundaryCondition
AdditionalConditions: _AdditionalConditions, //IfcStructuralConnectionCondition
SupportedLength: _SupportedLength, //IfcLengthMeasure
ConditionCoordinateSystem: _ConditionCoordinateSystem //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCRELCONNECTSSTRUCTURALMEMBER = IFCRELCONNECTSSTRUCTURALMEMBER;
    
       class IFCRELCONTAINEDINSPATIALSTRUCTURE extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedElements, _RelatingStructure) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedElements: _RelatedElements, //[object Object]
RelatingStructure: _RelatingStructure //IfcSpatialElement
});
                  }
      }
      exports.IFCRELCONTAINEDINSPATIALSTRUCTURE = IFCRELCONTAINEDINSPATIALSTRUCTURE;
    
       class IFCRELCOVERSBLDGELEMENTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingBuildingElement, _RelatedCoverings) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingBuildingElement: _RelatingBuildingElement, //IfcElement
RelatedCoverings: _RelatedCoverings //[object Object]
});
                  }
      }
      exports.IFCRELCOVERSBLDGELEMENTS = IFCRELCOVERSBLDGELEMENTS;
    
       class IFCRELCOVERSSPACES extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedCoverings) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingSpace: _RelatingSpace, //IfcSpace
RelatedCoverings: _RelatedCoverings //[object Object]
});
                  }
      }
      exports.IFCRELCOVERSSPACES = IFCRELCOVERSSPACES;
    
       class IFCRELFILLSELEMENT extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingOpeningElement, _RelatedBuildingElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingOpeningElement: _RelatingOpeningElement, //IfcOpeningElement
RelatedBuildingElement: _RelatedBuildingElement //IfcElement
});
                  }
      }
      exports.IFCRELFILLSELEMENT = IFCRELFILLSELEMENT;
    
       class IFCRELFLOWCONTROLELEMENTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedControlElements, _RelatingFlowElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedControlElements: _RelatedControlElements, //[object Object]
RelatingFlowElement: _RelatingFlowElement //IfcDistributionFlowElement
});
                  }
      }
      exports.IFCRELFLOWCONTROLELEMENTS = IFCRELFLOWCONTROLELEMENTS;
    
       class IFCRELINTERFERESELEMENTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingElement, _RelatedElement, _InterferenceGeometry, _InterferenceType, _ImpliedOrder) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingElement: _RelatingElement, //IfcElement
RelatedElement: _RelatedElement, //IfcElement
InterferenceGeometry: _InterferenceGeometry, //IfcConnectionGeometry
InterferenceType: _InterferenceType, //IfcIdentifier
ImpliedOrder: _ImpliedOrder //LOGICAL
});
                  }
      }
      exports.IFCRELINTERFERESELEMENTS = IFCRELINTERFERESELEMENTS;
    
       class IFCRELREFERENCEDINSPATIALSTRUCTURE extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedElements, _RelatingStructure) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedElements: _RelatedElements, //[object Object]
RelatingStructure: _RelatingStructure //IfcSpatialElement
});
                  }
      }
      exports.IFCRELREFERENCEDINSPATIALSTRUCTURE = IFCRELREFERENCEDINSPATIALSTRUCTURE;
    
       class IFCRELSEQUENCE extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingProcess, _RelatedProcess, _TimeLag, _SequenceType, _UserDefinedSequenceType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingProcess: _RelatingProcess, //IfcProcess
RelatedProcess: _RelatedProcess, //IfcProcess
TimeLag: _TimeLag, //IfcLagTime
SequenceType: _SequenceType, //IfcSequenceEnum
UserDefinedSequenceType: _UserDefinedSequenceType //IfcLabel
});
                  }
      }
      exports.IFCRELSEQUENCE = IFCRELSEQUENCE;
    
       class IFCRELSERVICESBUILDINGS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSystem, _RelatedBuildings) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingSystem: _RelatingSystem, //IfcSystem
RelatedBuildings: _RelatedBuildings //[object Object]
});
                  }
      }
      exports.IFCRELSERVICESBUILDINGS = IFCRELSERVICESBUILDINGS;
    
       class IFCRELSPACEBOUNDARY extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedBuildingElement, _ConnectionGeometry, _PhysicalOrVirtualBoundary, _InternalOrExternalBoundary) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingSpace: _RelatingSpace, //IfcSpaceBoundarySelect
RelatedBuildingElement: _RelatedBuildingElement, //IfcElement
ConnectionGeometry: _ConnectionGeometry, //IfcConnectionGeometry
PhysicalOrVirtualBoundary: _PhysicalOrVirtualBoundary, //IfcPhysicalOrVirtualEnum
InternalOrExternalBoundary: _InternalOrExternalBoundary //IfcInternalOrExternalEnum
});
                  }
      }
      exports.IFCRELSPACEBOUNDARY = IFCRELSPACEBOUNDARY;
    
       class IFCRELNESTS extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingObject: _RelatingObject, //IfcObjectDefinition
RelatedObjects: _RelatedObjects //[object Object]
});
                  }
      }
      exports.IFCRELNESTS = IFCRELNESTS;
    
       class IFCRELPROJECTSELEMENT extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingElement, _RelatedFeatureElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingElement: _RelatingElement, //IfcElement
RelatedFeatureElement: _RelatedFeatureElement //IfcFeatureElementAddition
});
                  }
      }
      exports.IFCRELPROJECTSELEMENT = IFCRELPROJECTSELEMENT;
    
       class IFCRELVOIDSELEMENT extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingBuildingElement, _RelatedOpeningElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingBuildingElement: _RelatingBuildingElement, //IfcElement
RelatedOpeningElement: _RelatedOpeningElement //IfcFeatureElementSubtraction
});
                  }
      }
      exports.IFCRELVOIDSELEMENT = IFCRELVOIDSELEMENT;
    
       class IFCRELAGGREGATES extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingObject: _RelatingObject, //IfcObjectDefinition
RelatedObjects: _RelatedObjects //[object Object]
});
                  }
      }
      exports.IFCRELAGGREGATES = IFCRELAGGREGATES;
    
       class IFCRELDEFINESBYOBJECT extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingObject) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects, //[object Object]
RelatingObject: _RelatingObject //IfcObject
});
                  }
      }
      exports.IFCRELDEFINESBYOBJECT = IFCRELDEFINESBYOBJECT;
    
       class IFCRELDEFINESBYPROPERTIES extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingPropertyDefinition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects, //[object Object]
RelatingPropertyDefinition: _RelatingPropertyDefinition //IfcPropertySetDefinitionSelect
});
                  }
      }
      exports.IFCRELDEFINESBYPROPERTIES = IFCRELDEFINESBYPROPERTIES;
    
       class IFCRELDEFINESBYTEMPLATE extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedPropertySets, _RelatingTemplate) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedPropertySets: _RelatedPropertySets, //[object Object]
RelatingTemplate: _RelatingTemplate //IfcPropertySetTemplate
});
                  }
      }
      exports.IFCRELDEFINESBYTEMPLATE = IFCRELDEFINESBYTEMPLATE;
    
       class IFCRELDEFINESBYTYPE extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects, //[object Object]
RelatingType: _RelatingType //IfcTypeObject
});
                  }
      }
      exports.IFCRELDEFINESBYTYPE = IFCRELDEFINESBYTYPE;
    
       class IFCSTRUCTURALLOADTEMPERATURE extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _DeltaTConstant, _DeltaTY, _DeltaTZ) {
                  super(_Name);
                  this.add_attr({
DeltaTConstant: _DeltaTConstant, //IfcThermodynamicTemperatureMeasure
DeltaTY: _DeltaTY, //IfcThermodynamicTemperatureMeasure
DeltaTZ: _DeltaTZ //IfcThermodynamicTemperatureMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADTEMPERATURE = IFCSTRUCTURALLOADTEMPERATURE;
    
       class IFCSTRUCTURALLOADLINEARFORCE extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _LinearForceX, _LinearForceY, _LinearForceZ, _LinearMomentX, _LinearMomentY, _LinearMomentZ) {
                  super(_Name);
                  this.add_attr({
LinearForceX: _LinearForceX, //IfcLinearForceMeasure
LinearForceY: _LinearForceY, //IfcLinearForceMeasure
LinearForceZ: _LinearForceZ, //IfcLinearForceMeasure
LinearMomentX: _LinearMomentX, //IfcLinearMomentMeasure
LinearMomentY: _LinearMomentY, //IfcLinearMomentMeasure
LinearMomentZ: _LinearMomentZ //IfcLinearMomentMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADLINEARFORCE = IFCSTRUCTURALLOADLINEARFORCE;
    
       class IFCSTRUCTURALLOADPLANARFORCE extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _PlanarForceX, _PlanarForceY, _PlanarForceZ) {
                  super(_Name);
                  this.add_attr({
PlanarForceX: _PlanarForceX, //IfcPlanarForceMeasure
PlanarForceY: _PlanarForceY, //IfcPlanarForceMeasure
PlanarForceZ: _PlanarForceZ //IfcPlanarForceMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADPLANARFORCE = IFCSTRUCTURALLOADPLANARFORCE;
    
       class IFCSTRUCTURALLOADSINGLEDISPLACEMENT extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _DisplacementX, _DisplacementY, _DisplacementZ, _RotationalDisplacementRX, _RotationalDisplacementRY, _RotationalDisplacementRZ) {
                  super(_Name);
                  this.add_attr({
DisplacementX: _DisplacementX, //IfcLengthMeasure
DisplacementY: _DisplacementY, //IfcLengthMeasure
DisplacementZ: _DisplacementZ, //IfcLengthMeasure
RotationalDisplacementRX: _RotationalDisplacementRX, //IfcPlaneAngleMeasure
RotationalDisplacementRY: _RotationalDisplacementRY, //IfcPlaneAngleMeasure
RotationalDisplacementRZ: _RotationalDisplacementRZ //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADSINGLEDISPLACEMENT = IFCSTRUCTURALLOADSINGLEDISPLACEMENT;
    
       class IFCSTRUCTURALLOADSINGLEFORCE extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _ForceX, _ForceY, _ForceZ, _MomentX, _MomentY, _MomentZ) {
                  super(_Name);
                  this.add_attr({
ForceX: _ForceX, //IfcForceMeasure
ForceY: _ForceY, //IfcForceMeasure
ForceZ: _ForceZ, //IfcForceMeasure
MomentX: _MomentX, //IfcTorqueMeasure
MomentY: _MomentY, //IfcTorqueMeasure
MomentZ: _MomentZ //IfcTorqueMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADSINGLEFORCE = IFCSTRUCTURALLOADSINGLEFORCE;
    
       class IFCADVANCEDFACE extends IFCFACESURFACE {
          constructor(_Bounds, _FaceSurface, _SameSense) {
                  super(_Bounds, _FaceSurface, _SameSense);
                  
                  }
      }
      exports.IFCADVANCEDFACE = IFCADVANCEDFACE;
    
       class IFCLIGHTSOURCESPOT extends IFCLIGHTSOURCEPOSITIONAL {
          constructor(_Name, _LightColour, _AmbientIntensity, _Intensity, _Position, _Radius, _ConstantAttenuation, _DistanceAttenuation, _QuadricAttenuation, _Orientation, _ConcentrationExponent, _SpreadAngle, _BeamWidthAngle) {
                  super(_Name, _LightColour, _AmbientIntensity, _Intensity, _Position, _Radius, _ConstantAttenuation, _DistanceAttenuation, _QuadricAttenuation);
                  this.add_attr({
Orientation: _Orientation, //IfcDirection
ConcentrationExponent: _ConcentrationExponent, //IfcReal
SpreadAngle: _SpreadAngle, //IfcPositivePlaneAngleMeasure
BeamWidthAngle: _BeamWidthAngle //IfcPositivePlaneAngleMeasure
});
                  }
      }
      exports.IFCLIGHTSOURCESPOT = IFCLIGHTSOURCESPOT;
    
       class IFCEXTRUDEDAREASOLID extends IFCSWEPTAREASOLID {
          constructor(_SweptArea, _Position, _ExtrudedDirection, _Depth) {
                  super(_SweptArea, _Position);
                  this.add_attr({
ExtrudedDirection: _ExtrudedDirection, //IfcDirection
Depth: _Depth //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCEXTRUDEDAREASOLID = IFCEXTRUDEDAREASOLID;
    
       class IFCFIXEDREFERENCESWEPTAREASOLID extends IFCSWEPTAREASOLID {
          constructor(_SweptArea, _Position, _Directrix, _StartParam, _EndParam, _FixedReference) {
                  super(_SweptArea, _Position);
                  this.add_attr({
Directrix: _Directrix, //IfcCurve
StartParam: _StartParam, //IfcParameterValue
EndParam: _EndParam, //IfcParameterValue
FixedReference: _FixedReference //IfcDirection
});
                  }
      }
      exports.IFCFIXEDREFERENCESWEPTAREASOLID = IFCFIXEDREFERENCESWEPTAREASOLID;
    
       class IFCREVOLVEDAREASOLID extends IFCSWEPTAREASOLID {
          constructor(_SweptArea, _Position, _Axis, _Angle) {
                  super(_SweptArea, _Position);
                  this.add_attr({
Axis: _Axis, //IfcAxis1Placement
Angle: _Angle //IfcPlaneAngleMeasure
});
                  }
      }
      exports.IFCREVOLVEDAREASOLID = IFCREVOLVEDAREASOLID;
    
       class IFCSURFACECURVESWEPTAREASOLID extends IFCSWEPTAREASOLID {
          constructor(_SweptArea, _Position, _Directrix, _StartParam, _EndParam, _ReferenceSurface) {
                  super(_SweptArea, _Position);
                  this.add_attr({
Directrix: _Directrix, //IfcCurve
StartParam: _StartParam, //IfcParameterValue
EndParam: _EndParam, //IfcParameterValue
ReferenceSurface: _ReferenceSurface //IfcSurface
});
                  }
      }
      exports.IFCSURFACECURVESWEPTAREASOLID = IFCSURFACECURVESWEPTAREASOLID;
    
       class IFCSWEPTDISKSOLIDPOLYGONAL extends IFCSWEPTDISKSOLID {
          constructor(_Directrix, _Radius, _InnerRadius, _StartParam, _EndParam, _FilletRadius) {
                  super(_Directrix, _Radius, _InnerRadius, _StartParam, _EndParam);
                  this.add_attr({
FilletRadius: _FilletRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSWEPTDISKSOLIDPOLYGONAL = IFCSWEPTDISKSOLIDPOLYGONAL;
    
       class IFCADVANCEDBREP extends IFCMANIFOLDSOLIDBREP {
          constructor(_Outer) {
                  super(_Outer);
                  
                  }
      }
      exports.IFCADVANCEDBREP = IFCADVANCEDBREP;
    
       class IFCFACETEDBREP extends IFCMANIFOLDSOLIDBREP {
          constructor(_Outer) {
                  super(_Outer);
                  
                  }
      }
      exports.IFCFACETEDBREP = IFCFACETEDBREP;
    
       class IFCSURFACEOFLINEAREXTRUSION extends IFCSWEPTSURFACE {
          constructor(_SweptCurve, _Position, _ExtrudedDirection, _Depth) {
                  super(_SweptCurve, _Position);
                  this.add_attr({
ExtrudedDirection: _ExtrudedDirection, //IfcDirection
Depth: _Depth //IfcLengthMeasure
});
                  }
      }
      exports.IFCSURFACEOFLINEAREXTRUSION = IFCSURFACEOFLINEAREXTRUSION;
    
       class IFCSURFACEOFREVOLUTION extends IFCSWEPTSURFACE {
          constructor(_SweptCurve, _Position, _AxisPosition) {
                  super(_SweptCurve, _Position);
                  this.add_attr({
AxisPosition: _AxisPosition //IfcAxis1Placement
});
                  }
      }
      exports.IFCSURFACEOFREVOLUTION = IFCSURFACEOFREVOLUTION;
    
       class IFCCURVEBOUNDEDPLANE extends IFCBOUNDEDSURFACE {
          constructor(_BasisSurface, _OuterBoundary, _InnerBoundaries) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcPlane
OuterBoundary: _OuterBoundary, //IfcCurve
InnerBoundaries: _InnerBoundaries //[object Object]
});
                  }
      }
      exports.IFCCURVEBOUNDEDPLANE = IFCCURVEBOUNDEDPLANE;
    
       class IFCCURVEBOUNDEDSURFACE extends IFCBOUNDEDSURFACE {
          constructor(_BasisSurface, _Boundaries, _ImplicitOuter) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcSurface
Boundaries: _Boundaries, //[object Object]
ImplicitOuter: _ImplicitOuter //IfcBoolean
});
                  }
      }
      exports.IFCCURVEBOUNDEDSURFACE = IFCCURVEBOUNDEDSURFACE;
    
       class IFCRECTANGULARTRIMMEDSURFACE extends IFCBOUNDEDSURFACE {
          constructor(_BasisSurface, _U1, _V1, _U2, _V2, _Usense, _Vsense) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcSurface
U1: _U1, //IfcParameterValue
V1: _V1, //IfcParameterValue
U2: _U2, //IfcParameterValue
V2: _V2, //IfcParameterValue
Usense: _Usense, //IfcBoolean
Vsense: _Vsense //IfcBoolean
});
                  }
      }
      exports.IFCRECTANGULARTRIMMEDSURFACE = IFCRECTANGULARTRIMMEDSURFACE;
    
       class IFCBSPLINESURFACE extends IFCBOUNDEDSURFACE {
          constructor(_UDegree, _VDegree, _ControlPointsList, _SurfaceForm, _UClosed, _VClosed, _SelfIntersect) {
                  super();
                  this.add_attr({
UDegree: _UDegree, //IfcInteger
VDegree: _VDegree, //IfcInteger
ControlPointsList: _ControlPointsList, //[object Object]
SurfaceForm: _SurfaceForm, //IfcBSplineSurfaceForm
UClosed: _UClosed, //IfcLogical
VClosed: _VClosed, //IfcLogical
SelfIntersect: _SelfIntersect //IfcLogical
});
                  }
      }
      exports.IFCBSPLINESURFACE = IFCBSPLINESURFACE;
    
       class IFCPLANE extends IFCELEMENTARYSURFACE {
          constructor(_Position) {
                  super(_Position);
                  
                  }
      }
      exports.IFCPLANE = IFCPLANE;
    
       class IFCSPHERICALSURFACE extends IFCELEMENTARYSURFACE {
          constructor(_Position, _Radius) {
                  super(_Position);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSPHERICALSURFACE = IFCSPHERICALSURFACE;
    
       class IFCTOROIDALSURFACE extends IFCELEMENTARYSURFACE {
          constructor(_Position, _MajorRadius, _MinorRadius) {
                  super(_Position);
                  this.add_attr({
MajorRadius: _MajorRadius, //IfcPositiveLengthMeasure
MinorRadius: _MinorRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCTOROIDALSURFACE = IFCTOROIDALSURFACE;
    
       class IFCCYLINDRICALSURFACE extends IFCELEMENTARYSURFACE {
          constructor(_Position, _Radius) {
                  super(_Position);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCYLINDRICALSURFACE = IFCCYLINDRICALSURFACE;
    
       class IFCINDEXEDPOLYGONALFACEWITHVOIDS extends IFCINDEXEDPOLYGONALFACE {
          constructor(_CoordIndex, _InnerCoordIndices) {
                  super(_CoordIndex);
                  this.add_attr({
InnerCoordIndices: _InnerCoordIndices //[object Object]
});
                  }
      }
      exports.IFCINDEXEDPOLYGONALFACEWITHVOIDS = IFCINDEXEDPOLYGONALFACEWITHVOIDS;
    
       class IFCTRIANGULATEDFACESET extends IFCTESSELLATEDFACESET {
          constructor(_Coordinates, _Normals, _Closed, _CoordIndex, _PnIndex) {
                  super(_Coordinates);
                  this.add_attr({
Normals: _Normals, //[object Object]
Closed: _Closed, //IfcBoolean
CoordIndex: _CoordIndex, //[object Object]
PnIndex: _PnIndex //[object Object]
});
                  }
      }
      exports.IFCTRIANGULATEDFACESET = IFCTRIANGULATEDFACESET;
    
       class IFCPOLYGONALFACESET extends IFCTESSELLATEDFACESET {
          constructor(_Coordinates, _Closed, _Faces, _PnIndex) {
                  super(_Coordinates);
                  this.add_attr({
Closed: _Closed, //IfcBoolean
Faces: _Faces, //[object Object]
PnIndex: _PnIndex //[object Object]
});
                  }
      }
      exports.IFCPOLYGONALFACESET = IFCPOLYGONALFACESET;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM extends IFCCARTESIANTRANSFORMATIONOPERATOR2D {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale, _Scale2) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale);
                  this.add_attr({
Scale2: _Scale2 //IfcReal
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM = IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM extends IFCCARTESIANTRANSFORMATIONOPERATOR3D {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale, _Axis3, _Scale2, _Scale3) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale, _Axis3);
                  this.add_attr({
Scale2: _Scale2, //IfcReal
Scale3: _Scale3 //IfcReal
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM = IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM;
    
       class IFCINTERSECTIONCURVE extends IFCSURFACECURVE {
          constructor(_Curve3D, _AssociatedGeometry, _MasterRepresentation) {
                  super(_Curve3D, _AssociatedGeometry, _MasterRepresentation);
                  
                  }
      }
      exports.IFCINTERSECTIONCURVE = IFCINTERSECTIONCURVE;
    
       class IFCSEAMCURVE extends IFCSURFACECURVE {
          constructor(_Curve3D, _AssociatedGeometry, _MasterRepresentation) {
                  super(_Curve3D, _AssociatedGeometry, _MasterRepresentation);
                  
                  }
      }
      exports.IFCSEAMCURVE = IFCSEAMCURVE;
    
       class IFCCOMPOSITECURVE extends IFCBOUNDEDCURVE {
          constructor(_Segments, _SelfIntersect) {
                  super();
                  this.add_attr({
Segments: _Segments, //[object Object]
SelfIntersect: _SelfIntersect //IfcLogical
});
                  }
      }
      exports.IFCCOMPOSITECURVE = IFCCOMPOSITECURVE;
    
       class IFCINDEXEDPOLYCURVE extends IFCBOUNDEDCURVE {
          constructor(_Points, _Segments, _SelfIntersect) {
                  super();
                  this.add_attr({
Points: _Points, //IfcCartesianPointList
Segments: _Segments, //[object Object]
SelfIntersect: _SelfIntersect //IfcBoolean
});
                  }
      }
      exports.IFCINDEXEDPOLYCURVE = IFCINDEXEDPOLYCURVE;
    
       class IFCPOLYLINE extends IFCBOUNDEDCURVE {
          constructor(_Points) {
                  super();
                  this.add_attr({
Points: _Points //[object Object]
});
                  }
      }
      exports.IFCPOLYLINE = IFCPOLYLINE;
    
       class IFCTRIMMEDCURVE extends IFCBOUNDEDCURVE {
          constructor(_BasisCurve, _Trim1, _Trim2, _SenseAgreement, _MasterRepresentation) {
                  super();
                  this.add_attr({
BasisCurve: _BasisCurve, //IfcCurve
Trim1: _Trim1, //[object Object]
Trim2: _Trim2, //[object Object]
SenseAgreement: _SenseAgreement, //IfcBoolean
MasterRepresentation: _MasterRepresentation //IfcTrimmingPreference
});
                  }
      }
      exports.IFCTRIMMEDCURVE = IFCTRIMMEDCURVE;
    
       class IFCBSPLINECURVE extends IFCBOUNDEDCURVE {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect) {
                  super();
                  this.add_attr({
Degree: _Degree, //IfcInteger
ControlPointsList: _ControlPointsList, //[object Object]
CurveForm: _CurveForm, //IfcBSplineCurveForm
ClosedCurve: _ClosedCurve, //IfcLogical
SelfIntersect: _SelfIntersect //IfcLogical
});
                  }
      }
      exports.IFCBSPLINECURVE = IFCBSPLINECURVE;
    
       class IFCELLIPSE extends IFCCONIC {
          constructor(_Position, _SemiAxis1, _SemiAxis2) {
                  super(_Position);
                  this.add_attr({
SemiAxis1: _SemiAxis1, //IfcPositiveLengthMeasure
SemiAxis2: _SemiAxis2 //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCELLIPSE = IFCELLIPSE;
    
       class IFCCIRCLE extends IFCCONIC {
          constructor(_Position, _Radius) {
                  super(_Position);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCIRCLE = IFCCIRCLE;
    
       class IFCEVENTTYPE extends IFCTYPEPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType, _PredefinedType, _EventTriggerType, _UserDefinedEventTriggerType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcEventTypeEnum
EventTriggerType: _EventTriggerType, //IfcEventTriggerTypeEnum
UserDefinedEventTriggerType: _UserDefinedEventTriggerType //IfcLabel
});
                  }
      }
      exports.IFCEVENTTYPE = IFCEVENTTYPE;
    
       class IFCPROCEDURETYPE extends IFCTYPEPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProcedureTypeEnum
});
                  }
      }
      exports.IFCPROCEDURETYPE = IFCPROCEDURETYPE;
    
       class IFCTASKTYPE extends IFCTYPEPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType, _PredefinedType, _WorkMethod) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ProcessType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcTaskTypeEnum
WorkMethod: _WorkMethod //IfcLabel
});
                  }
      }
      exports.IFCTASKTYPE = IFCTASKTYPE;
    
       class IFCWINDOWSTYLE extends IFCTYPEPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ConstructionType, _OperationType, _ParameterTakesPrecedence, _Sizeable) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag);
                  this.add_attr({
ConstructionType: _ConstructionType, //IfcWindowStyleConstructionEnum
OperationType: _OperationType, //IfcWindowStyleOperationEnum
ParameterTakesPrecedence: _ParameterTakesPrecedence, //IfcBoolean
Sizeable: _Sizeable //IfcBoolean
});
                  }
      }
      exports.IFCWINDOWSTYLE = IFCWINDOWSTYLE;
    
       class IFCDOORSTYLE extends IFCTYPEPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _OperationType, _ConstructionType, _ParameterTakesPrecedence, _Sizeable) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag);
                  this.add_attr({
OperationType: _OperationType, //IfcDoorStyleOperationEnum
ConstructionType: _ConstructionType, //IfcDoorStyleConstructionEnum
ParameterTakesPrecedence: _ParameterTakesPrecedence, //IfcBoolean
Sizeable: _Sizeable //IfcBoolean
});
                  }
      }
      exports.IFCDOORSTYLE = IFCDOORSTYLE;
    
       class IFCELEMENTTYPE extends IFCTYPEPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag);
                  this.add_attr({
ElementType: _ElementType //IfcLabel
});
                  }
      }
      exports.IFCELEMENTTYPE = IFCELEMENTTYPE;
    
       class IFCSPATIALELEMENTTYPE extends IFCTYPEPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag);
                  this.add_attr({
ElementType: _ElementType //IfcLabel
});
                  }
      }
      exports.IFCSPATIALELEMENTTYPE = IFCSPATIALELEMENTTYPE;
    
       class IFCCONSTRUCTIONRESOURCETYPE extends IFCTYPERESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType);
                  this.add_attr({
BaseCosts: _BaseCosts, //[object Object]
BaseQuantity: _BaseQuantity //IfcPhysicalQuantity
});
                  }
      }
      exports.IFCCONSTRUCTIONRESOURCETYPE = IFCCONSTRUCTIONRESOURCETYPE;
    
       class IFCTASK extends IFCPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Status, _WorkMethod, _IsMilestone, _Priority, _TaskTime, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription);
                  this.add_attr({
Status: _Status, //IfcLabel
WorkMethod: _WorkMethod, //IfcLabel
IsMilestone: _IsMilestone, //IfcBoolean
Priority: _Priority, //IfcInteger
TaskTime: _TaskTime, //IfcTaskTime
PredefinedType: _PredefinedType //IfcTaskTypeEnum
});
                  }
      }
      exports.IFCTASK = IFCTASK;
    
       class IFCEVENT extends IFCPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _PredefinedType, _EventTriggerType, _UserDefinedEventTriggerType, _EventOccurenceTime) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcEventTypeEnum
EventTriggerType: _EventTriggerType, //IfcEventTriggerTypeEnum
UserDefinedEventTriggerType: _UserDefinedEventTriggerType, //IfcLabel
EventOccurenceTime: _EventOccurenceTime //IfcEventTime
});
                  }
      }
      exports.IFCEVENT = IFCEVENT;
    
       class IFCPROCEDURE extends IFCPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProcedureTypeEnum
});
                  }
      }
      exports.IFCPROCEDURE = IFCPROCEDURE;
    
       class IFCPROXY extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _ProxyType, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
ProxyType: _ProxyType, //IfcObjectTypeEnum
Tag: _Tag //IfcLabel
});
                  }
      }
      exports.IFCPROXY = IFCPROXY;
    
       class IFCSPATIALELEMENT extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
LongName: _LongName //IfcLabel
});
                  }
      }
      exports.IFCSPATIALELEMENT = IFCSPATIALELEMENT;
    
       class IFCSTRUCTURALACTIVITY extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
AppliedLoad: _AppliedLoad, //IfcStructuralLoad
GlobalOrLocal: _GlobalOrLocal //IfcGlobalOrLocalEnum
});
                  }
      }
      exports.IFCSTRUCTURALACTIVITY = IFCSTRUCTURALACTIVITY;
    
       class IFCSTRUCTURALITEM extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  
                  }
      }
      exports.IFCSTRUCTURALITEM = IFCSTRUCTURALITEM;
    
       class IFCANNOTATION extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  
                  }
      }
      exports.IFCANNOTATION = IFCANNOTATION;
    
       class IFCELEMENT extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
Tag: _Tag //IfcIdentifier
});
                  }
      }
      exports.IFCELEMENT = IFCELEMENT;
    
       class IFCGRID extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _UAxes, _VAxes, _WAxes, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
UAxes: _UAxes, //[object Object]
VAxes: _VAxes, //[object Object]
WAxes: _WAxes, //[object Object]
PredefinedType: _PredefinedType //IfcGridTypeEnum
});
                  }
      }
      exports.IFCGRID = IFCGRID;
    
       class IFCPORT extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  
                  }
      }
      exports.IFCPORT = IFCPORT;
    
       class IFCCONSTRUCTIONRESOURCE extends IFCRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription);
                  this.add_attr({
Usage: _Usage, //IfcResourceTime
BaseCosts: _BaseCosts, //[object Object]
BaseQuantity: _BaseQuantity //IfcPhysicalQuantity
});
                  }
      }
      exports.IFCCONSTRUCTIONRESOURCE = IFCCONSTRUCTIONRESOURCE;
    
       class IFCOCCUPANT extends IFCACTOR {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TheActor, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TheActor);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcOccupantTypeEnum
});
                  }
      }
      exports.IFCOCCUPANT = IFCOCCUPANT;
    
       class IFCCOSTITEM extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _PredefinedType, _CostValues, _CostQuantities) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcCostItemTypeEnum
CostValues: _CostValues, //[object Object]
CostQuantities: _CostQuantities //[object Object]
});
                  }
      }
      exports.IFCCOSTITEM = IFCCOSTITEM;
    
       class IFCCOSTSCHEDULE extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _PredefinedType, _Status, _SubmittedOn, _UpdateDate) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcCostScheduleTypeEnum
Status: _Status, //IfcLabel
SubmittedOn: _SubmittedOn, //IfcDateTime
UpdateDate: _UpdateDate //IfcDateTime
});
                  }
      }
      exports.IFCCOSTSCHEDULE = IFCCOSTSCHEDULE;
    
       class IFCPERFORMANCEHISTORY extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LifeCyclePhase, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
LifeCyclePhase: _LifeCyclePhase, //IfcLabel
PredefinedType: _PredefinedType //IfcPerformanceHistoryTypeEnum
});
                  }
      }
      exports.IFCPERFORMANCEHISTORY = IFCPERFORMANCEHISTORY;
    
       class IFCPERMIT extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _PredefinedType, _Status, _LongDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcPermitTypeEnum
Status: _Status, //IfcLabel
LongDescription: _LongDescription //IfcText
});
                  }
      }
      exports.IFCPERMIT = IFCPERMIT;
    
       class IFCPROJECTORDER extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _PredefinedType, _Status, _LongDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcProjectOrderTypeEnum
Status: _Status, //IfcLabel
LongDescription: _LongDescription //IfcText
});
                  }
      }
      exports.IFCPROJECTORDER = IFCPROJECTORDER;
    
       class IFCWORKCALENDAR extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _WorkingTimes, _ExceptionTimes, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
WorkingTimes: _WorkingTimes, //[object Object]
ExceptionTimes: _ExceptionTimes, //[object Object]
PredefinedType: _PredefinedType //IfcWorkCalendarTypeEnum
});
                  }
      }
      exports.IFCWORKCALENDAR = IFCWORKCALENDAR;
    
       class IFCWORKCONTROL extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
CreationDate: _CreationDate, //IfcDateTime
Creators: _Creators, //[object Object]
Purpose: _Purpose, //IfcLabel
Duration: _Duration, //IfcDuration
TotalFloat: _TotalFloat, //IfcDuration
StartTime: _StartTime, //IfcDateTime
FinishTime: _FinishTime //IfcDateTime
});
                  }
      }
      exports.IFCWORKCONTROL = IFCWORKCONTROL;
    
       class IFCACTIONREQUEST extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _PredefinedType, _Status, _LongDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcActionRequestTypeEnum
Status: _Status, //IfcLabel
LongDescription: _LongDescription //IfcText
});
                  }
      }
      exports.IFCACTIONREQUEST = IFCACTIONREQUEST;
    
       class IFCINVENTORY extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _Jurisdiction, _ResponsiblePersons, _LastUpdateDate, _CurrentValue, _OriginalValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcInventoryTypeEnum
Jurisdiction: _Jurisdiction, //IfcActorSelect
ResponsiblePersons: _ResponsiblePersons, //[object Object]
LastUpdateDate: _LastUpdateDate, //IfcDate
CurrentValue: _CurrentValue, //IfcCostValue
OriginalValue: _OriginalValue //IfcCostValue
});
                  }
      }
      exports.IFCINVENTORY = IFCINVENTORY;
    
       class IFCSTRUCTURALLOADGROUP extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _ActionType, _ActionSource, _Coefficient, _Purpose) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcLoadGroupTypeEnum
ActionType: _ActionType, //IfcActionTypeEnum
ActionSource: _ActionSource, //IfcActionSourceTypeEnum
Coefficient: _Coefficient, //IfcRatioMeasure
Purpose: _Purpose //IfcLabel
});
                  }
      }
      exports.IFCSTRUCTURALLOADGROUP = IFCSTRUCTURALLOADGROUP;
    
       class IFCSTRUCTURALRESULTGROUP extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TheoryType, _ResultForLoadGroup, _IsLinear) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
TheoryType: _TheoryType, //IfcAnalysisTheoryTypeEnum
ResultForLoadGroup: _ResultForLoadGroup, //IfcStructuralLoadGroup
IsLinear: _IsLinear //IfcBoolean
});
                  }
      }
      exports.IFCSTRUCTURALRESULTGROUP = IFCSTRUCTURALRESULTGROUP;
    
       class IFCSYSTEM extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCSYSTEM = IFCSYSTEM;
    
       class IFCASSET extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _OriginalValue, _CurrentValue, _TotalReplacementCost, _Owner, _User, _ResponsiblePerson, _IncorporationDate, _DepreciatedValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Identification: _Identification, //IfcIdentifier
OriginalValue: _OriginalValue, //IfcCostValue
CurrentValue: _CurrentValue, //IfcCostValue
TotalReplacementCost: _TotalReplacementCost, //IfcCostValue
Owner: _Owner, //IfcActorSelect
User: _User, //IfcActorSelect
ResponsiblePerson: _ResponsiblePerson, //IfcPerson
IncorporationDate: _IncorporationDate, //IfcDate
DepreciatedValue: _DepreciatedValue //IfcCostValue
});
                  }
      }
      exports.IFCASSET = IFCASSET;
    
       class IFCELEMENTQUANTITY extends IFCQUANTITYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _MethodOfMeasurement, _Quantities) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
MethodOfMeasurement: _MethodOfMeasurement, //IfcLabel
Quantities: _Quantities //[object Object]
});
                  }
      }
      exports.IFCELEMENTQUANTITY = IFCELEMENTQUANTITY;
    
       class IFCREINFORCEMENTDEFINITIONPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _DefinitionType, _ReinforcementSectionDefinitions) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
DefinitionType: _DefinitionType, //IfcLabel
ReinforcementSectionDefinitions: _ReinforcementSectionDefinitions //[object Object]
});
                  }
      }
      exports.IFCREINFORCEMENTDEFINITIONPROPERTIES = IFCREINFORCEMENTDEFINITIONPROPERTIES;
    
       class IFCWINDOWLININGPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _LiningDepth, _LiningThickness, _TransomThickness, _MullionThickness, _FirstTransomOffset, _SecondTransomOffset, _FirstMullionOffset, _SecondMullionOffset, _ShapeAspectStyle, _LiningOffset, _LiningToPanelOffsetX, _LiningToPanelOffsetY) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
LiningDepth: _LiningDepth, //IfcPositiveLengthMeasure
LiningThickness: _LiningThickness, //IfcNonNegativeLengthMeasure
TransomThickness: _TransomThickness, //IfcNonNegativeLengthMeasure
MullionThickness: _MullionThickness, //IfcNonNegativeLengthMeasure
FirstTransomOffset: _FirstTransomOffset, //IfcNormalisedRatioMeasure
SecondTransomOffset: _SecondTransomOffset, //IfcNormalisedRatioMeasure
FirstMullionOffset: _FirstMullionOffset, //IfcNormalisedRatioMeasure
SecondMullionOffset: _SecondMullionOffset, //IfcNormalisedRatioMeasure
ShapeAspectStyle: _ShapeAspectStyle, //IfcShapeAspect
LiningOffset: _LiningOffset, //IfcLengthMeasure
LiningToPanelOffsetX: _LiningToPanelOffsetX, //IfcLengthMeasure
LiningToPanelOffsetY: _LiningToPanelOffsetY //IfcLengthMeasure
});
                  }
      }
      exports.IFCWINDOWLININGPROPERTIES = IFCWINDOWLININGPROPERTIES;
    
       class IFCWINDOWPANELPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _OperationType, _PanelPosition, _FrameDepth, _FrameThickness, _ShapeAspectStyle) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
OperationType: _OperationType, //IfcWindowPanelOperationEnum
PanelPosition: _PanelPosition, //IfcWindowPanelPositionEnum
FrameDepth: _FrameDepth, //IfcPositiveLengthMeasure
FrameThickness: _FrameThickness, //IfcPositiveLengthMeasure
ShapeAspectStyle: _ShapeAspectStyle //IfcShapeAspect
});
                  }
      }
      exports.IFCWINDOWPANELPROPERTIES = IFCWINDOWPANELPROPERTIES;
    
       class IFCDOORLININGPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _LiningDepth, _LiningThickness, _ThresholdDepth, _ThresholdThickness, _TransomThickness, _TransomOffset, _LiningOffset, _ThresholdOffset, _CasingThickness, _CasingDepth, _ShapeAspectStyle, _LiningToPanelOffsetX, _LiningToPanelOffsetY) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
LiningDepth: _LiningDepth, //IfcPositiveLengthMeasure
LiningThickness: _LiningThickness, //IfcNonNegativeLengthMeasure
ThresholdDepth: _ThresholdDepth, //IfcPositiveLengthMeasure
ThresholdThickness: _ThresholdThickness, //IfcNonNegativeLengthMeasure
TransomThickness: _TransomThickness, //IfcNonNegativeLengthMeasure
TransomOffset: _TransomOffset, //IfcLengthMeasure
LiningOffset: _LiningOffset, //IfcLengthMeasure
ThresholdOffset: _ThresholdOffset, //IfcLengthMeasure
CasingThickness: _CasingThickness, //IfcPositiveLengthMeasure
CasingDepth: _CasingDepth, //IfcPositiveLengthMeasure
ShapeAspectStyle: _ShapeAspectStyle, //IfcShapeAspect
LiningToPanelOffsetX: _LiningToPanelOffsetX, //IfcLengthMeasure
LiningToPanelOffsetY: _LiningToPanelOffsetY //IfcLengthMeasure
});
                  }
      }
      exports.IFCDOORLININGPROPERTIES = IFCDOORLININGPROPERTIES;
    
       class IFCDOORPANELPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _PanelDepth, _PanelOperation, _PanelWidth, _PanelPosition, _ShapeAspectStyle) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
PanelDepth: _PanelDepth, //IfcPositiveLengthMeasure
PanelOperation: _PanelOperation, //IfcDoorPanelOperationEnum
PanelWidth: _PanelWidth, //IfcNormalisedRatioMeasure
PanelPosition: _PanelPosition, //IfcDoorPanelPositionEnum
ShapeAspectStyle: _ShapeAspectStyle //IfcShapeAspect
});
                  }
      }
      exports.IFCDOORPANELPROPERTIES = IFCDOORPANELPROPERTIES;
    
       class IFCPERMEABLECOVERINGPROPERTIES extends IFCPREDEFINEDPROPERTYSET {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _OperationType, _PanelPosition, _FrameDepth, _FrameThickness, _ShapeAspectStyle) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
OperationType: _OperationType, //IfcPermeableCoveringOperationEnum
PanelPosition: _PanelPosition, //IfcWindowPanelPositionEnum
FrameDepth: _FrameDepth, //IfcPositiveLengthMeasure
FrameThickness: _FrameThickness, //IfcPositiveLengthMeasure
ShapeAspectStyle: _ShapeAspectStyle //IfcShapeAspect
});
                  }
      }
      exports.IFCPERMEABLECOVERINGPROPERTIES = IFCPERMEABLECOVERINGPROPERTIES;
    
       class IFCSIMPLEPROPERTYTEMPLATE extends IFCPROPERTYTEMPLATE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _TemplateType, _PrimaryMeasureType, _SecondaryMeasureType, _Enumerators, _PrimaryUnit, _SecondaryUnit, _Expression, _AccessState) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
TemplateType: _TemplateType, //IfcSimplePropertyTemplateTypeEnum
PrimaryMeasureType: _PrimaryMeasureType, //IfcLabel
SecondaryMeasureType: _SecondaryMeasureType, //IfcLabel
Enumerators: _Enumerators, //IfcPropertyEnumeration
PrimaryUnit: _PrimaryUnit, //IfcUnit
SecondaryUnit: _SecondaryUnit, //IfcUnit
Expression: _Expression, //IfcLabel
AccessState: _AccessState //IfcStateEnum
});
                  }
      }
      exports.IFCSIMPLEPROPERTYTEMPLATE = IFCSIMPLEPROPERTYTEMPLATE;
    
       class IFCCOMPLEXPROPERTYTEMPLATE extends IFCPROPERTYTEMPLATE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _UsageName, _TemplateType, _HasPropertyTemplates) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
UsageName: _UsageName, //IfcLabel
TemplateType: _TemplateType, //IfcComplexPropertyTemplateTypeEnum
HasPropertyTemplates: _HasPropertyTemplates //[object Object]
});
                  }
      }
      exports.IFCCOMPLEXPROPERTYTEMPLATE = IFCCOMPLEXPROPERTYTEMPLATE;
    
       class IFCRELASSIGNSTOGROUPBYFACTOR extends IFCRELASSIGNSTOGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingGroup, _Factor) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingGroup);
                  this.add_attr({
Factor: _Factor //IfcRatioMeasure
});
                  }
      }
      exports.IFCRELASSIGNSTOGROUPBYFACTOR = IFCRELASSIGNSTOGROUPBYFACTOR;
    
       class IFCRELCONNECTSPATHELEMENTS extends IFCRELCONNECTSELEMENTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ConnectionGeometry, _RelatingElement, _RelatedElement, _RelatingPriorities, _RelatedPriorities, _RelatedConnectionType, _RelatingConnectionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ConnectionGeometry, _RelatingElement, _RelatedElement);
                  this.add_attr({
RelatingPriorities: _RelatingPriorities, //[object Object]
RelatedPriorities: _RelatedPriorities, //[object Object]
RelatedConnectionType: _RelatedConnectionType, //IfcConnectionTypeEnum
RelatingConnectionType: _RelatingConnectionType //IfcConnectionTypeEnum
});
                  }
      }
      exports.IFCRELCONNECTSPATHELEMENTS = IFCRELCONNECTSPATHELEMENTS;
    
       class IFCRELCONNECTSWITHREALIZINGELEMENTS extends IFCRELCONNECTSELEMENTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ConnectionGeometry, _RelatingElement, _RelatedElement, _RealizingElements, _ConnectionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ConnectionGeometry, _RelatingElement, _RelatedElement);
                  this.add_attr({
RealizingElements: _RealizingElements, //[object Object]
ConnectionType: _ConnectionType //IfcLabel
});
                  }
      }
      exports.IFCRELCONNECTSWITHREALIZINGELEMENTS = IFCRELCONNECTSWITHREALIZINGELEMENTS;
    
       class IFCRELCONNECTSWITHECCENTRICITY extends IFCRELCONNECTSSTRUCTURALMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingStructuralMember, _RelatedStructuralConnection, _AppliedCondition, _AdditionalConditions, _SupportedLength, _ConditionCoordinateSystem, _ConnectionConstraint) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingStructuralMember, _RelatedStructuralConnection, _AppliedCondition, _AdditionalConditions, _SupportedLength, _ConditionCoordinateSystem);
                  this.add_attr({
ConnectionConstraint: _ConnectionConstraint //IfcConnectionGeometry
});
                  }
      }
      exports.IFCRELCONNECTSWITHECCENTRICITY = IFCRELCONNECTSWITHECCENTRICITY;
    
       class IFCRELSPACEBOUNDARY1STLEVEL extends IFCRELSPACEBOUNDARY {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedBuildingElement, _ConnectionGeometry, _PhysicalOrVirtualBoundary, _InternalOrExternalBoundary, _ParentBoundary) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedBuildingElement, _ConnectionGeometry, _PhysicalOrVirtualBoundary, _InternalOrExternalBoundary);
                  this.add_attr({
ParentBoundary: _ParentBoundary //IfcRelSpaceBoundary1stLevel
});
                  }
      }
      exports.IFCRELSPACEBOUNDARY1STLEVEL = IFCRELSPACEBOUNDARY1STLEVEL;
    
       class IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION extends IFCSTRUCTURALLOADSINGLEDISPLACEMENT {
          constructor(_Name, _DisplacementX, _DisplacementY, _DisplacementZ, _RotationalDisplacementRX, _RotationalDisplacementRY, _RotationalDisplacementRZ, _Distortion) {
                  super(_Name, _DisplacementX, _DisplacementY, _DisplacementZ, _RotationalDisplacementRX, _RotationalDisplacementRY, _RotationalDisplacementRZ);
                  this.add_attr({
Distortion: _Distortion //IfcCurvatureMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION = IFCSTRUCTURALLOADSINGLEDISPLACEMENTDISTORTION;
    
       class IFCSTRUCTURALLOADSINGLEFORCEWARPING extends IFCSTRUCTURALLOADSINGLEFORCE {
          constructor(_Name, _ForceX, _ForceY, _ForceZ, _MomentX, _MomentY, _MomentZ, _WarpingMoment) {
                  super(_Name, _ForceX, _ForceY, _ForceZ, _MomentX, _MomentY, _MomentZ);
                  this.add_attr({
WarpingMoment: _WarpingMoment //IfcWarpingMomentMeasure
});
                  }
      }
      exports.IFCSTRUCTURALLOADSINGLEFORCEWARPING = IFCSTRUCTURALLOADSINGLEFORCEWARPING;
    
       class IFCEXTRUDEDAREASOLIDTAPERED extends IFCEXTRUDEDAREASOLID {
          constructor(_SweptArea, _Position, _ExtrudedDirection, _Depth, _EndSweptArea) {
                  super(_SweptArea, _Position, _ExtrudedDirection, _Depth);
                  this.add_attr({
EndSweptArea: _EndSweptArea //IfcProfileDef
});
                  }
      }
      exports.IFCEXTRUDEDAREASOLIDTAPERED = IFCEXTRUDEDAREASOLIDTAPERED;
    
       class IFCREVOLVEDAREASOLIDTAPERED extends IFCREVOLVEDAREASOLID {
          constructor(_SweptArea, _Position, _Axis, _Angle, _EndSweptArea) {
                  super(_SweptArea, _Position, _Axis, _Angle);
                  this.add_attr({
EndSweptArea: _EndSweptArea //IfcProfileDef
});
                  }
      }
      exports.IFCREVOLVEDAREASOLIDTAPERED = IFCREVOLVEDAREASOLIDTAPERED;
    
       class IFCADVANCEDBREPWITHVOIDS extends IFCADVANCEDBREP {
          constructor(_Outer, _Voids) {
                  super(_Outer);
                  this.add_attr({
Voids: _Voids //[object Object]
});
                  }
      }
      exports.IFCADVANCEDBREPWITHVOIDS = IFCADVANCEDBREPWITHVOIDS;
    
       class IFCFACETEDBREPWITHVOIDS extends IFCFACETEDBREP {
          constructor(_Outer, _Voids) {
                  super(_Outer);
                  this.add_attr({
Voids: _Voids //[object Object]
});
                  }
      }
      exports.IFCFACETEDBREPWITHVOIDS = IFCFACETEDBREPWITHVOIDS;
    
       class IFCBSPLINESURFACEWITHKNOTS extends IFCBSPLINESURFACE {
          constructor(_UDegree, _VDegree, _ControlPointsList, _SurfaceForm, _UClosed, _VClosed, _SelfIntersect, _UMultiplicities, _VMultiplicities, _UKnots, _VKnots, _KnotSpec) {
                  super(_UDegree, _VDegree, _ControlPointsList, _SurfaceForm, _UClosed, _VClosed, _SelfIntersect);
                  this.add_attr({
UMultiplicities: _UMultiplicities, //[object Object]
VMultiplicities: _VMultiplicities, //[object Object]
UKnots: _UKnots, //[object Object]
VKnots: _VKnots, //[object Object]
KnotSpec: _KnotSpec //IfcKnotType
});
                  }
      }
      exports.IFCBSPLINESURFACEWITHKNOTS = IFCBSPLINESURFACEWITHKNOTS;
    
       class IFCCOMPOSITECURVEONSURFACE extends IFCCOMPOSITECURVE {
          constructor(_Segments, _SelfIntersect) {
                  super(_Segments, _SelfIntersect);
                  
                  }
      }
      exports.IFCCOMPOSITECURVEONSURFACE = IFCCOMPOSITECURVEONSURFACE;
    
       class IFCBSPLINECURVEWITHKNOTS extends IFCBSPLINECURVE {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect, _KnotMultiplicities, _Knots, _KnotSpec) {
                  super(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect);
                  this.add_attr({
KnotMultiplicities: _KnotMultiplicities, //[object Object]
Knots: _Knots, //[object Object]
KnotSpec: _KnotSpec //IfcKnotType
});
                  }
      }
      exports.IFCBSPLINECURVEWITHKNOTS = IFCBSPLINECURVEWITHKNOTS;
    
       class IFCFURNISHINGELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFURNISHINGELEMENTTYPE = IFCFURNISHINGELEMENTTYPE;
    
       class IFCGEOGRAPHICELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcGeographicElementTypeEnum
});
                  }
      }
      exports.IFCGEOGRAPHICELEMENTTYPE = IFCGEOGRAPHICELEMENTTYPE;
    
       class IFCTRANSPORTELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTransportElementTypeEnum
});
                  }
      }
      exports.IFCTRANSPORTELEMENTTYPE = IFCTRANSPORTELEMENTTYPE;
    
       class IFCBUILDINGELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCBUILDINGELEMENTTYPE = IFCBUILDINGELEMENTTYPE;
    
       class IFCCIVILELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCCIVILELEMENTTYPE = IFCCIVILELEMENTTYPE;
    
       class IFCDISTRIBUTIONELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCDISTRIBUTIONELEMENTTYPE = IFCDISTRIBUTIONELEMENTTYPE;
    
       class IFCELEMENTASSEMBLYTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElementAssemblyTypeEnum
});
                  }
      }
      exports.IFCELEMENTASSEMBLYTYPE = IFCELEMENTASSEMBLYTYPE;
    
       class IFCELEMENTCOMPONENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCELEMENTCOMPONENTTYPE = IFCELEMENTCOMPONENTTYPE;
    
       class IFCSPATIALSTRUCTUREELEMENTTYPE extends IFCSPATIALELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCSPATIALSTRUCTUREELEMENTTYPE = IFCSPATIALSTRUCTUREELEMENTTYPE;
    
       class IFCSPATIALZONETYPE extends IFCSPATIALELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcSpatialZoneTypeEnum
LongName: _LongName //IfcLabel
});
                  }
      }
      exports.IFCSPATIALZONETYPE = IFCSPATIALZONETYPE;
    
       class IFCCREWRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCrewResourceTypeEnum
});
                  }
      }
      exports.IFCCREWRESOURCETYPE = IFCCREWRESOURCETYPE;
    
       class IFCLABORRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLaborResourceTypeEnum
});
                  }
      }
      exports.IFCLABORRESOURCETYPE = IFCLABORRESOURCETYPE;
    
       class IFCSUBCONTRACTRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSubContractResourceTypeEnum
});
                  }
      }
      exports.IFCSUBCONTRACTRESOURCETYPE = IFCSUBCONTRACTRESOURCETYPE;
    
       class IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionEquipmentResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE = IFCCONSTRUCTIONEQUIPMENTRESOURCETYPE;
    
       class IFCCONSTRUCTIONMATERIALRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionMaterialResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONMATERIALRESOURCETYPE = IFCCONSTRUCTIONMATERIALRESOURCETYPE;
    
       class IFCCONSTRUCTIONPRODUCTRESOURCETYPE extends IFCCONSTRUCTIONRESOURCETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _Identification, _LongDescription, _ResourceType, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionProductResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONPRODUCTRESOURCETYPE = IFCCONSTRUCTIONPRODUCTRESOURCETYPE;
    
       class IFCSPATIALSTRUCTUREELEMENT extends IFCSPATIALELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName);
                  this.add_attr({
CompositionType: _CompositionType //IfcElementCompositionEnum
});
                  }
      }
      exports.IFCSPATIALSTRUCTUREELEMENT = IFCSPATIALSTRUCTUREELEMENT;
    
       class IFCSPATIALZONE extends IFCSPATIALELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSpatialZoneTypeEnum
});
                  }
      }
      exports.IFCSPATIALZONE = IFCSPATIALZONE;
    
       class IFCEXTERNALSPATIALSTRUCTUREELEMENT extends IFCSPATIALELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName);
                  
                  }
      }
      exports.IFCEXTERNALSPATIALSTRUCTUREELEMENT = IFCEXTERNALSPATIALSTRUCTUREELEMENT;
    
       class IFCSTRUCTURALREACTION extends IFCSTRUCTURALACTIVITY {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  
                  }
      }
      exports.IFCSTRUCTURALREACTION = IFCSTRUCTURALREACTION;
    
       class IFCSTRUCTURALACTION extends IFCSTRUCTURALACTIVITY {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  this.add_attr({
DestabilizingLoad: _DestabilizingLoad //IfcBoolean
});
                  }
      }
      exports.IFCSTRUCTURALACTION = IFCSTRUCTURALACTION;
    
       class IFCSTRUCTURALMEMBER extends IFCSTRUCTURALITEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  
                  }
      }
      exports.IFCSTRUCTURALMEMBER = IFCSTRUCTURALMEMBER;
    
       class IFCSTRUCTURALCONNECTION extends IFCSTRUCTURALITEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
AppliedCondition: _AppliedCondition //IfcBoundaryCondition
});
                  }
      }
      exports.IFCSTRUCTURALCONNECTION = IFCSTRUCTURALCONNECTION;
    
       class IFCELEMENTASSEMBLY extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _AssemblyPlace, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
AssemblyPlace: _AssemblyPlace, //IfcAssemblyPlaceEnum
PredefinedType: _PredefinedType //IfcElementAssemblyTypeEnum
});
                  }
      }
      exports.IFCELEMENTASSEMBLY = IFCELEMENTASSEMBLY;
    
       class IFCELEMENTCOMPONENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCELEMENTCOMPONENT = IFCELEMENTCOMPONENT;
    
       class IFCFEATUREELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFEATUREELEMENT = IFCFEATUREELEMENT;
    
       class IFCFURNISHINGELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFURNISHINGELEMENT = IFCFURNISHINGELEMENT;
    
       class IFCGEOGRAPHICELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcGeographicElementTypeEnum
});
                  }
      }
      exports.IFCGEOGRAPHICELEMENT = IFCGEOGRAPHICELEMENT;
    
       class IFCTRANSPORTELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTransportElementTypeEnum
});
                  }
      }
      exports.IFCTRANSPORTELEMENT = IFCTRANSPORTELEMENT;
    
       class IFCVIRTUALELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCVIRTUALELEMENT = IFCVIRTUALELEMENT;
    
       class IFCBUILDINGELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCBUILDINGELEMENT = IFCBUILDINGELEMENT;
    
       class IFCCIVILELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCCIVILELEMENT = IFCCIVILELEMENT;
    
       class IFCDISTRIBUTIONELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCDISTRIBUTIONELEMENT = IFCDISTRIBUTIONELEMENT;
    
       class IFCDISTRIBUTIONPORT extends IFCPORT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _FlowDirection, _PredefinedType, _SystemType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
FlowDirection: _FlowDirection, //IfcFlowDirectionEnum
PredefinedType: _PredefinedType, //IfcDistributionPortTypeEnum
SystemType: _SystemType //IfcDistributionSystemEnum
});
                  }
      }
      exports.IFCDISTRIBUTIONPORT = IFCDISTRIBUTIONPORT;
    
       class IFCCREWRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCrewResourceTypeEnum
});
                  }
      }
      exports.IFCCREWRESOURCE = IFCCREWRESOURCE;
    
       class IFCLABORRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLaborResourceTypeEnum
});
                  }
      }
      exports.IFCLABORRESOURCE = IFCLABORRESOURCE;
    
       class IFCSUBCONTRACTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSubContractResourceTypeEnum
});
                  }
      }
      exports.IFCSUBCONTRACTRESOURCE = IFCSUBCONTRACTRESOURCE;
    
       class IFCCONSTRUCTIONEQUIPMENTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionEquipmentResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONEQUIPMENTRESOURCE = IFCCONSTRUCTIONEQUIPMENTRESOURCE;
    
       class IFCCONSTRUCTIONMATERIALRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionMaterialResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONMATERIALRESOURCE = IFCCONSTRUCTIONMATERIALRESOURCE;
    
       class IFCCONSTRUCTIONPRODUCTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _LongDescription, _Usage, _BaseCosts, _BaseQuantity);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcConstructionProductResourceTypeEnum
});
                  }
      }
      exports.IFCCONSTRUCTIONPRODUCTRESOURCE = IFCCONSTRUCTIONPRODUCTRESOURCE;
    
       class IFCWORKPLAN extends IFCWORKCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWorkPlanTypeEnum
});
                  }
      }
      exports.IFCWORKPLAN = IFCWORKPLAN;
    
       class IFCWORKSCHEDULE extends IFCWORKCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identification, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWorkScheduleTypeEnum
});
                  }
      }
      exports.IFCWORKSCHEDULE = IFCWORKSCHEDULE;
    
       class IFCSTRUCTURALLOADCASE extends IFCSTRUCTURALLOADGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _ActionType, _ActionSource, _Coefficient, _Purpose, _SelfWeightCoefficients) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _ActionType, _ActionSource, _Coefficient, _Purpose);
                  this.add_attr({
SelfWeightCoefficients: _SelfWeightCoefficients //[object Object]
});
                  }
      }
      exports.IFCSTRUCTURALLOADCASE = IFCSTRUCTURALLOADCASE;
    
       class IFCZONE extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
LongName: _LongName //IfcLabel
});
                  }
      }
      exports.IFCZONE = IFCZONE;
    
       class IFCBUILDINGSYSTEM extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcBuildingSystemTypeEnum
LongName: _LongName //IfcLabel
});
                  }
      }
      exports.IFCBUILDINGSYSTEM = IFCBUILDINGSYSTEM;
    
       class IFCDISTRIBUTIONSYSTEM extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
LongName: _LongName, //IfcLabel
PredefinedType: _PredefinedType //IfcDistributionSystemEnum
});
                  }
      }
      exports.IFCDISTRIBUTIONSYSTEM = IFCDISTRIBUTIONSYSTEM;
    
       class IFCSTRUCTURALANALYSISMODEL extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _OrientationOf2DPlane, _LoadedBy, _HasResults, _SharedPlacement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcAnalysisModelTypeEnum
OrientationOf2DPlane: _OrientationOf2DPlane, //IfcAxis2Placement3D
LoadedBy: _LoadedBy, //[object Object]
HasResults: _HasResults, //[object Object]
SharedPlacement: _SharedPlacement //IfcObjectPlacement
});
                  }
      }
      exports.IFCSTRUCTURALANALYSISMODEL = IFCSTRUCTURALANALYSISMODEL;
    
       class IFCRELSPACEBOUNDARY2NDLEVEL extends IFCRELSPACEBOUNDARY1STLEVEL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedBuildingElement, _ConnectionGeometry, _PhysicalOrVirtualBoundary, _InternalOrExternalBoundary, _ParentBoundary, _CorrespondingBoundary) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingSpace, _RelatedBuildingElement, _ConnectionGeometry, _PhysicalOrVirtualBoundary, _InternalOrExternalBoundary, _ParentBoundary);
                  this.add_attr({
CorrespondingBoundary: _CorrespondingBoundary //IfcRelSpaceBoundary2ndLevel
});
                  }
      }
      exports.IFCRELSPACEBOUNDARY2NDLEVEL = IFCRELSPACEBOUNDARY2NDLEVEL;
    
       class IFCRATIONALBSPLINESURFACEWITHKNOTS extends IFCBSPLINESURFACEWITHKNOTS {
          constructor(_UDegree, _VDegree, _ControlPointsList, _SurfaceForm, _UClosed, _VClosed, _SelfIntersect, _UMultiplicities, _VMultiplicities, _UKnots, _VKnots, _KnotSpec, _WeightsData) {
                  super(_UDegree, _VDegree, _ControlPointsList, _SurfaceForm, _UClosed, _VClosed, _SelfIntersect, _UMultiplicities, _VMultiplicities, _UKnots, _VKnots, _KnotSpec);
                  this.add_attr({
WeightsData: _WeightsData //[object Object]
});
                  }
      }
      exports.IFCRATIONALBSPLINESURFACEWITHKNOTS = IFCRATIONALBSPLINESURFACEWITHKNOTS;
    
       class IFCBOUNDARYCURVE extends IFCCOMPOSITECURVEONSURFACE {
          constructor(_Segments, _SelfIntersect) {
                  super(_Segments, _SelfIntersect);
                  
                  }
      }
      exports.IFCBOUNDARYCURVE = IFCBOUNDARYCURVE;
    
       class IFCRATIONALBSPLINECURVEWITHKNOTS extends IFCBSPLINECURVEWITHKNOTS {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect, _KnotMultiplicities, _Knots, _KnotSpec, _WeightsData) {
                  super(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect, _KnotMultiplicities, _Knots, _KnotSpec);
                  this.add_attr({
WeightsData: _WeightsData //[object Object]
});
                  }
      }
      exports.IFCRATIONALBSPLINECURVEWITHKNOTS = IFCRATIONALBSPLINECURVEWITHKNOTS;
    
       class IFCFURNITURETYPE extends IFCFURNISHINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _AssemblyPlace, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
AssemblyPlace: _AssemblyPlace, //IfcAssemblyPlaceEnum
PredefinedType: _PredefinedType //IfcFurnitureTypeEnum
});
                  }
      }
      exports.IFCFURNITURETYPE = IFCFURNITURETYPE;
    
       class IFCSYSTEMFURNITUREELEMENTTYPE extends IFCFURNISHINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSystemFurnitureElementTypeEnum
});
                  }
      }
      exports.IFCSYSTEMFURNITUREELEMENTTYPE = IFCSYSTEMFURNITUREELEMENTTYPE;
    
       class IFCCHIMNEYTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcChimneyTypeEnum
});
                  }
      }
      exports.IFCCHIMNEYTYPE = IFCCHIMNEYTYPE;
    
       class IFCCOLUMNTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcColumnTypeEnum
});
                  }
      }
      exports.IFCCOLUMNTYPE = IFCCOLUMNTYPE;
    
       class IFCCOVERINGTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoveringTypeEnum
});
                  }
      }
      exports.IFCCOVERINGTYPE = IFCCOVERINGTYPE;
    
       class IFCCURTAINWALLTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCurtainWallTypeEnum
});
                  }
      }
      exports.IFCCURTAINWALLTYPE = IFCCURTAINWALLTYPE;
    
       class IFCDOORTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _OperationType, _ParameterTakesPrecedence, _UserDefinedOperationType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcDoorTypeEnum
OperationType: _OperationType, //IfcDoorTypeOperationEnum
ParameterTakesPrecedence: _ParameterTakesPrecedence, //IfcBoolean
UserDefinedOperationType: _UserDefinedOperationType //IfcLabel
});
                  }
      }
      exports.IFCDOORTYPE = IFCDOORTYPE;
    
       class IFCFOOTINGTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFootingTypeEnum
});
                  }
      }
      exports.IFCFOOTINGTYPE = IFCFOOTINGTYPE;
    
       class IFCMEMBERTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMemberTypeEnum
});
                  }
      }
      exports.IFCMEMBERTYPE = IFCMEMBERTYPE;
    
       class IFCPILETYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPileTypeEnum
});
                  }
      }
      exports.IFCPILETYPE = IFCPILETYPE;
    
       class IFCPLATETYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPlateTypeEnum
});
                  }
      }
      exports.IFCPLATETYPE = IFCPLATETYPE;
    
       class IFCRAILINGTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRailingTypeEnum
});
                  }
      }
      exports.IFCRAILINGTYPE = IFCRAILINGTYPE;
    
       class IFCRAMPFLIGHTTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRampFlightTypeEnum
});
                  }
      }
      exports.IFCRAMPFLIGHTTYPE = IFCRAMPFLIGHTTYPE;
    
       class IFCRAMPTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRampTypeEnum
});
                  }
      }
      exports.IFCRAMPTYPE = IFCRAMPTYPE;
    
       class IFCROOFTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRoofTypeEnum
});
                  }
      }
      exports.IFCROOFTYPE = IFCROOFTYPE;
    
       class IFCSHADINGDEVICETYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcShadingDeviceTypeEnum
});
                  }
      }
      exports.IFCSHADINGDEVICETYPE = IFCSHADINGDEVICETYPE;
    
       class IFCSLABTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSlabTypeEnum
});
                  }
      }
      exports.IFCSLABTYPE = IFCSLABTYPE;
    
       class IFCSTAIRFLIGHTTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStairFlightTypeEnum
});
                  }
      }
      exports.IFCSTAIRFLIGHTTYPE = IFCSTAIRFLIGHTTYPE;
    
       class IFCSTAIRTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStairTypeEnum
});
                  }
      }
      exports.IFCSTAIRTYPE = IFCSTAIRTYPE;
    
       class IFCWALLTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWallTypeEnum
});
                  }
      }
      exports.IFCWALLTYPE = IFCWALLTYPE;
    
       class IFCWINDOWTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _PartitioningType, _ParameterTakesPrecedence, _UserDefinedPartitioningType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcWindowTypeEnum
PartitioningType: _PartitioningType, //IfcWindowTypePartitioningEnum
ParameterTakesPrecedence: _ParameterTakesPrecedence, //IfcBoolean
UserDefinedPartitioningType: _UserDefinedPartitioningType //IfcLabel
});
                  }
      }
      exports.IFCWINDOWTYPE = IFCWINDOWTYPE;
    
       class IFCBEAMTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBeamTypeEnum
});
                  }
      }
      exports.IFCBEAMTYPE = IFCBEAMTYPE;
    
       class IFCBUILDINGELEMENTPROXYTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBuildingElementProxyTypeEnum
});
                  }
      }
      exports.IFCBUILDINGELEMENTPROXYTYPE = IFCBUILDINGELEMENTPROXYTYPE;
    
       class IFCDISTRIBUTIONFLOWELEMENTTYPE extends IFCDISTRIBUTIONELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCDISTRIBUTIONFLOWELEMENTTYPE = IFCDISTRIBUTIONFLOWELEMENTTYPE;
    
       class IFCDISTRIBUTIONCONTROLELEMENTTYPE extends IFCDISTRIBUTIONELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCDISTRIBUTIONCONTROLELEMENTTYPE = IFCDISTRIBUTIONCONTROLELEMENTTYPE;
    
       class IFCFASTENERTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFastenerTypeEnum
});
                  }
      }
      exports.IFCFASTENERTYPE = IFCFASTENERTYPE;
    
       class IFCMECHANICALFASTENERTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _NominalDiameter, _NominalLength) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcMechanicalFastenerTypeEnum
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
NominalLength: _NominalLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCMECHANICALFASTENERTYPE = IFCMECHANICALFASTENERTYPE;
    
       class IFCREINFORCINGELEMENTTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCREINFORCINGELEMENTTYPE = IFCREINFORCINGELEMENTTYPE;
    
       class IFCVIBRATIONISOLATORTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcVibrationIsolatorTypeEnum
});
                  }
      }
      exports.IFCVIBRATIONISOLATORTYPE = IFCVIBRATIONISOLATORTYPE;
    
       class IFCBUILDINGELEMENTPARTTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBuildingElementPartTypeEnum
});
                  }
      }
      exports.IFCBUILDINGELEMENTPARTTYPE = IFCBUILDINGELEMENTPARTTYPE;
    
       class IFCDISCRETEACCESSORYTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDiscreteAccessoryTypeEnum
});
                  }
      }
      exports.IFCDISCRETEACCESSORYTYPE = IFCDISCRETEACCESSORYTYPE;
    
       class IFCSPACETYPE extends IFCSPATIALSTRUCTUREELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _LongName) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcSpaceTypeEnum
LongName: _LongName //IfcLabel
});
                  }
      }
      exports.IFCSPACETYPE = IFCSPACETYPE;
    
       class IFCBUILDING extends IFCSPATIALSTRUCTUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType, _ElevationOfRefHeight, _ElevationOfTerrain, _BuildingAddress) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType);
                  this.add_attr({
ElevationOfRefHeight: _ElevationOfRefHeight, //IfcLengthMeasure
ElevationOfTerrain: _ElevationOfTerrain, //IfcLengthMeasure
BuildingAddress: _BuildingAddress //IfcPostalAddress
});
                  }
      }
      exports.IFCBUILDING = IFCBUILDING;
    
       class IFCBUILDINGSTOREY extends IFCSPATIALSTRUCTUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType, _Elevation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType);
                  this.add_attr({
Elevation: _Elevation //IfcLengthMeasure
});
                  }
      }
      exports.IFCBUILDINGSTOREY = IFCBUILDINGSTOREY;
    
       class IFCSITE extends IFCSPATIALSTRUCTUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType, _RefLatitude, _RefLongitude, _RefElevation, _LandTitleNumber, _SiteAddress) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType);
                  this.add_attr({
RefLatitude: _RefLatitude, //IfcCompoundPlaneAngleMeasure
RefLongitude: _RefLongitude, //IfcCompoundPlaneAngleMeasure
RefElevation: _RefElevation, //IfcLengthMeasure
LandTitleNumber: _LandTitleNumber, //IfcLabel
SiteAddress: _SiteAddress //IfcPostalAddress
});
                  }
      }
      exports.IFCSITE = IFCSITE;
    
       class IFCSPACE extends IFCSPATIALSTRUCTUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType, _PredefinedType, _ElevationWithFlooring) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcSpaceTypeEnum
ElevationWithFlooring: _ElevationWithFlooring //IfcLengthMeasure
});
                  }
      }
      exports.IFCSPACE = IFCSPACE;
    
       class IFCEXTERNALSPATIALELEMENT extends IFCEXTERNALSPATIALSTRUCTUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcExternalSpatialElementTypeEnum
});
                  }
      }
      exports.IFCEXTERNALSPATIALELEMENT = IFCEXTERNALSPATIALELEMENT;
    
       class IFCSTRUCTURALSURFACEREACTION extends IFCSTRUCTURALREACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStructuralSurfaceActivityTypeEnum
});
                  }
      }
      exports.IFCSTRUCTURALSURFACEREACTION = IFCSTRUCTURALSURFACEREACTION;
    
       class IFCSTRUCTURALCURVEREACTION extends IFCSTRUCTURALREACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStructuralCurveActivityTypeEnum
});
                  }
      }
      exports.IFCSTRUCTURALCURVEREACTION = IFCSTRUCTURALCURVEREACTION;
    
       class IFCSTRUCTURALPOINTREACTION extends IFCSTRUCTURALREACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  
                  }
      }
      exports.IFCSTRUCTURALPOINTREACTION = IFCSTRUCTURALPOINTREACTION;
    
       class IFCSTRUCTURALCURVEACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad);
                  this.add_attr({
ProjectedOrTrue: _ProjectedOrTrue, //IfcProjectedOrTrueLengthEnum
PredefinedType: _PredefinedType //IfcStructuralCurveActivityTypeEnum
});
                  }
      }
      exports.IFCSTRUCTURALCURVEACTION = IFCSTRUCTURALCURVEACTION;
    
       class IFCSTRUCTURALPOINTACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad);
                  
                  }
      }
      exports.IFCSTRUCTURALPOINTACTION = IFCSTRUCTURALPOINTACTION;
    
       class IFCSTRUCTURALSURFACEACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad);
                  this.add_attr({
ProjectedOrTrue: _ProjectedOrTrue, //IfcProjectedOrTrueLengthEnum
PredefinedType: _PredefinedType //IfcStructuralSurfaceActivityTypeEnum
});
                  }
      }
      exports.IFCSTRUCTURALSURFACEACTION = IFCSTRUCTURALSURFACEACTION;
    
       class IFCSTRUCTURALSURFACEMEMBER extends IFCSTRUCTURALMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcStructuralSurfaceMemberTypeEnum
Thickness: _Thickness //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSTRUCTURALSURFACEMEMBER = IFCSTRUCTURALSURFACEMEMBER;
    
       class IFCSTRUCTURALCURVEMEMBER extends IFCSTRUCTURALMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Axis) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcStructuralCurveMemberTypeEnum
Axis: _Axis //IfcDirection
});
                  }
      }
      exports.IFCSTRUCTURALCURVEMEMBER = IFCSTRUCTURALCURVEMEMBER;
    
       class IFCSTRUCTURALCURVECONNECTION extends IFCSTRUCTURALCONNECTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition, _Axis) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition);
                  this.add_attr({
Axis: _Axis //IfcDirection
});
                  }
      }
      exports.IFCSTRUCTURALCURVECONNECTION = IFCSTRUCTURALCURVECONNECTION;
    
       class IFCSTRUCTURALPOINTCONNECTION extends IFCSTRUCTURALCONNECTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition, _ConditionCoordinateSystem) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition);
                  this.add_attr({
ConditionCoordinateSystem: _ConditionCoordinateSystem //IfcAxis2Placement3D
});
                  }
      }
      exports.IFCSTRUCTURALPOINTCONNECTION = IFCSTRUCTURALPOINTCONNECTION;
    
       class IFCSTRUCTURALSURFACECONNECTION extends IFCSTRUCTURALCONNECTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition);
                  
                  }
      }
      exports.IFCSTRUCTURALSURFACECONNECTION = IFCSTRUCTURALSURFACECONNECTION;
    
       class IFCFASTENER extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFastenerTypeEnum
});
                  }
      }
      exports.IFCFASTENER = IFCFASTENER;
    
       class IFCMECHANICALFASTENER extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _NominalDiameter, _NominalLength, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
NominalLength: _NominalLength, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType //IfcMechanicalFastenerTypeEnum
});
                  }
      }
      exports.IFCMECHANICALFASTENER = IFCMECHANICALFASTENER;
    
       class IFCREINFORCINGELEMENT extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
SteelGrade: _SteelGrade //IfcLabel
});
                  }
      }
      exports.IFCREINFORCINGELEMENT = IFCREINFORCINGELEMENT;
    
       class IFCVIBRATIONISOLATOR extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcVibrationIsolatorTypeEnum
});
                  }
      }
      exports.IFCVIBRATIONISOLATOR = IFCVIBRATIONISOLATOR;
    
       class IFCBUILDINGELEMENTPART extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBuildingElementPartTypeEnum
});
                  }
      }
      exports.IFCBUILDINGELEMENTPART = IFCBUILDINGELEMENTPART;
    
       class IFCDISCRETEACCESSORY extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDiscreteAccessoryTypeEnum
});
                  }
      }
      exports.IFCDISCRETEACCESSORY = IFCDISCRETEACCESSORY;
    
       class IFCFEATUREELEMENTADDITION extends IFCFEATUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFEATUREELEMENTADDITION = IFCFEATUREELEMENTADDITION;
    
       class IFCFEATUREELEMENTSUBTRACTION extends IFCFEATUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFEATUREELEMENTSUBTRACTION = IFCFEATUREELEMENTSUBTRACTION;
    
       class IFCSURFACEFEATURE extends IFCFEATUREELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSurfaceFeatureTypeEnum
});
                  }
      }
      exports.IFCSURFACEFEATURE = IFCSURFACEFEATURE;
    
       class IFCFURNITURE extends IFCFURNISHINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFurnitureTypeEnum
});
                  }
      }
      exports.IFCFURNITURE = IFCFURNITURE;
    
       class IFCSYSTEMFURNITUREELEMENT extends IFCFURNISHINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSystemFurnitureElementTypeEnum
});
                  }
      }
      exports.IFCSYSTEMFURNITUREELEMENT = IFCSYSTEMFURNITUREELEMENT;
    
       class IFCBUILDINGELEMENTPROXY extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBuildingElementProxyTypeEnum
});
                  }
      }
      exports.IFCBUILDINGELEMENTPROXY = IFCBUILDINGELEMENTPROXY;
    
       class IFCCHIMNEY extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcChimneyTypeEnum
});
                  }
      }
      exports.IFCCHIMNEY = IFCCHIMNEY;
    
       class IFCCOLUMN extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcColumnTypeEnum
});
                  }
      }
      exports.IFCCOLUMN = IFCCOLUMN;
    
       class IFCCOVERING extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoveringTypeEnum
});
                  }
      }
      exports.IFCCOVERING = IFCCOVERING;
    
       class IFCCURTAINWALL extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCurtainWallTypeEnum
});
                  }
      }
      exports.IFCCURTAINWALL = IFCCURTAINWALL;
    
       class IFCDOOR extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _OperationType, _UserDefinedOperationType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
OverallWidth: _OverallWidth, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType, //IfcDoorTypeEnum
OperationType: _OperationType, //IfcDoorTypeOperationEnum
UserDefinedOperationType: _UserDefinedOperationType //IfcLabel
});
                  }
      }
      exports.IFCDOOR = IFCDOOR;
    
       class IFCFOOTING extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFootingTypeEnum
});
                  }
      }
      exports.IFCFOOTING = IFCFOOTING;
    
       class IFCMEMBER extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMemberTypeEnum
});
                  }
      }
      exports.IFCMEMBER = IFCMEMBER;
    
       class IFCPILE extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType, _ConstructionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcPileTypeEnum
ConstructionType: _ConstructionType //IfcPileConstructionEnum
});
                  }
      }
      exports.IFCPILE = IFCPILE;
    
       class IFCPLATE extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPlateTypeEnum
});
                  }
      }
      exports.IFCPLATE = IFCPLATE;
    
       class IFCRAILING extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRailingTypeEnum
});
                  }
      }
      exports.IFCRAILING = IFCRAILING;
    
       class IFCRAMP extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRampTypeEnum
});
                  }
      }
      exports.IFCRAMP = IFCRAMP;
    
       class IFCRAMPFLIGHT extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRampFlightTypeEnum
});
                  }
      }
      exports.IFCRAMPFLIGHT = IFCRAMPFLIGHT;
    
       class IFCROOF extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcRoofTypeEnum
});
                  }
      }
      exports.IFCROOF = IFCROOF;
    
       class IFCSHADINGDEVICE extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcShadingDeviceTypeEnum
});
                  }
      }
      exports.IFCSHADINGDEVICE = IFCSHADINGDEVICE;
    
       class IFCSLAB extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSlabTypeEnum
});
                  }
      }
      exports.IFCSLAB = IFCSLAB;
    
       class IFCSTAIR extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStairTypeEnum
});
                  }
      }
      exports.IFCSTAIR = IFCSTAIR;
    
       class IFCSTAIRFLIGHT extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _NumberOfRisers, _NumberOfTreads, _RiserHeight, _TreadLength, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
NumberOfRisers: _NumberOfRisers, //IfcInteger
NumberOfTreads: _NumberOfTreads, //IfcInteger
RiserHeight: _RiserHeight, //IfcPositiveLengthMeasure
TreadLength: _TreadLength, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType //IfcStairFlightTypeEnum
});
                  }
      }
      exports.IFCSTAIRFLIGHT = IFCSTAIRFLIGHT;
    
       class IFCWALL extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWallTypeEnum
});
                  }
      }
      exports.IFCWALL = IFCWALL;
    
       class IFCWINDOW extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _PartitioningType, _UserDefinedPartitioningType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
OverallWidth: _OverallWidth, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType, //IfcWindowTypeEnum
PartitioningType: _PartitioningType, //IfcWindowTypePartitioningEnum
UserDefinedPartitioningType: _UserDefinedPartitioningType //IfcLabel
});
                  }
      }
      exports.IFCWINDOW = IFCWINDOW;
    
       class IFCBEAM extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBeamTypeEnum
});
                  }
      }
      exports.IFCBEAM = IFCBEAM;
    
       class IFCDISTRIBUTIONFLOWELEMENT extends IFCDISTRIBUTIONELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCDISTRIBUTIONFLOWELEMENT = IFCDISTRIBUTIONFLOWELEMENT;
    
       class IFCDISTRIBUTIONCONTROLELEMENT extends IFCDISTRIBUTIONELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCDISTRIBUTIONCONTROLELEMENT = IFCDISTRIBUTIONCONTROLELEMENT;
    
       class IFCDISTRIBUTIONCIRCUIT extends IFCDISTRIBUTIONSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _PredefinedType);
                  
                  }
      }
      exports.IFCDISTRIBUTIONCIRCUIT = IFCDISTRIBUTIONCIRCUIT;
    
       class IFCOUTERBOUNDARYCURVE extends IFCBOUNDARYCURVE {
          constructor(_Segments, _SelfIntersect) {
                  super(_Segments, _SelfIntersect);
                  
                  }
      }
      exports.IFCOUTERBOUNDARYCURVE = IFCOUTERBOUNDARYCURVE;
    
       class IFCENERGYCONVERSIONDEVICETYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCENERGYCONVERSIONDEVICETYPE = IFCENERGYCONVERSIONDEVICETYPE;
    
       class IFCFLOWCONTROLLERTYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWCONTROLLERTYPE = IFCFLOWCONTROLLERTYPE;
    
       class IFCFLOWFITTINGTYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWFITTINGTYPE = IFCFLOWFITTINGTYPE;
    
       class IFCFLOWMOVINGDEVICETYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWMOVINGDEVICETYPE = IFCFLOWMOVINGDEVICETYPE;
    
       class IFCFLOWSEGMENTTYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWSEGMENTTYPE = IFCFLOWSEGMENTTYPE;
    
       class IFCFLOWSTORAGEDEVICETYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWSTORAGEDEVICETYPE = IFCFLOWSTORAGEDEVICETYPE;
    
       class IFCFLOWTERMINALTYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWTERMINALTYPE = IFCFLOWTERMINALTYPE;
    
       class IFCFLOWTREATMENTDEVICETYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFLOWTREATMENTDEVICETYPE = IFCFLOWTREATMENTDEVICETYPE;
    
       class IFCDISTRIBUTIONCHAMBERELEMENTTYPE extends IFCDISTRIBUTIONFLOWELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDistributionChamberElementTypeEnum
});
                  }
      }
      exports.IFCDISTRIBUTIONCHAMBERELEMENTTYPE = IFCDISTRIBUTIONCHAMBERELEMENTTYPE;
    
       class IFCFLOWINSTRUMENTTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFlowInstrumentTypeEnum
});
                  }
      }
      exports.IFCFLOWINSTRUMENTTYPE = IFCFLOWINSTRUMENTTYPE;
    
       class IFCPROTECTIVEDEVICETRIPPINGUNITTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProtectiveDeviceTrippingUnitTypeEnum
});
                  }
      }
      exports.IFCPROTECTIVEDEVICETRIPPINGUNITTYPE = IFCPROTECTIVEDEVICETRIPPINGUNITTYPE;
    
       class IFCSENSORTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSensorTypeEnum
});
                  }
      }
      exports.IFCSENSORTYPE = IFCSENSORTYPE;
    
       class IFCUNITARYCONTROLELEMENTTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcUnitaryControlElementTypeEnum
});
                  }
      }
      exports.IFCUNITARYCONTROLELEMENTTYPE = IFCUNITARYCONTROLELEMENTTYPE;
    
       class IFCACTUATORTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcActuatorTypeEnum
});
                  }
      }
      exports.IFCACTUATORTYPE = IFCACTUATORTYPE;
    
       class IFCALARMTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAlarmTypeEnum
});
                  }
      }
      exports.IFCALARMTYPE = IFCALARMTYPE;
    
       class IFCCONTROLLERTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcControllerTypeEnum
});
                  }
      }
      exports.IFCCONTROLLERTYPE = IFCCONTROLLERTYPE;
    
       class IFCREINFORCINGMESHTYPE extends IFCREINFORCINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _MeshLength, _MeshWidth, _LongitudinalBarNominalDiameter, _TransverseBarNominalDiameter, _LongitudinalBarCrossSectionArea, _TransverseBarCrossSectionArea, _LongitudinalBarSpacing, _TransverseBarSpacing, _BendingShapeCode, _BendingParameters) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcReinforcingMeshTypeEnum
MeshLength: _MeshLength, //IfcPositiveLengthMeasure
MeshWidth: _MeshWidth, //IfcPositiveLengthMeasure
LongitudinalBarNominalDiameter: _LongitudinalBarNominalDiameter, //IfcPositiveLengthMeasure
TransverseBarNominalDiameter: _TransverseBarNominalDiameter, //IfcPositiveLengthMeasure
LongitudinalBarCrossSectionArea: _LongitudinalBarCrossSectionArea, //IfcAreaMeasure
TransverseBarCrossSectionArea: _TransverseBarCrossSectionArea, //IfcAreaMeasure
LongitudinalBarSpacing: _LongitudinalBarSpacing, //IfcPositiveLengthMeasure
TransverseBarSpacing: _TransverseBarSpacing, //IfcPositiveLengthMeasure
BendingShapeCode: _BendingShapeCode, //IfcLabel
BendingParameters: _BendingParameters //[object Object]
});
                  }
      }
      exports.IFCREINFORCINGMESHTYPE = IFCREINFORCINGMESHTYPE;
    
       class IFCTENDONANCHORTYPE extends IFCREINFORCINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTendonAnchorTypeEnum
});
                  }
      }
      exports.IFCTENDONANCHORTYPE = IFCTENDONANCHORTYPE;
    
       class IFCTENDONTYPE extends IFCREINFORCINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _NominalDiameter, _CrossSectionArea, _SheathDiameter) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcTendonTypeEnum
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea, //IfcAreaMeasure
SheathDiameter: _SheathDiameter //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCTENDONTYPE = IFCTENDONTYPE;
    
       class IFCREINFORCINGBARTYPE extends IFCREINFORCINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType, _NominalDiameter, _CrossSectionArea, _BarLength, _BarSurface, _BendingShapeCode, _BendingParameters) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcReinforcingBarTypeEnum
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea, //IfcAreaMeasure
BarLength: _BarLength, //IfcPositiveLengthMeasure
BarSurface: _BarSurface, //IfcReinforcingBarSurfaceEnum
BendingShapeCode: _BendingShapeCode, //IfcLabel
BendingParameters: _BendingParameters //[object Object]
});
                  }
      }
      exports.IFCREINFORCINGBARTYPE = IFCREINFORCINGBARTYPE;
    
       class IFCSTRUCTURALLINEARACTION extends IFCSTRUCTURALCURVEACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType);
                  
                  }
      }
      exports.IFCSTRUCTURALLINEARACTION = IFCSTRUCTURALLINEARACTION;
    
       class IFCSTRUCTURALPLANARACTION extends IFCSTRUCTURALSURFACEACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _ProjectedOrTrue, _PredefinedType);
                  
                  }
      }
      exports.IFCSTRUCTURALPLANARACTION = IFCSTRUCTURALPLANARACTION;
    
       class IFCSTRUCTURALSURFACEMEMBERVARYING extends IFCSTRUCTURALSURFACEMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness);
                  
                  }
      }
      exports.IFCSTRUCTURALSURFACEMEMBERVARYING = IFCSTRUCTURALSURFACEMEMBERVARYING;
    
       class IFCSTRUCTURALCURVEMEMBERVARYING extends IFCSTRUCTURALCURVEMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Axis) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Axis);
                  
                  }
      }
      exports.IFCSTRUCTURALCURVEMEMBERVARYING = IFCSTRUCTURALCURVEMEMBERVARYING;
    
       class IFCREINFORCINGMESH extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _MeshLength, _MeshWidth, _LongitudinalBarNominalDiameter, _TransverseBarNominalDiameter, _LongitudinalBarCrossSectionArea, _TransverseBarCrossSectionArea, _LongitudinalBarSpacing, _TransverseBarSpacing, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
MeshLength: _MeshLength, //IfcPositiveLengthMeasure
MeshWidth: _MeshWidth, //IfcPositiveLengthMeasure
LongitudinalBarNominalDiameter: _LongitudinalBarNominalDiameter, //IfcPositiveLengthMeasure
TransverseBarNominalDiameter: _TransverseBarNominalDiameter, //IfcPositiveLengthMeasure
LongitudinalBarCrossSectionArea: _LongitudinalBarCrossSectionArea, //IfcAreaMeasure
TransverseBarCrossSectionArea: _TransverseBarCrossSectionArea, //IfcAreaMeasure
LongitudinalBarSpacing: _LongitudinalBarSpacing, //IfcPositiveLengthMeasure
TransverseBarSpacing: _TransverseBarSpacing, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType //IfcReinforcingMeshTypeEnum
});
                  }
      }
      exports.IFCREINFORCINGMESH = IFCREINFORCINGMESH;
    
       class IFCTENDON extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _PredefinedType, _NominalDiameter, _CrossSectionArea, _TensionForce, _PreStress, _FrictionCoefficient, _AnchorageSlip, _MinCurvatureRadius) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcTendonTypeEnum
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea, //IfcAreaMeasure
TensionForce: _TensionForce, //IfcForceMeasure
PreStress: _PreStress, //IfcPressureMeasure
FrictionCoefficient: _FrictionCoefficient, //IfcNormalisedRatioMeasure
AnchorageSlip: _AnchorageSlip, //IfcPositiveLengthMeasure
MinCurvatureRadius: _MinCurvatureRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCTENDON = IFCTENDON;
    
       class IFCTENDONANCHOR extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTendonAnchorTypeEnum
});
                  }
      }
      exports.IFCTENDONANCHOR = IFCTENDONANCHOR;
    
       class IFCREINFORCINGBAR extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _NominalDiameter, _CrossSectionArea, _BarLength, _PredefinedType, _BarSurface) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea, //IfcAreaMeasure
BarLength: _BarLength, //IfcPositiveLengthMeasure
PredefinedType: _PredefinedType, //IfcReinforcingBarTypeEnum
BarSurface: _BarSurface //IfcReinforcingBarSurfaceEnum
});
                  }
      }
      exports.IFCREINFORCINGBAR = IFCREINFORCINGBAR;
    
       class IFCPROJECTIONELEMENT extends IFCFEATUREELEMENTADDITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProjectionElementTypeEnum
});
                  }
      }
      exports.IFCPROJECTIONELEMENT = IFCPROJECTIONELEMENT;
    
       class IFCOPENINGELEMENT extends IFCFEATUREELEMENTSUBTRACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcOpeningElementTypeEnum
});
                  }
      }
      exports.IFCOPENINGELEMENT = IFCOPENINGELEMENT;
    
       class IFCVOIDINGFEATURE extends IFCFEATUREELEMENTSUBTRACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcVoidingFeatureTypeEnum
});
                  }
      }
      exports.IFCVOIDINGFEATURE = IFCVOIDINGFEATURE;
    
       class IFCCOLUMNSTANDARDCASE extends IFCCOLUMN {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCCOLUMNSTANDARDCASE = IFCCOLUMNSTANDARDCASE;
    
       class IFCDOORSTANDARDCASE extends IFCDOOR {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _OperationType, _UserDefinedOperationType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _OperationType, _UserDefinedOperationType);
                  
                  }
      }
      exports.IFCDOORSTANDARDCASE = IFCDOORSTANDARDCASE;
    
       class IFCMEMBERSTANDARDCASE extends IFCMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCMEMBERSTANDARDCASE = IFCMEMBERSTANDARDCASE;
    
       class IFCPLATESTANDARDCASE extends IFCPLATE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCPLATESTANDARDCASE = IFCPLATESTANDARDCASE;
    
       class IFCSLABELEMENTEDCASE extends IFCSLAB {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCSLABELEMENTEDCASE = IFCSLABELEMENTEDCASE;
    
       class IFCSLABSTANDARDCASE extends IFCSLAB {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCSLABSTANDARDCASE = IFCSLABSTANDARDCASE;
    
       class IFCWALLELEMENTEDCASE extends IFCWALL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCWALLELEMENTEDCASE = IFCWALLELEMENTEDCASE;
    
       class IFCWALLSTANDARDCASE extends IFCWALL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCWALLSTANDARDCASE = IFCWALLSTANDARDCASE;
    
       class IFCWINDOWSTANDARDCASE extends IFCWINDOW {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _PartitioningType, _UserDefinedPartitioningType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth, _PredefinedType, _PartitioningType, _UserDefinedPartitioningType);
                  
                  }
      }
      exports.IFCWINDOWSTANDARDCASE = IFCWINDOWSTANDARDCASE;
    
       class IFCBEAMSTANDARDCASE extends IFCBEAM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCBEAMSTANDARDCASE = IFCBEAMSTANDARDCASE;
    
       class IFCENERGYCONVERSIONDEVICE extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCENERGYCONVERSIONDEVICE = IFCENERGYCONVERSIONDEVICE;
    
       class IFCFLOWCONTROLLER extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWCONTROLLER = IFCFLOWCONTROLLER;
    
       class IFCFLOWFITTING extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWFITTING = IFCFLOWFITTING;
    
       class IFCFLOWMOVINGDEVICE extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWMOVINGDEVICE = IFCFLOWMOVINGDEVICE;
    
       class IFCFLOWSEGMENT extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWSEGMENT = IFCFLOWSEGMENT;
    
       class IFCFLOWSTORAGEDEVICE extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWSTORAGEDEVICE = IFCFLOWSTORAGEDEVICE;
    
       class IFCFLOWTERMINAL extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWTERMINAL = IFCFLOWTERMINAL;
    
       class IFCFLOWTREATMENTDEVICE extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFLOWTREATMENTDEVICE = IFCFLOWTREATMENTDEVICE;
    
       class IFCDISTRIBUTIONCHAMBERELEMENT extends IFCDISTRIBUTIONFLOWELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDistributionChamberElementTypeEnum
});
                  }
      }
      exports.IFCDISTRIBUTIONCHAMBERELEMENT = IFCDISTRIBUTIONCHAMBERELEMENT;
    
       class IFCFLOWINSTRUMENT extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFlowInstrumentTypeEnum
});
                  }
      }
      exports.IFCFLOWINSTRUMENT = IFCFLOWINSTRUMENT;
    
       class IFCPROTECTIVEDEVICETRIPPINGUNIT extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProtectiveDeviceTrippingUnitTypeEnum
});
                  }
      }
      exports.IFCPROTECTIVEDEVICETRIPPINGUNIT = IFCPROTECTIVEDEVICETRIPPINGUNIT;
    
       class IFCSENSOR extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSensorTypeEnum
});
                  }
      }
      exports.IFCSENSOR = IFCSENSOR;
    
       class IFCUNITARYCONTROLELEMENT extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcUnitaryControlElementTypeEnum
});
                  }
      }
      exports.IFCUNITARYCONTROLELEMENT = IFCUNITARYCONTROLELEMENT;
    
       class IFCACTUATOR extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcActuatorTypeEnum
});
                  }
      }
      exports.IFCACTUATOR = IFCACTUATOR;
    
       class IFCALARM extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAlarmTypeEnum
});
                  }
      }
      exports.IFCALARM = IFCALARM;
    
       class IFCCONTROLLER extends IFCDISTRIBUTIONCONTROLELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcControllerTypeEnum
});
                  }
      }
      exports.IFCCONTROLLER = IFCCONTROLLER;
    
       class IFCENGINETYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEngineTypeEnum
});
                  }
      }
      exports.IFCENGINETYPE = IFCENGINETYPE;
    
       class IFCEVAPORATIVECOOLERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEvaporativeCoolerTypeEnum
});
                  }
      }
      exports.IFCEVAPORATIVECOOLERTYPE = IFCEVAPORATIVECOOLERTYPE;
    
       class IFCEVAPORATORTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEvaporatorTypeEnum
});
                  }
      }
      exports.IFCEVAPORATORTYPE = IFCEVAPORATORTYPE;
    
       class IFCHEATEXCHANGERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcHeatExchangerTypeEnum
});
                  }
      }
      exports.IFCHEATEXCHANGERTYPE = IFCHEATEXCHANGERTYPE;
    
       class IFCHUMIDIFIERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcHumidifierTypeEnum
});
                  }
      }
      exports.IFCHUMIDIFIERTYPE = IFCHUMIDIFIERTYPE;
    
       class IFCMOTORCONNECTIONTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMotorConnectionTypeEnum
});
                  }
      }
      exports.IFCMOTORCONNECTIONTYPE = IFCMOTORCONNECTIONTYPE;
    
       class IFCSOLARDEVICETYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSolarDeviceTypeEnum
});
                  }
      }
      exports.IFCSOLARDEVICETYPE = IFCSOLARDEVICETYPE;
    
       class IFCTRANSFORMERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTransformerTypeEnum
});
                  }
      }
      exports.IFCTRANSFORMERTYPE = IFCTRANSFORMERTYPE;
    
       class IFCTUBEBUNDLETYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTubeBundleTypeEnum
});
                  }
      }
      exports.IFCTUBEBUNDLETYPE = IFCTUBEBUNDLETYPE;
    
       class IFCUNITARYEQUIPMENTTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcUnitaryEquipmentTypeEnum
});
                  }
      }
      exports.IFCUNITARYEQUIPMENTTYPE = IFCUNITARYEQUIPMENTTYPE;
    
       class IFCAIRTOAIRHEATRECOVERYTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirToAirHeatRecoveryTypeEnum
});
                  }
      }
      exports.IFCAIRTOAIRHEATRECOVERYTYPE = IFCAIRTOAIRHEATRECOVERYTYPE;
    
       class IFCBOILERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBoilerTypeEnum
});
                  }
      }
      exports.IFCBOILERTYPE = IFCBOILERTYPE;
    
       class IFCBURNERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBurnerTypeEnum
});
                  }
      }
      exports.IFCBURNERTYPE = IFCBURNERTYPE;
    
       class IFCCHILLERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcChillerTypeEnum
});
                  }
      }
      exports.IFCCHILLERTYPE = IFCCHILLERTYPE;
    
       class IFCCOILTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoilTypeEnum
});
                  }
      }
      exports.IFCCOILTYPE = IFCCOILTYPE;
    
       class IFCCONDENSERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCondenserTypeEnum
});
                  }
      }
      exports.IFCCONDENSERTYPE = IFCCONDENSERTYPE;
    
       class IFCCOOLEDBEAMTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCooledBeamTypeEnum
});
                  }
      }
      exports.IFCCOOLEDBEAMTYPE = IFCCOOLEDBEAMTYPE;
    
       class IFCCOOLINGTOWERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoolingTowerTypeEnum
});
                  }
      }
      exports.IFCCOOLINGTOWERTYPE = IFCCOOLINGTOWERTYPE;
    
       class IFCELECTRICGENERATORTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricGeneratorTypeEnum
});
                  }
      }
      exports.IFCELECTRICGENERATORTYPE = IFCELECTRICGENERATORTYPE;
    
       class IFCELECTRICMOTORTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricMotorTypeEnum
});
                  }
      }
      exports.IFCELECTRICMOTORTYPE = IFCELECTRICMOTORTYPE;
    
       class IFCFLOWMETERTYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFlowMeterTypeEnum
});
                  }
      }
      exports.IFCFLOWMETERTYPE = IFCFLOWMETERTYPE;
    
       class IFCPROTECTIVEDEVICETYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProtectiveDeviceTypeEnum
});
                  }
      }
      exports.IFCPROTECTIVEDEVICETYPE = IFCPROTECTIVEDEVICETYPE;
    
       class IFCSWITCHINGDEVICETYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSwitchingDeviceTypeEnum
});
                  }
      }
      exports.IFCSWITCHINGDEVICETYPE = IFCSWITCHINGDEVICETYPE;
    
       class IFCVALVETYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcValveTypeEnum
});
                  }
      }
      exports.IFCVALVETYPE = IFCVALVETYPE;
    
       class IFCAIRTERMINALBOXTYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirTerminalBoxTypeEnum
});
                  }
      }
      exports.IFCAIRTERMINALBOXTYPE = IFCAIRTERMINALBOXTYPE;
    
       class IFCDAMPERTYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDamperTypeEnum
});
                  }
      }
      exports.IFCDAMPERTYPE = IFCDAMPERTYPE;
    
       class IFCELECTRICDISTRIBUTIONBOARDTYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricDistributionBoardTypeEnum
});
                  }
      }
      exports.IFCELECTRICDISTRIBUTIONBOARDTYPE = IFCELECTRICDISTRIBUTIONBOARDTYPE;
    
       class IFCELECTRICTIMECONTROLTYPE extends IFCFLOWCONTROLLERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricTimeControlTypeEnum
});
                  }
      }
      exports.IFCELECTRICTIMECONTROLTYPE = IFCELECTRICTIMECONTROLTYPE;
    
       class IFCJUNCTIONBOXTYPE extends IFCFLOWFITTINGTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcJunctionBoxTypeEnum
});
                  }
      }
      exports.IFCJUNCTIONBOXTYPE = IFCJUNCTIONBOXTYPE;
    
       class IFCPIPEFITTINGTYPE extends IFCFLOWFITTINGTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPipeFittingTypeEnum
});
                  }
      }
      exports.IFCPIPEFITTINGTYPE = IFCPIPEFITTINGTYPE;
    
       class IFCCABLECARRIERFITTINGTYPE extends IFCFLOWFITTINGTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableCarrierFittingTypeEnum
});
                  }
      }
      exports.IFCCABLECARRIERFITTINGTYPE = IFCCABLECARRIERFITTINGTYPE;
    
       class IFCCABLEFITTINGTYPE extends IFCFLOWFITTINGTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableFittingTypeEnum
});
                  }
      }
      exports.IFCCABLEFITTINGTYPE = IFCCABLEFITTINGTYPE;
    
       class IFCDUCTFITTINGTYPE extends IFCFLOWFITTINGTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctFittingTypeEnum
});
                  }
      }
      exports.IFCDUCTFITTINGTYPE = IFCDUCTFITTINGTYPE;
    
       class IFCPUMPTYPE extends IFCFLOWMOVINGDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPumpTypeEnum
});
                  }
      }
      exports.IFCPUMPTYPE = IFCPUMPTYPE;
    
       class IFCCOMPRESSORTYPE extends IFCFLOWMOVINGDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCompressorTypeEnum
});
                  }
      }
      exports.IFCCOMPRESSORTYPE = IFCCOMPRESSORTYPE;
    
       class IFCFANTYPE extends IFCFLOWMOVINGDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFanTypeEnum
});
                  }
      }
      exports.IFCFANTYPE = IFCFANTYPE;
    
       class IFCPIPESEGMENTTYPE extends IFCFLOWSEGMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPipeSegmentTypeEnum
});
                  }
      }
      exports.IFCPIPESEGMENTTYPE = IFCPIPESEGMENTTYPE;
    
       class IFCCABLECARRIERSEGMENTTYPE extends IFCFLOWSEGMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableCarrierSegmentTypeEnum
});
                  }
      }
      exports.IFCCABLECARRIERSEGMENTTYPE = IFCCABLECARRIERSEGMENTTYPE;
    
       class IFCCABLESEGMENTTYPE extends IFCFLOWSEGMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableSegmentTypeEnum
});
                  }
      }
      exports.IFCCABLESEGMENTTYPE = IFCCABLESEGMENTTYPE;
    
       class IFCDUCTSEGMENTTYPE extends IFCFLOWSEGMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctSegmentTypeEnum
});
                  }
      }
      exports.IFCDUCTSEGMENTTYPE = IFCDUCTSEGMENTTYPE;
    
       class IFCTANKTYPE extends IFCFLOWSTORAGEDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTankTypeEnum
});
                  }
      }
      exports.IFCTANKTYPE = IFCTANKTYPE;
    
       class IFCELECTRICFLOWSTORAGEDEVICETYPE extends IFCFLOWSTORAGEDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricFlowStorageDeviceTypeEnum
});
                  }
      }
      exports.IFCELECTRICFLOWSTORAGEDEVICETYPE = IFCELECTRICFLOWSTORAGEDEVICETYPE;
    
       class IFCLAMPTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLampTypeEnum
});
                  }
      }
      exports.IFCLAMPTYPE = IFCLAMPTYPE;
    
       class IFCLIGHTFIXTURETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLightFixtureTypeEnum
});
                  }
      }
      exports.IFCLIGHTFIXTURETYPE = IFCLIGHTFIXTURETYPE;
    
       class IFCMEDICALDEVICETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMedicalDeviceTypeEnum
});
                  }
      }
      exports.IFCMEDICALDEVICETYPE = IFCMEDICALDEVICETYPE;
    
       class IFCOUTLETTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcOutletTypeEnum
});
                  }
      }
      exports.IFCOUTLETTYPE = IFCOUTLETTYPE;
    
       class IFCSANITARYTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSanitaryTerminalTypeEnum
});
                  }
      }
      exports.IFCSANITARYTERMINALTYPE = IFCSANITARYTERMINALTYPE;
    
       class IFCSPACEHEATERTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSpaceHeaterTypeEnum
});
                  }
      }
      exports.IFCSPACEHEATERTYPE = IFCSPACEHEATERTYPE;
    
       class IFCSTACKTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStackTerminalTypeEnum
});
                  }
      }
      exports.IFCSTACKTERMINALTYPE = IFCSTACKTERMINALTYPE;
    
       class IFCWASTETERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWasteTerminalTypeEnum
});
                  }
      }
      exports.IFCWASTETERMINALTYPE = IFCWASTETERMINALTYPE;
    
       class IFCAIRTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirTerminalTypeEnum
});
                  }
      }
      exports.IFCAIRTERMINALTYPE = IFCAIRTERMINALTYPE;
    
       class IFCAUDIOVISUALAPPLIANCETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAudioVisualApplianceTypeEnum
});
                  }
      }
      exports.IFCAUDIOVISUALAPPLIANCETYPE = IFCAUDIOVISUALAPPLIANCETYPE;
    
       class IFCCOMMUNICATIONSAPPLIANCETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCommunicationsApplianceTypeEnum
});
                  }
      }
      exports.IFCCOMMUNICATIONSAPPLIANCETYPE = IFCCOMMUNICATIONSAPPLIANCETYPE;
    
       class IFCELECTRICAPPLIANCETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricApplianceTypeEnum
});
                  }
      }
      exports.IFCELECTRICAPPLIANCETYPE = IFCELECTRICAPPLIANCETYPE;
    
       class IFCFIRESUPPRESSIONTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFireSuppressionTerminalTypeEnum
});
                  }
      }
      exports.IFCFIRESUPPRESSIONTERMINALTYPE = IFCFIRESUPPRESSIONTERMINALTYPE;
    
       class IFCINTERCEPTORTYPE extends IFCFLOWTREATMENTDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcInterceptorTypeEnum
});
                  }
      }
      exports.IFCINTERCEPTORTYPE = IFCINTERCEPTORTYPE;
    
       class IFCDUCTSILENCERTYPE extends IFCFLOWTREATMENTDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctSilencerTypeEnum
});
                  }
      }
      exports.IFCDUCTSILENCERTYPE = IFCDUCTSILENCERTYPE;
    
       class IFCFILTERTYPE extends IFCFLOWTREATMENTDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFilterTypeEnum
});
                  }
      }
      exports.IFCFILTERTYPE = IFCFILTERTYPE;
    
       class IFCOPENINGSTANDARDCASE extends IFCOPENINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType);
                  
                  }
      }
      exports.IFCOPENINGSTANDARDCASE = IFCOPENINGSTANDARDCASE;
    
       class IFCENGINE extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEngineTypeEnum
});
                  }
      }
      exports.IFCENGINE = IFCENGINE;
    
       class IFCEVAPORATIVECOOLER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEvaporativeCoolerTypeEnum
});
                  }
      }
      exports.IFCEVAPORATIVECOOLER = IFCEVAPORATIVECOOLER;
    
       class IFCEVAPORATOR extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcEvaporatorTypeEnum
});
                  }
      }
      exports.IFCEVAPORATOR = IFCEVAPORATOR;
    
       class IFCHEATEXCHANGER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcHeatExchangerTypeEnum
});
                  }
      }
      exports.IFCHEATEXCHANGER = IFCHEATEXCHANGER;
    
       class IFCHUMIDIFIER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcHumidifierTypeEnum
});
                  }
      }
      exports.IFCHUMIDIFIER = IFCHUMIDIFIER;
    
       class IFCMOTORCONNECTION extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMotorConnectionTypeEnum
});
                  }
      }
      exports.IFCMOTORCONNECTION = IFCMOTORCONNECTION;
    
       class IFCSOLARDEVICE extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSolarDeviceTypeEnum
});
                  }
      }
      exports.IFCSOLARDEVICE = IFCSOLARDEVICE;
    
       class IFCTRANSFORMER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTransformerTypeEnum
});
                  }
      }
      exports.IFCTRANSFORMER = IFCTRANSFORMER;
    
       class IFCTUBEBUNDLE extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTubeBundleTypeEnum
});
                  }
      }
      exports.IFCTUBEBUNDLE = IFCTUBEBUNDLE;
    
       class IFCUNITARYEQUIPMENT extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcUnitaryEquipmentTypeEnum
});
                  }
      }
      exports.IFCUNITARYEQUIPMENT = IFCUNITARYEQUIPMENT;
    
       class IFCAIRTOAIRHEATRECOVERY extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirToAirHeatRecoveryTypeEnum
});
                  }
      }
      exports.IFCAIRTOAIRHEATRECOVERY = IFCAIRTOAIRHEATRECOVERY;
    
       class IFCBOILER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBoilerTypeEnum
});
                  }
      }
      exports.IFCBOILER = IFCBOILER;
    
       class IFCBURNER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcBurnerTypeEnum
});
                  }
      }
      exports.IFCBURNER = IFCBURNER;
    
       class IFCCHILLER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcChillerTypeEnum
});
                  }
      }
      exports.IFCCHILLER = IFCCHILLER;
    
       class IFCCOIL extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoilTypeEnum
});
                  }
      }
      exports.IFCCOIL = IFCCOIL;
    
       class IFCCONDENSER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCondenserTypeEnum
});
                  }
      }
      exports.IFCCONDENSER = IFCCONDENSER;
    
       class IFCCOOLEDBEAM extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCooledBeamTypeEnum
});
                  }
      }
      exports.IFCCOOLEDBEAM = IFCCOOLEDBEAM;
    
       class IFCCOOLINGTOWER extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCoolingTowerTypeEnum
});
                  }
      }
      exports.IFCCOOLINGTOWER = IFCCOOLINGTOWER;
    
       class IFCELECTRICGENERATOR extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricGeneratorTypeEnum
});
                  }
      }
      exports.IFCELECTRICGENERATOR = IFCELECTRICGENERATOR;
    
       class IFCELECTRICMOTOR extends IFCENERGYCONVERSIONDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricMotorTypeEnum
});
                  }
      }
      exports.IFCELECTRICMOTOR = IFCELECTRICMOTOR;
    
       class IFCFLOWMETER extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFlowMeterTypeEnum
});
                  }
      }
      exports.IFCFLOWMETER = IFCFLOWMETER;
    
       class IFCPROTECTIVEDEVICE extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcProtectiveDeviceTypeEnum
});
                  }
      }
      exports.IFCPROTECTIVEDEVICE = IFCPROTECTIVEDEVICE;
    
       class IFCSWITCHINGDEVICE extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSwitchingDeviceTypeEnum
});
                  }
      }
      exports.IFCSWITCHINGDEVICE = IFCSWITCHINGDEVICE;
    
       class IFCVALVE extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcValveTypeEnum
});
                  }
      }
      exports.IFCVALVE = IFCVALVE;
    
       class IFCAIRTERMINALBOX extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirTerminalBoxTypeEnum
});
                  }
      }
      exports.IFCAIRTERMINALBOX = IFCAIRTERMINALBOX;
    
       class IFCDAMPER extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDamperTypeEnum
});
                  }
      }
      exports.IFCDAMPER = IFCDAMPER;
    
       class IFCELECTRICDISTRIBUTIONBOARD extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricDistributionBoardTypeEnum
});
                  }
      }
      exports.IFCELECTRICDISTRIBUTIONBOARD = IFCELECTRICDISTRIBUTIONBOARD;
    
       class IFCELECTRICTIMECONTROL extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricTimeControlTypeEnum
});
                  }
      }
      exports.IFCELECTRICTIMECONTROL = IFCELECTRICTIMECONTROL;
    
       class IFCJUNCTIONBOX extends IFCFLOWFITTING {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcJunctionBoxTypeEnum
});
                  }
      }
      exports.IFCJUNCTIONBOX = IFCJUNCTIONBOX;
    
       class IFCPIPEFITTING extends IFCFLOWFITTING {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPipeFittingTypeEnum
});
                  }
      }
      exports.IFCPIPEFITTING = IFCPIPEFITTING;
    
       class IFCCABLECARRIERFITTING extends IFCFLOWFITTING {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableCarrierFittingTypeEnum
});
                  }
      }
      exports.IFCCABLECARRIERFITTING = IFCCABLECARRIERFITTING;
    
       class IFCCABLEFITTING extends IFCFLOWFITTING {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableFittingTypeEnum
});
                  }
      }
      exports.IFCCABLEFITTING = IFCCABLEFITTING;
    
       class IFCDUCTFITTING extends IFCFLOWFITTING {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctFittingTypeEnum
});
                  }
      }
      exports.IFCDUCTFITTING = IFCDUCTFITTING;
    
       class IFCPUMP extends IFCFLOWMOVINGDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPumpTypeEnum
});
                  }
      }
      exports.IFCPUMP = IFCPUMP;
    
       class IFCCOMPRESSOR extends IFCFLOWMOVINGDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCompressorTypeEnum
});
                  }
      }
      exports.IFCCOMPRESSOR = IFCCOMPRESSOR;
    
       class IFCFAN extends IFCFLOWMOVINGDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFanTypeEnum
});
                  }
      }
      exports.IFCFAN = IFCFAN;
    
       class IFCPIPESEGMENT extends IFCFLOWSEGMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcPipeSegmentTypeEnum
});
                  }
      }
      exports.IFCPIPESEGMENT = IFCPIPESEGMENT;
    
       class IFCCABLECARRIERSEGMENT extends IFCFLOWSEGMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableCarrierSegmentTypeEnum
});
                  }
      }
      exports.IFCCABLECARRIERSEGMENT = IFCCABLECARRIERSEGMENT;
    
       class IFCCABLESEGMENT extends IFCFLOWSEGMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCableSegmentTypeEnum
});
                  }
      }
      exports.IFCCABLESEGMENT = IFCCABLESEGMENT;
    
       class IFCDUCTSEGMENT extends IFCFLOWSEGMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctSegmentTypeEnum
});
                  }
      }
      exports.IFCDUCTSEGMENT = IFCDUCTSEGMENT;
    
       class IFCTANK extends IFCFLOWSTORAGEDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcTankTypeEnum
});
                  }
      }
      exports.IFCTANK = IFCTANK;
    
       class IFCELECTRICFLOWSTORAGEDEVICE extends IFCFLOWSTORAGEDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricFlowStorageDeviceTypeEnum
});
                  }
      }
      exports.IFCELECTRICFLOWSTORAGEDEVICE = IFCELECTRICFLOWSTORAGEDEVICE;
    
       class IFCLAMP extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLampTypeEnum
});
                  }
      }
      exports.IFCLAMP = IFCLAMP;
    
       class IFCLIGHTFIXTURE extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcLightFixtureTypeEnum
});
                  }
      }
      exports.IFCLIGHTFIXTURE = IFCLIGHTFIXTURE;
    
       class IFCMEDICALDEVICE extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMedicalDeviceTypeEnum
});
                  }
      }
      exports.IFCMEDICALDEVICE = IFCMEDICALDEVICE;
    
       class IFCOUTLET extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcOutletTypeEnum
});
                  }
      }
      exports.IFCOUTLET = IFCOUTLET;
    
       class IFCSANITARYTERMINAL extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSanitaryTerminalTypeEnum
});
                  }
      }
      exports.IFCSANITARYTERMINAL = IFCSANITARYTERMINAL;
    
       class IFCSPACEHEATER extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSpaceHeaterTypeEnum
});
                  }
      }
      exports.IFCSPACEHEATER = IFCSPACEHEATER;
    
       class IFCSTACKTERMINAL extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStackTerminalTypeEnum
});
                  }
      }
      exports.IFCSTACKTERMINAL = IFCSTACKTERMINAL;
    
       class IFCWASTETERMINAL extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWasteTerminalTypeEnum
});
                  }
      }
      exports.IFCWASTETERMINAL = IFCWASTETERMINAL;
    
       class IFCAIRTERMINAL extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAirTerminalTypeEnum
});
                  }
      }
      exports.IFCAIRTERMINAL = IFCAIRTERMINAL;
    
       class IFCAUDIOVISUALAPPLIANCE extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcAudioVisualApplianceTypeEnum
});
                  }
      }
      exports.IFCAUDIOVISUALAPPLIANCE = IFCAUDIOVISUALAPPLIANCE;
    
       class IFCCOMMUNICATIONSAPPLIANCE extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcCommunicationsApplianceTypeEnum
});
                  }
      }
      exports.IFCCOMMUNICATIONSAPPLIANCE = IFCCOMMUNICATIONSAPPLIANCE;
    
       class IFCELECTRICAPPLIANCE extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricApplianceTypeEnum
});
                  }
      }
      exports.IFCELECTRICAPPLIANCE = IFCELECTRICAPPLIANCE;
    
       class IFCFIRESUPPRESSIONTERMINAL extends IFCFLOWTERMINAL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFireSuppressionTerminalTypeEnum
});
                  }
      }
      exports.IFCFIRESUPPRESSIONTERMINAL = IFCFIRESUPPRESSIONTERMINAL;
    
       class IFCINTERCEPTOR extends IFCFLOWTREATMENTDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcInterceptorTypeEnum
});
                  }
      }
      exports.IFCINTERCEPTOR = IFCINTERCEPTOR;
    
       class IFCDUCTSILENCER extends IFCFLOWTREATMENTDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcDuctSilencerTypeEnum
});
                  }
      }
      exports.IFCDUCTSILENCER = IFCDUCTSILENCER;
    
       class IFCFILTER extends IFCFLOWTREATMENTDEVICE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFilterTypeEnum
});
                  }
      }
      exports.IFCFILTER = IFCFILTER;
    