/* -- Imports -- */
import "../../error/base.js";
import * as Errors from "../../error/custom.js";
import * as ErrorBuilders from "../../error/builder.js";
import * as Guards from "../tools/guard.js";
import * as Tools from "../tools/index.js"
import * as ArrayTools from "../tools/array.js";
import * as DOMS from "../tools/dom.js";
import Runtime from "../variables/global.js";

function InitRuntimeTools() {
    try {
        /* -- @ApplicationGlobalRuntimeTools -- */
        [Errors, ErrorBuilders, Guards, Tools, ArrayTools, DOMS].forEach(module => {
            RegisterThis(Object.values(module).map(e => e.name), Object.values(module));
        });

        console.log(Runtime);
    } catch (e) {
        console.error("Failed to initialize global tools! Error:", e);
    }
}

/* -- @ApplicationGlobalToolsInitialization -- */
Runtime.InitRuntimeTools = InitRuntimeTools;
