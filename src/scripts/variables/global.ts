/**
 * |--------------------------------------------------|
 * |                                                  |
 * |                 Global Variables                 |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Customize name for application runtime as `window` or `globalThis`.
 */
var Runtime = (window as any || globalThis as any);
export default Runtime as any;

/**
 * Shorter declaration of `document` or `window.document`.
 */
var DOM = document || window.document;

(function () {
    const VarList = [
        ["DOM", DOM]
    ];
    VarList.forEach(([key, value]) => {
        if (typeof key !== "string" || key.constructor !== String) {
            console.warn("(SKIPPED INVALID KEY):", key);
            return;
        }

        Runtime[key] = value;
    })
})();
