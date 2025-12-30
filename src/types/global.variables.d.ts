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
        },
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
        Settings: string,
        Clock: string,
        Home: string,
        Book: string,
        Apps: string,
    }

    /**
     * Holds the active or previous page.
     */
    var ActiveNavigationPage: Element;

    /**
     * Holds the **root** element which is where the application contents being loaded.
     *
     * **Note**
     *  - Default to **'body'** element when **'div#view'** element is not found.
     */
    const View: HTMLElement | HTMLBodyElement;
}

export {}
