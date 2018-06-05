var TYPES = require("./IFC2X3_types");
  
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
          constructor(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
AppliedValue: _AppliedValue, //IfcAppliedValueSelect
UnitBasis: _UnitBasis, //IfcMeasureWithUnit
ApplicableDate: _ApplicableDate, //IfcDateTimeSelect
FixedUntilDate: _FixedUntilDate //IfcDateTimeSelect
});
                  }
      }
      exports.IFCAPPLIEDVALUE = IFCAPPLIEDVALUE;
    
       class IFCAPPLIEDVALUERELATIONSHIP extends TYPES.IFC {
          constructor(_ComponentOfTotal, _Components, _ArithmeticOperator, _Name, _Description) {
                  super();
                  this.add_attr({
ComponentOfTotal: _ComponentOfTotal, //IfcAppliedValue
Components: _Components, //[object Object]
ArithmeticOperator: _ArithmeticOperator, //IfcArithmeticOperatorEnum
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCAPPLIEDVALUERELATIONSHIP = IFCAPPLIEDVALUERELATIONSHIP;
    
       class IFCAPPROVAL extends TYPES.IFC {
          constructor(_Description, _ApprovalDateTime, _ApprovalStatus, _ApprovalLevel, _ApprovalQualifier, _Name, _Identifier) {
                  super();
                  this.add_attr({
Description: _Description, //IfcText
ApprovalDateTime: _ApprovalDateTime, //IfcDateTimeSelect
ApprovalStatus: _ApprovalStatus, //IfcLabel
ApprovalLevel: _ApprovalLevel, //IfcLabel
ApprovalQualifier: _ApprovalQualifier, //IfcText
Name: _Name, //IfcLabel
Identifier: _Identifier //IfcIdentifier
});
                  }
      }
      exports.IFCAPPROVAL = IFCAPPROVAL;
    
       class IFCAPPROVALACTORRELATIONSHIP extends TYPES.IFC {
          constructor(_Actor, _Approval, _Role) {
                  super();
                  this.add_attr({
Actor: _Actor, //IfcActorSelect
Approval: _Approval, //IfcApproval
Role: _Role //IfcActorRole
});
                  }
      }
      exports.IFCAPPROVALACTORRELATIONSHIP = IFCAPPROVALACTORRELATIONSHIP;
    
       class IFCAPPROVALPROPERTYRELATIONSHIP extends TYPES.IFC {
          constructor(_ApprovedProperties, _Approval) {
                  super();
                  this.add_attr({
ApprovedProperties: _ApprovedProperties, //[object Object]
Approval: _Approval //IfcApproval
});
                  }
      }
      exports.IFCAPPROVALPROPERTYRELATIONSHIP = IFCAPPROVALPROPERTYRELATIONSHIP;
    
       class IFCAPPROVALRELATIONSHIP extends TYPES.IFC {
          constructor(_RelatedApproval, _RelatingApproval, _Description, _Name) {
                  super();
                  this.add_attr({
RelatedApproval: _RelatedApproval, //IfcApproval
RelatingApproval: _RelatingApproval, //IfcApproval
Description: _Description, //IfcText
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCAPPROVALRELATIONSHIP = IFCAPPROVALRELATIONSHIP;
    
       class IFCBOUNDARYCONDITION extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCBOUNDARYCONDITION = IFCBOUNDARYCONDITION;
    
       class IFCCALENDARDATE extends TYPES.IFC {
          constructor(_DayComponent, _MonthComponent, _YearComponent) {
                  super();
                  this.add_attr({
DayComponent: _DayComponent, //IfcDayInMonthNumber
MonthComponent: _MonthComponent, //IfcMonthInYearNumber
YearComponent: _YearComponent //IfcYearNumber
});
                  }
      }
      exports.IFCCALENDARDATE = IFCCALENDARDATE;
    
       class IFCCLASSIFICATION extends TYPES.IFC {
          constructor(_Source, _Edition, _EditionDate, _Name) {
                  super();
                  this.add_attr({
Source: _Source, //IfcLabel
Edition: _Edition, //IfcLabel
EditionDate: _EditionDate, //IfcCalendarDate
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCCLASSIFICATION = IFCCLASSIFICATION;
    
       class IFCCLASSIFICATIONITEM extends TYPES.IFC {
          constructor(_Notation, _ItemOf, _Title) {
                  super();
                  this.add_attr({
Notation: _Notation, //IfcClassificationNotationFacet
ItemOf: _ItemOf, //IfcClassification
Title: _Title //IfcLabel
});
                  }
      }
      exports.IFCCLASSIFICATIONITEM = IFCCLASSIFICATIONITEM;
    
       class IFCCLASSIFICATIONITEMRELATIONSHIP extends TYPES.IFC {
          constructor(_RelatingItem, _RelatedItems) {
                  super();
                  this.add_attr({
RelatingItem: _RelatingItem, //IfcClassificationItem
RelatedItems: _RelatedItems //[object Object]
});
                  }
      }
      exports.IFCCLASSIFICATIONITEMRELATIONSHIP = IFCCLASSIFICATIONITEMRELATIONSHIP;
    
       class IFCCLASSIFICATIONNOTATION extends TYPES.IFC {
          constructor(_NotationFacets) {
                  super();
                  this.add_attr({
NotationFacets: _NotationFacets //[object Object]
});
                  }
      }
      exports.IFCCLASSIFICATIONNOTATION = IFCCLASSIFICATIONNOTATION;
    
       class IFCCLASSIFICATIONNOTATIONFACET extends TYPES.IFC {
          constructor(_NotationValue) {
                  super();
                  this.add_attr({
NotationValue: _NotationValue //IfcLabel
});
                  }
      }
      exports.IFCCLASSIFICATIONNOTATIONFACET = IFCCLASSIFICATIONNOTATIONFACET;
    
       class IFCCOLOURSPECIFICATION extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCCOLOURSPECIFICATION = IFCCOLOURSPECIFICATION;
    
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
CreationTime: _CreationTime, //IfcDateTimeSelect
UserDefinedGrade: _UserDefinedGrade //IfcLabel
});
                  }
      }
      exports.IFCCONSTRAINT = IFCCONSTRAINT;
    
       class IFCCONSTRAINTAGGREGATIONRELATIONSHIP extends TYPES.IFC {
          constructor(_Name, _Description, _RelatingConstraint, _RelatedConstraints, _LogicalAggregator) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
RelatingConstraint: _RelatingConstraint, //IfcConstraint
RelatedConstraints: _RelatedConstraints, //[object Object]
LogicalAggregator: _LogicalAggregator //IfcLogicalOperatorEnum
});
                  }
      }
      exports.IFCCONSTRAINTAGGREGATIONRELATIONSHIP = IFCCONSTRAINTAGGREGATIONRELATIONSHIP;
    
       class IFCCONSTRAINTCLASSIFICATIONRELATIONSHIP extends TYPES.IFC {
          constructor(_ClassifiedConstraint, _RelatedClassifications) {
                  super();
                  this.add_attr({
ClassifiedConstraint: _ClassifiedConstraint, //IfcConstraint
RelatedClassifications: _RelatedClassifications //[object Object]
});
                  }
      }
      exports.IFCCONSTRAINTCLASSIFICATIONRELATIONSHIP = IFCCONSTRAINTCLASSIFICATIONRELATIONSHIP;
    
       class IFCCONSTRAINTRELATIONSHIP extends TYPES.IFC {
          constructor(_Name, _Description, _RelatingConstraint, _RelatedConstraints) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
RelatingConstraint: _RelatingConstraint, //IfcConstraint
RelatedConstraints: _RelatedConstraints //[object Object]
});
                  }
      }
      exports.IFCCONSTRAINTRELATIONSHIP = IFCCONSTRAINTRELATIONSHIP;
    
       class IFCCOORDINATEDUNIVERSALTIMEOFFSET extends TYPES.IFC {
          constructor(_HourOffset, _MinuteOffset, _Sense) {
                  super();
                  this.add_attr({
HourOffset: _HourOffset, //IfcHourInDay
MinuteOffset: _MinuteOffset, //IfcMinuteInHour
Sense: _Sense //IfcAheadOrBehind
});
                  }
      }
      exports.IFCCOORDINATEDUNIVERSALTIMEOFFSET = IFCCOORDINATEDUNIVERSALTIMEOFFSET;
    
       class IFCCURRENCYRELATIONSHIP extends TYPES.IFC {
          constructor(_RelatingMonetaryUnit, _RelatedMonetaryUnit, _ExchangeRate, _RateDateTime, _RateSource) {
                  super();
                  this.add_attr({
RelatingMonetaryUnit: _RelatingMonetaryUnit, //IfcMonetaryUnit
RelatedMonetaryUnit: _RelatedMonetaryUnit, //IfcMonetaryUnit
ExchangeRate: _ExchangeRate, //IfcPositiveRatioMeasure
RateDateTime: _RateDateTime, //IfcDateAndTime
RateSource: _RateSource //IfcLibraryInformation
});
                  }
      }
      exports.IFCCURRENCYRELATIONSHIP = IFCCURRENCYRELATIONSHIP;
    
       class IFCCURVESTYLEFONT extends TYPES.IFC {
          constructor(_Name, _PatternList) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
PatternList: _PatternList //[object Object]
});
                  }
      }
      exports.IFCCURVESTYLEFONT = IFCCURVESTYLEFONT;
    
       class IFCCURVESTYLEFONTANDSCALING extends TYPES.IFC {
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
    
       class IFCCURVESTYLEFONTPATTERN extends TYPES.IFC {
          constructor(_VisibleSegmentLength, _InvisibleSegmentLength) {
                  super();
                  this.add_attr({
VisibleSegmentLength: _VisibleSegmentLength, //IfcLengthMeasure
InvisibleSegmentLength: _InvisibleSegmentLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCURVESTYLEFONTPATTERN = IFCCURVESTYLEFONTPATTERN;
    
       class IFCDATEANDTIME extends TYPES.IFC {
          constructor(_DateComponent, _TimeComponent) {
                  super();
                  this.add_attr({
DateComponent: _DateComponent, //IfcCalendarDate
TimeComponent: _TimeComponent //IfcLocalTime
});
                  }
      }
      exports.IFCDATEANDTIME = IFCDATEANDTIME;
    
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
    
       class IFCDOCUMENTELECTRONICFORMAT extends TYPES.IFC {
          constructor(_FileExtension, _MimeContentType, _MimeSubtype) {
                  super();
                  this.add_attr({
FileExtension: _FileExtension, //IfcLabel
MimeContentType: _MimeContentType, //IfcLabel
MimeSubtype: _MimeSubtype //IfcLabel
});
                  }
      }
      exports.IFCDOCUMENTELECTRONICFORMAT = IFCDOCUMENTELECTRONICFORMAT;
    
       class IFCDOCUMENTINFORMATION extends TYPES.IFC {
          constructor(_DocumentId, _Name, _Description, _DocumentReferences, _Purpose, _IntendedUse, _Scope, _Revision, _DocumentOwner, _Editors, _CreationTime, _LastRevisionTime, _ElectronicFormat, _ValidFrom, _ValidUntil, _Confidentiality, _Status) {
                  super();
                  this.add_attr({
DocumentId: _DocumentId, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
DocumentReferences: _DocumentReferences, //[object Object]
Purpose: _Purpose, //IfcText
IntendedUse: _IntendedUse, //IfcText
Scope: _Scope, //IfcText
Revision: _Revision, //IfcLabel
DocumentOwner: _DocumentOwner, //IfcActorSelect
Editors: _Editors, //[object Object]
CreationTime: _CreationTime, //IfcDateAndTime
LastRevisionTime: _LastRevisionTime, //IfcDateAndTime
ElectronicFormat: _ElectronicFormat, //IfcDocumentElectronicFormat
ValidFrom: _ValidFrom, //IfcCalendarDate
ValidUntil: _ValidUntil, //IfcCalendarDate
Confidentiality: _Confidentiality, //IfcDocumentConfidentialityEnum
Status: _Status //IfcDocumentStatusEnum
});
                  }
      }
      exports.IFCDOCUMENTINFORMATION = IFCDOCUMENTINFORMATION;
    
       class IFCDOCUMENTINFORMATIONRELATIONSHIP extends TYPES.IFC {
          constructor(_RelatingDocument, _RelatedDocuments, _RelationshipType) {
                  super();
                  this.add_attr({
RelatingDocument: _RelatingDocument, //IfcDocumentInformation
RelatedDocuments: _RelatedDocuments, //[object Object]
RelationshipType: _RelationshipType //IfcLabel
});
                  }
      }
      exports.IFCDOCUMENTINFORMATIONRELATIONSHIP = IFCDOCUMENTINFORMATIONRELATIONSHIP;
    
       class IFCDRAUGHTINGCALLOUTRELATIONSHIP extends TYPES.IFC {
          constructor(_Name, _Description, _RelatingDraughtingCallout, _RelatedDraughtingCallout) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
RelatingDraughtingCallout: _RelatingDraughtingCallout, //IfcDraughtingCallout
RelatedDraughtingCallout: _RelatedDraughtingCallout //IfcDraughtingCallout
});
                  }
      }
      exports.IFCDRAUGHTINGCALLOUTRELATIONSHIP = IFCDRAUGHTINGCALLOUTRELATIONSHIP;
    
       class IFCEXTERNALREFERENCE extends TYPES.IFC {
          constructor(_Location, _ItemReference, _Name) {
                  super();
                  this.add_attr({
Location: _Location, //IfcLabel
ItemReference: _ItemReference, //IfcIdentifier
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
TimeStamp: _TimeStamp, //IfcDateTimeSelect
ListValues: _ListValues //[object Object]
});
                  }
      }
      exports.IFCIRREGULARTIMESERIESVALUE = IFCIRREGULARTIMESERIESVALUE;
    
       class IFCLIBRARYINFORMATION extends TYPES.IFC {
          constructor(_Name, _Version, _Publisher, _VersionDate, _LibraryReference) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Version: _Version, //IfcLabel
Publisher: _Publisher, //IfcOrganization
VersionDate: _VersionDate, //IfcCalendarDate
LibraryReference: _LibraryReference //[object Object]
});
                  }
      }
      exports.IFCLIBRARYINFORMATION = IFCLIBRARYINFORMATION;
    
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
    
       class IFCLOCALTIME extends TYPES.IFC {
          constructor(_HourComponent, _MinuteComponent, _SecondComponent, _Zone, _DaylightSavingOffset) {
                  super();
                  this.add_attr({
HourComponent: _HourComponent, //IfcHourInDay
MinuteComponent: _MinuteComponent, //IfcMinuteInHour
SecondComponent: _SecondComponent, //IfcSecondInMinute
Zone: _Zone, //IfcCoordinatedUniversalTimeOffset
DaylightSavingOffset: _DaylightSavingOffset //IfcDaylightSavingHour
});
                  }
      }
      exports.IFCLOCALTIME = IFCLOCALTIME;
    
       class IFCMATERIAL extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCMATERIAL = IFCMATERIAL;
    
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
    
       class IFCMATERIALLAYER extends TYPES.IFC {
          constructor(_Material, _LayerThickness, _IsVentilated) {
                  super();
                  this.add_attr({
Material: _Material, //IfcMaterial
LayerThickness: _LayerThickness, //IfcPositiveLengthMeasure
IsVentilated: _IsVentilated //IfcLogical
});
                  }
      }
      exports.IFCMATERIALLAYER = IFCMATERIALLAYER;
    
       class IFCMATERIALLAYERSET extends TYPES.IFC {
          constructor(_MaterialLayers, _LayerSetName) {
                  super();
                  this.add_attr({
MaterialLayers: _MaterialLayers, //[object Object]
LayerSetName: _LayerSetName //IfcLabel
});
                  }
      }
      exports.IFCMATERIALLAYERSET = IFCMATERIALLAYERSET;
    
       class IFCMATERIALLAYERSETUSAGE extends TYPES.IFC {
          constructor(_ForLayerSet, _LayerSetDirection, _DirectionSense, _OffsetFromReferenceLine) {
                  super();
                  this.add_attr({
ForLayerSet: _ForLayerSet, //IfcMaterialLayerSet
LayerSetDirection: _LayerSetDirection, //IfcLayerSetDirectionEnum
DirectionSense: _DirectionSense, //IfcDirectionSenseEnum
OffsetFromReferenceLine: _OffsetFromReferenceLine //IfcLengthMeasure
});
                  }
      }
      exports.IFCMATERIALLAYERSETUSAGE = IFCMATERIALLAYERSETUSAGE;
    
       class IFCMATERIALLIST extends TYPES.IFC {
          constructor(_Materials) {
                  super();
                  this.add_attr({
Materials: _Materials //[object Object]
});
                  }
      }
      exports.IFCMATERIALLIST = IFCMATERIALLIST;
    
       class IFCMATERIALPROPERTIES extends TYPES.IFC {
          constructor(_Material) {
                  super();
                  this.add_attr({
Material: _Material //IfcMaterial
});
                  }
      }
      exports.IFCMATERIALPROPERTIES = IFCMATERIALPROPERTIES;
    
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
Currency: _Currency //IfcCurrencyEnum
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
          constructor(_Id, _Name, _Description, _Roles, _Addresses) {
                  super();
                  this.add_attr({
Id: _Id, //IfcIdentifier
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Roles: _Roles, //[object Object]
Addresses: _Addresses //[object Object]
});
                  }
      }
      exports.IFCORGANIZATION = IFCORGANIZATION;
    
       class IFCORGANIZATIONRELATIONSHIP extends TYPES.IFC {
          constructor(_Name, _Description, _RelatingOrganization, _RelatedOrganizations) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
RelatingOrganization: _RelatingOrganization, //IfcOrganization
RelatedOrganizations: _RelatedOrganizations //[object Object]
});
                  }
      }
      exports.IFCORGANIZATIONRELATIONSHIP = IFCORGANIZATIONRELATIONSHIP;
    
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
          constructor(_Id, _FamilyName, _GivenName, _MiddleNames, _PrefixTitles, _SuffixTitles, _Roles, _Addresses) {
                  super();
                  this.add_attr({
Id: _Id, //IfcIdentifier
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
    
       class IFCPREDEFINEDITEM extends TYPES.IFC {
          constructor(_Name) {
                  super();
                  this.add_attr({
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCPREDEFINEDITEM = IFCPREDEFINEDITEM;
    
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
    
       class IFCPROFILEPROPERTIES extends TYPES.IFC {
          constructor(_ProfileName, _ProfileDefinition) {
                  super();
                  this.add_attr({
ProfileName: _ProfileName, //IfcLabel
ProfileDefinition: _ProfileDefinition //IfcProfileDef
});
                  }
      }
      exports.IFCPROFILEPROPERTIES = IFCPROFILEPROPERTIES;
    
       class IFCPROPERTY extends TYPES.IFC {
          constructor(_Name, _Description) {
                  super();
                  this.add_attr({
Name: _Name, //IfcIdentifier
Description: _Description //IfcText
});
                  }
      }
      exports.IFCPROPERTY = IFCPROPERTY;
    
       class IFCPROPERTYCONSTRAINTRELATIONSHIP extends TYPES.IFC {
          constructor(_RelatingConstraint, _RelatedProperties, _Name, _Description) {
                  super();
                  this.add_attr({
RelatingConstraint: _RelatingConstraint, //IfcConstraint
RelatedProperties: _RelatedProperties, //[object Object]
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCPROPERTYCONSTRAINTRELATIONSHIP = IFCPROPERTYCONSTRAINTRELATIONSHIP;
    
       class IFCPROPERTYDEPENDENCYRELATIONSHIP extends TYPES.IFC {
          constructor(_DependingProperty, _DependantProperty, _Name, _Description, _Expression) {
                  super();
                  this.add_attr({
DependingProperty: _DependingProperty, //IfcProperty
DependantProperty: _DependantProperty, //IfcProperty
Name: _Name, //IfcLabel
Description: _Description, //IfcText
Expression: _Expression //IfcText
});
                  }
      }
      exports.IFCPROPERTYDEPENDENCYRELATIONSHIP = IFCPROPERTYDEPENDENCYRELATIONSHIP;
    
       class IFCPROPERTYENUMERATION extends TYPES.IFC {
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
    
       class IFCREFERENCESVALUEDOCUMENT extends TYPES.IFC {
          constructor(_ReferencedDocument, _ReferencingValues, _Name, _Description) {
                  super();
                  this.add_attr({
ReferencedDocument: _ReferencedDocument, //IfcDocumentSelect
ReferencingValues: _ReferencingValues, //[object Object]
Name: _Name, //IfcLabel
Description: _Description //IfcText
});
                  }
      }
      exports.IFCREFERENCESVALUEDOCUMENT = IFCREFERENCESVALUEDOCUMENT;
    
       class IFCREINFORCEMENTBARPROPERTIES extends TYPES.IFC {
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
    
       class IFCRELAXATION extends TYPES.IFC {
          constructor(_RelaxationValue, _InitialStress) {
                  super();
                  this.add_attr({
RelaxationValue: _RelaxationValue, //IfcNormalisedRatioMeasure
InitialStress: _InitialStress //IfcNormalisedRatioMeasure
});
                  }
      }
      exports.IFCRELAXATION = IFCRELAXATION;
    
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
    
       class IFCSECTIONPROPERTIES extends TYPES.IFC {
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
    
       class IFCSECTIONREINFORCEMENTPROPERTIES extends TYPES.IFC {
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
    
       class IFCSHAPEASPECT extends TYPES.IFC {
          constructor(_ShapeRepresentations, _Name, _Description, _ProductDefinitional, _PartOfProductDefinitionShape) {
                  super();
                  this.add_attr({
ShapeRepresentations: _ShapeRepresentations, //[object Object]
Name: _Name, //IfcLabel
Description: _Description, //IfcText
ProductDefinitional: _ProductDefinitional, //LOGICAL
PartOfProductDefinitionShape: _PartOfProductDefinitionShape //IfcProductDefinitionShape
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
    
       class IFCSURFACESTYLELIGHTING extends TYPES.IFC {
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
    
       class IFCSURFACESTYLEREFRACTION extends TYPES.IFC {
          constructor(_RefractionIndex, _DispersionFactor) {
                  super();
                  this.add_attr({
RefractionIndex: _RefractionIndex, //IfcReal
DispersionFactor: _DispersionFactor //IfcReal
});
                  }
      }
      exports.IFCSURFACESTYLEREFRACTION = IFCSURFACESTYLEREFRACTION;
    
       class IFCSURFACESTYLESHADING extends TYPES.IFC {
          constructor(_SurfaceColour) {
                  super();
                  this.add_attr({
SurfaceColour: _SurfaceColour //IfcColourRgb
});
                  }
      }
      exports.IFCSURFACESTYLESHADING = IFCSURFACESTYLESHADING;
    
       class IFCSURFACESTYLEWITHTEXTURES extends TYPES.IFC {
          constructor(_Textures) {
                  super();
                  this.add_attr({
Textures: _Textures //[object Object]
});
                  }
      }
      exports.IFCSURFACESTYLEWITHTEXTURES = IFCSURFACESTYLEWITHTEXTURES;
    
       class IFCSURFACETEXTURE extends TYPES.IFC {
          constructor(_RepeatS, _RepeatT, _TextureType, _TextureTransform) {
                  super();
                  this.add_attr({
RepeatS: _RepeatS, //BOOLEAN
RepeatT: _RepeatT, //BOOLEAN
TextureType: _TextureType, //IfcSurfaceTextureEnum
TextureTransform: _TextureTransform //IfcCartesianTransformationOperator2D
});
                  }
      }
      exports.IFCSURFACETEXTURE = IFCSURFACETEXTURE;
    
       class IFCTABLE extends TYPES.IFC {
          constructor(_Name, _Rows) {
                  super();
                  this.add_attr({
Name: _Name, //STRING
Rows: _Rows //[object Object]
});
                  }
      }
      exports.IFCTABLE = IFCTABLE;
    
       class IFCTABLEROW extends TYPES.IFC {
          constructor(_RowCells, _IsHeading) {
                  super();
                  this.add_attr({
RowCells: _RowCells, //[object Object]
IsHeading: _IsHeading //BOOLEAN
});
                  }
      }
      exports.IFCTABLEROW = IFCTABLEROW;
    
       class IFCTEXTSTYLEFORDEFINEDFONT extends TYPES.IFC {
          constructor(_Colour, _BackgroundColour) {
                  super();
                  this.add_attr({
Colour: _Colour, //IfcColour
BackgroundColour: _BackgroundColour //IfcColour
});
                  }
      }
      exports.IFCTEXTSTYLEFORDEFINEDFONT = IFCTEXTSTYLEFORDEFINEDFONT;
    
       class IFCTEXTSTYLETEXTMODEL extends TYPES.IFC {
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
    
       class IFCTEXTSTYLEWITHBOXCHARACTERISTICS extends TYPES.IFC {
          constructor(_BoxHeight, _BoxWidth, _BoxSlantAngle, _BoxRotateAngle, _CharacterSpacing) {
                  super();
                  this.add_attr({
BoxHeight: _BoxHeight, //IfcPositiveLengthMeasure
BoxWidth: _BoxWidth, //IfcPositiveLengthMeasure
BoxSlantAngle: _BoxSlantAngle, //IfcPlaneAngleMeasure
BoxRotateAngle: _BoxRotateAngle, //IfcPlaneAngleMeasure
CharacterSpacing: _CharacterSpacing //IfcSizeSelect
});
                  }
      }
      exports.IFCTEXTSTYLEWITHBOXCHARACTERISTICS = IFCTEXTSTYLEWITHBOXCHARACTERISTICS;
    
       class IFCTEXTURECOORDINATE extends TYPES.IFC {
          constructor() {
                  super();
                  
                  }
      }
      exports.IFCTEXTURECOORDINATE = IFCTEXTURECOORDINATE;
    
       class IFCTEXTUREVERTEX extends TYPES.IFC {
          constructor(_Coordinates) {
                  super();
                  this.add_attr({
Coordinates: _Coordinates //[object Object]
});
                  }
      }
      exports.IFCTEXTUREVERTEX = IFCTEXTUREVERTEX;
    
       class IFCTIMESERIES extends TYPES.IFC {
          constructor(_Name, _Description, _StartTime, _EndTime, _TimeSeriesDataType, _DataOrigin, _UserDefinedDataOrigin, _Unit) {
                  super();
                  this.add_attr({
Name: _Name, //IfcLabel
Description: _Description, //IfcText
StartTime: _StartTime, //IfcDateTimeSelect
EndTime: _EndTime, //IfcDateTimeSelect
TimeSeriesDataType: _TimeSeriesDataType, //IfcTimeSeriesDataTypeEnum
DataOrigin: _DataOrigin, //IfcDataOriginEnum
UserDefinedDataOrigin: _UserDefinedDataOrigin, //IfcLabel
Unit: _Unit //IfcUnit
});
                  }
      }
      exports.IFCTIMESERIES = IFCTIMESERIES;
    
       class IFCTIMESERIESREFERENCERELATIONSHIP extends TYPES.IFC {
          constructor(_ReferencedTimeSeries, _TimeSeriesReferences) {
                  super();
                  this.add_attr({
ReferencedTimeSeries: _ReferencedTimeSeries, //IfcTimeSeries
TimeSeriesReferences: _TimeSeriesReferences //[object Object]
});
                  }
      }
      exports.IFCTIMESERIESREFERENCERELATIONSHIP = IFCTIMESERIESREFERENCERELATIONSHIP;
    
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
    
       class IFCVERTEXBASEDTEXTUREMAP extends TYPES.IFC {
          constructor(_TextureVertices, _TexturePoints) {
                  super();
                  this.add_attr({
TextureVertices: _TextureVertices, //[object Object]
TexturePoints: _TexturePoints //[object Object]
});
                  }
      }
      exports.IFCVERTEXBASEDTEXTUREMAP = IFCVERTEXBASEDTEXTUREMAP;
    
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
          constructor(_Purpose, _Description, _UserDefinedPurpose, _TelephoneNumbers, _FacsimileNumbers, _PagerNumber, _ElectronicMailAddresses, _WWWHomePageURL) {
                  super(_Purpose, _Description, _UserDefinedPurpose);
                  this.add_attr({
TelephoneNumbers: _TelephoneNumbers, //[object Object]
FacsimileNumbers: _FacsimileNumbers, //[object Object]
PagerNumber: _PagerNumber, //IfcLabel
ElectronicMailAddresses: _ElectronicMailAddresses, //[object Object]
WWWHomePageURL: _WWWHomePageURL //IfcLabel
});
                  }
      }
      exports.IFCTELECOMADDRESS = IFCTELECOMADDRESS;
    
       class IFCCOSTVALUE extends IFCAPPLIEDVALUE {
          constructor(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate, _CostType, _Condition) {
                  super(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate);
                  this.add_attr({
CostType: _CostType, //IfcLabel
Condition: _Condition //IfcText
});
                  }
      }
      exports.IFCCOSTVALUE = IFCCOSTVALUE;
    
       class IFCENVIRONMENTALIMPACTVALUE extends IFCAPPLIEDVALUE {
          constructor(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate, _ImpactType, _Category, _UserDefinedCategory) {
                  super(_Name, _Description, _AppliedValue, _UnitBasis, _ApplicableDate, _FixedUntilDate);
                  this.add_attr({
ImpactType: _ImpactType, //IfcLabel
Category: _Category, //IfcEnvironmentalImpactCategoryEnum
UserDefinedCategory: _UserDefinedCategory //IfcLabel
});
                  }
      }
      exports.IFCENVIRONMENTALIMPACTVALUE = IFCENVIRONMENTALIMPACTVALUE;
    
       class IFCBOUNDARYEDGECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _LinearStiffnessByLengthX, _LinearStiffnessByLengthY, _LinearStiffnessByLengthZ, _RotationalStiffnessByLengthX, _RotationalStiffnessByLengthY, _RotationalStiffnessByLengthZ) {
                  super(_Name);
                  this.add_attr({
LinearStiffnessByLengthX: _LinearStiffnessByLengthX, //IfcModulusOfLinearSubgradeReactionMeasure
LinearStiffnessByLengthY: _LinearStiffnessByLengthY, //IfcModulusOfLinearSubgradeReactionMeasure
LinearStiffnessByLengthZ: _LinearStiffnessByLengthZ, //IfcModulusOfLinearSubgradeReactionMeasure
RotationalStiffnessByLengthX: _RotationalStiffnessByLengthX, //IfcModulusOfRotationalSubgradeReactionMeasure
RotationalStiffnessByLengthY: _RotationalStiffnessByLengthY, //IfcModulusOfRotationalSubgradeReactionMeasure
RotationalStiffnessByLengthZ: _RotationalStiffnessByLengthZ //IfcModulusOfRotationalSubgradeReactionMeasure
});
                  }
      }
      exports.IFCBOUNDARYEDGECONDITION = IFCBOUNDARYEDGECONDITION;
    
       class IFCBOUNDARYFACECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _LinearStiffnessByAreaX, _LinearStiffnessByAreaY, _LinearStiffnessByAreaZ) {
                  super(_Name);
                  this.add_attr({
LinearStiffnessByAreaX: _LinearStiffnessByAreaX, //IfcModulusOfSubgradeReactionMeasure
LinearStiffnessByAreaY: _LinearStiffnessByAreaY, //IfcModulusOfSubgradeReactionMeasure
LinearStiffnessByAreaZ: _LinearStiffnessByAreaZ //IfcModulusOfSubgradeReactionMeasure
});
                  }
      }
      exports.IFCBOUNDARYFACECONDITION = IFCBOUNDARYFACECONDITION;
    
       class IFCBOUNDARYNODECONDITION extends IFCBOUNDARYCONDITION {
          constructor(_Name, _LinearStiffnessX, _LinearStiffnessY, _LinearStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ) {
                  super(_Name);
                  this.add_attr({
LinearStiffnessX: _LinearStiffnessX, //IfcLinearStiffnessMeasure
LinearStiffnessY: _LinearStiffnessY, //IfcLinearStiffnessMeasure
LinearStiffnessZ: _LinearStiffnessZ, //IfcLinearStiffnessMeasure
RotationalStiffnessX: _RotationalStiffnessX, //IfcRotationalStiffnessMeasure
RotationalStiffnessY: _RotationalStiffnessY, //IfcRotationalStiffnessMeasure
RotationalStiffnessZ: _RotationalStiffnessZ //IfcRotationalStiffnessMeasure
});
                  }
      }
      exports.IFCBOUNDARYNODECONDITION = IFCBOUNDARYNODECONDITION;
    
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
    
       class IFCCONNECTIONPORTGEOMETRY extends IFCCONNECTIONGEOMETRY {
          constructor(_LocationAtRelatingElement, _LocationAtRelatedElement, _ProfileOfPort) {
                  super();
                  this.add_attr({
LocationAtRelatingElement: _LocationAtRelatingElement, //IfcAxis2Placement
LocationAtRelatedElement: _LocationAtRelatedElement, //IfcAxis2Placement
ProfileOfPort: _ProfileOfPort //IfcProfileDef
});
                  }
      }
      exports.IFCCONNECTIONPORTGEOMETRY = IFCCONNECTIONPORTGEOMETRY;
    
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
          constructor(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade, _Benchmark, _ValueSource, _DataValue) {
                  super(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade);
                  this.add_attr({
Benchmark: _Benchmark, //IfcBenchmarkEnum
ValueSource: _ValueSource, //IfcLabel
DataValue: _DataValue //IfcMetricValueSelect
});
                  }
      }
      exports.IFCMETRIC = IFCMETRIC;
    
       class IFCOBJECTIVE extends IFCCONSTRAINT {
          constructor(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade, _BenchmarkValues, _ResultValues, _ObjectiveQualifier, _UserDefinedQualifier) {
                  super(_Name, _Description, _ConstraintGrade, _ConstraintSource, _CreatingActor, _CreationTime, _UserDefinedGrade);
                  this.add_attr({
BenchmarkValues: _BenchmarkValues, //IfcMetric
ResultValues: _ResultValues, //IfcMetric
ObjectiveQualifier: _ObjectiveQualifier, //IfcObjectiveEnum
UserDefinedQualifier: _UserDefinedQualifier //IfcLabel
});
                  }
      }
      exports.IFCOBJECTIVE = IFCOBJECTIVE;
    
       class IFCDIMENSIONCALLOUTRELATIONSHIP extends IFCDRAUGHTINGCALLOUTRELATIONSHIP {
          constructor(_Name, _Description, _RelatingDraughtingCallout, _RelatedDraughtingCallout) {
                  super(_Name, _Description, _RelatingDraughtingCallout, _RelatedDraughtingCallout);
                  
                  }
      }
      exports.IFCDIMENSIONCALLOUTRELATIONSHIP = IFCDIMENSIONCALLOUTRELATIONSHIP;
    
       class IFCDIMENSIONPAIR extends IFCDRAUGHTINGCALLOUTRELATIONSHIP {
          constructor(_Name, _Description, _RelatingDraughtingCallout, _RelatedDraughtingCallout) {
                  super(_Name, _Description, _RelatingDraughtingCallout, _RelatedDraughtingCallout);
                  
                  }
      }
      exports.IFCDIMENSIONPAIR = IFCDIMENSIONPAIR;
    
       class IFCEXTERNALLYDEFINEDHATCHSTYLE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDHATCHSTYLE = IFCEXTERNALLYDEFINEDHATCHSTYLE;
    
       class IFCEXTERNALLYDEFINEDSURFACESTYLE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDSURFACESTYLE = IFCEXTERNALLYDEFINEDSURFACESTYLE;
    
       class IFCEXTERNALLYDEFINEDSYMBOL extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDSYMBOL = IFCEXTERNALLYDEFINEDSYMBOL;
    
       class IFCEXTERNALLYDEFINEDTEXTFONT extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCEXTERNALLYDEFINEDTEXTFONT = IFCEXTERNALLYDEFINEDTEXTFONT;
    
       class IFCLIBRARYREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCLIBRARYREFERENCE = IFCLIBRARYREFERENCE;
    
       class IFCCLASSIFICATIONREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name, _ReferencedSource) {
                  super(_Location, _ItemReference, _Name);
                  this.add_attr({
ReferencedSource: _ReferencedSource //IfcClassification
});
                  }
      }
      exports.IFCCLASSIFICATIONREFERENCE = IFCCLASSIFICATIONREFERENCE;
    
       class IFCDOCUMENTREFERENCE extends IFCEXTERNALREFERENCE {
          constructor(_Location, _ItemReference, _Name) {
                  super(_Location, _ItemReference, _Name);
                  
                  }
      }
      exports.IFCDOCUMENTREFERENCE = IFCDOCUMENTREFERENCE;
    
       class IFCMECHANICALMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _DynamicViscosity, _YoungModulus, _ShearModulus, _PoissonRatio, _ThermalExpansionCoefficient) {
                  super(_Material);
                  this.add_attr({
DynamicViscosity: _DynamicViscosity, //IfcDynamicViscosityMeasure
YoungModulus: _YoungModulus, //IfcModulusOfElasticityMeasure
ShearModulus: _ShearModulus, //IfcModulusOfElasticityMeasure
PoissonRatio: _PoissonRatio, //IfcPositiveRatioMeasure
ThermalExpansionCoefficient: _ThermalExpansionCoefficient //IfcThermalExpansionCoefficientMeasure
});
                  }
      }
      exports.IFCMECHANICALMATERIALPROPERTIES = IFCMECHANICALMATERIALPROPERTIES;
    
       class IFCOPTICALMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _VisibleTransmittance, _SolarTransmittance, _ThermalIrTransmittance, _ThermalIrEmissivityBack, _ThermalIrEmissivityFront, _VisibleReflectanceBack, _VisibleReflectanceFront, _SolarReflectanceFront, _SolarReflectanceBack) {
                  super(_Material);
                  this.add_attr({
VisibleTransmittance: _VisibleTransmittance, //IfcPositiveRatioMeasure
SolarTransmittance: _SolarTransmittance, //IfcPositiveRatioMeasure
ThermalIrTransmittance: _ThermalIrTransmittance, //IfcPositiveRatioMeasure
ThermalIrEmissivityBack: _ThermalIrEmissivityBack, //IfcPositiveRatioMeasure
ThermalIrEmissivityFront: _ThermalIrEmissivityFront, //IfcPositiveRatioMeasure
VisibleReflectanceBack: _VisibleReflectanceBack, //IfcPositiveRatioMeasure
VisibleReflectanceFront: _VisibleReflectanceFront, //IfcPositiveRatioMeasure
SolarReflectanceFront: _SolarReflectanceFront, //IfcPositiveRatioMeasure
SolarReflectanceBack: _SolarReflectanceBack //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCOPTICALMATERIALPROPERTIES = IFCOPTICALMATERIALPROPERTIES;
    
       class IFCPRODUCTSOFCOMBUSTIONPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _SpecificHeatCapacity, _N20Content, _COContent, _CO2Content) {
                  super(_Material);
                  this.add_attr({
SpecificHeatCapacity: _SpecificHeatCapacity, //IfcSpecificHeatCapacityMeasure
N20Content: _N20Content, //IfcPositiveRatioMeasure
COContent: _COContent, //IfcPositiveRatioMeasure
CO2Content: _CO2Content //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCPRODUCTSOFCOMBUSTIONPROPERTIES = IFCPRODUCTSOFCOMBUSTIONPROPERTIES;
    
       class IFCTHERMALMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _SpecificHeatCapacity, _BoilingPoint, _FreezingPoint, _ThermalConductivity) {
                  super(_Material);
                  this.add_attr({
SpecificHeatCapacity: _SpecificHeatCapacity, //IfcSpecificHeatCapacityMeasure
BoilingPoint: _BoilingPoint, //IfcThermodynamicTemperatureMeasure
FreezingPoint: _FreezingPoint, //IfcThermodynamicTemperatureMeasure
ThermalConductivity: _ThermalConductivity //IfcThermalConductivityMeasure
});
                  }
      }
      exports.IFCTHERMALMATERIALPROPERTIES = IFCTHERMALMATERIALPROPERTIES;
    
       class IFCWATERPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _IsPotable, _Hardness, _AlkalinityConcentration, _AcidityConcentration, _ImpuritiesContent, _PHLevel, _DissolvedSolidsContent) {
                  super(_Material);
                  this.add_attr({
IsPotable: _IsPotable, //BOOLEAN
Hardness: _Hardness, //IfcIonConcentrationMeasure
AlkalinityConcentration: _AlkalinityConcentration, //IfcIonConcentrationMeasure
AcidityConcentration: _AcidityConcentration, //IfcIonConcentrationMeasure
ImpuritiesContent: _ImpuritiesContent, //IfcNormalisedRatioMeasure
PHLevel: _PHLevel, //IfcPHMeasure
DissolvedSolidsContent: _DissolvedSolidsContent //IfcNormalisedRatioMeasure
});
                  }
      }
      exports.IFCWATERPROPERTIES = IFCWATERPROPERTIES;
    
       class IFCEXTENDEDMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _ExtendedProperties, _Description, _Name) {
                  super(_Material);
                  this.add_attr({
ExtendedProperties: _ExtendedProperties, //[object Object]
Description: _Description, //IfcText
Name: _Name //IfcLabel
});
                  }
      }
      exports.IFCEXTENDEDMATERIALPROPERTIES = IFCEXTENDEDMATERIALPROPERTIES;
    
       class IFCFUELPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _CombustionTemperature, _CarbonContent, _LowerHeatingValue, _HigherHeatingValue) {
                  super(_Material);
                  this.add_attr({
CombustionTemperature: _CombustionTemperature, //IfcThermodynamicTemperatureMeasure
CarbonContent: _CarbonContent, //IfcPositiveRatioMeasure
LowerHeatingValue: _LowerHeatingValue, //IfcHeatingValueMeasure
HigherHeatingValue: _HigherHeatingValue //IfcHeatingValueMeasure
});
                  }
      }
      exports.IFCFUELPROPERTIES = IFCFUELPROPERTIES;
    
       class IFCGENERALMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _MolecularWeight, _Porosity, _MassDensity) {
                  super(_Material);
                  this.add_attr({
MolecularWeight: _MolecularWeight, //IfcMolecularWeightMeasure
Porosity: _Porosity, //IfcNormalisedRatioMeasure
MassDensity: _MassDensity //IfcMassDensityMeasure
});
                  }
      }
      exports.IFCGENERALMATERIALPROPERTIES = IFCGENERALMATERIALPROPERTIES;
    
       class IFCHYGROSCOPICMATERIALPROPERTIES extends IFCMATERIALPROPERTIES {
          constructor(_Material, _UpperVaporResistanceFactor, _LowerVaporResistanceFactor, _IsothermalMoistureCapacity, _VaporPermeability, _MoistureDiffusivity) {
                  super(_Material);
                  this.add_attr({
UpperVaporResistanceFactor: _UpperVaporResistanceFactor, //IfcPositiveRatioMeasure
LowerVaporResistanceFactor: _LowerVaporResistanceFactor, //IfcPositiveRatioMeasure
IsothermalMoistureCapacity: _IsothermalMoistureCapacity, //IfcIsothermalMoistureCapacityMeasure
VaporPermeability: _VaporPermeability, //IfcVaporPermeabilityMeasure
MoistureDiffusivity: _MoistureDiffusivity //IfcMoistureDiffusivityMeasure
});
                  }
      }
      exports.IFCHYGROSCOPICMATERIALPROPERTIES = IFCHYGROSCOPICMATERIALPROPERTIES;
    
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
PlacementRefDirection: _PlacementRefDirection //IfcVirtualGridIntersection
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
    
       class IFCPREDEFINEDSYMBOL extends IFCPREDEFINEDITEM {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDSYMBOL = IFCPREDEFINEDSYMBOL;
    
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
    
       class IFCPRESENTATIONLAYERWITHSTYLE extends IFCPRESENTATIONLAYERASSIGNMENT {
          constructor(_Name, _Description, _AssignedItems, _Identifier, _LayerOn, _LayerFrozen, _LayerBlocked, _LayerStyles) {
                  super(_Name, _Description, _AssignedItems, _Identifier);
                  this.add_attr({
LayerOn: _LayerOn, //LOGICAL
LayerFrozen: _LayerFrozen, //LOGICAL
LayerBlocked: _LayerBlocked, //LOGICAL
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
    
       class IFCSYMBOLSTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _StyleOfSymbol) {
                  super(_Name);
                  this.add_attr({
StyleOfSymbol: _StyleOfSymbol //IfcSymbolStyleSelect
});
                  }
      }
      exports.IFCSYMBOLSTYLE = IFCSYMBOLSTYLE;
    
       class IFCTEXTSTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _TextCharacterAppearance, _TextStyle, _TextFontStyle) {
                  super(_Name);
                  this.add_attr({
TextCharacterAppearance: _TextCharacterAppearance, //IfcCharacterStyleSelect
TextStyle: _TextStyle, //IfcTextStyleSelect
TextFontStyle: _TextFontStyle //IfcTextFontSelect
});
                  }
      }
      exports.IFCTEXTSTYLE = IFCTEXTSTYLE;
    
       class IFCCURVESTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _CurveFont, _CurveWidth, _CurveColour) {
                  super(_Name);
                  this.add_attr({
CurveFont: _CurveFont, //IfcCurveFontOrScaledCurveFontSelect
CurveWidth: _CurveWidth, //IfcSizeSelect
CurveColour: _CurveColour //IfcColour
});
                  }
      }
      exports.IFCCURVESTYLE = IFCCURVESTYLE;
    
       class IFCFILLAREASTYLE extends IFCPRESENTATIONSTYLE {
          constructor(_Name, _FillStyles) {
                  super(_Name);
                  this.add_attr({
FillStyles: _FillStyles //[object Object]
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
    
       class IFCRIBPLATEPROFILEPROPERTIES extends IFCPROFILEPROPERTIES {
          constructor(_ProfileName, _ProfileDefinition, _Thickness, _RibHeight, _RibWidth, _RibSpacing, _Direction) {
                  super(_ProfileName, _ProfileDefinition);
                  this.add_attr({
Thickness: _Thickness, //IfcPositiveLengthMeasure
RibHeight: _RibHeight, //IfcPositiveLengthMeasure
RibWidth: _RibWidth, //IfcPositiveLengthMeasure
RibSpacing: _RibSpacing, //IfcPositiveLengthMeasure
Direction: _Direction //IfcRibPlateDirectionEnum
});
                  }
      }
      exports.IFCRIBPLATEPROFILEPROPERTIES = IFCRIBPLATEPROFILEPROPERTIES;
    
       class IFCGENERALPROFILEPROPERTIES extends IFCPROFILEPROPERTIES {
          constructor(_ProfileName, _ProfileDefinition, _PhysicalWeight, _Perimeter, _MinimumPlateThickness, _MaximumPlateThickness, _CrossSectionArea) {
                  super(_ProfileName, _ProfileDefinition);
                  this.add_attr({
PhysicalWeight: _PhysicalWeight, //IfcMassPerLengthMeasure
Perimeter: _Perimeter, //IfcPositiveLengthMeasure
MinimumPlateThickness: _MinimumPlateThickness, //IfcPositiveLengthMeasure
MaximumPlateThickness: _MaximumPlateThickness, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea //IfcAreaMeasure
});
                  }
      }
      exports.IFCGENERALPROFILEPROPERTIES = IFCGENERALPROFILEPROPERTIES;
    
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
Precision: _Precision, //REAL
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
    
       class IFCSTRUCTURALLOADSTATIC extends IFCSTRUCTURALLOAD {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCSTRUCTURALLOADSTATIC = IFCSTRUCTURALLOADSTATIC;
    
       class IFCSURFACESTYLERENDERING extends IFCSURFACESTYLESHADING {
          constructor(_SurfaceColour, _Transparency, _DiffuseColour, _TransmissionColour, _DiffuseTransmissionColour, _ReflectionColour, _SpecularColour, _SpecularHighlight, _ReflectanceMethod) {
                  super(_SurfaceColour);
                  this.add_attr({
Transparency: _Transparency, //IfcNormalisedRatioMeasure
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
          constructor(_RepeatS, _RepeatT, _TextureType, _TextureTransform, _RasterFormat, _RasterCode) {
                  super(_RepeatS, _RepeatT, _TextureType, _TextureTransform);
                  this.add_attr({
RasterFormat: _RasterFormat, //IfcIdentifier
RasterCode: _RasterCode //BOOLEAN
});
                  }
      }
      exports.IFCBLOBTEXTURE = IFCBLOBTEXTURE;
    
       class IFCIMAGETEXTURE extends IFCSURFACETEXTURE {
          constructor(_RepeatS, _RepeatT, _TextureType, _TextureTransform, _UrlReference) {
                  super(_RepeatS, _RepeatT, _TextureType, _TextureTransform);
                  this.add_attr({
UrlReference: _UrlReference //IfcIdentifier
});
                  }
      }
      exports.IFCIMAGETEXTURE = IFCIMAGETEXTURE;
    
       class IFCPIXELTEXTURE extends IFCSURFACETEXTURE {
          constructor(_RepeatS, _RepeatT, _TextureType, _TextureTransform, _Width, _Height, _ColourComponents, _Pixel) {
                  super(_RepeatS, _RepeatT, _TextureType, _TextureTransform);
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
          constructor(_Mode, _Parameter) {
                  super();
                  this.add_attr({
Mode: _Mode, //IfcLabel
Parameter: _Parameter //[object Object]
});
                  }
      }
      exports.IFCTEXTURECOORDINATEGENERATOR = IFCTEXTURECOORDINATEGENERATOR;
    
       class IFCTEXTUREMAP extends IFCTEXTURECOORDINATE {
          constructor(_TextureMaps) {
                  super();
                  this.add_attr({
TextureMaps: _TextureMaps //[object Object]
});
                  }
      }
      exports.IFCTEXTUREMAP = IFCTEXTUREMAP;
    
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
          constructor(_Name, _LinearStiffnessX, _LinearStiffnessY, _LinearStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ, _WarpingStiffness) {
                  super(_Name, _LinearStiffnessX, _LinearStiffnessY, _LinearStiffnessZ, _RotationalStiffnessX, _RotationalStiffnessY, _RotationalStiffnessZ);
                  this.add_attr({
WarpingStiffness: _WarpingStiffness //IfcWarpingMomentMeasure
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
    
       class IFCMECHANICALSTEELMATERIALPROPERTIES extends IFCMECHANICALMATERIALPROPERTIES {
          constructor(_Material, _DynamicViscosity, _YoungModulus, _ShearModulus, _PoissonRatio, _ThermalExpansionCoefficient, _YieldStress, _UltimateStress, _UltimateStrain, _HardeningModule, _ProportionalStress, _PlasticStrain, _Relaxations) {
                  super(_Material, _DynamicViscosity, _YoungModulus, _ShearModulus, _PoissonRatio, _ThermalExpansionCoefficient);
                  this.add_attr({
YieldStress: _YieldStress, //IfcPressureMeasure
UltimateStress: _UltimateStress, //IfcPressureMeasure
UltimateStrain: _UltimateStrain, //IfcPositiveRatioMeasure
HardeningModule: _HardeningModule, //IfcModulusOfElasticityMeasure
ProportionalStress: _ProportionalStress, //IfcPressureMeasure
PlasticStrain: _PlasticStrain, //IfcPositiveRatioMeasure
Relaxations: _Relaxations //[object Object]
});
                  }
      }
      exports.IFCMECHANICALSTEELMATERIALPROPERTIES = IFCMECHANICALSTEELMATERIALPROPERTIES;
    
       class IFCMECHANICALCONCRETEMATERIALPROPERTIES extends IFCMECHANICALMATERIALPROPERTIES {
          constructor(_Material, _DynamicViscosity, _YoungModulus, _ShearModulus, _PoissonRatio, _ThermalExpansionCoefficient, _CompressiveStrength, _MaxAggregateSize, _AdmixturesDescription, _Workability, _ProtectivePoreRatio, _WaterImpermeability) {
                  super(_Material, _DynamicViscosity, _YoungModulus, _ShearModulus, _PoissonRatio, _ThermalExpansionCoefficient);
                  this.add_attr({
CompressiveStrength: _CompressiveStrength, //IfcPressureMeasure
MaxAggregateSize: _MaxAggregateSize, //IfcPositiveLengthMeasure
AdmixturesDescription: _AdmixturesDescription, //IfcText
Workability: _Workability, //IfcText
ProtectivePoreRatio: _ProtectivePoreRatio, //IfcNormalisedRatioMeasure
WaterImpermeability: _WaterImpermeability //IfcText
});
                  }
      }
      exports.IFCMECHANICALCONCRETEMATERIALPROPERTIES = IFCMECHANICALCONCRETEMATERIALPROPERTIES;
    
       class IFCQUANTITYAREA extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _AreaValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
AreaValue: _AreaValue //IfcAreaMeasure
});
                  }
      }
      exports.IFCQUANTITYAREA = IFCQUANTITYAREA;
    
       class IFCQUANTITYCOUNT extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _CountValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
CountValue: _CountValue //IfcCountMeasure
});
                  }
      }
      exports.IFCQUANTITYCOUNT = IFCQUANTITYCOUNT;
    
       class IFCQUANTITYLENGTH extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _LengthValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
LengthValue: _LengthValue //IfcLengthMeasure
});
                  }
      }
      exports.IFCQUANTITYLENGTH = IFCQUANTITYLENGTH;
    
       class IFCQUANTITYTIME extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _TimeValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
TimeValue: _TimeValue //IfcTimeMeasure
});
                  }
      }
      exports.IFCQUANTITYTIME = IFCQUANTITYTIME;
    
       class IFCQUANTITYVOLUME extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _VolumeValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
