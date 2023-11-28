sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.bankapp.controller.View1", {
            onInit: function () {

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
