/**
 * Customize name for application runtime as `window` or `globalThis`.
 */
var App = window || globalThis;
export default App as any;

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
            WARN("(SKIPPED INVALID KEY):", key);
            return;
        }

        (App as any)[key] = value;
    })
})();