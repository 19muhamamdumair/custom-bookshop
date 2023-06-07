sap.ui.define([
	"sap/fe/core/PageController",
	'sap/f/library'
], function (PageController, fioriLibrary) {
	"use strict";

	return PageController.extend("testingcustom.controller.Detail", {
		onInit: function () {
			PageController.prototype.onInit.apply(this,arguments);
			this.getAppComponent().getRouter().getRoute("list");
			var oOwnerComponent = this.getAppComponent();

			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();

			this.oRouter.getRoute("detail").attachPatternMatched(this._onProductMatched, this);
		},


		_onProductMatched: function (oEvent) {
			this._key = oEvent.getParameter("arguments").key || this._key || "0";
			this.getView().bindElement({
				path: "/Books/" + this._key
			});
		},

		onToggleCart: function (oEvent) {
			var bPressed = oEvent.getParameter("pressed");
			var oEntry = this.getView().getBindingContext().getObject();

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

			var oEventBus = this.getAppComponent().getEventBus();


            oCartCreate.created().then(function () {
				//call method in cart controller using event bus

                
		  
				// get the onPress method out of the EventBus
				oEventBus.publish("onPress");
            }, function (oError) {
                console.error("Error inserting Data in Cart")
            });


            MessageBox.show(data.title);
        },


	});
});
