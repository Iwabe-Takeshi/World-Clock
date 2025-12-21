/* -- Imports -- */
import * as Errors from "../../error/custom.js";
import * as ErrorBuilders from "../../error/builder.js";
import * as Guards from "../tools/guard.js";
import * as Tools from "../tools/index.js";
import * as ArrayTools from "../tools/array.js";
import * as DOMS from "../tools/dom.js";
import Runtime from "../variables/global.js";

async function InitRuntimeTools() {
    // [CONTEXT]: Runtime tools module.
    const Modules = [Errors, ErrorBuilders, Guards, Tools, ArrayTools, DOMS];

    // [CONTEXT]: Load runtime tools module.
    for (const module of Modules) {
        const keys = Object.values(module).map(item => item.name || "(Anonymous)"),
            values = Object.values(module);

        Register(keys, ...values);
    }

    // [CONTEXT]: Validate runtime tools loaded state at @RuntimeToolStates.
    for (const [key, obj] of Object.entries(RuntimeToolStates)) {
        if (!obj.Status)
            ErrorBuilders.$FailedToLoadRuntimeToolError("InitRuntimeTools", key, obj.Call, obj.Status)
    }

    return true;
}

/* -- @ApplicationGlobalToolsInitialization -- */
Runtime.InitRuntimeTools = InitRuntimeTools;
