sap.ui.define([
		"rtl/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Wrbtr").length, 1, "The sorting by Wrbtr returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("RdVendorName").length, 1, "The sorting by RdVendorName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Wrbtr").length, 1, "The group by Wrbtr returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Wrbtr if the user groupes by Wrbtr", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Wrbtr");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Wrbtr", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by RdVendorName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Wrbtr");

		this.oGroupSortState.sort("RdVendorName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});