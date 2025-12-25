import NAV from '../ui/nav/nav.js';
import Panel from '../ui/panel.js';
import Runtime from '../variables/global.js';

/**
 * Starts the process for initializing application's interfaces.
 */
async function InitApplicationInterface() {
    // [CONTEXT]: Retrieve root (view) element at body -> div#view
    let View = GetElement.Id("view");

    // [INFO]: Check if view element is not found or existing.
    if (IsNullUndefined(View))
        // [CONTEXT]: Set to body as default root element.
        View = GetElement.Selector("body");

    // [CONTEXT]: Generate and mount panel component for displaying contents of pages to root element.
    const C_Panel = Panel();
    Mount(View, C_Panel);

    // [CONTEXT]: Start generating process for navigation components.
    await NAV(View);
}

/* -- @ApplicationsInterfaceInitiator -- */
Runtime.InitApplicationInterface = InitApplicationInterface;
