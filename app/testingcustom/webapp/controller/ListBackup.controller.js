// sap.ui.define([
// 	"sap/ui/model/json/JSONModel",
// 	"sap/fe/core/PageController",
// 	"sap/ui/model/Filter",
// 	"sap/ui/model/FilterOperator",
// 	'sap/ui/model/Sorter',
// 	'sap/m/MessageBox',
//     'sap/f/library',
// ], function (JSONModel, PageController, Filter, FilterOperator, Sorter, MessageBox,fioriLibrary) {
// 	"use strict";

// 	return PageController.extend("testingcustom.controller.List", {
// 		onInit: function () {
//             PageController.prototype.onInit.apply(this);
// 			this.oView = this.getView();
// 		// 	// this._bDescendingSort = false;
//         var oModel = new JSONModel();

//         oModel.bindList("/Books");

		// var mymodel=this.getOwnerComponent().getModel("bookData");
		// this.getView().setModel(mymodel,"bookDetail")

        

// 			this.oProductsTable = this.oView.byId("Books");
//             this.oRouter = this.getOwnerComponent().getRouter();
// 		},

// 		// onSearch: function (oEvent) {
// 		// 	var oTableSearchState = [],
// 		// 		sQuery = oEvent.getParameter("query");

// 		// 	if (sQuery && sQuery.length > 0) {
// 		// 		oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
// 		// 	}

// 		// 	this.oProductsTable.getBinding("items").filter(oTableSearchState, "Application");
// 		// },

// 		// onAdd: function () {
// 		// 	MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
// 		// },

// 		// onSort: function () {
// 		// 	this._bDescendingSort = !this._bDescendingSort;
// 		// 	var oBinding = this.oProductsTable.getBinding("items"),
// 		// 		oSorter = new Sorter("Name", this._bDescendingSort);

// 		// 	oBinding.sort(oSorter);
// 		// },

        

// 		onListItemPress: function (oEvent) {

// 			PageController.prototype.onInit.apply(this);
			
// 			// this.getRouter().navTo("employee",{
// 			// 	employeeId : oCtx.getProperty("EmployeeID")
// 			// });

// 			var oCtx=oEvent.getParameter("bindingContext"), productPath = oCtx.getPath(),
// 				product = productPath.split("/").slice(-1).pop();
				

// 			this.routing.navigateToRoute("detail", {key: oCtx.getProperty("ID")});

// 			// this.getExtensionAPI().routing.navigate(oEvent.getParameter("bindingContext"));	
// 			// this.getExtensionAPI().routing.navigate(oCtx);		



// 			// var oItem = oEvent.getSource();
// 			// oItem.setNavigated(true);
// 			// var oParent = oItem.getParent();
// 			// // store index of the item clicked, which can be used later in the columnResize event
// 			// this.iIndex = oParent.indexOfItem(oItem);
            

//             // const oModel=this.getModel();

//             // const data=oEvent.getSource().getBindingContext().getObject();

// 			// oEvent.getParameter("bindingContext").getPath()
            
//             // var oBinding = this.base.getExtensionAPI()
//             //                      .getModel()
//             //                      .bindList("/Books", 
//             //                                null, 
//             //                                [], 
//             //                                [], 
//             //                                {
//             //                                }
//             //                               );

//             //                               oMacroElement.setBindingContext(oBinding.create({}));

//             //                               var oEntity = oMacroElement.getBindingContext().getObject();
//             //                               console.log(oEntity)
// 			// // var productPath = oEvent.getSource().getBindingContext("books").getPath(),
// 			// 	product = productPath.split("/").slice(-1).pop();

// 			// this.oRouter.navTo("detail", {layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded, product: product});
//             // that.routing.navigateToRoute("object", {book:book})
// 		}
// 	});
// });

sap.ui.define(
    [
        'sap/fe/core/PageController',
	"sap/ui/model/json/JSONModel",

    ],
    function(PageController,JSONModel) {
        'use strict';

        return PageController.extend('testingcustom.controller.List', {

					// onInit: function () {
                        // this.oRouter = this.getAppComponent().getRouter();
                        // this.oView = this.getView();
                        // this._bDescendingSort = false;
                        // this.oProductsTable = this.oView.byId("productContainer");
                        // this.oRouter = this.getAppComponent().getRouter();

        //     PageController.prototype.onInit.apply(this);
        // var oModel = new JSONModel();

		// 	var mymodel=this.getAppComponent().getModel("bookData");
		// this.getView().setModel(oModel,"bookDetail")
		// 	// this._bDescendingSort = false;

        // oModel.bindList("/Books");

        

			// this.oProductsTable = this.oView.byId("Books");
            // this.oRouter = this.getOwnerComponent().getRouter();
		// },
            onSelectProduct(oEvent) {
				var oCtx=oEvent.getParameter("bindingContext"), productPath = oCtx.getPath(),
				product = productPath.split("/").slice(-1).pop();
				

			    this.routing.navigateToRoute("detail", {key: oCtx.getProperty("ID")});
                // this.getExtensionAPI().routing.navigate(oEvent.getParameter("bindingContext"));
            },
            onSearch(event) {
                var oSource = event.getSource();
                const filters = event.getParameter("filters");
                var oSearchParameters = event.getParameters() || {};
                this.getView().byId("productContainer").getBinding("items").filter(filters).changeParameters({$search:oSearchParameters.search});
            },
            onFiltersChanged(event) {
                const filters = event.getParameter("filters");
                const oSearchParameters = event.getParameter("search");
                this.getView().byId("productContainer").getBinding("items").filter(filters).changeParameters({$search: oSearchParameters})
            },
            onGoToCheckout(event) {
                this.getExtensionAPI().routing.navigateToRoute("CheckoutPage");
            }
        });
    }
);


// sap.ui.define(
//     [
//         'sap/fe/core/PageController'
//     ],
//     function(PageController) {
//         'use strict';

//         return PageController.extend('testingcustom.controller.List', {
//             onInit: function() {
//                 PageController.prototype.onInit.apply(this);
//                 const router = this.getAppComponent().getRouter();
//                 router.getRoute("list").attachPatternMatched(this._onObjectMatched, this);
//             },

//             _onObjectMatched: function() {
//                 if(this._createDone) {
//                     if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
//                         var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
//                         oCrossAppNav.toExternal({
//                             target: {
//                                 shellHash: "#"                                
//                             }
//                         });
//                     }
//                 } else {
//                     this._createDone = true;
//                     const listBinding = this.getAppComponent().getModel().bindList("/Books");
//                     this.editFlow.createDocument(listBinding, {
//                         creationMode: "NewPage"
//                     });  
//                 }
//             }
//         });
//     }
// );