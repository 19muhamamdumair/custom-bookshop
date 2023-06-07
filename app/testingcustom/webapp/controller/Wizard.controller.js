sap.ui.define([
	"sap/fe/core/PageController",
	'sap/f/library'
], function (PageController, fioriLibrary) {
	"use strict";

	return PageController.extend("testingcustom.controller.Wizard", {
	
		onNavBack: function() {


			this.routing.navigateToRoute("list")
		  
		  }


	});
});
