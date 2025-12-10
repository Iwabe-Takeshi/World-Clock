/* -- Imports -- */
import "../tools/global-access.js";
import "../tools/index.js";
import "../index.js";
import "../../error/base.js"
import "./init.global.js";
import App from "../variables/global.js";

/**
 * Starts the `@application` initialization process.
 */
function InitApp() {
    try {
        InitRuntimeTools();
    } catch (e) {
        ERROR("Failed to initialize application contents! Error:", e);
    }
}

/* -- @ApplicationInitializationProcess -- */
App.InitApp = InitApp;
