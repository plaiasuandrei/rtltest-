jQuery.sap.declare("rtl.model.types.searchFieldType");
sap.ui.model.SimpleType.extend("rtl.model.types.searchFieldType", {
    formatValue : function(oValue) {
        return oValue;
    },

    parseValue : function(oValue) {
        return oValue;
    },

    validateValue : function(oValue) {
        var mailregex = "[a-zA-Z]";
				if (!oValue.match(mailregex)) {
					throw new ValidateException("'" + oValue + "' is not a valid search field");
				}
    }
})