/**
 * |--------------------------------------------------|
 * |                                                  |
 * |                 Global Variables                 |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Customize name for application runtime as **window** or **globalThis**.
 */
var Runtime = (window as any || globalThis as any);
export default Runtime as any;

/**
 * Shorter declaration of **document** or **window.document**.
 */
const DOM = document || window.document;

/**
 * Stores status of **application** runtime tools.
 *
 * @example
 *  - {
 *       // [INFO]: Successfully loaded state.
 *       "Create": {
 *          Call: Create,
 *          Status: true
 *       },
 *       "IsArray": {
 *          Call: IsArray,
 *          Status: true,
 *       },
 *       // [ERROR]: Failed to load state.
 *       "EachOf": {
 *          Call: null,
 *          Status: false,
 *       }
 *    }
 */
const RuntimeToolStates: {
    [runtime_key: string]: {
        Call: unknown,
        Status: Boolean,
    }
} = {};

/**
 * Handle storing of result states of loading runtime tools.
 */
const StoreState = <T>(key: string, data: T, state: boolean): void => {
    RuntimeToolStates[key] = {
        Call: data,
        Status: state
    };
}

(function () {
    const List = {
        "RuntimeToolStates": RuntimeToolStates,
        "DOM": DOM,
        "StoreState": StoreState
    }

    // [CONTEXT]: Loads variables from application runtime.
    for (const [key, value] of Object.entries(List)) {
        // [ERROR]: Notify and skip invalid key.
        if (typeof key !== "string" || key.constructor !== String) {
            console.error(`[app>scripts>variables>global.js](): Failed to load ${key} from application's runtime! (SKIPPED: '${key}')`);

            // [CONTEXT]: Stores failed runtime variable status to @RuntimeToolsStates object.
            StoreState(String(key), null, false);
            continue;
        }

        // [CONTEXT]: Stores to runtime object that can be access globally without needing 'import'.
        Runtime[key] = value;

        // [CONTEXT]: Skip @RuntimeToolStates variable to be stored to itself, to avoid infinite obj states.
        if (key === "RuntimeToolStates")
            continue;

        // [CONTEXT]: Stores state to @RuntimeToolsStates object, which can be useful when identifying which one goes wrong.
        StoreState(key, value, true);
    }
})();
