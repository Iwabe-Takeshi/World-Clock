/**
 * Retrieves the **constructor** of specified argument or else **type**.
 *
 * @param arg - The specified argument value or data to retrieve its constructor or type.
 *
 * @example
 *  - GetConstructorOrTypeOf("Some Text"); -> "String"
 */
export function GetConstructorOrTypeOf(arg: any): string {
    if (!arg)
        return "undefined";

    return arg?.constructor.name ?? typeof arg;
}

/**
 * Returns the current **date** and **time** of your local device machine in **localeString** format.
 */
export function LocaleDateTime(): string {
    return new Date().toLocaleString();
}

/**
 * Returns an **object** collection for **Supported** and **NotSupported** for every specified keys of property or method from **searchThisKey**.
 *
 * @param arg - The specified argument to check for its supported properties or methods.
 * @param searchThisKey - The specified list of keys to check at target **argument** supported properties or methods.
 *
 * @throws **false** as default response when parameter **arg** or **searchThisKey** ar not provided.
 *
 * @example
 *  - In("Some Text", "length", "substring", "trim", "name"); -> { Supported: ["length", "substring", "trim"], NotSupported: ["name"] }
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
 * Returns the **name** property value of the specified argument.
 *
 * @param arg - The specified argument to retrieve its **name** property.
 *
 * @throws
 *  - A **warning** and default response value of **(Anonymous)** when the specified **argument** does not have or **support** the **name** property.
 */
export function NameOf(arg: any): string {
    /* -- Check if @name property is supported -- */
    if (!In(arg, "name")) {
        WARN(`NameOf(): The specified argument does not have or support the '@name' property!`);
        return "(Anonymous)";
    }

    /* -- Result -- */
    return IsEmptyStr(arg.name) ? "(Anonymous)" : arg.name;
}

/**
 * Returns the **length** property value of specified argument.
 *
 * ***Note***:
 *  - If the specified argument does not have or support **length** property, it will
 *    automatically return -1 as invalid response.
 *
 * @param arg - The specified argument to retrieve its **length** property value.
 *
 * @example
 *  - Length([1, 2, 3]); -> 3
 */
export function LengthOf(arg: any): number {
    if (!In(arg, "length")) {
        WARN(`LengthOf(): The specified argument does not support or have @length property!`);
        return -1;
    }

    return IsNum(arg.length) ? arg.length : -1;
}

/**
 * Returns the **size** property value of specified argument.
 *
 * ***Note***:
 *  - If the specified argument does not have or support **size** property, it will
 *    automatically return -1 as invalid response.
 *
 * @param arg - The specified argument to retrieve its **size** property value.
 *
 * @example
 *  - SizeOf(new Map([[...], [...]])); -> 2
 */
export function SizeOf(arg: any): number {
    if (!In(arg, "size")) {
        WARN(`SizeOf(): Argument with a type of '${GetConstructorOrTypeOf(arg)}', does not support or have \`@size\` property!`);
        return -1;
    }

    return !IsNum(arg.size) ? arg.size : -1;
}

/**
 * Clamps the specified number to its **minimum** and **maximum** value it can have.
 *
 * @param val - The specified current value.
 * @param min - The specified minimum value it can have.
 * @param max - The specified maximum value it can have.
 *
 * @throws
 *  - A number value '0' as invalid response, when any of the parameters are not a valid number.
 *
 * @example
 *  - Clamp(-13, 0, 5); -> 0
 *    Clamp(10, 0, 5); -> 5
 */
export function Clamp(val: number, min: number, max: number): number {
    /* -- Validation -- */
    if (!IsNum(val, min, max))
        return 0;

    /* -- Clamped Result -- */
    return val < min ? min : val > max ? max : val;
}

/**
 * Converts your **object** or **array** data into an iterable array of data.
 *
 * @param arg - The specified argument to convert.
 *
 * @throws
 *  - An error when parameter **arg** is not provided or invalid, or,
 *    a warning when its empty.
 *
 * @example
 *  - const obj = { num1: 10, num2: 20, num3: 30 };
 *    const arr = [10, 20, 30, 40, 50];
 *    const objVal = Values(obj); -> [10, 20, 30]
 *    const arrVal = Values(arr); -> ArrayIterator<number>
 *                                -> [10, 20, 30, 40, 50]
 */
export function ValuesOf<V>(arg: (({ [key: string]: V } | ArrayLike<V>) | Array<V>)) {
    /* -- Validation -- */
    // [ERROR]: Exits when parameter @arg is not provided.
    if (IsNullUndefined(arg)) {
        ERROR(`ValuesOf(): Expects an argument of object or array to convert! (Exited with [])`);
        return ([] as any);
    }

    // [ERROR]: Exits when parameter @arg is invalid.
    if (!IsObj(arg) && !IsArray(arg)) {
        ERROR(`ValuesOf(@arg: ${GetConstructorOrTypeOf(arg)}): Only expects a type object '{}' and array '[]'! (Exited with [])`);
        return ([] as any);
    }

    // [WARNING]: Warns and exit when parameter @arg is empty.
    if ((IsObj(arg) && LengthOf(Object.values(arg)) === 0) || (IsArray(arg) && LengthOf(arg) === 0)) {
        WARN(`ValuesOf(@arg: ${GetConstructorOrTypeOf(arg) === "Object" ? 'empty object' : "empty array"}): Expects a non-empty argument! (Exited with [])`);
        return ([] as any);
    }

    /* -- Process & Result -- */
    return IsArray(arg) ? arg.values() : IsObj(arg) ? Object.values(arg) : ([] as any);
}

