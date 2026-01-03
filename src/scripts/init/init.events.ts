// [TASK]: Create a centralize method for initializing events.

import InitWindowHashChangeEvent from '../events/event.hashRouteChange.js';
import { InitNavigationEvent } from '../events/event.navigation.js';
import { InitWindowEvent } from '../events/event.windowEvents.js';
import Runtime from '../variables/global.js';

/**
 * Start the initialization process for events of application contents.
 */
async function InitEvents() {
    /* -- @InitWindowEvent -- */
    await InitWindowEvent();

    /* -- @WindowHashChangeListenerEvent -- */
    await InitWindowHashChangeEvent();

    /* -- @NavigationEvents -- */
    await InitNavigationEvent();
}

/* -- @ApplicationEventsInitialization -- */
Runtime["InitEvents"] = InitEvents;
