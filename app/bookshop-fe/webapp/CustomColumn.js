sap.ui.define(["sap/m/MessageBox"], function(MessageBox) {
    "use strict";
 
    
    return {

        buttonPressed: function(oEvent) {

            const oModel=this.getModel()

            const data=oEvent.getSource().getBindingContext().getObject();

            var cartData = {
                "book_id": parseInt(data.ID),
                "title": data.title,
                "quantity": 2,
                "amount": 200.00
            };

            const oBindListCart = oModel.bindList("/Cart");
            var oCartCreate = oBindListCart.create(cartData);

            oCartCreate.created().then(function () {
                console.error("Data Inserted in Cart with ID: " + oCartCreate.getProperty("ID"))
            }, function (oError) {
                console.error("Error inserting Data in Cart")
            });


            MessageBox.show(data.title);
        }
    };
});