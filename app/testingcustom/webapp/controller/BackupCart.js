sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/fe/core/PageController",
], function (JSONModel, PageController) {
	"use strict";

	return PageController.extend("testingcustom.controller.Cart", {
		onInit: function () {
			var oOwnerComponent = this.getAppComponent();

			// this.oRouter = oOwnerComponent.getRouter();
			// this.oModel = oOwnerComponent.getModel();

			// this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
		},

		// _onPatternMatch: function (oEvent) {
		// 	this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
		// 	this._product = oEvent.getParameter("arguments").product || this._product || "0";

		// 	this.getView().bindElement({
		// 		path: "/ProductCollectionStats/Filters/1/values/" + this._supplier,
		// 		model: "products"
		// 	});
		// },

		// onExit: function () {
		// 	this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
		// }
	});
});