import "../tools/loader.states.js";
import "../tools/runtime.registry.js";
import "../../error/base.js";
import "./init.global.js";
import "./init.errorListener.js";
import "./init.interface.js";
import "./init.events.js";
import RunTime from "../variables/global.js";

/**
 * Starts the **application** initialization process.
 */
async function InitApp() {
    try {
        /* -- @StartLoader -- */
        await Loader.Start("Loading Application Contents...");

        /* -- @LoadRuntimeTools -- */
        await InitRuntimeTools();

        /* -- @InitializeRuntimeErrorListener -- */
        await InitRuntimeErrorListener();

        /* -- @InitializeApplicationInterfaces -- */
        await InitApplicationInterface();

        /* -- @InitApplicationEvents -- */
        await InitEvents();
    } catch (err) {
        console.error(`InitApp(): Failed to initialize application contents! Error: ${err}`);
    } finally {
        /* -- @StopLoader -- */
        await Loader.End();
    }
}

/* -- @ApplicationInitializationProcess -- */
RunTime.InitApp = InitApp;
