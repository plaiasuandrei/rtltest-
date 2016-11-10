jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"rtl/test/integration/NavigationJourneyPhone",
		"rtl/test/integration/NotFoundJourneyPhone",
		"rtl/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});