VolumeValue: _VolumeValue //IfcVolumeMeasure
});
                  }
      }
      exports.IFCQUANTITYVOLUME = IFCQUANTITYVOLUME;
    
       class IFCQUANTITYWEIGHT extends IFCPHYSICALSIMPLEQUANTITY {
          constructor(_Name, _Description, _Unit, _WeightValue) {
                  super(_Name, _Description, _Unit);
                  this.add_attr({
WeightValue: _WeightValue //IfcMassMeasure
});
                  }
      }
      exports.IFCQUANTITYWEIGHT = IFCQUANTITYWEIGHT;
    
       class IFCPREDEFINEDTERMINATORSYMBOL extends IFCPREDEFINEDSYMBOL {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDTERMINATORSYMBOL = IFCPREDEFINEDTERMINATORSYMBOL;
    
       class IFCPREDEFINEDDIMENSIONSYMBOL extends IFCPREDEFINEDSYMBOL {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDDIMENSIONSYMBOL = IFCPREDEFINEDDIMENSIONSYMBOL;
    
       class IFCPREDEFINEDPOINTMARKERSYMBOL extends IFCPREDEFINEDSYMBOL {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCPREDEFINEDPOINTMARKERSYMBOL = IFCPREDEFINEDPOINTMARKERSYMBOL;
    
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
    
       class IFCDRAUGHTINGPREDEFINEDTEXTFONT extends IFCPREDEFINEDTEXTFONT {
          constructor(_Name) {
                  super(_Name);
                  
                  }
      }
      exports.IFCDRAUGHTINGPREDEFINEDTEXTFONT = IFCDRAUGHTINGPREDEFINEDTEXTFONT;
    
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
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _FlangeWidth, _WebThickness, _FlangeThickness, _FilletRadius, _FlangeEdgeRadius, _WebEdgeRadius, _WebSlope, _FlangeSlope, _CentreOfGravityInY) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
FlangeWidth: _FlangeWidth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcPositiveLengthMeasure
FlangeEdgeRadius: _FlangeEdgeRadius, //IfcPositiveLengthMeasure
WebEdgeRadius: _WebEdgeRadius, //IfcPositiveLengthMeasure
WebSlope: _WebSlope, //IfcPlaneAngleMeasure
FlangeSlope: _FlangeSlope, //IfcPlaneAngleMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcPositiveLengthMeasure
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
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _FlangeWidth, _WebThickness, _FlangeThickness, _FilletRadius, _EdgeRadius, _FlangeSlope, _CentreOfGravityInX) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
FlangeWidth: _FlangeWidth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcPositiveLengthMeasure
EdgeRadius: _EdgeRadius, //IfcPositiveLengthMeasure
FlangeSlope: _FlangeSlope, //IfcPlaneAngleMeasure
CentreOfGravityInX: _CentreOfGravityInX //IfcPositiveLengthMeasure
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
FilletRadius: _FilletRadius, //IfcPositiveLengthMeasure
EdgeRadius: _EdgeRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCZSHAPEPROFILEDEF = IFCZSHAPEPROFILEDEF;
    
       class IFCCSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _Width, _WallThickness, _Girth, _InternalFilletRadius, _CentreOfGravityInX) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
