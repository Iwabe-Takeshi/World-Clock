/**
 * |--------------------------------------------------|
 * |                                                  |
 * |               Runtime Array Tools                |
 * |                                                  |
 * |--------------------------------------------------|
 */

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

    if (!IsArray(arr))
        $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(arr), "Array");

    [start, end].forEach((n, i) => {
        if (IsNullUndefined(n))
            i === 0 ? start = 0 : end = arr.length;
    })

    // Default response when @arr is empty or @start and @end are invalid.
    if (LengthOf(arr) === 0 || !IsNum(start, end))
        return [];

    // Clamping the value of @start and @end to a valid value.
    start = Clamp(start, 0, arr.length);
    end = Clamp(end as number, start, arr.length);

    /* -- Result -- */
    return arr.slice(start, end);
}
