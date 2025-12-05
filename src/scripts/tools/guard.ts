/**
 * Returns boolean result whether if the specified value is array object [].
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified values are array.
 * 
 * @example
 *  - IsArray([...]): true |
 *    IsArray(null | undefined | {...}): false
 */
export function IsArray(arg: any): arg is any[] {
    return Array.isArray(arg)
        ? arg.every(val => Array.isArray(val) && val.constructor === Array)
        : Array.isArray(arg) && arg.constructor === Array;
}

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
export function IsNullUndefined(arg: any): boolean {
    return IsArray(arg)
        ? arg.some(val => val === null || val === undefined)
        : (arg === null || arg === undefined);
}

/**
 * Returns boolean result whether if the specified value is string.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if some of the specified values are string.
 * 
 * @example
 *  - IsString("Some Text."): true |
 *   IsString(12 | undefined | null | true): false
 */
export function IsString(arg: any): arg is string {
    return IsArray(arg)
        ? arg.some(val => typeof val === "string" || val.constructor === String)
        : (typeof arg === "string" || arg.constructor === String);
}

/**
 * Returns boolean result whether if the specified string value is empty.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if some of the specified values are empty string.
 * 
 * @example
 *  - IsEmptyString("" | '' | ``): true |
 *    IsEmptyString("Some Text"): false
 */
export function IsEmptyStr(value: string | string[]): boolean {
    return IsArray(value)
        ? value.some(val => IsString(val) && val.trim() === "")
        : IsString(value) && value.trim() === "";
}

/**
 * Returns boolean result whether if the specified value is plain object {}.
 * 
 * Note: 
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified values are plain object.
 *  - Do not mistook parsed json object as not plain object, as it was originally a plain object.
 *  - Not parsed json object is treated as string unless parsed with `JSON.parse()` method.
 * 
 * @example
 *  - IsPlainObject({...}): true | 
 *    IsPlainObject([...] | undefined | "{}"): false
 */
export function IsPlainObj(arg: any): arg is object {
    return IsArray(arg)
        ? arg.every(val => typeof val === "object" && val.constructor === Object)
        : typeof arg === "object" && arg.constructor === Object;
}

/**
 * Returns boolean result whether if the specified data is Node.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified target data are Node.
 * 
 * @example
 *  - IsNode(document.createTextNode("...") | document.createElement("div")): true |
 *    IsNode(undefined | "Some Text." | null | false | 123): false
 */
export function IsNode(arg: any): arg is Node {
    return IsArray(arg)
        ? arg.every(val => val.constructor === Node)
        : arg.constructor === Node;
}

/**
 * Returns boolean result whether if the specified data is an Element.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified target data is an Element.
 *  
 * @example
 *  - IsElement(document.getElementsByTagNameNS(...) | document.createElement("span")): true |
 *    IsElement("<span>...</span>" | undefined): false
 */
export function IsElement(arg: any): arg is Element {
    return IsArray(arg)
        ? arg.every(val => val.constructor === Element)
        : arg.constructor === Element;
}

/**
 * Returns boolean result whether if the specified data is an HTMLElement.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified target data is an HTMLElement.
 *  - SVG Is not an HTMLElement. Use `IsElement()` checking instead.
 *  - Only returns true when the specified target data constructor is HTMLElement.
 * 
 * @example
 *  - IsHTMLElement(document.createElement("span")): true |
 *    IsHTMLElement("<span>...</span>"): false
 */
export function IsHTMLElement(arg: any): arg is HTMLElement {
    return IsArray(arg)
        ? arg.every(val => val.constructor === HTMLElement)
        : arg.constructor === HTMLElement;
}

/**
 * Returns boolean result whether if the specified data is an HTMLUnknownElement.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if some of the specified target data is an HTMLUnknownElement.
 * 
 * @example
 *  - IsUnknownElement(document.createElement("dib")): true | 
 *    IsUnknownElement(document.createElement("div")): false
 */
export function IsUnknownElement(arg: any): arg is HTMLUnknownElement {
    return IsArray(arg)
        ? arg.some(val => val.constructor === HTMLUnknownElement)
        : arg.constructor === HTMLUnknownElement;
}

/**
 * Returns boolean result whether if the specified data is a function.
 * 
 * Note:
 *  - Accepts multiple values by enclosing them with [] this bracket,
 *    and check if every of the specified target data is a function.
 * 
 * @example
 *  - IsFunc((...) => {...} | function(...) {...}): true |
 *    IsFunc(undefined | null | true | 1 | "function() {}"): false
 */
export function IsFunc(arg: any): arg is Function {
    return IsArray(arg)
        ? arg.every(val => typeof val === "function" && val.constructor === Function)
        : typeof arg === "function" && arg.constructor === Function;
}