Width: _Width, //IfcPositiveLengthMeasure
WallThickness: _WallThickness, //IfcPositiveLengthMeasure
Girth: _Girth, //IfcPositiveLengthMeasure
InternalFilletRadius: _InternalFilletRadius, //IfcPositiveLengthMeasure
CentreOfGravityInX: _CentreOfGravityInX //IfcPositiveLengthMeasure
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
    
       class IFCCRANERAILASHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _OverallHeight, _BaseWidth2, _Radius, _HeadWidth, _HeadDepth2, _HeadDepth3, _WebThickness, _BaseWidth4, _BaseDepth1, _BaseDepth2, _BaseDepth3, _CentreOfGravityInY) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
BaseWidth2: _BaseWidth2, //IfcPositiveLengthMeasure
Radius: _Radius, //IfcPositiveLengthMeasure
HeadWidth: _HeadWidth, //IfcPositiveLengthMeasure
HeadDepth2: _HeadDepth2, //IfcPositiveLengthMeasure
HeadDepth3: _HeadDepth3, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
BaseWidth4: _BaseWidth4, //IfcPositiveLengthMeasure
BaseDepth1: _BaseDepth1, //IfcPositiveLengthMeasure
BaseDepth2: _BaseDepth2, //IfcPositiveLengthMeasure
BaseDepth3: _BaseDepth3, //IfcPositiveLengthMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCRANERAILASHAPEPROFILEDEF = IFCCRANERAILASHAPEPROFILEDEF;
    
       class IFCCRANERAILFSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _OverallHeight, _HeadWidth, _Radius, _HeadDepth2, _HeadDepth3, _WebThickness, _BaseDepth1, _BaseDepth2, _CentreOfGravityInY) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
