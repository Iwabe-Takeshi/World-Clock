/**
 * |--------------------------------------------------|
 * |                                                  |
 * |               Runtime Array Tools                |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Performs a method to each elements of the specified `@array`. This method will perform the specified
 * `@Do` method for each elements.
 * 
 * ***Note***:
 *  - When parameter `@thisArg` is provided, parameter `@Do` required to be a non-anonymous function.
 *    (E.g. Starts with 'function' keyword)
 * 
 * @param arr - The specified list of elements.
 * @param Do - The specified method to perform to each elements of `@array`.
 * @param thisArg
 *  - (Optional): A parameter to use or call inside of method `@Do` as reference value that might have been used in some parts.
 * 
 * @throws
 *  - An error when these required parameter `@arr` and `@Do` are not provided or invalid.
 * 
 * @example
 *  - EachOf([1, 2, 3, 4, 5], n => LOG(n * 2)): 2 4 6 8 10 |
 *    EachOf([1, 2, 3, 4, 5], function (n) { LOG(n * this); }, 2): 2 4 6 8 10
 */
export function EachOf<T, A>(arr: T[], Do: (value: T, index: number, array: T[]) => void, thisArg?: A) {
    /* -- Validation -- */
    const Emitter = NameOf(EachOf), Targets = ["arr", "Do", "thisArg"];

    // [!]: Exits when parameter @arr or @Do are not provided.
    [arr, Do].forEach((val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, `${Targets[pos]}${pos > 0 ? `['${val}']` : ""}`, val);
    });

    // [!]: Exits when parameter @arr is invalid.
    if (!IsArray(arr))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(arr), "Array");

    // [!]: Exits when parameter @Do is invalid.
    if (!IsFunc(Do) && !IsAsyncFunc(Do))
        $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(Do), "Function | Async Function");

    /* -- Process -- */
    return !IsNullUndefined(thisArg) ? arr.forEach(Do, thisArg) : arr.forEach(Do);
}

/**
 * Performs a method to each elements of the specified `@array`. This method will perform the specified
 * `@areThis` method to validate each elements, until it returns a result that coercible with `@Boolean` 
 * value true, or else, perform until the last element from `@array`.
 * 
 * ***Note***:
 *  - When parameter `@thisArg` is provided, parameter `@areThis` required to be a non-anonymous function.
 *    (E.g. Starts with 'function' keyword)
 * 
 * @param arr - The specified list of elements.
 * @param areThis - The specified method to perform to each elements of `@array`.
 * @param thisArg 
 *  - (Optional): A parameter to use or call inside of method `@areThis` as validation reference value to meet.
 * 
 * @throws
 *  - An error when these required parameter `@arr` and `@areThis` are not provided or invalid.
 * 
 * @example
 *  - SomeOf([1, 2, undefined, 5, 'd'], item => IsString(item)): true |
 *    SomeOf([1, 2, undefined, 5, 'd'], function ())
 */
export function SomeOf<T, A>(arr: T[], areThis: (value: T, index: number, array: T[]) => unknown, thisArg?: A): boolean {
    /* -- Validation -- */
    const Emitter = NameOf(SomeOf), Targets = ["arr", "areThis", "thisArg"];

    // [!]: Exits when parameter @arr or @areThis are not provided.
    EachOf([arr, areThis], (val, pos) => {
        if (IsNullUndefined(val))
            $MissingParameterError(Emitter, `${Targets[pos]}${pos > 0 ? `['${val}']` : ""}`, val);
    });

    // [!]: Exits when parameter @arr is invalid.
    if (!IsArray(arr))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(arr), "Array");

    // [!]: Exits when parameter @areThis is invalid.
    if (!IsFunc(areThis) && !IsAsyncFunc(areThis))
        $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(areThis), "Function | Async Function");

    // [#]: Might throw an error when parameter `@areThis` does not scope or support `@this` keyword.
    if (!IsNullUndefined(thisArg) && !(IsFunc(areThis) || IsAsyncFunc(areThis)))
        return arr.some(areThis);

    /* -- Process -- */
    return !IsNullUndefined(thisArg) ? arr.some(areThis, thisArg) : arr.some(areThis);
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
 */
export function Slice<T>(arr: T[], start: number, end?: number): T[] {
    /* -- Validation -- */
    const Emitter = NameOf(Slice), Targets = ["arr", "start", "end"];

    // [!]: Exits when parameter @arr is invalid.
    if (!IsArray(arr))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(arr), "Array");

    // [?]: Automatically detect and assign a default value for parameter @start and @end.
    EachOf([start, end], (n, i) => {
        if (IsNullUndefined(n))
            i === 0 ? start = 0 : end = arr.length;
    });

    // [#]: Default response when @arr is empty or @start and @end are invalid.
    if (LengthOf(arr) === 0 || !IsNum(start, end))
        return [];

    // [#]: Clamping the value of @start and @end to a valid value.
    start = Clamp(start, 0, arr.length);
    end = Clamp(end as number, start, arr.length);

    /* -- Result -- */
    return arr.slice(start, end);
}
