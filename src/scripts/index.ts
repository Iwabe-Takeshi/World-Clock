/**
 * Imports the method that handles the initialization of the web app contents.
 */
import "./init/init.app.js";

/* -- @DefaultApplicationLocationHash -- */
if (!location.hash)
    location.replace("#");

/* -- @InitializeApplicationRuntime -- */
InitApp();
