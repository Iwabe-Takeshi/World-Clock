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
    [runtimeKey: string]: {
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

/**
 * Contains application's states.
 */
const App = {
    ComponentsState: false,
    RuntimeToolsState: false,
    RuntimeErrorListenerState: false,
    UpdateStates: function (key: "ComponentsState" | "RuntimeToolsState" | "RuntimeErrorListenerState", state: boolean) {
        if (!this[key] || !IsBool(state))
            return;

        this[key] = state;
    },
    IsReady: function () {
        return this.ComponentsState && this.RuntimeToolsState && this.RuntimeErrorListenerState;
    }
};

/**
 * Stores application's user interface component states.
 *
 * @example
 *  - {
 *      NAV: {
 *          Home: {
 *              Status: true,
 *              IsIconLoaded: true,
 *              IsEventAttached: true,
 *          },
 *          ...
 *      },
 *      VIEW: {
 *          Panel: {
 *              Status: true,
 *          }
 *      }
 *    }
 */
const ComponentStates: {
    NAV: {
        [ComponentKey: string]: {
            Block: Element;
            Status: boolean;
        } | {
            Block: Element;
            Status: boolean;
            IsIconLoaded: boolean;
            IsEventAttached: boolean;
        }
    },
    VIEW: {
        [ComponentKey: string]: {
            Block: Element;
            Status: boolean;
        }
    }
} = { VIEW: {}, NAV: {} };

/**
 * SVG icon paths used in this application.
 * Source: (https://fonts.google.com/icons)
 */
const SVGPaths = {
    Settings: "M463.08-310.77h33.84l7.39-49.23q22.77-5 37.5-13.19t28.04-23.12l47.23 18 17.69-29.54-37.54-30.77q6.62-21.69 6.62-41.38t-6.62-41.38l37.54-30.77-17.69-29.54-47.23 18q-13.31-14.93-28.04-23.12-14.73-8.19-37.5-13.19l-7.39-49.23h-33.84L455.69-600q-22.77 5-37.5 13.19t-28.04 23.12l-47.23-18-17.69 29.54 37.54 30.77q-6.62 21.69-6.62 41.38t6.62 41.38l-37.54 30.77 17.69 29.54 47.23-18q13.31 14.93 28.04 23.12 14.73 8.19 37.5 13.19l7.39 49.23ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM224.62-160q-27.62 0-46.12-18.5Q160-197 160-224.62v-510.76q0-27.62 18.5-46.12Q197-800 224.62-800h510.76q27.62 0 46.12 18.5Q800-763 800-735.38v510.76q0 27.62-18.5 46.12Q763-160 735.38-160H224.62Zm0-40h510.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-510.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v510.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69ZM200-760v560-560Z",
    Clock: "M597.38-311.08 460-448.46v-194.62h40v178.54l124.92 124.92-27.54 28.54ZM460-720v-80h40v80h-40Zm260 260v-40h80v40h-80ZM460-160v-80h40v80h-40ZM160-460v-40h80v40h-80Zm320.13 340q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
    Home: "M240-200h147.69v-235.38h184.62V-200H720v-360L480-741.54 240-560v360Zm-40 40v-420l280-211.54L760-580v420H532.31v-235.38H427.69V-160H200Zm280-310.77Z",
    Book: "M249.23-120q-37.18 0-63.2-25.58Q160-171.15 160-207.69v-543.08q0-37.18 26.03-63.2Q212.05-840 249.23-840h415.39v584.62H249.23q-20.08 0-34.65 13.67Q200-228.04 200-207.83t14.58 34.02Q229.15-160 249.23-160H760v-600h40v640H249.23Zm86.15-175.38h289.24V-800H335.38v504.62Zm-40 0V-800h-46.15q-20.92 0-35.08 14.58Q200-770.85 200-750.77v471.62q10.77-6.85 22.95-11.54 12.18-4.69 26.28-4.69h46.15ZM200-800v520.85V-800Z",
    Apps: "M240-190.77q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm-480-240q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm-480-240q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Zm240 0q-20.31 0-34.77-14.46-14.46-14.46-14.46-34.77 0-20.31 14.46-34.77 14.46-14.46 34.77-14.46 20.31 0 34.77 14.46 14.46 14.46 14.46 34.77 0 20.31-14.46 34.77-14.46 14.46-34.77 14.46Z",
};

/**
 * Holds the active or previous navigation page element.
 */
var ActiveNavigationPage = undefined;

(function () {
    const List = {
        "App": App,
        "ComponentStates": ComponentStates,
        "DOM": DOM,
        "RuntimeToolStates": RuntimeToolStates,
        "StoreState": StoreState,
        "SVGPaths": SVGPaths,
        "ActiveNavigationPage": ActiveNavigationPage
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