HeadWidth: _HeadWidth, //IfcPositiveLengthMeasure
Radius: _Radius, //IfcPositiveLengthMeasure
HeadDepth2: _HeadDepth2, //IfcPositiveLengthMeasure
HeadDepth3: _HeadDepth3, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
BaseDepth1: _BaseDepth1, //IfcPositiveLengthMeasure
BaseDepth2: _BaseDepth2, //IfcPositiveLengthMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCRANERAILFSHAPEPROFILEDEF = IFCCRANERAILFSHAPEPROFILEDEF;
    
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
          constructor(_ProfileType, _ProfileName, _Position, _OverallWidth, _OverallDepth, _WebThickness, _FlangeThickness, _FilletRadius) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
OverallWidth: _OverallWidth, //IfcPositiveLengthMeasure
OverallDepth: _OverallDepth, //IfcPositiveLengthMeasure
WebThickness: _WebThickness, //IfcPositiveLengthMeasure
FlangeThickness: _FlangeThickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCISHAPEPROFILEDEF = IFCISHAPEPROFILEDEF;
    
       class IFCLSHAPEPROFILEDEF extends IFCPARAMETERIZEDPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _Depth, _Width, _Thickness, _FilletRadius, _EdgeRadius, _LegSlope, _CentreOfGravityInX, _CentreOfGravityInY) {
                  super(_ProfileType, _ProfileName, _Position);
                  this.add_attr({
Depth: _Depth, //IfcPositiveLengthMeasure
Width: _Width, //IfcPositiveLengthMeasure
Thickness: _Thickness, //IfcPositiveLengthMeasure
FilletRadius: _FilletRadius, //IfcPositiveLengthMeasure
EdgeRadius: _EdgeRadius, //IfcPositiveLengthMeasure
LegSlope: _LegSlope, //IfcPlaneAngleMeasure
CentreOfGravityInX: _CentreOfGravityInX, //IfcPositiveLengthMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCLSHAPEPROFILEDEF = IFCLSHAPEPROFILEDEF;
    
       class IFCSTRUCTURALPROFILEPROPERTIES extends IFCGENERALPROFILEPROPERTIES {
          constructor(_ProfileName, _ProfileDefinition, _PhysicalWeight, _Perimeter, _MinimumPlateThickness, _MaximumPlateThickness, _CrossSectionArea, _TorsionalConstantX, _MomentOfInertiaYZ, _MomentOfInertiaY, _MomentOfInertiaZ, _WarpingConstant, _ShearCentreZ, _ShearCentreY, _ShearDeformationAreaZ, _ShearDeformationAreaY, _MaximumSectionModulusY, _MinimumSectionModulusY, _MaximumSectionModulusZ, _MinimumSectionModulusZ, _TorsionalSectionModulus, _CentreOfGravityInX, _CentreOfGravityInY) {
                  super(_ProfileName, _ProfileDefinition, _PhysicalWeight, _Perimeter, _MinimumPlateThickness, _MaximumPlateThickness, _CrossSectionArea);
                  this.add_attr({
TorsionalConstantX: _TorsionalConstantX, //IfcMomentOfInertiaMeasure
MomentOfInertiaYZ: _MomentOfInertiaYZ, //IfcMomentOfInertiaMeasure
MomentOfInertiaY: _MomentOfInertiaY, //IfcMomentOfInertiaMeasure
MomentOfInertiaZ: _MomentOfInertiaZ, //IfcMomentOfInertiaMeasure
WarpingConstant: _WarpingConstant, //IfcWarpingConstantMeasure
ShearCentreZ: _ShearCentreZ, //IfcLengthMeasure
ShearCentreY: _ShearCentreY, //IfcLengthMeasure
ShearDeformationAreaZ: _ShearDeformationAreaZ, //IfcAreaMeasure
ShearDeformationAreaY: _ShearDeformationAreaY, //IfcAreaMeasure
MaximumSectionModulusY: _MaximumSectionModulusY, //IfcSectionModulusMeasure
MinimumSectionModulusY: _MinimumSectionModulusY, //IfcSectionModulusMeasure
MaximumSectionModulusZ: _MaximumSectionModulusZ, //IfcSectionModulusMeasure
MinimumSectionModulusZ: _MinimumSectionModulusZ, //IfcSectionModulusMeasure
TorsionalSectionModulus: _TorsionalSectionModulus, //IfcSectionModulusMeasure
CentreOfGravityInX: _CentreOfGravityInX, //IfcLengthMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcLengthMeasure
});
                  }
      }
      exports.IFCSTRUCTURALPROFILEPROPERTIES = IFCSTRUCTURALPROFILEPROPERTIES;
    
       class IFCPROPERTYBOUNDEDVALUE extends IFCSIMPLEPROPERTY {
          constructor(_Name, _Description, _UpperBoundValue, _LowerBoundValue, _Unit) {
                  super(_Name, _Description);
                  this.add_attr({
UpperBoundValue: _UpperBoundValue, //IfcValue
LowerBoundValue: _LowerBoundValue, //IfcValue
Unit: _Unit //IfcUnit
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
UsageName: _UsageName, //IfcLabel
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
          constructor(_Name, _Description, _DefiningValues, _DefinedValues, _Expression, _DefiningUnit, _DefinedUnit) {
                  super(_Name, _Description);
                  this.add_attr({
DefiningValues: _DefiningValues, //[object Object]
DefinedValues: _DefinedValues, //[object Object]
Expression: _Expression, //IfcText
DefiningUnit: _DefiningUnit, //IfcUnit
DefinedUnit: _DefinedUnit //IfcUnit
});
                  }
      }
      exports.IFCPROPERTYTABLEVALUE = IFCPROPERTYTABLEVALUE;
    
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
    
       class IFCANNOTATIONOCCURRENCE extends IFCSTYLEDITEM {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCANNOTATIONOCCURRENCE = IFCANNOTATIONOCCURRENCE;
    
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
Orientation: _Orientation //BOOLEAN
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
AgreementFlag: _AgreementFlag //BOOLEAN
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
    
       class IFCONEDIRECTIONREPEATFACTOR extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_RepeatFactor) {
                  super();
                  this.add_attr({
RepeatFactor: _RepeatFactor //IfcVector
});
                  }
      }
      exports.IFCONEDIRECTIONREPEATFACTOR = IFCONEDIRECTIONREPEATFACTOR;
    
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
    
       class IFCANNOTATIONSURFACE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Item, _TextureCoordinates) {
                  super();
                  this.add_attr({
Item: _Item, //IfcGeometricRepresentationItem
TextureCoordinates: _TextureCoordinates //IfcTextureCoordinate
});
                  }
      }
      exports.IFCANNOTATIONSURFACE = IFCANNOTATIONSURFACE;
    
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
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale) {
                  super();
                  this.add_attr({
Axis1: _Axis1, //IfcDirection
Axis2: _Axis2, //IfcDirection
LocalOrigin: _LocalOrigin, //IfcCartesianPoint
Scale: _Scale //REAL
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR = IFCCARTESIANTRANSFORMATIONOPERATOR;
    
       class IFCCOMPOSITECURVESEGMENT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Transition, _SameSense, _ParentCurve) {
                  super();
                  this.add_attr({
Transition: _Transition, //IfcTransitionCode
SameSense: _SameSense, //BOOLEAN
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
    
       class IFCDEFINEDSYMBOL extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Definition, _Target) {
                  super();
                  this.add_attr({
Definition: _Definition, //IfcDefinedSymbolSelect
Target: _Target //IfcCartesianTransformationOperator2D
});
                  }
      }
      exports.IFCDEFINEDSYMBOL = IFCDEFINEDSYMBOL;
    
       class IFCDIRECTION extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_DirectionRatios) {
                  super();
                  this.add_attr({
DirectionRatios: _DirectionRatios //[object Object]
});
                  }
      }
      exports.IFCDIRECTION = IFCDIRECTION;
    
       class IFCDRAUGHTINGCALLOUT extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Contents) {
                  super();
                  this.add_attr({
Contents: _Contents //[object Object]
});
                  }
      }
      exports.IFCDRAUGHTINGCALLOUT = IFCDRAUGHTINGCALLOUT;
    
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
    
       class IFCFILLAREASTYLETILESYMBOLWITHSTYLE extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_Symbol) {
                  super();
                  this.add_attr({
Symbol: _Symbol //IfcAnnotationSymbolOccurrence
});
                  }
      }
      exports.IFCFILLAREASTYLETILESYMBOLWITHSTYLE = IFCFILLAREASTYLETILESYMBOLWITHSTYLE;
    
       class IFCFILLAREASTYLETILES extends IFCGEOMETRICREPRESENTATIONITEM {
          constructor(_TilingPattern, _Tiles, _TilingScale) {
                  super();
                  this.add_attr({
TilingPattern: _TilingPattern, //IfcOneDirectionRepeatFactor
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
ApplicableOccurrence: _ApplicableOccurrence, //IfcLabel
HasPropertySets: _HasPropertySets //[object Object]
});
                  }
      }
      exports.IFCTYPEOBJECT = IFCTYPEOBJECT;
    
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
    
       class IFCRELDECOMPOSES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingObject: _RelatingObject, //IfcObjectDefinition
