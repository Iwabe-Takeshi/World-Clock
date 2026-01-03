// [TASK]: Handle detection when anchor 'href' # is changed or clicked.

import Runtime from '../variables/global.js';

/**
 * Initialize **window** event for detecting or listener for hash-based-url (SPA).
 */
export default async function InitWindowHashChangeEvent() {
    (Runtime as Window || globalThis).addEventListener("hashchange", (event) => {
        const HashKey = event.newURL.split('#')[1];
    });
}
