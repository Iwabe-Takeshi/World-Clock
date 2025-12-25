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
 *  - Accepts multiple values by separating them with [] this bracket,
 *    and check if some of the specified values are null or undefined.
 *
 * @example
 *  - IsNullUndefined(null | undefined); -> true
 *    IsNullUndefined("null" | "undefined"); -> false
 */
export function IsNullUndefined(...args: Array<any>): boolean {
    if (args.length === 0)
        return false;

    return args.some(arg => arg === null || arg === undefined);
}

/**
 * Returns boolean result whether if the specified value is array object [].
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are array.
 *
 * @example
 *  - IsArray([...]); -> true
 *    IsArray(null | undefined | {...}); -> false
 */
export function IsArray(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => typeof arg === "object" && arg.constructor === Array);
}

/**
 * Returns boolean result whether if the specified value is string.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if some of the specified
 *    list of arguments are string.
 *
 * @example
 *  - IsString("Some Text."); -> true
 *   IsString(12 | undefined | null | true); -> false
 */
export function IsString(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => typeof arg === "string" || (arg.constructor === String || arg instanceof String));
}

/**
 * Returns boolean result whether if the specified string value is empty.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if some of the
 *    specified arguments are empty string.
 *
 * @example
 *  - IsEmptyString("" | '' | ``); -> true
 *    IsEmptyString("Some Text"); -> false
 */
export function IsEmptyStr(...strA: Array<string>): boolean {
    if (strA.length === 0 || (strA as Array<any>).some(str => IsNullUndefined(str)))
        return false;

    return strA.some(str => str.trim() === "" || str.trim().length === 0);
}

/**
 * Returns boolean result whether if the specified value is plain object {}.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the
 *    specified arguments are plain object.
 *
 * @example
 *  - IsPlainObject({...}); -> true
 *    IsPlainObject([...] | "{}", {...}); -> false
 */
export function IsObj(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => typeof arg === "object" && arg.constructor === Object);
}

/**
 * Returns boolean result whether if the specified data is Node.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of target data are Node.
 *
 * @example
 *  - IsNode(document.createTextNode("...") | document.createElement("div")); -> true
 *    IsNode(undefined | "Some Text." | null | false | 123); -> false
 */
export function IsNode(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor === Node || arg instanceof Node);
}

/**
 * Returns a boolean result whether if the specified argument is parent node.
 *
 * Node:
 *  - Accepts multiple arguments by separating them with coma, and check if every of the specified list of arguments
 *    are parent node.
 *
 * @example
 *  - IsParentNode(DOM.createDocumentFragment()); -> true
 */
export function IsParentNode(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg instanceof Element || arg instanceof Document || arg instanceof DocumentFragment);
}

/**
 * Returns a boolean result whether if the specified data is a child node.
 *
 * Note:
 *  - Accepts multiple arguments by separating them with coma, and check if every of the specified list of arguments
 *    are child node.
 *
 * @example
 *  - IsChildNode(DOM.createTextNode("...")); -> true
 *    IsChildNode(undefined | "Some Text."); -> false
 */
export function IsChildNode(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg =>
        arg instanceof Element || arg instanceof Text || arg instanceof Comment || arg instanceof DocumentType
    );
}

/**
 * Returns boolean result whether if the specified data is an Element.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of target data is an Element.
 *
 * @example
 *  - IsElement(document.getElementsByTagNameNS(...) | document.createElement("span")); -> true
 *    IsElement("<span>...</span>" | undefined); -> false
 */
export function IsElement(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor === Element || arg instanceof Element);
}

/**
 * Returns boolean result whether if the specified data is an HTMLElement.
 *
 * Note:
 *  - Accepts multiple values by separating them coma, and check if every of the specified
 *    list of target data are HTMLElement.
 *  - SVG Is not an HTMLElement. Use `IsElement()` checking instead.
 *  - Only returns true when the specified target data constructor is HTMLElement.
 *
 * @example
 *  - IsHTMLElement(document.createElement("span")); -> true
 *    IsHTMLElement("<span>...</span>"); -> false
 */
export function IsHTMLElement(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor === HTMLElement || arg instanceof HTMLElement);
}

/**
 * Returns boolean result whether if the specified data is an HTMLUnknownElement.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if some of the specified
 *    list of target data are HTMLUnknownElement.
 *
 * @example
 *  - IsUnknownElement(document.createElement("dib")); -> true
 *    IsUnknownElement(document.createElement("div")); -> false
 */
export function IsUnknownElement(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNode(arg)))
        return false;

    return args.some(arg => arg.constructor === HTMLUnknownElement || arg instanceof HTMLUnknownElement);
}

/**
 * Returns boolean result whether if the specified argument is a function.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are functions.
 *
 * @example
 *  - IsFunc((...) => {...} | function(...) {...}); -> true
 *    IsFunc(undefined | null | true | 1 | "function() {}"); -> false
 */
export function IsFunc(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => typeof arg === "function" && (arg.constructor === Function || arg instanceof Function));
}

/**
 * Returns a boolean result whether if the specified argument is a async function.
 *
 * ***Note***:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are async functions.
 *
 * @example
 *  - IsAsyncFunc(async () => {...} | async function (...) {...}); -> true
 *    IsAsyncFunc(() => {...} | async function (...) {...}); -> false
 */
export function IsAsyncFunc(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor.name === "AsyncFunction");
}

/**
 * Returns a boolean result whether if the specified argument is a map object.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are map object.
 *
 * @example
 *  - IsMap(new Map([["num1", 13], [...], ...])); -> true
 *    IsMap([["num1", 13], [...], ...]); -> false
 */
export function IsMap(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor === Map || arg instanceof Map);
}

/**
 * Returns a boolean result whether if the specified argument is a set object.
 *
 * Note:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are set object.
 *
 * @example
 *  - IsSet(new Set([{...}])); -> true
 *    IsSet([{...}]); -> false
 */
export function IsSet(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => arg.constructor === Set || arg instanceof Set);
}
/**
 * Returns a boolean result whether if the specified argument/s is a number.
 *
 * ***Notes***:
 *  - Accepts multiple values by separating them with coma, and check if every of the specified
 *    list of arguments are numbers.
 *  - This would not treat a `@NaN` or ***Not-a-Number*** value as a valid `@number`.
 *
 * @example
 *  - IsNum(1): true, IsNum(1, 2, 3, 4, 5); -> true
 *    IsNum("1"); -> false
 */
export function IsNum(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => (typeof arg === "number" || arg.constructor === Number) && !Number.isNaN(arg));
}

/**
 * Returns a boolean result whether if the specified argument is a boolean.
 *
 * ***Note***:
 *  - Accepts multiple values by separating when with coma, and check if every of the specified
 *    list of arguments are booleans.
 *
 * @example
 *  - IsBool(true | false); -> true
 *    IsBool("true" | "false"); -> false
 */
export function IsBool(...args: Array<any>): boolean {
    if (args.length === 0 || args.some(arg => IsNullUndefined(arg)))
        return false;

    return args.every(arg => typeof arg === "boolean" || arg.constructor === Boolean || arg instanceof Boolean);
}

/* ===============|===============| END OF FILE |===============|=============== */