RelatedObjects: _RelatedObjects //[object Object]
});
                  }
      }
      exports.IFCRELDECOMPOSES = IFCRELDECOMPOSES;
    
       class IFCRELDEFINES extends IFCRELATIONSHIP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedObjects: _RelatedObjects //[object Object]
});
                  }
      }
      exports.IFCRELDEFINES = IFCRELDEFINES;
    
       class IFCSTRUCTURALLOADTEMPERATURE extends IFCSTRUCTURALLOADSTATIC {
          constructor(_Name, _DeltaT_Constant, _DeltaT_Y, _DeltaT_Z) {
                  super(_Name);
                  this.add_attr({
DeltaT_Constant: _DeltaT_Constant, //IfcThermodynamicTemperatureMeasure
DeltaT_Y: _DeltaT_Y, //IfcThermodynamicTemperatureMeasure
DeltaT_Z: _DeltaT_Z //IfcThermodynamicTemperatureMeasure
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
InnerFilletRadius: _InnerFilletRadius, //IfcPositiveLengthMeasure
OuterFilletRadius: _OuterFilletRadius //IfcPositiveLengthMeasure
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
    
       class IFCASYMMETRICISHAPEPROFILEDEF extends IFCISHAPEPROFILEDEF {
          constructor(_ProfileType, _ProfileName, _Position, _OverallWidth, _OverallDepth, _WebThickness, _FlangeThickness, _FilletRadius, _TopFlangeWidth, _TopFlangeThickness, _TopFlangeFilletRadius, _CentreOfGravityInY) {
                  super(_ProfileType, _ProfileName, _Position, _OverallWidth, _OverallDepth, _WebThickness, _FlangeThickness, _FilletRadius);
                  this.add_attr({
TopFlangeWidth: _TopFlangeWidth, //IfcPositiveLengthMeasure
TopFlangeThickness: _TopFlangeThickness, //IfcPositiveLengthMeasure
TopFlangeFilletRadius: _TopFlangeFilletRadius, //IfcPositiveLengthMeasure
CentreOfGravityInY: _CentreOfGravityInY //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCASYMMETRICISHAPEPROFILEDEF = IFCASYMMETRICISHAPEPROFILEDEF;
    
       class IFCSTRUCTURALSTEELPROFILEPROPERTIES extends IFCSTRUCTURALPROFILEPROPERTIES {
          constructor(_ProfileName, _ProfileDefinition, _PhysicalWeight, _Perimeter, _MinimumPlateThickness, _MaximumPlateThickness, _CrossSectionArea, _TorsionalConstantX, _MomentOfInertiaYZ, _MomentOfInertiaY, _MomentOfInertiaZ, _WarpingConstant, _ShearCentreZ, _ShearCentreY, _ShearDeformationAreaZ, _ShearDeformationAreaY, _MaximumSectionModulusY, _MinimumSectionModulusY, _MaximumSectionModulusZ, _MinimumSectionModulusZ, _TorsionalSectionModulus, _CentreOfGravityInX, _CentreOfGravityInY, _ShearAreaZ, _ShearAreaY, _PlasticShapeFactorY, _PlasticShapeFactorZ) {
                  super(_ProfileName, _ProfileDefinition, _PhysicalWeight, _Perimeter, _MinimumPlateThickness, _MaximumPlateThickness, _CrossSectionArea, _TorsionalConstantX, _MomentOfInertiaYZ, _MomentOfInertiaY, _MomentOfInertiaZ, _WarpingConstant, _ShearCentreZ, _ShearCentreY, _ShearDeformationAreaZ, _ShearDeformationAreaY, _MaximumSectionModulusY, _MinimumSectionModulusY, _MaximumSectionModulusZ, _MinimumSectionModulusZ, _TorsionalSectionModulus, _CentreOfGravityInX, _CentreOfGravityInY);
                  this.add_attr({
ShearAreaZ: _ShearAreaZ, //IfcAreaMeasure
ShearAreaY: _ShearAreaY, //IfcAreaMeasure
PlasticShapeFactorY: _PlasticShapeFactorY, //IfcPositiveRatioMeasure
PlasticShapeFactorZ: _PlasticShapeFactorZ //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCSTRUCTURALSTEELPROFILEPROPERTIES = IFCSTRUCTURALSTEELPROFILEPROPERTIES;
    
       class IFCANNOTATIONSURFACEOCCURRENCE extends IFCANNOTATIONOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCANNOTATIONSURFACEOCCURRENCE = IFCANNOTATIONSURFACEOCCURRENCE;
    
       class IFCANNOTATIONSYMBOLOCCURRENCE extends IFCANNOTATIONOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCANNOTATIONSYMBOLOCCURRENCE = IFCANNOTATIONSYMBOLOCCURRENCE;
    
       class IFCANNOTATIONTEXTOCCURRENCE extends IFCANNOTATIONOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCANNOTATIONTEXTOCCURRENCE = IFCANNOTATIONTEXTOCCURRENCE;
    
       class IFCANNOTATIONCURVEOCCURRENCE extends IFCANNOTATIONOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCANNOTATIONCURVEOCCURRENCE = IFCANNOTATIONCURVEOCCURRENCE;
    
       class IFCANNOTATIONFILLAREAOCCURRENCE extends IFCANNOTATIONOCCURRENCE {
          constructor(_Item, _Styles, _Name, _FillStyleTarget, _GlobalOrLocal) {
                  super(_Item, _Styles, _Name);
                  this.add_attr({
FillStyleTarget: _FillStyleTarget, //IfcPoint
GlobalOrLocal: _GlobalOrLocal //IfcGlobalOrLocalEnum
});
                  }
      }
      exports.IFCANNOTATIONFILLAREAOCCURRENCE = IFCANNOTATIONFILLAREAOCCURRENCE;
    
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
SameSense: _SameSense //BOOLEAN
});
                  }
      }
      exports.IFCEDGECURVE = IFCEDGECURVE;
    
       class IFCORIENTEDEDGE extends IFCEDGE {
          constructor(_EdgeStart, _EdgeEnd, _EdgeElement, _Orientation) {
                  super(_EdgeStart, _EdgeEnd);
                  this.add_attr({
EdgeElement: _EdgeElement, //IfcEdge
Orientation: _Orientation //BOOLEAN
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
SameSense: _SameSense //BOOLEAN
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
    
       class IFCTWODIRECTIONREPEATFACTOR extends IFCONEDIRECTIONREPEATFACTOR {
          constructor(_RepeatFactor, _SecondRepeatFactor) {
                  super(_RepeatFactor);
                  this.add_attr({
SecondRepeatFactor: _SecondRepeatFactor //IfcVector
});
                  }
      }
      exports.IFCTWODIRECTIONREPEATFACTOR = IFCTWODIRECTIONREPEATFACTOR;
    
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
SelfIntersect: _SelfIntersect //LOGICAL
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
SelfIntersect: _SelfIntersect, //LOGICAL
RefDirection: _RefDirection //IfcDirection
});
                  }
      }
      exports.IFCOFFSETCURVE3D = IFCOFFSETCURVE3D;
    
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
    
       class IFCSTRUCTUREDDIMENSIONCALLOUT extends IFCDRAUGHTINGCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCSTRUCTUREDDIMENSIONCALLOUT = IFCSTRUCTUREDDIMENSIONCALLOUT;
    
       class IFCDIMENSIONCURVEDIRECTEDCALLOUT extends IFCDRAUGHTINGCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCDIMENSIONCURVEDIRECTEDCALLOUT = IFCDIMENSIONCURVEDIRECTEDCALLOUT;
    
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
    
       class IFCPROCESS extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
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
    
       class IFCPROJECT extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LongName, _Phase, _RepresentationContexts, _UnitsInContext) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
LongName: _LongName, //IfcLabel
Phase: _Phase, //IfcLabel
RepresentationContexts: _RepresentationContexts, //[object Object]
UnitsInContext: _UnitsInContext //IfcUnitAssignment
});
                  }
      }
      exports.IFCPROJECT = IFCPROJECT;
    
       class IFCRESOURCE extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCCONTROL = IFCCONTROL;
    
       class IFCGROUP extends IFCOBJECT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCGROUP = IFCGROUP;
    
       class IFCREINFORCEMENTDEFINITIONPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _DefinitionType, _ReinforcementSectionDefinitions) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
DefinitionType: _DefinitionType, //IfcLabel
ReinforcementSectionDefinitions: _ReinforcementSectionDefinitions //[object Object]
});
                  }
      }
      exports.IFCREINFORCEMENTDEFINITIONPROPERTIES = IFCREINFORCEMENTDEFINITIONPROPERTIES;
    
       class IFCSERVICELIFEFACTOR extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _PredefinedType, _UpperValue, _MostUsedValue, _LowerValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcServiceLifeFactorTypeEnum
UpperValue: _UpperValue, //IfcMeasureValue
MostUsedValue: _MostUsedValue, //IfcMeasureValue
LowerValue: _LowerValue //IfcMeasureValue
});
                  }
      }
      exports.IFCSERVICELIFEFACTOR = IFCSERVICELIFEFACTOR;
    
       class IFCSOUNDPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _IsAttenuating, _SoundScale, _SoundValues) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
IsAttenuating: _IsAttenuating, //IfcBoolean
SoundScale: _SoundScale, //IfcSoundScaleEnum
SoundValues: _SoundValues //[object Object]
});
                  }
      }
      exports.IFCSOUNDPROPERTIES = IFCSOUNDPROPERTIES;
    
       class IFCSOUNDVALUE extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _SoundLevelTimeSeries, _Frequency, _SoundLevelSingleValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
SoundLevelTimeSeries: _SoundLevelTimeSeries, //IfcTimeSeries
Frequency: _Frequency, //IfcFrequencyMeasure
SoundLevelSingleValue: _SoundLevelSingleValue //IfcDerivedMeasureValue
});
                  }
      }
      exports.IFCSOUNDVALUE = IFCSOUNDVALUE;
    
       class IFCSPACETHERMALLOADPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableValueRatio, _ThermalLoadSource, _PropertySource, _SourceDescription, _MaximumValue, _MinimumValue, _ThermalLoadTimeSeriesValues, _UserDefinedThermalLoadSource, _UserDefinedPropertySource, _ThermalLoadType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
ApplicableValueRatio: _ApplicableValueRatio, //IfcPositiveRatioMeasure
ThermalLoadSource: _ThermalLoadSource, //IfcThermalLoadSourceEnum
PropertySource: _PropertySource, //IfcPropertySourceEnum
SourceDescription: _SourceDescription, //IfcText
MaximumValue: _MaximumValue, //IfcPowerMeasure
MinimumValue: _MinimumValue, //IfcPowerMeasure
ThermalLoadTimeSeriesValues: _ThermalLoadTimeSeriesValues, //IfcTimeSeries
UserDefinedThermalLoadSource: _UserDefinedThermalLoadSource, //IfcLabel
UserDefinedPropertySource: _UserDefinedPropertySource, //IfcLabel
ThermalLoadType: _ThermalLoadType //IfcThermalLoadTypeEnum
});
                  }
      }
      exports.IFCSPACETHERMALLOADPROPERTIES = IFCSPACETHERMALLOADPROPERTIES;
    
       class IFCWINDOWLININGPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _LiningDepth, _LiningThickness, _TransomThickness, _MullionThickness, _FirstTransomOffset, _SecondTransomOffset, _FirstMullionOffset, _SecondMullionOffset, _ShapeAspectStyle) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
LiningDepth: _LiningDepth, //IfcPositiveLengthMeasure
LiningThickness: _LiningThickness, //IfcPositiveLengthMeasure
TransomThickness: _TransomThickness, //IfcPositiveLengthMeasure
MullionThickness: _MullionThickness, //IfcPositiveLengthMeasure
FirstTransomOffset: _FirstTransomOffset, //IfcNormalisedRatioMeasure
SecondTransomOffset: _SecondTransomOffset, //IfcNormalisedRatioMeasure
FirstMullionOffset: _FirstMullionOffset, //IfcNormalisedRatioMeasure
SecondMullionOffset: _SecondMullionOffset, //IfcNormalisedRatioMeasure
ShapeAspectStyle: _ShapeAspectStyle //IfcShapeAspect
});
                  }
      }
      exports.IFCWINDOWLININGPROPERTIES = IFCWINDOWLININGPROPERTIES;
    
       class IFCWINDOWPANELPROPERTIES extends IFCPROPERTYSETDEFINITION {
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
    
       class IFCDOORLININGPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _LiningDepth, _LiningThickness, _ThresholdDepth, _ThresholdThickness, _TransomThickness, _TransomOffset, _LiningOffset, _ThresholdOffset, _CasingThickness, _CasingDepth, _ShapeAspectStyle) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
LiningDepth: _LiningDepth, //IfcPositiveLengthMeasure
LiningThickness: _LiningThickness, //IfcPositiveLengthMeasure
ThresholdDepth: _ThresholdDepth, //IfcPositiveLengthMeasure
ThresholdThickness: _ThresholdThickness, //IfcPositiveLengthMeasure
TransomThickness: _TransomThickness, //IfcPositiveLengthMeasure
TransomOffset: _TransomOffset, //IfcLengthMeasure
LiningOffset: _LiningOffset, //IfcLengthMeasure
ThresholdOffset: _ThresholdOffset, //IfcLengthMeasure
CasingThickness: _CasingThickness, //IfcPositiveLengthMeasure
CasingDepth: _CasingDepth, //IfcPositiveLengthMeasure
ShapeAspectStyle: _ShapeAspectStyle //IfcShapeAspect
});
                  }
      }
      exports.IFCDOORLININGPROPERTIES = IFCDOORLININGPROPERTIES;
    
       class IFCDOORPANELPROPERTIES extends IFCPROPERTYSETDEFINITION {
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
    
       class IFCELEMENTQUANTITY extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _MethodOfMeasurement, _Quantities) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
MethodOfMeasurement: _MethodOfMeasurement, //IfcLabel
Quantities: _Quantities //[object Object]
});
                  }
      }
      exports.IFCELEMENTQUANTITY = IFCELEMENTQUANTITY;
    
       class IFCENERGYPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _EnergySequence, _UserDefinedEnergySequence) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
EnergySequence: _EnergySequence, //IfcEnergySequenceEnum
UserDefinedEnergySequence: _UserDefinedEnergySequence //IfcLabel
});
                  }
      }
      exports.IFCENERGYPROPERTIES = IFCENERGYPROPERTIES;
    
       class IFCFLUIDFLOWPROPERTIES extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _PropertySource, _FlowConditionTimeSeries, _VelocityTimeSeries, _FlowrateTimeSeries, _Fluid, _PressureTimeSeries, _UserDefinedPropertySource, _TemperatureSingleValue, _WetBulbTemperatureSingleValue, _WetBulbTemperatureTimeSeries, _TemperatureTimeSeries, _FlowrateSingleValue, _FlowConditionSingleValue, _VelocitySingleValue, _PressureSingleValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
