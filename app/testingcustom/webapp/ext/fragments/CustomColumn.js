sap.ui.define(["sap/m/MessageBox"], function(MessageBox) {
    "use strict";
 
    
    return {

        buttonPressed: function(oEvent) {

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
                console.error("Data Inserted in Cart with ID: " + oCartCreate.getProperty("ID"))
            }, function (oError) {
                console.error("Error inserting Data in Cart")
            });


            MessageBox.show(data.title);
        }
    };
});
// sap.ui.define(["sap/m/MessageBox","sap/ui/model/json/JSONModel"], function(MessageBox,JSONModel) {
//     "use strict";
 
    
//     return {

        
       

//         buttonPressed: function(oEvent) {

//               // get the EventBus

//               // get the EventBus


//             // const oThis=this;

//             // console.log(oThis._controller.getView())
            

//             // const data=oEvent.getSource().getBindingContext().getObject();

//             // var cartData = {
//             //     "book_id": parseInt(data.ID),
//             //     "title": data.title,
//             //     "quantity": 2,
//             //     "amount": 200.00
//             // };

//             // var oEventBus = this.getOwnerComponent().getEventBus();
            
//             // // get the onPress method out of the EventBus
//             // oEventBus.publish("onPress", oEvent, cartData);



//             // this.model=new JSONModel();

//             // this.model.setData({
//             //     cartObject:[cartData],
//             //     label:"mycart"
//             // })

//             // this._controller.getOwnerComponent().setModel(this.model,"MyCartModel")



            
//             // var cartModel = new JSONModel(cartData);

            

//             // this.setModel(cartModel);

//             // const oModel=this.getModel()
            
//             // this.setModel(cartModel,"customCartModel")

//             // cartModel.setData(cartData);

            

//             const oBindListCart = oModel.bindList("/Cart");
//             var oCartCreate = oBindListCart.create(cartData);

//             oCartCreate.created().then(function () {
//                 console.error("Data Inserted in Cart with ID: " + oCartCreate.getProperty("ID"))
//             }, function (oError) {
//                 console.error("Error inserting Data in Cart")
//             });


//             MessageBox.show(data.title);
//             // return cartModel;
//         }
//     };
// });