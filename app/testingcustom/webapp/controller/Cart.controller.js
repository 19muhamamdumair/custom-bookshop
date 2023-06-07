sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/fe/core/PageController",
	"sap/m/MessageToast"
], function (JSONModel, PageController,MessageToast) {
	"use strict";

	return PageController.extend("testingcustom.controller.Cart", {
		onInit: function () {
			var oOwnerComponent = this.getAppComponent();

			var oEventBus = oOwnerComponent.getEventBus();
               
  			oEventBus.subscribe("onPress", this.onPress, this);


		},

		onPress: function() {


			const oList=this.getView().byId("cartId");
			if(oList)
			{
				const bind=oList.getBinding("items");
				if(bind)
				{
					bind.refresh();
				}
			}
                
			setTimeout(function () {
				MessageToast.show("Product Added Successfully");
			}.bind(this), 1000);
		  
		  },

		  onProceed: function() {


			this.routing.navigateToRoute("wizard")
		  
		  }
	});
	
});