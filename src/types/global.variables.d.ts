declare global {
    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |          Global Variables Intellisense           |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Contains the application's states.
     */
    const App: AppConfig;

    /**
     * Stores the rendered components of application.
     */
    const Components: {
        [Group_Or_ComponentKey: string]: {
            [ComponentKey: string]: Element;
        } | Element;
    }

    /**
     * Shorter access for accessing **document**.
     *
     * usage
     *  - Instead of **document** or **window.document** to access web page contents,
     *    you can now just type **DOM** instead for shorter access.
     */
    const DOM: Document;

    /**
     * Stores status of **application** runtime tools.
     *
     * @example
     *  - {
     *      // [INFO]: Successfully loaded state.
     *      "Create": {
     *          Call: Create,
     *          Status: true
     *      },
     *      "IsArray": {
     *          Call: IsArray,
     *          Status: true,
     *      },
     *      // [ERROR]: Failed to load state.
     *      "EachOf": {
     *          Call: null,
     *          Status: false,
     *      }
     *    }
     */
    const RuntimeToolStates: {
        [runtimeKey: string]: {
            Call: unknown;
            Status: boolean;
        }
    }

    /**
     * Stores the components from global variable components.
     *
     * @param key - The access key of component, can be either its id or custom.
     * @param component - The live component (element) itself.
     *
     * @example
     *  - StoreComponent("LoginBtn", loginBtn);
     *    Components.LoginBtn -> HTMLButtonElement
     *
     * Stores the components from global variables components.
     *
     * @param group - The group id of grouped components.
     * @param key - The access key of a component under the specified group id.
     * @param component - The live component (element) itself.
     *
     * @example
     *  - StoreComponent("Nav", "Home", HomeNavBtn);
     *    Components.Nav.Home -> HTMLButtonElement
     */
    const StoreComponent: {
        (key: string, component: Element): void;
        (group: string, key: string, component: Element): void;
    };

    /**
     * Handles storing of runtime tools load result states.
     *
     * @param key - The access key or name of tool.
     * @param data - The tool itself.
     * @param state - The status of tool upon registering.
     *
     * @example
     *  - StoreState("Create", Create, true);
     */
    const StoreState: <T>(key: string, data: T, state: boolean) => void;

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
                IsIconLoaded: boolean;
                IsEventAttached: boolean;
                Status: boolean;
            }
        };
        VIEW: {
            [ComponentKey: string]: {
                Block: Element;
                Status: boolean;
            }
        }
    }

    /**
     * SVG icon paths used in this application.
     * Source: (https://fonts.google.com/icons)
     */
    const SVGPaths: {
        Apps: string;
        Book: string;
        Clock: string;
        Home: string;
        Settings: string;
        UnknownDocument: string;
    }

    /**
     * Checks the available key-pairs at the specified **object** whether if the specified access key
     * is existing or not, if not, it will automatically generate the key-pair with the
     * specified given default value.
     *
     * @param obj - The object that contains key-pairs.
     * @param thisKey - The access key to key-pairs at object.
     * @param default - (Optional): Default value to bind when **@thisKey** is not found.
     */
    const ValidateObjectKey: <T>(obj: { [key: string]: unknown }, key: string, defaultValue?: T) => T;

    /**
     * Holds the **root** element which is where the application contents being loaded.
     *
     * **Note**
     *  - Default to **'body'** element when **'div#view'** element is not found.
     */
    const View: HTMLElement | HTMLBodyElement;
}

export {}
