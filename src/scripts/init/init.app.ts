/* -- Imports -- */
import "../tools/runtime.registry.js";
import "../../error/base.js";
import "./init.global.js";
import "./init.errorListener.js";
import "./init.interface.js";
import RunTime from "../variables/global.js";

/**
 * Starts the `@application` initialization process.
 */
async function InitApp() {
    try {
        /* -- @LoadRuntimeTools -- */
        await InitRuntimeTools();

        /* -- @InitializeRuntimeErrorListener -- */
        await InitRuntimeErrorListener();

        // [CONTEXT]: Load application's interface when runtime tools is successfully loaded.
        await InitApplicationInterface();
    } catch (err) {
        throw err;
    }
}

/* -- @ApplicationInitializationProcess -- */
RunTime.InitApp = InitApp;
