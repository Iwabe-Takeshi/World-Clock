/**
 * Customize name for application runtime as `window` or `globalThis`.
 */
var App = window || globalThis;
export default App;
/**
 * Shorter declaration of `document` or `window.document`.
 */
var DOM = document || window.document;
/**
 * Current Date & Time in LocaleString format.
 */
var NOW = () => new Date().toLocaleDateString();
/**
 * Shorter access for checking an array type.
 */
var IsArr = Array.isArray;
/**
 * Returns the specified function name.
 */
var FuncName = (func) => (function () {
    const VARs = [NOW, IsArr];
    App.DOM = DOM;
    VARs.forEach(V => {
        App[V.name] = V;
    });
})();
