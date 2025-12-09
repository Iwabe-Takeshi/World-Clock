/**
 * |-----------------------------------------------------|
 * |                                                     |
 * |            Global Accessibility Handler             |
 * |                                                     |
 * |-----------------------------------------------------|
 */

/* -- Modules -- */
import Runtime from "../variables/global.js";

/* -- Handler -- */
/**
 * Register an access key to the `@runtime` environment which makes the specified access key to be
 * accessible throughout the project. This reduce the `@import` for accessing variables or methods.
 */
function RegisterThis(accessKey: string | string[], data: any | any[]) {
    try {
        var Emitter = RegisterThis.name;
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
                Runtime[key] = data[index]
            });
        else
            // Store to project runtime.
            Runtime[accessKey] = data;

        /* -- Response Status: SUCCESS -- */
        return true;
    } catch (e) {
        ERROR("Failed to make the accessibility of access key/s and data/s! Error:", e);

        /* -- Response Status: FAILED -- */
        return false;
    }
}

/* -- Make RunTime Accessibility Global -- */
Runtime.RegisterThis = RegisterThis;
