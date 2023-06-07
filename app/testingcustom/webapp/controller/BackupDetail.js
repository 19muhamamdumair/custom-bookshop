sap.ui.define([
	"sap/fe/core/PageController",
	'sap/f/library'
], function (PageController, fioriLibrary) {
	"use strict";

	return PageController.extend("testingcustom.controller.Detail", {
		onInit: function () {
			PageController.prototype.onInit.apply(this,arguments);
			this.getAppComponent().getRouter().getRoute("list")
			// var oRouter = sap.ui.core.routing.Router.getRouter("detail");
			// oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
			var oOwnerComponent = this.getAppComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();

			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			// this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
			// this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onProductMatched, this);
		},

		// onSupplierPress: function (oEvent) {
		// 	var supplierPath = oEvent.getSource().getBindingContext("products").getPath(),
		// 		supplier = supplierPath.split("/").slice(-1).pop();

		// 	this.oRouter.navTo("detailDetail", {layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded});
		// },

		_onProductMatched: function (oEvent) {
			this._key = oEvent.getParameter("arguments").key || this._key || "0";
			this.getView().bindElement({
				path: "/Books/" + this._key
			});
		},

		onToggleCart: function (oEvent) {
			var bPressed = oEvent.getParameter("pressed");
			var oEntry = this.getView().getBindingContext().getObject();

			// this._setLayout(bPressed ? "Three" : "Two");
			// this.getRouter().navTo(bPressed ? "cart" : "detail", {
			// 	id: oEntry.Category,
			// 	productId: oEntry.ProductId
			// });
			this.routing.navigateToRoute(bPressed ? "cart" : "detail", {key: oEntry.ID});
		},
		addToCartAction: function(oEvent) {

            const oModel=this.getModel()

            const data=oEvent.getSource().getBindingContext().getObject();

            var cartData = {
                "book_id": parseInt(data.ID),
                "title": data.title,
                "quantity": 1,
                "amount": 200.00
            };

            const oBindListCart = oModel.bindList("/Cart");
            var oCartCreate = oBindListCart.create(cartData);

            oCartCreate.created().then(function () {
				//call method in cart controller using event bus
				
                console.error("Data Inserted in Cart with ID: " + oCartCreate.getProperty("ID"))
            }, function (oError) {
                console.error("Error inserting Data in Cart")
            });


            MessageBox.show(data.title);
        }

		// onEditToggleButtonPress: function() {
		// 	var oObjectPage = this.getView().byId("ObjectPageLayout"),
		// 		bCurrentShowFooterState = oObjectPage.getShowFooter();

		// 	oObjectPage.setShowFooter(!bCurrentShowFooterState);
		// },

		// onExit: function () {
		// 	this.oRouter.getRoute("list").detachPatternMatched(this._onProductMatched, this);
		// 	this.oRouter.getRoute("detail").detachPatternMatched(this._onProductMatched, this);
		// }
	});
});

// sap.ui.define(
//     [
//         'sap/fe/core/PageController',
//         'sap/ui/model/json/JSONModel',
//     ],
//     function(PageController, JSONModel,) {
//         'use strict';

//         return PageController.extend('testingcustom.controller.Detail', {
//             onInit: function() {
//                 PageController.prototype.onInit.apply(this);
//                 let model = {
//                     editable : true
//                 };
//                 this.getView().setModel(new JSONModel(model), "viewModel");
//             },
    
//             saveDocument: function () {
//                 var that = this;
//                 this.editFlow.saveDocument(this.getView().getBindingContext()).then(function(){
//                     that.getView().getModel("viewModel").setProperty("/editable", false);
//                 })
//             },
    
//             cancelDocument: function () {
//                 var that = this;
//                 this.editFlow.cancelDocument(this.getView().getBindingContext(), {
//                     control: this.byId("cancelButton")
//                 }).then(function(){
//                     that.getView().getModel("viewModel").setProperty("/editable", false);
                    
//                 })
//             }
//         });
//     }
// );