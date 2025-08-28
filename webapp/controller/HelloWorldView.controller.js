sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("converted.helloworldview.controller.HelloWorldView", {
		onInit: function() {
			// Load mock data
			const oData = {
				message: "Initial Message",
				materialNumber: "",
				createdOn: "",
				createdTime: "00:00:00",
				createdBy: "",
				materialType: "",
				materialGroup: "",
				radioGroup: "radio1", // Default selection
				checkbox1: false,
				checkbox2: false
			};
			const oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},

		/**
		 * Handles the press event of the "Say Hello World" button.
		 * Updates the message in the model.
		 * @param {sap.ui.base.Event} oEvent - The press event.
		 */
		onSayHelloWorld: function(oEvent) {
			const oModel = this.getView().getModel();
			oModel.setProperty("/message", "Hello World!");
			MessageToast.show("Hello World!");
		},


    /**
     * Handles the GET DATA button press.  This is a placeholder.  
     * In a real-world scenario, this would fetch data from a backend.
     * @param {sap.ui.base.Event} oEvent - The press event
     */
    onGetData: function(oEvent){
        MessageToast.show("Get Data button pressed! (Placeholder)");
    },

    /**
     * Handles the EXIT button press.  This is a placeholder.
     * In a real-world scenario, this might close the app or navigate to another view.
     * @param {sap.ui.base.Event} oEvent - The press event
     */
    onExit: function(oEvent){
        MessageToast.show("Exit button pressed! (Placeholder)");
    }
	});
});
