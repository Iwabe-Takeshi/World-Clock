/**
 * Performs the method specified to each elements of an `@array`.
 *
 * ***Note***:
 *  - When parameter `@thisArg` is provided, parameter `@callback` required to be a non-anonymous function.
 *    (E.g. Starts with 'function' keyword)
 *
 * @param arr - The specified list of elements.
 * @param callback - The specified method to perform for each elements.
 * @param thisArg
 *  - (Optional): A parameter that can be anything (except: `@undefined` and `@null`) and be use or access inside of the specified method with keyword `@this`.
 *    (Note: The specified keyword must support `@this` keyword, or else, it will throw an error.)
 *
 * @throws
 *  - An error when parameter `@arr` or `@callback` are not provided or invalid, and a warning when
 *    parameter `@thisArg` is provided but the parameter `@callback` does not support `@this`
 *    keyword.
 *
 * @example
 *  - EachOf([1, 2, 3, 4, 5], n => LOG(n * 2)): 2 4 6 8 10 |
 *    EachOf([1, 2, 3, 4, 5], function (n) { LOG(n * this); }, 2): 2 4 6 8 10
 */
export function EachOf<T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => void, thisArg?: A): void {
    /* -- Validation -- */
    const Emitter = NameOf(EachOf), Targets = ["arr", "callback", "thisArg"];

    // [ERROR]: Exits when parameter @arr or @callback are missing.
    [arr, callback].forEach((val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, Targets[pos], val);

        // [CONTEXT]: Parameter @arr.
        if (pos === 0 && !IsArray(val))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Array");

        // [CONTEXT]: Parameter @callback.
        if (pos > 0 && !(IsFunc(val) || IsAsyncFunc(val)))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Function | AsyncFunction");
    });

    // [WARNING]: Warn about possible error when parameter @thisArg is provided but parameter @callback does not support @this keyword.
    if (!IsNullUndefined(thisArg) && !(IsFunc(callback) || IsAsyncFunc(callback)))
        WARN(`EachOf(): Received a method that does not support @this keyword! This could emit an error when @this keyword is called inside of @callback method.`);

    /* -- Process & Result -- */
    return !IsNullUndefined(thisArg) ? arr.forEach(callback, thisArg) : arr.forEach(callback);
}

/**
 * Performs the specified method to each elements of an `@array`. The 'SomeOf()' method will perform the specified method from `@callback`
 * parameter, the process would stop when one of the elements of an array returns a response from '@callback' method that is coercible to '@boolean'
 * value '@true', or else, continues until the very last element of an array.
 *
 * ***Note***:
 *  - When parameter `@thisArg` is provided, parameter `@callback` required to be a non-anonymous function.
 *    (E.g. Starts with 'function' keyword)
 *
 * @param arr - The specified list of elements.
 * @param callback - The specified method to perform for each elements.
 * @param thisArg
 *  - (Optional): A parameter that can be anything (except: `@undefined` and `@null`) and be use or access inside of the specified method with keyword `@this`.
 *    (Note: The specified keyword must support `@this` keyword, or else, it will throw an error.)
 *
 * @throws
 *  - An error when parameter `@arr` or `@callback` are not provided or invalid, and a warning when
 *    parameter `@thisArg` is provided but the parameter `@callback` does not support `@this`
 *    keyword.
 *
 * @example
 *  - SomeOf([1, 2, undefined, 5, 'd'], item => IsString(item)); -> true
 *    SomeOf([1, 2, undefined, 5, 'd'], function (item) {
 *       return GetConstructorOrTypeOf(item) === this;
 *    }, "String"); -> true
 */
export function SomeOf<T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => unknown, thisArg?: A): boolean {
    /* -- Validation -- */
    const Emitter = NameOf(SomeOf), Targets = ["arr", "callback", "thisArg"];

    // [ERROR]: Exits when parameter @arr or @callback are missing.
    EachOf([arr, callback], (val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, Targets[pos], val);

        // [CONTEXT]: Parameter @arr.
        if (pos === 0 && !IsArray(val))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Array");

        // [CONTEXT]: Parameter @callback.
        if (pos > 0 && !(IsFunc(val) || IsAsyncFunc(val)))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Function | AsyncFunction");
    });

    // [WARNING]: Warn about possible error when parameter @thisArg is provided but parameter @callback does not support @this keyword.
    if (!IsNullUndefined(thisArg) && !(IsFunc(callback) || IsAsyncFunc(callback)))
        WARN(`SomeOf(): Received a method that does not support @this keyword! This could emit an error when @this keyword is called inside of @callback method.`);

    /* -- Process & Result -- */
    return !IsNullUndefined(thisArg) ? arr.some(callback, thisArg) : arr.some(callback);
}

/**
 * Performs the specified method to each elements of an `@array`. The 'EveryOf()' method is the opposite of 'SomeOf' method, this method will perform the specified
 * method from '@callback', and the process would stops when one of the elements of an array returns a response from '@callback' method that is coercible to
 * '@boolean' value '@false', or else, continues until the very last element of an array.
 *
 * @param arr - The specified list of elements.
 * @param callback - The specified method to perform for each elements.
 * @param thisArg
 *  - (Optional): A parameter that can be anything (except: `@undefined` and `@null`) and be use or access inside of the specified method with keyword `@this`.
 *    (Note: The specified keyword must support `@this` keyword, or else, it will throw an error.)
 *
 * @throws
 *  - An error when parameter `@arr` or `@callback` are not provided or invalid, and a warning when
 *    parameter `@thisArg` is provided but the parameter `@callback` does not support `@this`
 *    keyword.
 *
 * @example
 *  - EveryOf([1, 2, 3, 4, 5], n => (typeof n === "number" || n instanceof Number) && !Number.isNaN(n)): true |
 *    EveryOf([1, 2, 3, '4', 5], n => (typeof n === "number" || n instanceof Number) && !Number.isNaN(n)): false
 */
