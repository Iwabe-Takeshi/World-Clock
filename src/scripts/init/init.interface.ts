import NAV from '../ui/nav/nav.js';
import Panel from '../ui/panel.js';
import Runtime from '../variables/global.js';

/**
 * Starts the process for initializing application's interfaces.
 */
async function InitApplicationInterface() {
    const Emitter = NameOf(InitApplicationInterface);

    // [CONTEXT]: Validate View (root) element.
    if (!IsHTMLElement(View))
        $UnexpectedTypeError(Emitter, "(Global Variable): View", GetConstructorOrTypeOf(View), "HTMLElement | HTMLBodyElement");

    // [CONTEXT]: Generate and mount panel component for displaying contents of pages to root element.
    const C_Panel = Panel();
    Mount(View, C_Panel);

    // [CONTEXT]: Start generating process for navigation components.
    await NAV(View);
}

/* -- @ApplicationsInterfaceInitiator -- */
Runtime.InitApplicationInterface = InitApplicationInterface;
