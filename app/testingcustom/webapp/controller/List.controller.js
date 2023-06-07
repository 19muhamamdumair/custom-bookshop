sap.ui.define(
    [
        'sap/fe/core/PageController',
	"sap/ui/model/json/JSONModel",

    ],
    function(PageController,JSONModel) {
        'use strict';

        return PageController.extend('testingcustom.controller.List', {

					
            onSelectProduct(oEvent) {
				var oCtx=oEvent.getParameter("bindingContext"), productPath = oCtx.getPath(),
				product = productPath.split("/").slice(-1).pop();
				

			    this.routing.navigateToRoute("detail", {key: oCtx.getProperty("ID")});
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

 