export function EveryOf<T, S extends T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => value is S, thisArg?: A): this is S[] {
    /* -- Validation -- */
    const Emitter = NameOf(EveryOf), Targets = ["arr", "callback", "thisArg"];

    // [ERROR]: Exits when parameter @arr or @callback are missing.
    EachOf([arr, callback], (val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, Targets[pos], val);

        // [CONTEXT]: Parameter @arr.
        if (pos === 0 && !IsArray(val))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Array");

        // [CONTEXT]: Parameter @callback.
        if (pos > 0 && !(IsFunc(val) || IsAsyncFunc(val)))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Function | AsyncFunction");
    });

    // [WARNING]: Warn about possible error when parameter @thisArg is provided but parameter @callback does not support @this keyword.
    if (!IsNullUndefined(thisArg) && !(IsFunc(callback) || IsAsyncFunc(callback)))
        WARN(`EveryOf(): Received a method that does not support @this keyword! This could emit an error when @this keyword is called inside of @callback method.`);

    /* -- Process & Result -- */
    return !IsNullUndefined(thisArg) ? arr.every(callback, thisArg) : arr.every(callback);
}

/**
 * Performs the specified method to each elements of an `@array`. The 'MapOf()' method performs the method from `@callback`
 * and returns the response of '@callback' to each elements processed as a new array of result.
 *
 * @param arr - The specified list of elements.
 * @param callback - The specified method to perform for each elements.
 * @param thisArg
 *  - (Optional): A parameter that can be anything (except: `@undefined` and `@null`) and be use or access inside of the specified method with keyword `@this`.
 *    (Note: The specified keyword must support `@this` keyword, or else, it will throw an error.)
 *
 * @throws
 *  - An error when parameter `@arr` or `@callback` are not provided or invalid, and a warning when
 *    parameter `@thisArg` is provided but the parameter `@callback` does not support `@this`
 *    keyword.
 *
 * @example
 *  - MapOf([1, 2, 3, 4, 5], n => n * 2); -> [2, 4, 6, 8, 10] |
 *    MapOf([1, 2, 3, 4, 5], function (n) { return n * this.multiplier; }, { multiplier: 2 }); [2, 4, 6, 8, 10]
 */
export function MapOf<T, U, A>(arr: T[], callback: (value: T, index: number, array: T[]) => U, thisArg?: A): U[] {
    /* -- Validation -- */
    const Emitter = NameOf(MapOf), Targets = ["arr", "callback", "thisArg"];

    // [ERROR]: Exits when parameter @arr or @callback is not provided or invalid.
    EachOf([arr, callback], (val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, Targets[pos], val);

        // [CONTEXT]: Parameter @arr.
        if (pos === 0 && !IsArray(val))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Array");

        // [CONTEXT]: Parameter @callback.
        if (pos > 0 && !(IsFunc(val) || IsAsyncFunc(val)))
            $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Function | AsyncFunction");
    });

    // [WARNING]: Warn about possible error when parameter @thisArg is provided but parameter @callback does not support @this keyword.
    if (!IsNullUndefined(thisArg) && !(IsFunc(callback) || IsAsyncFunc(callback)))
        WARN(`MapOf(): Received a method that does not support @this keyword! This could emit an error when @this keyword is called inside of @callback method.`);

    /* -- Process & Result -- */
    return !IsNullUndefined(thisArg) ? arr.map(callback, thisArg) : arr.map(callback);
}

/**
 * Returns a new sliced collection of the specified array elements with the given `@start` and `@end` position.
 *
 * @param arr - The specified collection of array elements.
 * @param start - (Required): The specified starting index position of elements to slice from the specified array.
 * @param end - (Optional): The specified ending index position of elements to slice from the specified array.
 *
 * @throws
 *  - An empty array '[]' when the specified data from parameter `@arr` is invalid, or else, when empty.
 *
 * @example
 *  - Slice(['a', 1, 2, 3, 4, 5], 1); -> [1, 2, 3, 4, 5] |
 *    Slice(['a', 1, 2, 3, 4, 5], 1, 5); -> [1, 2, 3, 4]
 */
export function Slice<T>(arr: T[], start: number, end?: number): T[] {
    /* -- Validation -- */
    const Emitter = NameOf(Slice), Targets = ["arr", "start", "end"];

    // [ERROR]: Exits when parameter @arr is invalid.
    if (!IsArray(arr))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(arr), "Array");

    // [INFO]: Automatically detect and assign a default value for parameter @start and @end.
    EachOf([start, end], (n, i) => {
        if (IsNullUndefined(n))
            i === 0 ? start = 0 : end = arr.length;
    });

    // [WARNING]: Default response when @arr is empty or @start and @end are invalid.
    if (LengthOf(arr) === 0 || !IsNum(start, end))
        return [];

    // [WARNING]: Clamping the value of @start and @end to a valid value.
    start = Clamp(start, 0, arr.length);
    end = Clamp(end as number, start, arr.length);

    /* -- Result -- */
    return arr.slice(start, end);
}