PropertySource: _PropertySource, //IfcPropertySourceEnum
FlowConditionTimeSeries: _FlowConditionTimeSeries, //IfcTimeSeries
VelocityTimeSeries: _VelocityTimeSeries, //IfcTimeSeries
FlowrateTimeSeries: _FlowrateTimeSeries, //IfcTimeSeries
Fluid: _Fluid, //IfcMaterial
PressureTimeSeries: _PressureTimeSeries, //IfcTimeSeries
UserDefinedPropertySource: _UserDefinedPropertySource, //IfcLabel
TemperatureSingleValue: _TemperatureSingleValue, //IfcThermodynamicTemperatureMeasure
WetBulbTemperatureSingleValue: _WetBulbTemperatureSingleValue, //IfcThermodynamicTemperatureMeasure
WetBulbTemperatureTimeSeries: _WetBulbTemperatureTimeSeries, //IfcTimeSeries
TemperatureTimeSeries: _TemperatureTimeSeries, //IfcTimeSeries
FlowrateSingleValue: _FlowrateSingleValue, //IfcDerivedMeasureValue
FlowConditionSingleValue: _FlowConditionSingleValue, //IfcPositiveRatioMeasure
VelocitySingleValue: _VelocitySingleValue, //IfcLinearVelocityMeasure
PressureSingleValue: _PressureSingleValue //IfcPressureMeasure
});
                  }
      }
      exports.IFCFLUIDFLOWPROPERTIES = IFCFLUIDFLOWPROPERTIES;
    
       class IFCPERMEABLECOVERINGPROPERTIES extends IFCPROPERTYSETDEFINITION {
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
    
       class IFCPROPERTYSET extends IFCPROPERTYSETDEFINITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _HasProperties) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
HasProperties: _HasProperties //[object Object]
});
                  }
      }
      exports.IFCPROPERTYSET = IFCPROPERTYSET;
    
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
RelatingProcess: _RelatingProcess, //IfcProcess
QuantityInProcess: _QuantityInProcess //IfcMeasureWithUnit
});
                  }
      }
      exports.IFCRELASSIGNSTOPROCESS = IFCRELASSIGNSTOPROCESS;
    
       class IFCRELASSIGNSTOPRODUCT extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingProduct) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingProduct: _RelatingProduct //IfcProduct
});
                  }
      }
      exports.IFCRELASSIGNSTOPRODUCT = IFCRELASSIGNSTOPRODUCT;
    
       class IFCRELASSIGNSTORESOURCE extends IFCRELASSIGNS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingResource) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType);
                  this.add_attr({
RelatingResource: _RelatingResource //IfcResource
});
                  }
      }
      exports.IFCRELASSIGNSTORESOURCE = IFCRELASSIGNSTORESOURCE;
    
       class IFCRELASSOCIATESAPPLIEDVALUE extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingAppliedValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingAppliedValue: _RelatingAppliedValue //IfcAppliedValue
});
                  }
      }
      exports.IFCRELASSOCIATESAPPLIEDVALUE = IFCRELASSOCIATESAPPLIEDVALUE;
    
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
RelatingClassification: _RelatingClassification //IfcClassificationNotationSelect
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
    
       class IFCRELASSOCIATESPROFILEPROPERTIES extends IFCRELASSOCIATES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingProfileProperties, _ProfileSectionLocation, _ProfileOrientation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingProfileProperties: _RelatingProfileProperties, //IfcProfileProperties
ProfileSectionLocation: _ProfileSectionLocation, //IfcShapeAspect
ProfileOrientation: _ProfileOrientation //IfcOrientationSelect
});
                  }
      }
      exports.IFCRELASSOCIATESPROFILEPROPERTIES = IFCRELASSOCIATESPROFILEPROPERTIES;
    
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
RelatedElement: _RelatedElement //IfcElement
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
    
       class IFCRELCONNECTSSTRUCTURALELEMENT extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingElement, _RelatedStructuralMember) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingElement: _RelatingElement, //IfcElement
RelatedStructuralMember: _RelatedStructuralMember //IfcStructuralMember
});
                  }
      }
      exports.IFCRELCONNECTSSTRUCTURALELEMENT = IFCRELCONNECTSSTRUCTURALELEMENT;
    
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
RelatingStructure: _RelatingStructure //IfcSpatialStructureElement
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedSpace, _RelatedCoverings) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedSpace: _RelatedSpace, //IfcSpace
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
    
       class IFCRELINTERACTIONREQUIREMENTS extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _DailyInteraction, _ImportanceRating, _LocationOfInteraction, _RelatedSpaceProgram, _RelatingSpaceProgram) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
DailyInteraction: _DailyInteraction, //IfcCountMeasure
ImportanceRating: _ImportanceRating, //IfcNormalisedRatioMeasure
LocationOfInteraction: _LocationOfInteraction, //IfcSpatialStructureElement
RelatedSpaceProgram: _RelatedSpaceProgram, //IfcSpaceProgram
RelatingSpaceProgram: _RelatingSpaceProgram //IfcSpaceProgram
});
                  }
      }
      exports.IFCRELINTERACTIONREQUIREMENTS = IFCRELINTERACTIONREQUIREMENTS;
    
       class IFCRELPROJECTSELEMENT extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingElement, _RelatedFeatureElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingElement: _RelatingElement, //IfcElement
RelatedFeatureElement: _RelatedFeatureElement //IfcFeatureElementAddition
});
                  }
      }
      exports.IFCRELPROJECTSELEMENT = IFCRELPROJECTSELEMENT;
    
       class IFCRELREFERENCEDINSPATIALSTRUCTURE extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedElements, _RelatingStructure) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatedElements: _RelatedElements, //[object Object]
RelatingStructure: _RelatingStructure //IfcSpatialStructureElement
});
                  }
      }
      exports.IFCRELREFERENCEDINSPATIALSTRUCTURE = IFCRELREFERENCEDINSPATIALSTRUCTURE;
    
       class IFCRELSEQUENCE extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingProcess, _RelatedProcess, _TimeLag, _SequenceType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingProcess: _RelatingProcess, //IfcProcess
RelatedProcess: _RelatedProcess, //IfcProcess
TimeLag: _TimeLag, //IfcTimeMeasure
SequenceType: _SequenceType //IfcSequenceEnum
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
RelatingSpace: _RelatingSpace, //IfcSpace
RelatedBuildingElement: _RelatedBuildingElement, //IfcElement
ConnectionGeometry: _ConnectionGeometry, //IfcConnectionGeometry
PhysicalOrVirtualBoundary: _PhysicalOrVirtualBoundary, //IfcPhysicalOrVirtualEnum
InternalOrExternalBoundary: _InternalOrExternalBoundary //IfcInternalOrExternalEnum
});
                  }
      }
      exports.IFCRELSPACEBOUNDARY = IFCRELSPACEBOUNDARY;
    
       class IFCRELVOIDSELEMENT extends IFCRELCONNECTS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingBuildingElement, _RelatedOpeningElement) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description);
                  this.add_attr({
RelatingBuildingElement: _RelatingBuildingElement, //IfcElement
RelatedOpeningElement: _RelatedOpeningElement //IfcFeatureElementSubtraction
});
                  }
      }
      exports.IFCRELVOIDSELEMENT = IFCRELVOIDSELEMENT;
    
       class IFCRELNESTS extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects);
                  
                  }
      }
      exports.IFCRELNESTS = IFCRELNESTS;
    
       class IFCRELAGGREGATES extends IFCRELDECOMPOSES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatingObject, _RelatedObjects);
                  
                  }
      }
      exports.IFCRELAGGREGATES = IFCRELAGGREGATES;
    
       class IFCRELDEFINESBYPROPERTIES extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingPropertyDefinition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingPropertyDefinition: _RelatingPropertyDefinition //IfcPropertySetDefinition
});
                  }
      }
      exports.IFCRELDEFINESBYPROPERTIES = IFCRELDEFINESBYPROPERTIES;
    
       class IFCRELDEFINESBYTYPE extends IFCRELDEFINES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects);
                  this.add_attr({
RelatingType: _RelatingType //IfcTypeObject
});
                  }
      }
      exports.IFCRELDEFINESBYTYPE = IFCRELDEFINESBYTYPE;
    
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
    
       class IFCTERMINATORSYMBOL extends IFCANNOTATIONSYMBOLOCCURRENCE {
          constructor(_Item, _Styles, _Name, _AnnotatedCurve) {
                  super(_Item, _Styles, _Name);
                  this.add_attr({
AnnotatedCurve: _AnnotatedCurve //IfcAnnotationCurveOccurrence
});
                  }
      }
      exports.IFCTERMINATORSYMBOL = IFCTERMINATORSYMBOL;
    
       class IFCDIMENSIONCURVE extends IFCANNOTATIONCURVEOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCDIMENSIONCURVE = IFCDIMENSIONCURVE;
    
       class IFCPROJECTIONCURVE extends IFCANNOTATIONCURVEOCCURRENCE {
          constructor(_Item, _Styles, _Name) {
                  super(_Item, _Styles, _Name);
                  
                  }
      }
      exports.IFCPROJECTIONCURVE = IFCPROJECTIONCURVE;
    
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
    
       class IFCFACETEDBREP extends IFCMANIFOLDSOLIDBREP {
          constructor(_Outer) {
                  super(_Outer);
                  
                  }
      }
      exports.IFCFACETEDBREP = IFCFACETEDBREP;
    
       class IFCFACETEDBREPWITHVOIDS extends IFCMANIFOLDSOLIDBREP {
          constructor(_Outer, _Voids) {
                  super(_Outer);
                  this.add_attr({
Voids: _Voids //[object Object]
});
                  }
      }
      exports.IFCFACETEDBREPWITHVOIDS = IFCFACETEDBREPWITHVOIDS;
    
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
    
       class IFCRECTANGULARTRIMMEDSURFACE extends IFCBOUNDEDSURFACE {
          constructor(_BasisSurface, _U1, _V1, _U2, _V2, _Usense, _Vsense) {
                  super();
                  this.add_attr({
BasisSurface: _BasisSurface, //IfcSurface
U1: _U1, //IfcParameterValue
V1: _V1, //IfcParameterValue
U2: _U2, //IfcParameterValue
V2: _V2, //IfcParameterValue
Usense: _Usense, //BOOLEAN
Vsense: _Vsense //BOOLEAN
});
                  }
      }
      exports.IFCRECTANGULARTRIMMEDSURFACE = IFCRECTANGULARTRIMMEDSURFACE;
    
       class IFCPLANE extends IFCELEMENTARYSURFACE {
          constructor(_Position) {
                  super(_Position);
                  
                  }
      }
      exports.IFCPLANE = IFCPLANE;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM extends IFCCARTESIANTRANSFORMATIONOPERATOR2D {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale, _Scale2) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale);
                  this.add_attr({
Scale2: _Scale2 //REAL
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM = IFCCARTESIANTRANSFORMATIONOPERATOR2DNONUNIFORM;
    
       class IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM extends IFCCARTESIANTRANSFORMATIONOPERATOR3D {
          constructor(_Axis1, _Axis2, _LocalOrigin, _Scale, _Axis3, _Scale2, _Scale3) {
                  super(_Axis1, _Axis2, _LocalOrigin, _Scale, _Axis3);
                  this.add_attr({
Scale2: _Scale2, //REAL
Scale3: _Scale3 //REAL
});
                  }
      }
      exports.IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM = IFCCARTESIANTRANSFORMATIONOPERATOR3DNONUNIFORM;
    
       class IFCCOMPOSITECURVE extends IFCBOUNDEDCURVE {
          constructor(_Segments, _SelfIntersect) {
                  super();
                  this.add_attr({
Segments: _Segments, //[object Object]
SelfIntersect: _SelfIntersect //LOGICAL
});
                  }
      }
      exports.IFCCOMPOSITECURVE = IFCCOMPOSITECURVE;
    
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
SenseAgreement: _SenseAgreement, //BOOLEAN
MasterRepresentation: _MasterRepresentation //IfcTrimmingPreference
});
                  }
      }
      exports.IFCTRIMMEDCURVE = IFCTRIMMEDCURVE;
    
       class IFCBSPLINECURVE extends IFCBOUNDEDCURVE {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect) {
                  super();
                  this.add_attr({
Degree: _Degree, //INTEGER
ControlPointsList: _ControlPointsList, //[object Object]
CurveForm: _CurveForm, //IfcBSplineCurveForm
ClosedCurve: _ClosedCurve, //LOGICAL
SelfIntersect: _SelfIntersect //LOGICAL
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
    
       class IFCLINEARDIMENSION extends IFCDIMENSIONCURVEDIRECTEDCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCLINEARDIMENSION = IFCLINEARDIMENSION;
    
       class IFCRADIUSDIMENSION extends IFCDIMENSIONCURVEDIRECTEDCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCRADIUSDIMENSION = IFCRADIUSDIMENSION;
    
       class IFCANGULARDIMENSION extends IFCDIMENSIONCURVEDIRECTEDCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCANGULARDIMENSION = IFCANGULARDIMENSION;
    
       class IFCDIAMETERDIMENSION extends IFCDIMENSIONCURVEDIRECTEDCALLOUT {
          constructor(_Contents) {
                  super(_Contents);
                  
                  }
      }
      exports.IFCDIAMETERDIMENSION = IFCDIAMETERDIMENSION;
    
       class IFCWINDOWSTYLE extends IFCTYPEPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ConstructionType, _OperationType, _ParameterTakesPrecedence, _Sizeable) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag);
                  this.add_attr({
ConstructionType: _ConstructionType, //IfcWindowStyleConstructionEnum
OperationType: _OperationType, //IfcWindowStyleOperationEnum
ParameterTakesPrecedence: _ParameterTakesPrecedence, //BOOLEAN
Sizeable: _Sizeable //BOOLEAN
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
ParameterTakesPrecedence: _ParameterTakesPrecedence, //BOOLEAN
Sizeable: _Sizeable //BOOLEAN
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
    
       class IFCTASK extends IFCPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TaskId, _Status, _WorkMethod, _IsMilestone, _Priority) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
TaskId: _TaskId, //IfcIdentifier
Status: _Status, //IfcLabel
WorkMethod: _WorkMethod, //IfcLabel
IsMilestone: _IsMilestone, //BOOLEAN
Priority: _Priority //INTEGER
});
                  }
      }
      exports.IFCTASK = IFCTASK;
    
       class IFCPROCEDURE extends IFCPROCESS {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ProcedureID, _ProcedureType, _UserDefinedProcedureType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ProcedureID: _ProcedureID, //IfcIdentifier
ProcedureType: _ProcedureType, //IfcProcedureTypeEnum
UserDefinedProcedureType: _UserDefinedProcedureType //IfcLabel
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
    
       class IFCSPATIALSTRUCTUREELEMENT extends IFCPRODUCT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
LongName: _LongName, //IfcLabel
CompositionType: _CompositionType //IfcElementCompositionEnum
});
                  }
      }
      exports.IFCSPATIALSTRUCTUREELEMENT = IFCSPATIALSTRUCTUREELEMENT;
    
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _UAxes, _VAxes, _WAxes) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
UAxes: _UAxes, //[object Object]
VAxes: _VAxes, //[object Object]
WAxes: _WAxes //[object Object]
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ResourceIdentifier: _ResourceIdentifier, //IfcIdentifier
ResourceGroup: _ResourceGroup, //IfcLabel
ResourceConsumption: _ResourceConsumption, //IfcResourceConsumptionEnum
BaseQuantity: _BaseQuantity //IfcMeasureWithUnit
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCCOSTITEM = IFCCOSTITEM;
    
       class IFCCOSTSCHEDULE extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _SubmittedBy, _PreparedBy, _SubmittedOn, _Status, _TargetUsers, _UpdateDate, _ID, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
SubmittedBy: _SubmittedBy, //IfcActorSelect
PreparedBy: _PreparedBy, //IfcActorSelect
SubmittedOn: _SubmittedOn, //IfcDateTimeSelect
Status: _Status, //IfcLabel
TargetUsers: _TargetUsers, //[object Object]
UpdateDate: _UpdateDate, //IfcDateTimeSelect
ID: _ID, //IfcIdentifier
PredefinedType: _PredefinedType //IfcCostScheduleTypeEnum
});
                  }
      }
      exports.IFCCOSTSCHEDULE = IFCCOSTSCHEDULE;
    
       class IFCEQUIPMENTSTANDARD extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCEQUIPMENTSTANDARD = IFCEQUIPMENTSTANDARD;
    
       class IFCFURNITURESTANDARD extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCFURNITURESTANDARD = IFCFURNITURESTANDARD;
    
       class IFCPERFORMANCEHISTORY extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _LifeCyclePhase) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
