import Runtime from "../variables/global.js";

/**
 * Create a new set of list of key pair that is globally accessible at your project runtime.
 *
 * ***Purpose***:
 *  - To avoid **import** overhead from files/modules.
 *
 * ***Note***:
 *  - While this allows you to access them directly at your project's runtime, you have to avoid making the
 *    accessibility of your other custom methods, errors, or variables that your project's not mostly used.
 *
 * ***Tips***:
 *  - To avoid importing the files that used this method, create a centralized file to execute or process your
 *    own custom methods, errors, or variables at your project's runtime.
 *
 * @param accessKeys - A list of keys for accessing your custom methods, errors, or variables at your project's runtime.
 * @param data - A associated list of values of the specified keys at **accessKeys**.
 *
 * @example
 *  - RegisterThis(["Sum", "Subtract"], [(a, b) => a + b, (a, b) => a - b]); -> true
 */
function Register(accessKeys: string | Array<string>, ...values: Array<any>): void {
    const Targets = ["accessKeys", "values"];
    var IsArr = Array.isArray;

    /* -- Validations -- */
    // [ERROR]: Exits when parameter @accessKeys is not provided.
    if (accessKeys === null || accessKeys === undefined)
        throw new Error(`Register(@${Targets[0]}: undefined): Expects an access key to register! (Exited)`);

    // [ERROR]: Exits when there are multiple values provided but there's only one access key provided.
    const valLength = values.length;
    if (valLength > 1) {
        if (!IsArr(accessKeys))
            throw new TypeError(`Register(@accessKey: Non-Array): Expects to be an array for multiple values provided! (Exited)`);

        const keyLength = accessKeys.length;
        if (keyLength < valLength || keyLength > valLength)
            throw new RangeError(`Register(@accessKeys: Unequal-Length): Expects an access keys to bind for each provided values! (Exited)`);
    }

    /* -- Process -- */
    if (IsArr(accessKeys))
        for (const [pos, key] of accessKeys.entries()) {
            // [ERROR]: Notify and skip invalid key.
            if (typeof key !== "string" || key.constructor !== String) {
                console.error(`Register(@accessKeys['${key}']: Non-String): Expects all access keys to be in string format! (Registry Failed & Skipped)`);

                // [CONTEXT]: Store failed key registry state to @RuntimeToolStates.
                StoreState(String(key), values[pos], false);
                continue;
            }

            // [WARNING]: Skips and warn when key is already existing to runtime.
            if (Runtime[key]) {
                console.warn(`Register(@accessKey['${key}']: Duplicated-Entry): Key '${key}' is already registered to runtime! (Skipped)`);
                continue;
            }

            // [CONTEXT]: Store key and its value to application's runtime.
            Object.defineProperty(Runtime, key, {
                value: values[pos],
                writable: false,
                configurable: false,
                enumerable: false
            })

            // [CONTEXT]: Store success registry state to @RuntimeToolStates
            StoreState(key, values[pos], true);
        }
    else {
        const [key, value] = [accessKeys, values[0]];

        // [ERROR]: Notify and skip invalid access key.
        if (typeof key !== "string" || key.constructor !== String) {
            console.error(`Register(@${key}: Non-String): Expects an access key to be in string format! (Registry Failed & Skipped)`);

            // [CONTEXT]: Store failed key state to @RuntimeToolStates
            StoreState(String(key), value, false);
            return;
        }

        // [WARNING]: Exits and warn when access key is already registered to runtime.
        if (Runtime[key]) {
            console.warn(`Register(@${key}: Duplicated-Entry): Key '${key}' is already registered to runtime! (Exited)`);
            return;
        }

        // [CONTEXT]: Store key and its value to application's runtime.
        Object.defineProperty(Runtime, key, {
            value: value,
            writable: false,
            configurable: false,
            enumerable: false
        });

        // [CONTEXT]: Store success registry state to @RuntimeToolStates
        StoreState(key, value, true);
    }
}

/* -- @ApplicationRuntimeRegistry -- */
Runtime.Register = Register;
