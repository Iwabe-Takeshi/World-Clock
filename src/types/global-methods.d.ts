/** 
 * |--------------------------------------------------|
 * |                                                  |
 * |      Application Custom Tools Intellisense       |
 * |                (Access: Global)                  |
 * |                                                  |
 * |--------------------------------------------------|
 */
declare global {
    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |        Application RunTime Initialization        |
     * |                   Intellisense                   |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Starts the initialization of application contents & processes.
     * 
     * @param Root - Where to render the application contents.
     */
    function InitApp(Root: HTMLElement): void;

    /**
     * Starts the initialization of application contents & processes.
     * 
     * @param Root - Where to render the application contents.
     * @param LocaleTimeZone - To filter and prioritize display of user's country locale timezone.
     */
    function InitApp(Root: HTMLElement, LocaleTimeZone: string): void;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |         Application Global Runtime Tools         |
     * |           Initialization Intellisense            |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Starts the initialization of application `@runtime` tools.
     */
    function InitGlobalTools(): void;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |     Global Accessibility Maker Intellisense      |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Create a new set of key pair that is globally accessible at your project runtime.
     * 
     * Purpose:
     *  - Allows you to use the set of keys you provided right away at any files after importing files
     *    that used this method at your entry file. (e.g. index.js or app.js)
     *  - Avoids overhead imports from files that used your set of custom methods, errors, or variables.
     * 
     * Note:
     *  - While this allows you to access them directly at your project's runtime, you have to avoid making the
     *    accessibility of your other custom methods, errors, or variables that your project's not mostly used.
     * 
     * Tips:
     *  - To avoid importing the files the used this method, create a centralized file to execute or process your
     *    own custom methods, errors, or variables at your project's runtime.
     * 
     * @param accessKey - A key for accessing your custom methods, errors, or variables at your project's runtime.
     * @param data - A associated data of the specified key at `accessKey`.
     */
    function MakeGlobal(accessKey: string, data: any): boolean;

    /**
     * Create a new set of list of key pair that is globally accessible at your project runtime.
     * 
     * Purpose:
     *  - Allows you to use the set of keys you provided right away at any files after importing files
     *    that used this method at your entry file. (e.g. index.js or app.js)
     *  - Avoids overhead imports from files that used your set of custom methods, errors, or variables.
     * 
     * Note:
     *  - While this allows you to access them directly at your project's runtime, you have to avoid making the
     *    accessibility of your other custom methods, errors, or variables that your project's not mostly used.
     * 
     * Tips:
     *  - To avoid importing the files the used this method, create a centralized file to execute or process your
     *    own custom methods, errors, or variables at your project's runtime.
     * 
     * @param accessKey - A list of key for accessing your custom methods, errors, or variables at your project's runtime.
     * @param data - A associated list of data of the specified keys at `accessKey`.
     */
    function MakeGlobal(accessKey: string[], data: any[]): boolean;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |            Global Tools Intellisense             |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Retrieves the `@constructor` of specified argument or else `@type`.
     * 
     * @param arg - The specified argument value or data to retrieve its constructor or type.
     */
    function GetConstructorOrTypeOf(arg: any): string;

    /**
     * Retrieves the `@name` of the specified `@function`.
     * 
     * @param func - The specified function to retrieve its name.
     */
    function FuncName(func: Function): string;

    /**
     * Returns the current `@date` and `@time` of your local device machine in `@localeString` format.
     */
    function LocaleDateTime(): string;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |          Global Variables Intellisense           |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Shorter access for accessing `@document`.
     * 
     * @usage
     *  - Instead of `@document` or `@window.document` to access web page contents,
     *    you can now just type `@DOM` instead for shorter access.
     */
    var DOM: Document

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |            Console Tools Intellisense            |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Write a static error message output to the console at `@error` level.
     * 
     * @param data - The error message to write at console.
     */
    function ERROR(data: any): void;

    /**
     * Writes a static error message outputs to the console at `@error` level.
     * 
     * @param data - The list of error messages to write at console.
     */
    function ERROR(...data: any[]): void;

    /**
     * Write a static debug message output to the console at `@debug` level.
     * 
     * @param data - The debug message to write at console.
     */
    function DEBUG(data: any): void;

    /**
     * Writes a static debug message outputs to the console at `@debug` level.
     * 
     * @param data - The list of debug messages to write at console.
     */
    function DEBUG(...data: any[]): void;

    /**
     * Write a static message output to the console.
     * 
     * @param data - The message to write at console.
     */
    function LOG(data: any): void;

    /**
     * Writes a static message outputs to the console.
     * 
     * @param data - The list of messages to write at console.
     */
    function LOG(...data: any[]): void;

    /**
     * Write a static warning message output to the console at `@warning` level.
     * 
     * @param data - The warning message to write at console. 
     */
    function WARN(data: any): void;

    /**
     * Writes a static warning message outputs to the console at `@warning` level.
     * 
     * @param data - The list of warning messages to write at console. 
     */
    function WARN(...data: any[]): void;


    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |        Application Guarding Intellisense         |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@array`.
     * 
     * @example
     *  - IsArray([1, 2, 3, ...]): true |
     *    IsArray("[1, 2, 3, ...]"): false
     */
    function IsArray(arg: any): arg is any[];

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@arrays`.
     * 
     * @example
     *  - IsArray([1, 2, 3, ...], ['a', '', 'b', 'e', ...]): true |
     *    IsArray([1, 2, 3, ...], undefined, true, ['a', 'b', ...]): false
     */
    function IsArray(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@null` or `@undefined`.
     * 
     * @example
     *  - IsNullUndefined(undefined | null): true |
     *    IsNullUndefined("undefined" | "null"): false
     */
    function IsNullUndefined(arg: any): boolean;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments are `@null` or `@undefined`.
     * 
     * @example
     *  - IsNullUndefined(1, 'a', 'c', null, undefined): true
     *    IsNullUndefined(1, 3, 10.4, 'd', 'some text'): false
     */
    function IsNullUndefined(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@string`.
     * 
     * @example
     *  - IsString("Some Text"): true |
     *    IsString(["Some Text"] | undefined): false
     */
    function IsString(arg: any): arg is string;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@strings`.
     * 
     * @example
     *  - IsString("Some Text", "Hello", ...): true |
     *    IsString("Some Text", true, ...): false
     */
    function IsString(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@emptyString`.
     * 
     * @example
     *  - IsEmptyStr("" | '' | ``): true |
     *    IsEmptyStr("Some text" | 'a' | `Some text ...`): false
     */
    function IsEmptyStr(str: string): boolean;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments are `@emptyString`.
     * 
     * @example
     *  - IsEmptyStr("Some text", 'a', ``): true
     *    IsEmptyStr("Some text", 'a', `Some text ...`): false
     */
    function IsEmptyStr(...str: string[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@function`.
     * 
     * @example
     *  - IsFunc(() => {...} | function myFunc() {...}): true |
     *    IsFunc("() => {...}"): false
     */
    function IsFunc(arg: any): arg is Function;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@functions`.
     * 
     * @example
     *  - IsFunc(() => {...}, function (...) {...}, function myFunc() {...}): true |
     *    IsFunc("() => {...}", function (...) {...}, "function myFunc() {...}"): false
     */
    function IsFunc(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@object`.
     * 
     * @example
     *  - IsPlainObj({ "val": 24 }): true |
     *    IsPlainObj("{ 'val': 24 }"): false
     */
    function IsPlainObj(arg: any): arg is object;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@object`.
     * 
     * @example
     *  - IsPlainObj({}, {...}, { "val": 1 }): true
     *    IsPlainObj({}, "{...}", null, ...): false
     */
    function IsPlainObj(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@node`.
     * 
     * @example
     *  - IsNode(document.getElementsByTagName("body")): true |
     *    IsNode("document.getElementsByTagName("body")"): false
     */
    function IsNode(arg: any): arg is Node;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is `@nodes`.
     * 
     * @example
     *  - IsNode(document.getElementsByTagName("body")[0], new Node()): true |
     *    IsNode("document.getElementsByTagName('body')", new Node()): false
     */
    function IsNode(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@element`.
     * 
     * @example
     *  - IsElement(document.createElement(...)): true |
     *    IsElement(document.getElementsByTagName("body")[0].childNodes): false
     */
    function IsElement(arg: any): arg is Element;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is an `@elements`.
     * 
     * @example
     *  - IsElement(document.createElement(...), document.getElementsByTagName("body")[0]): true |
     *    IsElement(document.createElement(...), document.getElementsByTagName("body")[0].childNodes): false
     */
    function IsElement(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@htmlElement`.
     * 
     * Notes:
     *  - This won't treat `@SVGs` elements as an `@HTMLElement`, instead use `IsElement()` guard for checking
     *    all `@elements` including `@SVG`.
     * 
     * @example
     *  - IsHTMLElement(document.createElement("span")): true |
     *    IsHTMLElement(document.createElementNS(...)): false
     */
    function IsHTMLElement(arg: any): arg is HTMLElement;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is an `@htmlElements`.
     * 
     * Notes:
     *  - This won't treat `@SVG` elements as an `@HTMLElement`, instead use `IsElement()` guard for checking
     *    all `@elements` including `@SVG`.
     * 
     * @example
     *  - IsHTMLElement(document.createElement("span"), document.getElementById(...)): true |
     *    IsHTMLElement(document.createElement("span"), document.createElementNS(...)): false
     */
    function IsHTMLElement(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@unknownHTMLElement`.
     * 
     * @example
     *  - IsUnknownElement(document.createElement("spa")): true |
     *    IsUnknownElement(document.createElement("span")): false
     */
    function IsUnknownElement(arg: any): arg is HTMLUnknownElement;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments is an `@unknownHTMLElement`.
     * 
     * @example
     *  - IsUnknownElement(document.createElement("spa"), document.createElement("dib")): true |
     *    IsUnknownElement(document.createElement("span"), document.createElement("div")): false
     */
    function IsUnknownElement(...arg: any[]): boolean;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |        Application Custom Error Builders         |
     * |                   Intellisense                   |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Builds and emit the contents of `@MissingParameterError`.
     * 
     * @param emitter - The method name that emits this error.
     * @param target - The target parameter that cause this error.
     * @param value - The value of target parameter that trigger this error.
     */
    function $MissingParameterError(emitter: string, target: string, value: any): void;

    /**
     * Builds and emit the contents of `@UnexpectedTypeError`.
     * 
     * @param emitter - The method name that emits this error.
     * @param target - The target parameter that cause this error.
     * @param unexpected - The unexpected type received from target parameter that trigger this error
     * @param expected - The expected type to received from target parameter.
     */
    function $UnexpectedTypeError(emitter: string, target: string, unexpected: string, expected: string): void;

    /**
     * Builds and emit the contents of `@MismatchArrayLengthError`.
     * 
     * @param emitter - The method name that emits this error.
     * @param target - The target parameter that cause this error.
     * @param targetLength - The target parameter length that trigger this error.
     * @param expectedArrLength - The expected item length of target parameter.
     */
    function $MismatchArrayLengthError(emitter: string, target: string, targetLength: number, expectedArrLength: number): void;

    /**
     * Builds and emit the contents of `@IndexOutOfBoundsError`.
     * 
     * @param emitter - The method name that emits this error.
     * @param target - The target parameter that cause this error.
     * @param receivedIndex - The target parameter index value that trigger this error.
     * @param minmaxIndex - The minimum and maximum index that target parameter can receive.
     */
    function $IndexOutOfBoundsError(emitter: string, target: string, receivedIndex: number, minmaxIndex: number[]): void;

    /**
     * Builds and emit the contents of `@UnknownHTMLTagError`.
     * 
     * @param emitter - The method name that emits this error.
     * @param target - The target parameter that cause this error.
     * @param unknownTag - The received unknown html tag from target parameter that trigger this error.
     */
    function $UnknownHTMLTagError(emitter: string, target: string, unknownTag: string): void;

    /* ===============|===============| END OF FILE |===============|=============== */
}

export { };