LifeCyclePhase: _LifeCyclePhase //IfcLabel
});
                  }
      }
      exports.IFCPERFORMANCEHISTORY = IFCPERFORMANCEHISTORY;
    
       class IFCPERMIT extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PermitID) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PermitID: _PermitID //IfcIdentifier
});
                  }
      }
      exports.IFCPERMIT = IFCPERMIT;
    
       class IFCPROJECTORDER extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ID, _PredefinedType, _Status) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ID: _ID, //IfcIdentifier
PredefinedType: _PredefinedType, //IfcProjectOrderTypeEnum
Status: _Status //IfcLabel
});
                  }
      }
      exports.IFCPROJECTORDER = IFCPROJECTORDER;
    
       class IFCPROJECTORDERRECORD extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Records, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Records: _Records, //[object Object]
PredefinedType: _PredefinedType //IfcProjectOrderRecordTypeEnum
});
                  }
      }
      exports.IFCPROJECTORDERRECORD = IFCPROJECTORDERRECORD;
    
       class IFCSCHEDULETIMECONTROL extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ActualStart, _EarlyStart, _LateStart, _ScheduleStart, _ActualFinish, _EarlyFinish, _LateFinish, _ScheduleFinish, _ScheduleDuration, _ActualDuration, _RemainingTime, _FreeFloat, _TotalFloat, _IsCritical, _StatusTime, _StartFloat, _FinishFloat, _Completion) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ActualStart: _ActualStart, //IfcDateTimeSelect
EarlyStart: _EarlyStart, //IfcDateTimeSelect
LateStart: _LateStart, //IfcDateTimeSelect
ScheduleStart: _ScheduleStart, //IfcDateTimeSelect
ActualFinish: _ActualFinish, //IfcDateTimeSelect
EarlyFinish: _EarlyFinish, //IfcDateTimeSelect
LateFinish: _LateFinish, //IfcDateTimeSelect
ScheduleFinish: _ScheduleFinish, //IfcDateTimeSelect
ScheduleDuration: _ScheduleDuration, //IfcTimeMeasure
ActualDuration: _ActualDuration, //IfcTimeMeasure
RemainingTime: _RemainingTime, //IfcTimeMeasure
FreeFloat: _FreeFloat, //IfcTimeMeasure
TotalFloat: _TotalFloat, //IfcTimeMeasure
IsCritical: _IsCritical, //BOOLEAN
StatusTime: _StatusTime, //IfcDateTimeSelect
StartFloat: _StartFloat, //IfcTimeMeasure
FinishFloat: _FinishFloat, //IfcTimeMeasure
Completion: _Completion //IfcPositiveRatioMeasure
});
                  }
      }
      exports.IFCSCHEDULETIMECONTROL = IFCSCHEDULETIMECONTROL;
    
       class IFCSERVICELIFE extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ServiceLifeType, _ServiceLifeDuration) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ServiceLifeType: _ServiceLifeType, //IfcServiceLifeTypeEnum
ServiceLifeDuration: _ServiceLifeDuration //IfcTimeMeasure
});
                  }
      }
      exports.IFCSERVICELIFE = IFCSERVICELIFE;
    
       class IFCSPACEPROGRAM extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _SpaceProgramIdentifier, _MaxRequiredArea, _MinRequiredArea, _RequestedLocation, _StandardRequiredArea) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
SpaceProgramIdentifier: _SpaceProgramIdentifier, //IfcIdentifier
MaxRequiredArea: _MaxRequiredArea, //IfcAreaMeasure
MinRequiredArea: _MinRequiredArea, //IfcAreaMeasure
RequestedLocation: _RequestedLocation, //IfcSpatialStructureElement
StandardRequiredArea: _StandardRequiredArea //IfcAreaMeasure
});
                  }
      }
      exports.IFCSPACEPROGRAM = IFCSPACEPROGRAM;
    
       class IFCTIMESERIESSCHEDULE extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ApplicableDates, _TimeSeriesScheduleType, _TimeSeries) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
ApplicableDates: _ApplicableDates, //[object Object]
TimeSeriesScheduleType: _TimeSeriesScheduleType, //IfcTimeSeriesScheduleTypeEnum
TimeSeries: _TimeSeries //IfcTimeSeries
});
                  }
      }
      exports.IFCTIMESERIESSCHEDULE = IFCTIMESERIESSCHEDULE;
    
       class IFCWORKCONTROL extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identifier, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _WorkControlType, _UserDefinedControlType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Identifier: _Identifier, //IfcIdentifier
CreationDate: _CreationDate, //IfcDateTimeSelect
Creators: _Creators, //[object Object]
Purpose: _Purpose, //IfcLabel
Duration: _Duration, //IfcTimeMeasure
TotalFloat: _TotalFloat, //IfcTimeMeasure
StartTime: _StartTime, //IfcDateTimeSelect
FinishTime: _FinishTime, //IfcDateTimeSelect
WorkControlType: _WorkControlType, //IfcWorkControlTypeEnum
UserDefinedControlType: _UserDefinedControlType //IfcLabel
});
                  }
      }
      exports.IFCWORKCONTROL = IFCWORKCONTROL;
    
       class IFCACTIONREQUEST extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _RequestID) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
RequestID: _RequestID //IfcIdentifier
});
                  }
      }
      exports.IFCACTIONREQUEST = IFCACTIONREQUEST;
    
       class IFCCONDITIONCRITERION extends IFCCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Criterion, _CriterionDateTime) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
Criterion: _Criterion, //IfcConditionCriterionSelect
CriterionDateTime: _CriterionDateTime //IfcDateTimeSelect
});
                  }
      }
      exports.IFCCONDITIONCRITERION = IFCCONDITIONCRITERION;
    
       class IFCINVENTORY extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _InventoryType, _Jurisdiction, _ResponsiblePersons, _LastUpdateDate, _CurrentValue, _OriginalValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
InventoryType: _InventoryType, //IfcInventoryTypeEnum
Jurisdiction: _Jurisdiction, //IfcActorSelect
ResponsiblePersons: _ResponsiblePersons, //[object Object]
LastUpdateDate: _LastUpdateDate, //IfcCalendarDate
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
IsLinear: _IsLinear //BOOLEAN
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
    
       class IFCZONE extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCZONE = IFCZONE;
    
       class IFCASSET extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _AssetID, _OriginalValue, _CurrentValue, _TotalReplacementCost, _Owner, _User, _ResponsiblePerson, _IncorporationDate, _DepreciatedValue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
AssetID: _AssetID, //IfcIdentifier
OriginalValue: _OriginalValue, //IfcCostValue
CurrentValue: _CurrentValue, //IfcCostValue
TotalReplacementCost: _TotalReplacementCost, //IfcCostValue
Owner: _Owner, //IfcActorSelect
User: _User, //IfcActorSelect
ResponsiblePerson: _ResponsiblePerson, //IfcPerson
IncorporationDate: _IncorporationDate, //IfcCalendarDate
DepreciatedValue: _DepreciatedValue //IfcCostValue
});
                  }
      }
      exports.IFCASSET = IFCASSET;
    
       class IFCCONDITION extends IFCGROUP {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCCONDITION = IFCCONDITION;
    
       class IFCELECTRICALBASEPROPERTIES extends IFCENERGYPROPERTIES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _EnergySequence, _UserDefinedEnergySequence, _ElectricCurrentType, _InputVoltage, _InputFrequency, _FullLoadCurrent, _MinimumCircuitCurrent, _MaximumPowerInput, _RatedPowerInput, _InputPhase) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _EnergySequence, _UserDefinedEnergySequence);
                  this.add_attr({
ElectricCurrentType: _ElectricCurrentType, //IfcElectricCurrentEnum
InputVoltage: _InputVoltage, //IfcElectricVoltageMeasure
InputFrequency: _InputFrequency, //IfcFrequencyMeasure
FullLoadCurrent: _FullLoadCurrent, //IfcElectricCurrentMeasure
MinimumCircuitCurrent: _MinimumCircuitCurrent, //IfcElectricCurrentMeasure
MaximumPowerInput: _MaximumPowerInput, //IfcPowerMeasure
RatedPowerInput: _RatedPowerInput, //IfcPowerMeasure
InputPhase: _InputPhase //INTEGER
});
                  }
      }
      exports.IFCELECTRICALBASEPROPERTIES = IFCELECTRICALBASEPROPERTIES;
    
       class IFCRELOCCUPIESSPACES extends IFCRELASSIGNSTOACTOR {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingActor, _ActingRole) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingActor, _ActingRole);
                  
                  }
      }
      exports.IFCRELOCCUPIESSPACES = IFCRELOCCUPIESSPACES;
    
       class IFCRELASSIGNSTOPROJECTORDER extends IFCRELASSIGNSTOCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl);
                  
                  }
      }
      exports.IFCRELASSIGNSTOPROJECTORDER = IFCRELASSIGNSTOPROJECTORDER;
    
       class IFCRELSCHEDULESCOSTITEMS extends IFCRELASSIGNSTOCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl);
                  
                  }
      }
      exports.IFCRELSCHEDULESCOSTITEMS = IFCRELSCHEDULESCOSTITEMS;
    
       class IFCRELASSIGNSTASKS extends IFCRELASSIGNSTOCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl, _TimeForTask) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatedObjectsType, _RelatingControl);
                  this.add_attr({
TimeForTask: _TimeForTask //IfcScheduleTimeControl
});
                  }
      }
      exports.IFCRELASSIGNSTASKS = IFCRELASSIGNSTASKS;
    
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
    
       class IFCRELOVERRIDESPROPERTIES extends IFCRELDEFINESBYPROPERTIES {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingPropertyDefinition, _OverridingProperties) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _RelatedObjects, _RelatingPropertyDefinition);
                  this.add_attr({
OverridingProperties: _OverridingProperties //[object Object]
});
                  }
      }
      exports.IFCRELOVERRIDESPROPERTIES = IFCRELOVERRIDESPROPERTIES;
    
       class IFCDIMENSIONCURVETERMINATOR extends IFCTERMINATORSYMBOL {
          constructor(_Item, _Styles, _Name, _AnnotatedCurve, _Role) {
                  super(_Item, _Styles, _Name, _AnnotatedCurve);
                  this.add_attr({
Role: _Role //IfcDimensionExtentUsage
});
                  }
      }
      exports.IFCDIMENSIONCURVETERMINATOR = IFCDIMENSIONCURVETERMINATOR;
    
       class IFC2DCOMPOSITECURVE extends IFCCOMPOSITECURVE {
          constructor(_Segments, _SelfIntersect) {
                  super(_Segments, _SelfIntersect);
                  
                  }
      }
      exports.IFC2DCOMPOSITECURVE = IFC2DCOMPOSITECURVE;
    
       class IFCBEZIERCURVE extends IFCBSPLINECURVE {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect) {
                  super(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect);
                  
                  }
      }
      exports.IFCBEZIERCURVE = IFCBEZIERCURVE;
    
       class IFCFURNISHINGELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFURNISHINGELEMENTTYPE = IFCFURNISHINGELEMENTTYPE;
    
       class IFCSPATIALSTRUCTUREELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCSPATIALSTRUCTUREELEMENTTYPE = IFCSPATIALSTRUCTUREELEMENTTYPE;
    
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
    
       class IFCDISTRIBUTIONELEMENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCDISTRIBUTIONELEMENTTYPE = IFCDISTRIBUTIONELEMENTTYPE;
    
       class IFCELEMENTCOMPONENTTYPE extends IFCELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCELEMENTCOMPONENTTYPE = IFCELEMENTCOMPONENTTYPE;
    
       class IFCMOVE extends IFCTASK {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TaskId, _Status, _WorkMethod, _IsMilestone, _Priority, _MoveFrom, _MoveTo, _PunchList) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TaskId, _Status, _WorkMethod, _IsMilestone, _Priority);
                  this.add_attr({
MoveFrom: _MoveFrom, //IfcSpatialStructureElement
MoveTo: _MoveTo, //IfcSpatialStructureElement
PunchList: _PunchList //[object Object]
});
                  }
      }
      exports.IFCMOVE = IFCMOVE;
    
       class IFCORDERACTION extends IFCTASK {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TaskId, _Status, _WorkMethod, _IsMilestone, _Priority, _ActionID) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _TaskId, _Status, _WorkMethod, _IsMilestone, _Priority);
                  this.add_attr({
ActionID: _ActionID //IfcIdentifier
});
                  }
      }
      exports.IFCORDERACTION = IFCORDERACTION;
    
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType, _InteriorOrExteriorSpace, _ElevationWithFlooring) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _LongName, _CompositionType);
                  this.add_attr({
InteriorOrExteriorSpace: _InteriorOrExteriorSpace, //IfcInternalOrExternalEnum
ElevationWithFlooring: _ElevationWithFlooring //IfcLengthMeasure
});
                  }
      }
      exports.IFCSPACE = IFCSPACE;
    
       class IFCSTRUCTURALREACTION extends IFCSTRUCTURALACTIVITY {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  
                  }
      }
      exports.IFCSTRUCTURALREACTION = IFCSTRUCTURALREACTION;
    
       class IFCSTRUCTURALACTION extends IFCSTRUCTURALACTIVITY {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  this.add_attr({
DestabilizingLoad: _DestabilizingLoad, //BOOLEAN
CausedBy: _CausedBy //IfcStructuralReaction
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
    
       class IFCEQUIPMENTELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCEQUIPMENTELEMENT = IFCEQUIPMENTELEMENT;
    
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
    
       class IFCTRANSPORTELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OperationType, _CapacityByWeight, _CapacityByNumber) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
OperationType: _OperationType, //IfcTransportElementTypeEnum
CapacityByWeight: _CapacityByWeight, //IfcMassMeasure
CapacityByNumber: _CapacityByNumber //IfcCountMeasure
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
    
       class IFCDISTRIBUTIONELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCDISTRIBUTIONELEMENT = IFCDISTRIBUTIONELEMENT;
    
       class IFCELECTRICALELEMENT extends IFCELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCELECTRICALELEMENT = IFCELECTRICALELEMENT;
    
       class IFCDISTRIBUTIONPORT extends IFCPORT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _FlowDirection) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
FlowDirection: _FlowDirection //IfcFlowDirectionEnum
});
                  }
      }
      exports.IFCDISTRIBUTIONPORT = IFCDISTRIBUTIONPORT;
    
       class IFCCREWRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  
                  }
      }
      exports.IFCCREWRESOURCE = IFCCREWRESOURCE;
    
       class IFCLABORRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity, _SkillSet) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  this.add_attr({
SkillSet: _SkillSet //IfcText
});
                  }
      }
      exports.IFCLABORRESOURCE = IFCLABORRESOURCE;
    
       class IFCSUBCONTRACTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity, _SubContractor, _JobDescription) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  this.add_attr({
SubContractor: _SubContractor, //IfcActorSelect
JobDescription: _JobDescription //IfcText
});
                  }
      }
      exports.IFCSUBCONTRACTRESOURCE = IFCSUBCONTRACTRESOURCE;
    
       class IFCCONSTRUCTIONEQUIPMENTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  
                  }
      }
      exports.IFCCONSTRUCTIONEQUIPMENTRESOURCE = IFCCONSTRUCTIONEQUIPMENTRESOURCE;
    
       class IFCCONSTRUCTIONMATERIALRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity, _Suppliers, _UsageRatio) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  this.add_attr({
Suppliers: _Suppliers, //[object Object]
UsageRatio: _UsageRatio //IfcRatioMeasure
});
                  }
      }
      exports.IFCCONSTRUCTIONMATERIALRESOURCE = IFCCONSTRUCTIONMATERIALRESOURCE;
    
       class IFCCONSTRUCTIONPRODUCTRESOURCE extends IFCCONSTRUCTIONRESOURCE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ResourceIdentifier, _ResourceGroup, _ResourceConsumption, _BaseQuantity);
                  
                  }
      }
      exports.IFCCONSTRUCTIONPRODUCTRESOURCE = IFCCONSTRUCTIONPRODUCTRESOURCE;
    
       class IFCWORKPLAN extends IFCWORKCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identifier, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _WorkControlType, _UserDefinedControlType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identifier, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _WorkControlType, _UserDefinedControlType);
                  
                  }
      }
      exports.IFCWORKPLAN = IFCWORKPLAN;
    
       class IFCWORKSCHEDULE extends IFCWORKCONTROL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identifier, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _WorkControlType, _UserDefinedControlType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _Identifier, _CreationDate, _Creators, _Purpose, _Duration, _TotalFloat, _StartTime, _FinishTime, _WorkControlType, _UserDefinedControlType);
                  
                  }
      }
      exports.IFCWORKSCHEDULE = IFCWORKSCHEDULE;
    
       class IFCELECTRICALCIRCUIT extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  
                  }
      }
      exports.IFCELECTRICALCIRCUIT = IFCELECTRICALCIRCUIT;
    
       class IFCSTRUCTURALANALYSISMODEL extends IFCSYSTEM {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _PredefinedType, _OrientationOf2DPlane, _LoadedBy, _HasResults) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcAnalysisModelTypeEnum
