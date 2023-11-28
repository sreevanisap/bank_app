sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.bankapp.controller.View1", {
            onInit: function () {

            },

            onspanish: function () {
                
                var imodel = this.getOwnerComponent().getModel("i18n_es");
                this.getOwnerComponent().setModel(imodel, "i18n");
            },
            
            //creating dialog
            onOpenBankDetails: function () {
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "com.sap.bankapp.view.fragments.MoreDetails" }
                    );
                }
                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();
                    });

            },
            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            }
        });
    });
