import Runtime from '../variables/global.js';

/**
 * Starts to initialize application's runtime error listeners for possibilities of
 * uncaught errors being emitted.
 */
async function InitRuntimeErrorListener(): Promise<void> {
    /**
     * Event for catching emitted errors that is not caught.
     */
    (Runtime as Window || globalThis).addEventListener("error", (Event) => {
        // [CONTEXT]: Prevent default logging un-caught error from terminal.
        Event.preventDefault();
        ERROR("Uncaught Error:", Event.error);
    });

    /**
     * Event for catching rejected promises.
     */
    (Runtime as Window || globalThis).addEventListener("unhandledrejection", (Event) => {
        // [CONTEXT]: Prevent default logging unhandled rejection promises from terminal.
        Event.preventDefault();
        ERROR("Unhandled Rejection:", Event.reason);
    });

    // [CONTEXT]: Success Initialization Response.
    App.UpdateState("RuntimeErrorListenerState", true);
}

/* -- @ApplicationRuntimeErrorListener -- */
Runtime["InitRuntimeErrorListener"] = InitRuntimeErrorListener;
