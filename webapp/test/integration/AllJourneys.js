jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ocrInvoiceHSet in the list
// * All 3 ocrInvoiceHSet have at least one ocrInvoiceLSet

sap.ui.require([
	"sap/ui/test/Opa5",
	"rtl/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"rtl/test/integration/pages/App",
	"rtl/test/integration/pages/Browser",
	"rtl/test/integration/pages/Master",
	"rtl/test/integration/pages/Detail",
	"rtl/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "rtl.view."
	});

	sap.ui.require([
		"rtl/test/integration/MasterJourney",
		"rtl/test/integration/NavigationJourney",
		"rtl/test/integration/NotFoundJourney",
		"rtl/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});