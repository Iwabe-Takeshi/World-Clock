/* ===============|===============| START OF FILE |===============|=============== */

/**
 * |--------------------------------------------------|
 * |                                                  |
 * |              Global Guarding Tools               |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Returns boolean result whether if the specified value is null or undefined.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if some of the specified values are null or undefined.
 * 
 * @example
 *  - IsNullUndefined(null | undefined): true |
 *    IsNullUndefined("null" | "undefined"): false
 */
export function IsNullUndefined(...arg: any[]): boolean {
    return arg.some(i => i === null || i === undefined);
}

/**
 * Returns boolean result whether if the specified value is array object [].
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of arguments are array.
 * 
 * @example
 *  - IsArray([...]): true |
 *    IsArray(null | undefined | {...}): false
 */
export function IsArray(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => typeof i === "object" && i.constructor === Array);
}

/**
 * Returns boolean result whether if the specified value is string.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if some of the specified 
 *    list of arguments are string.
 * 
 * @example
 *  - IsString("Some Text."): true |
 *   IsString(12 | undefined | null | true): false
 */
export function IsString(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => typeof i === "string" || (i.constructor === String || i instanceof String));
}

/**
 * Returns boolean result whether if the specified string value is empty.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if some of the 
 *    specified arguments are empty string.
 * 
 * @example
 *  - IsEmptyString("" | '' | ``): true |
 *    IsEmptyString("Some Text"): false
 */
export function IsEmptyStr(...str: string[]): boolean {
    if (str.length === 0 || str.some(i => IsNullUndefined(i)))
        return false;

    return str.some(i => i.trim() === "" || i.trim().length === 0);
}

/**
 * Returns boolean result whether if the specified value is plain object {}.
 * 
 * Note: 
 *  - Accepts multiple values by enclosing them with coma, and check if every of the 
 *    specified arguments are plain object.
 * 
 * @example
 *  - IsPlainObject({...}): true | 
 *    IsPlainObject([...] | "{}", {...}): false
 */
export function IsObj(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => typeof i === "object" && i.constructor === Object);
}

/**
 * Returns boolean result whether if the specified data is Node.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of target data are Node.
 * 
 * @example
 *  - IsNode(document.createTextNode("...") | document.createElement("div")): true |
 *    IsNode(undefined | "Some Text." | null | false | 123): false
 */
export function IsNode(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor === Node || i instanceof Node);
}

/**
 * Returns boolean result whether if the specified data is an Element.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of target data is an Element.
 *  
 * @example
 *  - IsElement(document.getElementsByTagNameNS(...) | document.createElement("span")): true |
 *    IsElement("<span>...</span>" | undefined): false
 */
export function IsElement(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor === Element || i instanceof Element);
}

/**
 * Returns boolean result whether if the specified data is an HTMLElement.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them coma, and check if every of the specified 
 *    list of target data are HTMLElement.
 *  - SVG Is not an HTMLElement. Use `IsElement()` checking instead.
 *  - Only returns true when the specified target data constructor is HTMLElement.
 * 
 * @example
 *  - IsHTMLElement(document.createElement("span")): true |
 *    IsHTMLElement("<span>...</span>"): false
 */
export function IsHTMLElement(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor === HTMLElement || i instanceof HTMLElement);
}

/**
 * Returns boolean result whether if the specified data is an HTMLUnknownElement.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if some of the specified 
 *    list of target data are HTMLUnknownElement.
 * 
 * @example
 *  - IsUnknownElement(document.createElement("dib")): true | 
 *    IsUnknownElement(document.createElement("div")): false
 */
export function IsUnknownElement(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNode(i)))
        return false;

    return arg.some(i => i.constructor === HTMLUnknownElement || i instanceof HTMLUnknownElement);
}

/**
 * Returns boolean result whether if the specified argument is a function.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of arguments are functions.
 * 
 * @example
 *  - IsFunc((...) => {...} | function(...) {...}): true |
 *    IsFunc(undefined | null | true | 1 | "function() {}"): false
 */
export function IsFunc(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => typeof i === "function" && (i.constructor === Function || i instanceof Function));
}

/**
 * Returns a boolean result whether if the specified argument is a async function.
 * 
 * ***Note***:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of arguments are async functions.
 * 
 * @example
 *  - IsAsyncFunc(async () => {...} | async function (...) {...}): true
 *    IsAsyncFunc(() => {...} | async function (...) {...}): false
 */
export function IsAsyncFunc(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor.name === "AsyncFunction");
}

/**
 * Returns a boolean result whether if the specified argument is a map object.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified 
 *    list of arguments are map object.
 * 
 * @example
 *  - IsMap(new Map([["num1", 13], [...], ...])): true |
 *    IsMap([["num1", 13], [...], ...]): false
 */
export function IsMap(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor === Map || i instanceof Map);
}

/**
 * Returns a boolean result whether if the specified argument is a set object.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with coma, and check if every of the specified
 *    list of arguments are set object.
 * 
 * @example
 *  - IsSet(new Set([{...}])): true |
 *    IsSet([{...}]): false
 */
export function IsSet(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => i.constructor === Set || i instanceof Set);
}
/**
 * Returns a boolean result whether if the specified argument/s is a number.
 * 
 * ***Notes***:
 *  - Accepts multiple values by seperating them with coma, and check if every of the specified
 *    list of arguments are numbers.
 *  - This would not treat a `@NaN` or ***Not-a-Number*** value as a valid `@number`.
 * 
 * @example
 *  - IsNum(1): true, IsNum(1, 2, 3, 4, 5): true |
 *    IsNum("1"): false, IsNum(parseInt("one"): NaN, 2, 3, 4, "5"): false
 */
export function IsNum(...arg: any[]): boolean {
    if (arg.length === 0 || arg.some(i => IsNullUndefined(i)))
        return false;

    return arg.every(i => (typeof i === "number" || i.constructor === Number) && !Number.isNaN(i));
}

/* ===============|===============| END OF FILE |===============|=============== */