/**
 * Returns the build property rule with set of rules for an **object**.
 *
 * @param key - The access key of a property.
 * @param data - The data to assign at specified property key.
 * @param mutable - (Optional): Set a rule from the assigned property value whether if its changeable/mutable.
 * @param configurable - (Optional): Set a rule whether if the property is removable or can be re-define.
 * @param enumerable - (Optional): Set a rule from the assigned property whether if its enumerable from loop methods.
 */
export function BuildPropertyRule<K extends string, D>(key: K, data: D, mutable?: boolean, configurable?: boolean, enumerable?: boolean): Record<K, D> {
    /* -- Validation -- */
    const Emitter = NameOf(BuildPropertyRule), Targets = ["key", "data", "mutable", "configurable", "enumerable"];

    // [ERROR]: Exits when there property key is not provided or invalid.
    if (IsNullUndefined(key))
        $MissingParameterError(Emitter, Targets[0], key);

    if (!IsString(key))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(key), "String");

    // [ERROR]: Exits when the specified rules toggle value are invalid.
    EachOf([mutable, configurable, enumerable], (rule, pos) => {
        if (!IsNullUndefined(rule) && !IsBool(rule))
            $UnexpectedTypeError(Emitter, Targets[pos + 2], GetConstructorOrTypeOf(rule), "Boolean");
    });

    /* -- Process -- */
    return Object.defineProperty({}, key, {
        value: data,
        writable: mutable ?? true,
        configurable: configurable ?? true,
        enumerable: enumerable ?? true
    }) as Record<K, D>;
}

/**
 * Returns the build properties with set of rule for an **object**.
 *
 * @param keys - The collection of property keys.
 * @param values - The collection of data to assigned from property keys collection.
 * @param mutable - (Optional): Set a rule from each assigned property value whether if its changeable/mutable.
 * @param configurable - (Optional): Set a rule from each property key whether if its removable or can be re-define.
 * @param enumerable - (Optional): Set a rule from each assigned property value whether if its enumerable from loop methods.
 */
export function BuildPropertiesRule<K extends string, D>(keys: Array<K>, values: Array<D>, mutable?: boolean, configurable?: boolean, enumerable?: boolean): Record<K, D> {
    /* -- Validation -- */
    const Emitter = NameOf(BuildPropertiesRule), Targets = ["keys", "values", "mutable", "configurable", "enumerable"], P = [keys, values];

    // [ERROR]: Exits when parameter @keys and @values are invalid.
    EachOf(P, (data, pos) => {
        if (!IsArray(data))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(data), `Array<${pos > 0 ? "Any" : "String"}>`);
    });

    // [WARNING]: Exits and warn when there are no keys and values provided.
    if (LengthOf(keys) <= 0 || LengthOf(values) <= 0) {
        WARN(`BuildPropertiesRule(@keys, @values): Expects for both parameter @keys and @values to at least have 1 or more data! (Exited with {})`);
        return {} as Record<K, D>;
    }

    // [ERROR]: Exits when parameter @keys and @values lengths are not match.
    EachOf(P, (data, pos, arr) => {
        const otherPos = pos > 0 ? 0 : 1;
        if (LengthOf(data) !== LengthOf(arr[otherPos]))
            $MismatchArrayLengthError(Emitter, Targets[pos], LengthOf(data), LengthOf(arr[otherPos]));
    });

    // [ERROR]: Exits when the specified rules toggle value are invalid.
    EachOf([mutable, configurable, enumerable], (rule, pos) => {
        if (!IsNullUndefined(rule) && !IsBool(rule))
            $UnexpectedTypeError(Emitter, Targets[pos + 2], GetConstructorOrTypeOf(rule), "Boolean");
    });

    /* -- Process -- */
    const result = {};
    for (const [pos, key] of keys.entries()) {
        // [WARNING]: Skips and warn non-string key.
        if (!IsString(key)) {
            WARN(`BuildPropertiesRule(@keys['${key}']: non-string): Expects a string-format for property id! (Skipped)`);
            continue;
        }

        Object.defineProperty(result, key, {
            value: values[pos],
            writable: mutable ?? true,
            configurable: configurable ?? true,
            enumerable: enumerable ?? true,
        });
    }

    return result as Record<K, D>;
}

/**
 * Delays the execution of the program underneath of this delay method.
 */
export async function Delay(ms: number): Promise<unknown> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// export const Delay = (ms: number): Promise<unknown> =>
    // new Promise(resolve => setTimeout(resolve, ms));

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
