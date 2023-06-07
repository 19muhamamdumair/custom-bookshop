//the UI5_184 view controller pair has to be used for UI5 version >= 1.84
sap.ui.define(["sap/fe/core/PageController","sap/ui/model/json/JSONModel"], function (PageController,JSONModel) {
	"use strict";

	return PageController.extend("bookshopfe.detail", {


		onInit: function (cartData) {

            console.log(cartData);

            // var oEventBus = this.getOwnerComponent().getEventBus();

            // oEventBus.subscribe("onPress", this.onPress, this);
            // set data model on view

            // var cartData = {
            //     "book_id": 0,
            //     "title": "temp",
            //     "quantity": 2,
            //     "amount": 200.00
            // };

            // this.model=new JSONModel();

            // this.model.setData({
            //     cartObject:[cartData],
            //     label:"mycart"
            // })

            
			
            
           
			// var obj = {
			// 	"Objects": cartData
			// };
            // var cartModel = new JSONModel(obj);
            this.getView().setModel(this.getOwnerComponent().getModel("MyCartModel"),"MyCartModel");
            },

	});
});