OrientationOf2DPlane: _OrientationOf2DPlane, //IfcAxis2Placement3D
LoadedBy: _LoadedBy, //[object Object]
HasResults: _HasResults //[object Object]
});
                  }
      }
      exports.IFCSTRUCTURALANALYSISMODEL = IFCSTRUCTURALANALYSISMODEL;
    
       class IFCRATIONALBEZIERCURVE extends IFCBEZIERCURVE {
          constructor(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect, _WeightsData) {
                  super(_Degree, _ControlPointsList, _CurveForm, _ClosedCurve, _SelfIntersect);
                  this.add_attr({
WeightsData: _WeightsData //[object Object]
});
                  }
      }
      exports.IFCRATIONALBEZIERCURVE = IFCRATIONALBEZIERCURVE;
    
       class IFCFURNITURETYPE extends IFCFURNISHINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _AssemblyPlace) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
AssemblyPlace: _AssemblyPlace //IfcAssemblyPlaceEnum
});
                  }
      }
      exports.IFCFURNITURETYPE = IFCFURNITURETYPE;
    
       class IFCSYSTEMFURNITUREELEMENTTYPE extends IFCFURNISHINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCSYSTEMFURNITUREELEMENTTYPE = IFCSYSTEMFURNITUREELEMENTTYPE;
    
       class IFCSPACETYPE extends IFCSPATIALSTRUCTUREELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSpaceTypeEnum
});
                  }
      }
      exports.IFCSPACETYPE = IFCSPACETYPE;
    
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
    
       class IFCMEMBERTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcMemberTypeEnum
});
                  }
      }
      exports.IFCMEMBERTYPE = IFCMEMBERTYPE;
    
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
    
       class IFCWALLTYPE extends IFCBUILDINGELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcWallTypeEnum
});
                  }
      }
      exports.IFCWALLTYPE = IFCWALLTYPE;
    
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCFASTENERTYPE = IFCFASTENERTYPE;
    
       class IFCDISCRETEACCESSORYTYPE extends IFCELEMENTCOMPONENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCDISCRETEACCESSORYTYPE = IFCDISCRETEACCESSORYTYPE;
    
       class IFCSTRUCTURALPOINTREACTION extends IFCSTRUCTURALREACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal);
                  
                  }
      }
      exports.IFCSTRUCTURALPOINTREACTION = IFCSTRUCTURALPOINTREACTION;
    
       class IFCSTRUCTURALLINEARACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy);
                  this.add_attr({
ProjectedOrTrue: _ProjectedOrTrue //IfcProjectedOrTrueLengthEnum
});
                  }
      }
      exports.IFCSTRUCTURALLINEARACTION = IFCSTRUCTURALLINEARACTION;
    
       class IFCSTRUCTURALPLANARACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy);
                  this.add_attr({
ProjectedOrTrue: _ProjectedOrTrue //IfcProjectedOrTrueLengthEnum
});
                  }
      }
      exports.IFCSTRUCTURALPLANARACTION = IFCSTRUCTURALPLANARACTION;
    
       class IFCSTRUCTURALPOINTACTION extends IFCSTRUCTURALACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy);
                  
                  }
      }
      exports.IFCSTRUCTURALPOINTACTION = IFCSTRUCTURALPOINTACTION;
    
       class IFCSTRUCTURALSURFACEMEMBER extends IFCSTRUCTURALMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
PredefinedType: _PredefinedType, //IfcStructuralSurfaceTypeEnum
Thickness: _Thickness //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSTRUCTURALSURFACEMEMBER = IFCSTRUCTURALSURFACEMEMBER;
    
       class IFCSTRUCTURALCURVEMEMBER extends IFCSTRUCTURALMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcStructuralCurveTypeEnum
});
                  }
      }
      exports.IFCSTRUCTURALCURVEMEMBER = IFCSTRUCTURALCURVEMEMBER;
    
       class IFCSTRUCTURALCURVECONNECTION extends IFCSTRUCTURALCONNECTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition);
                  
                  }
      }
      exports.IFCSTRUCTURALCURVECONNECTION = IFCSTRUCTURALCURVECONNECTION;
    
       class IFCSTRUCTURALPOINTCONNECTION extends IFCSTRUCTURALCONNECTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedCondition);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCFASTENER = IFCFASTENER;
    
       class IFCDISCRETEACCESSORY extends IFCELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
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
    
       class IFCBUILDINGELEMENTCOMPONENT extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCBUILDINGELEMENTCOMPONENT = IFCBUILDINGELEMENTCOMPONENT;
    
       class IFCBUILDINGELEMENTPROXY extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _CompositionType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
CompositionType: _CompositionType //IfcElementCompositionEnum
});
                  }
      }
      exports.IFCBUILDINGELEMENTPROXY = IFCBUILDINGELEMENTPROXY;
    
       class IFCCOLUMN extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCCURTAINWALL = IFCCURTAINWALL;
    
       class IFCDOOR extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
OverallWidth: _OverallWidth //IfcPositiveLengthMeasure
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _ShapeType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
ShapeType: _ShapeType //IfcRampTypeEnum
});
                  }
      }
      exports.IFCRAMP = IFCRAMP;
    
       class IFCRAMPFLIGHT extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCRAMPFLIGHT = IFCRAMPFLIGHT;
    
       class IFCROOF extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _ShapeType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
ShapeType: _ShapeType //IfcRoofTypeEnum
});
                  }
      }
      exports.IFCROOF = IFCROOF;
    
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _ShapeType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
ShapeType: _ShapeType //IfcStairTypeEnum
});
                  }
      }
      exports.IFCSTAIR = IFCSTAIR;
    
       class IFCSTAIRFLIGHT extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _NumberOfRiser, _NumberOfTreads, _RiserHeight, _TreadLength) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
NumberOfRiser: _NumberOfRiser, //INTEGER
NumberOfTreads: _NumberOfTreads, //INTEGER
RiserHeight: _RiserHeight, //IfcPositiveLengthMeasure
TreadLength: _TreadLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCSTAIRFLIGHT = IFCSTAIRFLIGHT;
    
       class IFCWALL extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCWALL = IFCWALL;
    
       class IFCWINDOW extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _OverallHeight, _OverallWidth) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
OverallHeight: _OverallHeight, //IfcPositiveLengthMeasure
OverallWidth: _OverallWidth //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCWINDOW = IFCWINDOW;
    
       class IFCBEAM extends IFCBUILDINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _ControlElementId) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
ControlElementId: _ControlElementId //IfcIdentifier
});
                  }
      }
      exports.IFCDISTRIBUTIONCONTROLELEMENT = IFCDISTRIBUTIONCONTROLELEMENT;
    
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
    
       class IFCSENSORTYPE extends IFCDISTRIBUTIONCONTROLELEMENTTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSensorTypeEnum
});
                  }
      }
      exports.IFCSENSORTYPE = IFCSENSORTYPE;
    
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
    
       class IFCMECHANICALFASTENERTYPE extends IFCFASTENERTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  
                  }
      }
      exports.IFCMECHANICALFASTENERTYPE = IFCMECHANICALFASTENERTYPE;
    
       class IFCVIBRATIONISOLATORTYPE extends IFCDISCRETEACCESSORYTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcVibrationIsolatorTypeEnum
});
                  }
      }
      exports.IFCVIBRATIONISOLATORTYPE = IFCVIBRATIONISOLATORTYPE;
    
       class IFCSTRUCTURALLINEARACTIONVARYING extends IFCSTRUCTURALLINEARACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue, _VaryingAppliedLoadLocation, _SubsequentAppliedLoads) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue);
                  this.add_attr({
VaryingAppliedLoadLocation: _VaryingAppliedLoadLocation, //IfcShapeAspect
SubsequentAppliedLoads: _SubsequentAppliedLoads //[object Object]
});
                  }
      }
      exports.IFCSTRUCTURALLINEARACTIONVARYING = IFCSTRUCTURALLINEARACTIONVARYING;
    
       class IFCSTRUCTURALPLANARACTIONVARYING extends IFCSTRUCTURALPLANARACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue, _VaryingAppliedLoadLocation, _SubsequentAppliedLoads) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _AppliedLoad, _GlobalOrLocal, _DestabilizingLoad, _CausedBy, _ProjectedOrTrue);
                  this.add_attr({
VaryingAppliedLoadLocation: _VaryingAppliedLoadLocation, //IfcShapeAspect
SubsequentAppliedLoads: _SubsequentAppliedLoads //[object Object]
});
                  }
      }
      exports.IFCSTRUCTURALPLANARACTIONVARYING = IFCSTRUCTURALPLANARACTIONVARYING;
    
       class IFCSTRUCTURALSURFACEMEMBERVARYING extends IFCSTRUCTURALSURFACEMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness, _SubsequentThickness, _VaryingThicknessLocation) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType, _Thickness);
                  this.add_attr({
SubsequentThickness: _SubsequentThickness, //[object Object]
VaryingThicknessLocation: _VaryingThicknessLocation //IfcShapeAspect
});
                  }
      }
      exports.IFCSTRUCTURALSURFACEMEMBERVARYING = IFCSTRUCTURALSURFACEMEMBERVARYING;
    
       class IFCSTRUCTURALCURVEMEMBERVARYING extends IFCSTRUCTURALCURVEMEMBER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _PredefinedType);
                  
                  }
      }
      exports.IFCSTRUCTURALCURVEMEMBERVARYING = IFCSTRUCTURALCURVEMEMBERVARYING;
    
       class IFCMECHANICALFASTENER extends IFCFASTENER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _NominalDiameter, _NominalLength) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
NominalLength: _NominalLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCMECHANICALFASTENER = IFCMECHANICALFASTENER;
    
       class IFCPROJECTIONELEMENT extends IFCFEATUREELEMENTADDITION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCPROJECTIONELEMENT = IFCPROJECTIONELEMENT;
    
       class IFCOPENINGELEMENT extends IFCFEATUREELEMENTSUBTRACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCOPENINGELEMENT = IFCOPENINGELEMENT;
    
       class IFCEDGEFEATURE extends IFCFEATUREELEMENTSUBTRACTION {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _FeatureLength) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
FeatureLength: _FeatureLength //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCEDGEFEATURE = IFCEDGEFEATURE;
    
       class IFCBUILDINGELEMENTPART extends IFCBUILDINGELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCBUILDINGELEMENTPART = IFCBUILDINGELEMENTPART;
    
       class IFCREINFORCINGELEMENT extends IFCBUILDINGELEMENTCOMPONENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
SteelGrade: _SteelGrade //IfcLabel
});
                  }
      }
      exports.IFCREINFORCINGELEMENT = IFCREINFORCINGELEMENT;
    
       class IFCWALLSTANDARDCASE extends IFCWALL {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCWALLSTANDARDCASE = IFCWALLSTANDARDCASE;
    
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  
                  }
      }
      exports.IFCDISTRIBUTIONCHAMBERELEMENT = IFCDISTRIBUTIONCHAMBERELEMENT;
    
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
    
       class IFCSPACEHEATERTYPE extends IFCENERGYCONVERSIONDEVICETYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcSpaceHeaterTypeEnum
});
                  }
      }
      exports.IFCSPACEHEATERTYPE = IFCSPACEHEATERTYPE;
    
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
    
       class IFCGASTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcGasTerminalTypeEnum
});
                  }
      }
      exports.IFCGASTERMINALTYPE = IFCGASTERMINALTYPE;
    
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
    
       class IFCELECTRICAPPLIANCETYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricApplianceTypeEnum
});
                  }
      }
      exports.IFCELECTRICAPPLIANCETYPE = IFCELECTRICAPPLIANCETYPE;
    
       class IFCELECTRICHEATERTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcElectricHeaterTypeEnum
});
                  }
      }
      exports.IFCELECTRICHEATERTYPE = IFCELECTRICHEATERTYPE;
    
       class IFCFIRESUPPRESSIONTERMINALTYPE extends IFCFLOWTERMINALTYPE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType, _PredefinedType) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ApplicableOccurrence, _HasPropertySets, _RepresentationMaps, _Tag, _ElementType);
                  this.add_attr({
PredefinedType: _PredefinedType //IfcFireSuppressionTerminalTypeEnum
});
                  }
      }
      exports.IFCFIRESUPPRESSIONTERMINALTYPE = IFCFIRESUPPRESSIONTERMINALTYPE;
    
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
    
       class IFCROUNDEDEDGEFEATURE extends IFCEDGEFEATURE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _FeatureLength, _Radius) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _FeatureLength);
                  this.add_attr({
Radius: _Radius //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCROUNDEDEDGEFEATURE = IFCROUNDEDEDGEFEATURE;
    
       class IFCCHAMFEREDGEFEATURE extends IFCEDGEFEATURE {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _FeatureLength, _Width, _Height) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _FeatureLength);
                  this.add_attr({
Width: _Width, //IfcPositiveLengthMeasure
Height: _Height //IfcPositiveLengthMeasure
});
                  }
      }
      exports.IFCCHAMFEREDGEFEATURE = IFCCHAMFEREDGEFEATURE;
    
       class IFCREINFORCINGMESH extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _MeshLength, _MeshWidth, _LongitudinalBarNominalDiameter, _TransverseBarNominalDiameter, _LongitudinalBarCrossSectionArea, _TransverseBarCrossSectionArea, _LongitudinalBarSpacing, _TransverseBarSpacing) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
MeshLength: _MeshLength, //IfcPositiveLengthMeasure
MeshWidth: _MeshWidth, //IfcPositiveLengthMeasure
LongitudinalBarNominalDiameter: _LongitudinalBarNominalDiameter, //IfcPositiveLengthMeasure
TransverseBarNominalDiameter: _TransverseBarNominalDiameter, //IfcPositiveLengthMeasure
LongitudinalBarCrossSectionArea: _LongitudinalBarCrossSectionArea, //IfcAreaMeasure
TransverseBarCrossSectionArea: _TransverseBarCrossSectionArea, //IfcAreaMeasure
LongitudinalBarSpacing: _LongitudinalBarSpacing, //IfcPositiveLengthMeasure
TransverseBarSpacing: _TransverseBarSpacing //IfcPositiveLengthMeasure
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
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  
                  }
      }
      exports.IFCTENDONANCHOR = IFCTENDONANCHOR;
    
       class IFCREINFORCINGBAR extends IFCREINFORCINGELEMENT {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade, _NominalDiameter, _CrossSectionArea, _BarLength, _BarRole, _BarSurface) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _SteelGrade);
                  this.add_attr({
NominalDiameter: _NominalDiameter, //IfcPositiveLengthMeasure
CrossSectionArea: _CrossSectionArea, //IfcAreaMeasure
BarLength: _BarLength, //IfcPositiveLengthMeasure
BarRole: _BarRole, //IfcReinforcingBarRoleEnum
BarSurface: _BarSurface //IfcReinforcingBarSurfaceEnum
});
                  }
      }
      exports.IFCREINFORCINGBAR = IFCREINFORCINGBAR;
    
       class IFCELECTRICDISTRIBUTIONPOINT extends IFCFLOWCONTROLLER {
          constructor(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag, _DistributionPointFunction, _UserDefinedFunction) {
                  super(_GlobalId, _OwnerHistory, _Name, _Description, _ObjectType, _ObjectPlacement, _Representation, _Tag);
                  this.add_attr({
DistributionPointFunction: _DistributionPointFunction, //IfcElectricDistributionPointFunctionEnum
UserDefinedFunction: _UserDefinedFunction //IfcLabel
});
                  }
      }
      exports.IFCELECTRICDISTRIBUTIONPOINT = IFCELECTRICDISTRIBUTIONPOINT;
    