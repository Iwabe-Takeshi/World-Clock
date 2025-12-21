/* -- Imports -- */
import "../tools/runtime.registry.js";
import "../../error/base.js";
import "./init.global.js";
import "./init.interface.js";
import RunTime from "../variables/global.js";

/**
 * Starts the `@application` initialization process.
 */
async function InitApp() {
    try {
        /* -- @LoadRuntimeTools -- */
        await InitRuntimeTools();

        // [CONTEXT]: Load application's interface when runtime tools is successfully loaded.
        InitApplicationInterface();

        /* -- @ApplicationInitializationResponseStatus -- */
        return { Status: true, StatusData: "Success" };
    } catch (err) {
        console.error("Failed to initialize application contents! Error:", err);
        return { Status: false, StatusData: err };
    }
}

/* -- @ApplicationInitializationProcess -- */
RunTime.InitApp = InitApp;
