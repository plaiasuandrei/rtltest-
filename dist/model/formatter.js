sap.ui.define([
	
], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "01":
					return resourceBundle.getText("invoiceStatus1");
				case "02":
					return resourceBundle.getText("invoiceStatus2");
				case "03":
					return resourceBundle.getText("invoiceStatus3");
				case "04":
					return resourceBundle.getText("invoiceStatus4");
				
				default:
					return sStatus;
			}
		},
		
		formatAttachmentIcon: function(m) {
			return sap.ca.ui.model.format.FormattingLibrary.formatAttachmentIcon(m);
		}
	};

});