sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.helloworldview.controller.App", {
		onInit: function() {
			// Get the router instance.  Improved error handling added.
			const oRouter = UIComponent.getRouterFor(this);
			if (oRouter) {
				oRouter.attachBypassed(function(oEvent) {
					const sHash = oEvent.getParameter("hash");
					console.warn(`Route bypassed: ${sHash}.  Consider adding this route to your routing configuration`);
				});
        // Navigate to main view if no hash is set, with improved error handling and timeout.
				if (!window.location.hash || window.location.hash === "#") {
					setTimeout(function() {
            try {
              oRouter.navTo("RouteMain");
            } catch (error) {
              console.error("Error navigating to main route:", error);
            }
					}, 100);
				}
			} else {
				console.error("Router instance not found. Check your application's configuration.");
			}
		}
	});
});
