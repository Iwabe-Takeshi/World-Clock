/* -- Imports -- */
import WorldClockError from "../../Error/base.js";
import * as Errors from "../../Error/custom.js";
import * as ErrorBuilders from "../../Error/builder.js";
import * as Guards from "../tools/guard.js";
import * as Tools from "../tools/index.js";
function InitGlobalTools() {
    try {
        /* -- @ApplicationCustomErrorConstructor -- */
        MakeGlobal("WorldClockError", WorldClockError);
        /* -- @ApplicationGlobalRuntimeTools -- */
        [Errors, ErrorBuilders, Guards, Tools].forEach(module => {
            MakeGlobal(Object.values(module).map(e => e.name), Object.values(module));
        });
    }
    catch (e) {
        console.error("Failed to initialize global tools! Error:", e);
    }
}
(function () {
    MakeGlobal("InitGlobalTools", InitGlobalTools);
})();
