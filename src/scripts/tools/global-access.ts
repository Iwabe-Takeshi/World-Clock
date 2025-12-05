/**
 * |-----------------------------------------------------|
 * |                                                     |
 * |            Global Accessibility Handler             |
 * |                                                     |
 * |-----------------------------------------------------|
 */

/* -- Modules -- */
import App from "../variables/global.js";

/* -- Handler -- */
/**
 * @
 */
function MakeGlobal(accessKey: string | string[], data: any | any[]) {
    try {
        var Emitter = MakeGlobal.name;
        var IsArr = Array.isArray;

        /* -- Validations -- */
        if (IsArr(accessKey)) {
            // Ensures that parameter data is an array.
            if (!IsArr(data))
                $UnexpectedTypeError(Emitter, "data", data?.constructor.name ?? typeof data, "Array");

            // Ensures that parameter accessKey and data have the same length of items.
            if (data.length !== accessKey.length)
                $MismatchArrayLengthError(Emitter, "data", data.length, accessKey.length);
        }

        // Ensures that access key is either array or string only.
        if (!IsArr(accessKey) && typeof accessKey !== "string")
            $UnexpectedTypeError(Emitter, "accessKey", (accessKey as any)?.constructor.name ?? typeof accessKey, "String | Array<string>");

        /* -- Process -- */
        if (IsArr(accessKey))
            accessKey.forEach((key, index) => {
                if (typeof key !== "string") {
                    WARN(`An invalid type key is found! Invalid Key: ${key} (NOT ADDED TO APPLICATION RUNTIME).`);
                    return;
                }

                // Store to project runtime.
                App[key] = data[index]
            });
        else
            // Store to project runtime.
            App[accessKey] = data;

        /* -- Response Status: SUCCESS -- */
        return true;
    } catch (e) {
        ERROR("Failed to make the accessibility of access key/s and data/s! Error:", e);

        /* -- Response Status: FAILED -- */
        return false;
    }
}

/* -- Make RunTime Accessibility Global -- */
App.MakeGlobal = MakeGlobal;