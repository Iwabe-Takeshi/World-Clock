/**
 * Returns the constructor of the argument or type when constructor is not found.
 */
export function GetConstructorOrTypeOf(arg: any): string {
    if (!arg)
        return "undefined";

    return arg?.constructor.name ?? typeof arg;
}

/**
 * Writes a static debug message outputs to console.
 */
export function DEBUG(...data: any[]): void {
    console.debug(...data);
}

/**
 * Writes a static error message outputs to console.
 */
export function ERROR(...data: any[]): void {
    console.error(...data);
}

/**
 * Writes a static message outputs to console.
 */
export function LOG(...data: any[]): void {
    console.log(...data);
}

/**
 * Writes a static warning message outputs to console.
 */
export function WARN(...data: any[]): void {
    console.warn(...data);
}

/**
 * Returns the current date & time of your local machine in localeString format.
 */
export function LocaleDateTime(): string {
    return new Date().toLocaleString();
}

/**
 * Returns a boolean result whether if the specified argument have the specified `@key` of property or method.
 * 
 * Note:
 *  - Does not accept multiple argument, or else it will be treated as `@searchThisKeys` item.
 *  - Accepts multiple keys by seperating them with coma, and then check and return the found 
 *    list for `@supported` and `@notSupported` property.
 * 
 * @example
 *  - SupportProps("Some Text", "length", "name"): [["Supported", ["length"]], ["NotSupported", ["name"]]]
 */
export function In(arg: any, ...searchThisKeys: string[]): { Supported: string[], NotSupported: string[] } | boolean {
    /* -- Filter `@searchThisKeys` -- */
    searchThisKeys = searchThisKeys.filter(item => IsString(item));

    /* -- Guarding -- */
    if (!arg || searchThisKeys.length <= 0)
        return false;

    /* -- Mapping Process -- */
    if (searchThisKeys.length === 1)
        return !IsNullUndefined(arg[searchThisKeys[0]]);

    const R: { Supported: string[], NotSupported: string[] } = { Supported: [], NotSupported: [] };

    searchThisKeys.forEach(key => {
        if (key[arg] || !IsNullUndefined(arg[key]) || Object.hasOwn(arg, key) || Object.getOwnPropertyNames(arg).includes(key)) {
            R.Supported.push(key);
            return;
        }

        R.NotSupported.push(key);
    });

    return R;
}

/**
 * Returns the `@name` property value of the specified argument.
 * 
 * @param arg - The specified argument to retrieve its `@name` property.
 * 
 * @throws
 *  - A `@warning` and default response value of `(@Anonymous)` when the specified `@argument` does not have or `@support` the `@name` property.
 */
export function NameOf(arg: any): string {
    /* -- Check if @name property is supported -- */
    if (!In(arg, "name")) {
        WARN(`NameOf(): The specified argument does not have or support the '@name' property!`);
        return "(@Anonymous)";
    }

    /* -- Result -- */
    return IsEmptyStr(arg.name) ? "(@Anonymous)" : arg.name;
}

/**
 * Returns the length of specified argument.
 * 
 * Note:
 *  - If the specified argument does not support or have `@length` property, it will
 *    automatically return -1 as invalid response.
 * 
 * @throw a warning when the specified argument does not support or have the `@length` property.
 * 
 * @example
 *  - Length([1, 2, 3]): 3 |
 *    Length({ nums: [1, 2, 3] }): -1
 */
export function LengthOf(arg: any): number {
    if (!In(arg, "length")) {
        WARN(`LengthOf(): Argument with a type of '${GetConstructorOrTypeOf(arg)}', does not have or support \`@length\` property!`);
        return -1;
    }

    return arg.length;
}

/**
 * Returns the `@size` of specified argument.
 * 
 * Note:
 *  - If the specified argument does not support or have `@size` property, it will
 *    automatically return -1 as invalid response.
 * 
 * @throws a warning when the type of specified argument does not support or have the `@size` property.
 * 
 * @example
 *  - SizeOf(new Map([[...], [...]])): 2 |
 *    SizeOf(new Set([{...}])): 1
 */
export function SizeOf(arg: any): number {
    if (!In(arg, "size")) {
        WARN(`SizeOf(): Argument with a type of '${GetConstructorOrTypeOf(arg)}', does not support or have \`@size\` property!`);
        return -1;
    }

    return arg.size;
}

/**
 * Executes the specified function safely with try-catch block.
 * 
 * @param Method - The function to execute safely.
 */
export function Try(Method: Function) {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(Method), Target = "Method";

        if (!IsFunc(Method))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(Method), "Function");

        /* -- Execution -- */
        return Method();
    } catch (err) {
        ERROR(`Try(@${NameOf(Method)}): An unexpected error occurred! Error: ${err}`);
        return err;
    }
}

/**
 * Executes the specified asynchronous function safely with try-catch block.
 * 
 * @param AsyncMethod - The asynchronous function to execute safely.
 */
export function AsyncTry(AsyncMethod: Function) {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(AsyncMethod), Target = "AsyncMethod";

        if (AsyncMethod.constructor.name !== "AsyncFunction")
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(AsyncMethod), "AsyncFunction");

        return new Promise(async (resolve, eject) => {
            const Status = await AsyncMethod();

            /* -- Status: Success -- */
            if (Status) {
                resolve(Status);
                return;
            }

            /* -- Status: Failed -- */
            eject(Status);
        });
    } catch (err) {
        ERROR(`AsyncTry(@${NameOf(AsyncMethod)}): An unknown error occurred! Error:`, err);
        return err;
    }
}

/**
 * Clamps the specified number to its **@minimum** and **@maximum** value it can have.
 * 
 * @param val - The specified current value.
 * @param min - The specified minimum value it can have.
 * @param max - The specified maximum value it can have.
 * 
 * @throws
 *  - A number value '0' as invalid response, when any of the parameters are not a valid number.
 * 
 * @example
 *  - Clamp(-13, 0, 5): 0 |
 *    Clamp(10, 0, 5): 5
 */
export function Clamp(val: number, min: number, max: number): number {
    /* -- Validation -- */
    if (!IsNum(val, min, max))
        return 0;

    /* -- Clamped Result -- */
    return val < min ? min : val > max ? max : val;
}
