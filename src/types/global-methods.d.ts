/** 
 * |--------------------------------------------------|
 * |                                                  |
 * |      Application Custom Tools Intellisense       |
 * |                (Access: Global)                  |
 * |                                                  |
 * |--------------------------------------------------|
 */
declare global {
    /* ===============|===============| START OF FILE |===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |      Application Initialization Intellisense      |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Starts the `@application` initialization process.
     */
    function InitApp(): void;

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |     Application Runtime Tools Initialization     |
     * |                   Intellisense                   |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Starts the initialization process for runtime tools.
     */
    function InitRuntimeTools(): boolean;

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
     * ***Purpose***:
     *  - To avoid `@import` overhead from files/modules.
     * 
     * ***Note***:
     *  - While this allows you to access them directly at your project's runtime, you have to avoid making the
     *    accessibility of your other custom methods, errors, or variables that your project's not mostly used.
     * 
     * ***Usage***:
     *  - To avoid importing the files the used this method, create a centralized file to execute or process your
     *    own custom methods, errors, or variables at your project's runtime.
     * 
     * @param accessKey - A key for accessing your custom methods, errors, or variables at your project's runtime.
     * @param data - A associated data of the specified key at `accessKey`.
     * 
     * @example
     *  - RegisterThis("Sum", (a, b) => a + b); -> true
     */
    function RegisterThis(accessKey: string, data: any): boolean;

    /**
     * Create a new set of list of key pair that is globally accessible at your project runtime.
     * 
     * ***Purpose***:
     *  - To avoid `@import` overhead from files/modules. 
     * 
     * ***Note***:
     *  - While this allows you to access them directly at your project's runtime, you have to avoid making the
     *    accessibility of your other custom methods, errors, or variables that your project's not mostly used.
     * 
     * ***Tips***:
     *  - To avoid importing the files that used this method, create a centralized file to execute or process your
     *    own custom methods, errors, or variables at your project's runtime.
     * 
     * @param accessKey - A list of key for accessing your custom methods, errors, or variables at your project's runtime.
     * @param data - A associated list of data of the specified keys at `accessKey`.
     * 
     * @example
     *  - RegisterThis(["Sum", "Subtract"], [(a, b) => a + b, (a, b) => a - b]); -> true
     */
    function RegisterThis(accessKey: string[], data: any[]): boolean;

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
     * 
     * @example
     *  - GetConstructorOrTypeOf("Some Text"); -> "String"
     */
    function GetConstructorOrTypeOf(arg: any): string;

    /**
     * Returns the current `@date` and `@time` of your local device machine in `@localeString` format.
     */
    function LocaleDateTime(): string;

    /**
     * Returns a `@boolean` status for `@Supported` if the specified `@searchThisKey` property or method key is found at specified argument.
     * 
     * @param arg - The specified argument to check for its supported properties or methods.
     * @param searchThisKey - The specified key to check at target `@argument` supported properties or methods.
     * 
     * @throws **`false`** as default response when parameter `@arg` or `@searchThisKey` are not provided. 
     * 
     * @example
     *  - In("Some Text", "length"); -> true
     *    In("Some Text", "name"); -> false
     */
    function In(arg?: any, searchThisKey?: string): boolean;

    /**
     * Returns an `@object` collection for `@Supported` and `@NotSupported` for every specified keys of property or method from `@searchThisKey`.
     * 
     * @param arg - The specified argument to check for its supported properties or methods.
     * @param searchThisKey - The specified list of keys to check at target `@argument` supported properties or methods.
     * 
     * @throws **`false`** as default response when parameter `@arg` or `@searchThisKey` ar not provided.
     * 
     * @example
     *  - In("Some Text", "length", "substring", "trim", "name"); -> { Supported: ["length", "substring", "trim"], NotSupported: ["name"] }
     */
    function In(arg: any, ...searchThisKey: string[]): { Supported: string[], NotSupported: string[] };

    /**
     * Returns the `@name` property value of the specified argument.
     * 
     * @param arg - The specified argument to retrieve its `@name` property.
     * 
     * @throws
     *  - A `@warning` and default response value of `(@Anonymous)` when the specified `@argument` does not have or `@support` the `@name` property.
     */
    function NameOf(arg: any): string;

    /**
     * Returns the `@length` property value of specified argument.
     * 
     * ***Note***:
     *  - If the specified argument does not have or support `@length` property, it will
     *    automatically return -1 as invalid response.
     * 
     * @param arg - The specified argument to retrieve its `@length` property value.
     * 
     * @example
     *  - Length([1, 2, 3]); -> 3
     */
    function LengthOf(arg: any): number;

    /**
     * Returns the `@size` property value of specified argument.
     * 
     * ***Note***:
     *  - If the specified argument does not have or support `@size` property, it will
     *    automatically return -1 as invalid response.
     * 
     * @param arg - The specified argument to retrieve its `@size` property value.
     * 
     * @example
     *  - SizeOf(new Map([[...], [...]])); -> 2
     */
    function SizeOf(arg: any): number;

    /**
     * Executes the specified `@function` safely with try-catch block.
     * 
     * @requires
     *  - Parameter `@Method` to be a valid `@function` and also not a `@asynchronous` function.
     * 
     * @param Method - The specified `@function` to execute.
     */
    function Try(Method: Function): any;

    /**
     * Executes the specified `@asynchronous` `@function` safely with try-catch block.
     * 
     * @requires
     *  - Parameter `@Method` to be a valid `@asynchronous` `@function`.
     * 
     * @param Method - The specified `@asynchronous` `@function` to execute.
     */
    function AsyncTry(Method: Function): any;

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
     *  - Clamp(-13, 0, 5); -> 0
     *    Clamp(10, 0, 5); -> 5
     */
    function Clamp(val: number, min: number, max: number): number;

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
     *  - IsArray([1, 2, 3, ...]); -> true
     *    IsArray("[1, 2, 3, ...]"); -> false
     */
    function IsArray(arg: any): arg is any[];

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@arrays`.
     * 
     * @example
     *  - IsArray([1, 2, 3, ...], ['a', '', 'b', 'e', ...]); -> true
     *    IsArray([1, 2, 3, ...], undefined, true, ['a', 'b', ...]); -> false
     */
    function IsArray(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@null` or `@undefined`.
     * 
     * @example
     *  - IsNullUndefined(undefined | null); -> true
     *    IsNullUndefined("undefined" | "null"); -> false
     */
    function IsNullUndefined(arg: any): boolean;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments are `@null` or `@undefined`.
     * 
     * @example
     *  - IsNullUndefined(1, 'a', 'c', null, undefined); -> true
     *    IsNullUndefined(1, 3, 10.4, 'd', 'some text'); -> false
     */
    function IsNullUndefined(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@string`.
     * 
     * @example
     *  - IsString("Some Text"); -> true
     *    IsString(["Some Text"] | undefined); -> false
     */
    function IsString(arg: any): arg is string;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@strings`.
     * 
     * @example
     *  - IsString("Some Text", "Hello", ...); -> true
     *    IsString("Some Text", true, ...); -> false
     */
    function IsString(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@emptyString`.
     * 
     * @example
     *  - IsEmptyStr("" | '' | ``); -> true
     *    IsEmptyStr("Some text" | 'a' | `Some text ...`); -> false
     */
    function IsEmptyStr(str: string): boolean;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments are `@emptyString`.
     * 
     * @example
     *  - IsEmptyStr("Some text", 'a', ``); -> true
     *    IsEmptyStr("Some text", 'a', `Some text ...`); -> false
     */
    function IsEmptyStr(...str: string[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@function`.
     * 
     * @example
     *  - IsFunc(() => {...} | function myFunc() {...}); -> true
     *    IsFunc("() => {...}"); -> false
     */
    function IsFunc(arg: any): arg is Function;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@functions`.
     * 
     * @example
     *  - IsFunc(() => {...}, function (...) {...}, function myFunc() {...}); -> true
     *    IsFunc("() => {...}", function (...) {...}, "function myFunc() {...}"); -> false
     */
    function IsFunc(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@async @function`.
     * 
     * @example
     *  - IsAsyncFunc(async () => {...} | async function (...) {...}); -> true
     *    IsAsyncFunc(() => {...} | "async function (...) {...})"); -> false
     */
    function IsAsyncFunc(arg: any): boolean;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@async @function`.
     * 
     * @example
     *  - IsAsyncFunc(async () => {...}, async function (...) {...}); -> true
     *    IsAsyncFunc(() => {...}, "async function (...) {...})", async () => ...); -> false
     */
    function IsAsyncFunc(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@object`.
     * 
     * @example
     *  - IsPlainObj({ "val": 24 }); -> true
     *    IsPlainObj("{ 'val': 24 }"); -> false
     */
    function IsObj(arg: any): arg is object;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@object`.
     * 
     * @example
     *  - IsPlainObj({}, {...}, { "val": 1 }); -> true
     *    IsPlainObj({}, "{...}", null, ...); -> false
     */
    function IsObj(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is `@node`.
     * 
     * @example
     *  - IsNode(document.getElementsByTagName("body")); -> true
     *    IsNode("document.getElementsByTagName("body")"); -> false
     */
    function IsNode(arg: any): arg is Node;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is `@nodes`.
     * 
     * @example
     *  - IsNode(document.getElementsByTagName("body")[0], new Node()); -> true
     *    IsNode("document.getElementsByTagName('body')", new Node()); -> false
     */
    function IsNode(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@element`.
     * 
     * @example
     *  - IsElement(document.createElement(...)); -> true
     *    IsElement(document.getElementsByTagName("body")[0].childNodes); -> false
     */
    function IsElement(arg: any): arg is Element;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is an `@elements`.
     * 
     * @example
     *  - IsElement(document.createElement(...), document.getElementsByTagName("body")[0]); -> true
     *    IsElement(document.createElement(...), document.getElementsByTagName("body")[0].childNodes); -> false
     */
    function IsElement(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@htmlElement`.
     * 
     * ***Notes***:
     *  - This won't treat `@SVGs` elements as an `@HTMLElement`, instead use `IsElement()` guard for checking
     *    all `@elements` including `@SVG`.
     * 
     * @example
     *  - IsHTMLElement(document.createElement("span")); -> true
     *    IsHTMLElement(document.createElementNS(...)); -> false
     */
    function IsHTMLElement(arg: any): arg is HTMLElement;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments is an `@htmlElements`.
     * 
     * ***Notes***:
     *  - This won't treat `@SVG` elements as an `@HTMLElement`, instead use `IsElement()` guard for checking
     *    all `@elements` including `@SVG`.
     * 
     * @example
     *  - IsHTMLElement(document.createElement("span"), document.getElementById(...)); -> true
     *    IsHTMLElement(document.createElement("span"), document.createElementNS(...)); -> false
     */
    function IsHTMLElement(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is an `@unknownHTMLElement`.
     * 
     * @example
     *  - IsUnknownElement(document.createElement("spa")); -> true
     *    IsUnknownElement(document.createElement("span")); -> false
     */
    function IsUnknownElement(arg: any): arg is HTMLUnknownElement;

    /**
     * Returns a `@boolean` result whether if some of the specified list of arguments is an `@unknownHTMLElement`.
     * 
     * @example
     *  - IsUnknownElement(document.createElement("spa"), document.createElement("dib")); -> true
     *    IsUnknownElement(document.createElement("span"), document.createElement("div")); -> false
     */
    function IsUnknownElement(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@map` objects.
     * 
     * @example
     *  - IsMap(new Map([["data", {...}], ["nums", [...]]])); -> true
     *    IsMap([["data", {...}], ["nums", [...]]]); -> false
     */
    function IsMap(arg: any): arg is Map<any, any>;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@map` objects.
     * 
     * @example
     *  - IsMap(new Map([]), new Map([[...], [...], ...])); -> true
     *    IsMap([], [[...], [...], ...]); -> false
     */
    function IsMap(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@set` objects.
     * 
     * @example
     *  - IsSet(new Set([{ "data-set": [...], ...}])); -> true
     *    IsSet([{ "data-set": [...], ...}]); -> false
     */
    function IsSet(arg: any): arg is Set<any>;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@set` objects.
     * 
     * @example
     *  - IsSet(new Set([...]), new Set([{ data: [...], ...}])); -> true
     *    IsSet([...], new Set([{ data: [...], ...}])); -> false
     */
    function IsSet(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@number`.
     * 
     * ***Note***:
     *  - This would not treat a `@NaN` or ***Not-a-Number*** value as a valid `@number`.
     * 
     * @example
     *  - IsNum(1); -> true
     *    IsNum("1"); -> false
     */
    function IsNum(arg: any): arg is number;

    /**
     * Returns a `@boolean` result whether if every of the specified list of arguments are `@numbers`.
     * 
     * ***Note***:
    *  - This would not treat a `@NaN` or ***Not-a-Number*** value as a valid `@number`.
    * 
     * @example
     *  - IsNum(1, 2, 3, 4, 5); -> true
     *    IsNum(parseInt("one"): NaN, 2, 3, 4, "5"); -> false
     */
    function IsNum(...arg: any[]): boolean;

    /**
     * Returns a `@boolean` result whether if the specified argument is a `@boolean`.
     * 
     * @example
     *  - IsBool(true | false); -> true
     *    IsBool("true" | "false"); -> false
     */
    function IsBool(arg: any): arg is boolean;

    /**
     * Returns a `@boolean result whether if every of the specified list of arguments are `@booleans`.
     * 
     * @example
     *  - IsBool(true, false, false); -> true
     *    IsBool("true", 0, false); -> false
     */
    function IsBool(...arg: any[]): boolean;

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

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |     Document Object Model Tools Intellisense     |
     * |                                                  |
     * |--------------------------------------------------|
     */

    /**
     * Contains `@DOM` elements related processing methods.
     */
    var _Element: {
        /**
         * The root variable name.
         */
        name: "_Element"

        /**
         * Returns the first `@DOM` elements that matched the specified unique `@id`.
         * 
         * @param id - The given unique id of element to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no `@element` found with the specified unique `@id`.
         * 
         * @example
         *  - Element.Id("myBtn"); -> HTMLElement
         */
        Id(id: string): HTMLElement | null;

        /**
         * Returns the first `@DOM` elements that matched the specified `@selector`.
         * 
         * @param selector - The specified selector of element to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no `@element` found with the specified `@selector`.
         * 
         * @example
         *  - Element.Selector("button"); -> HTMLButtonElement 
         */
        Selector(selector: string): Element | null;
        Selector<T extends keyof HTMLElementTagNameMap>(selector: T): HTMLElementTagNameMap[T] | null;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@selector`.
         * 
         * @param selector - The specified selector of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@element` found with the specified `@selector`. 
         * 
         * @example
         *  - Element.SelectorAll("div"); -> NodeListOf<HTMLDivElement>
         */
        SelectorAll(selector: string): NodeListOf<Element>;
        SelectorAll<T extends keyof HTMLElementTagNameMap>(selector: T): NodeListOf<HTMLElementTagNameMap[T]>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@className`.
         * 
         * @param className - The given class name attribute of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@element` found with the specified `@className`.
         * 
         * @example
         *  - Element.Class("cards"); -> HTMLCollectionOf<Element>
         */
        Class(className: string): HTMLCollectionOf<Element>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@tag`.
         * 
         * @param tag - The specified tag of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@tag`.
         * 
         * @example
         *  - Element.Tag("div"); -> HTMLCollectionOf<HTMLDivElement>
         */
        Tag<T extends keyof HTMLElementTagNameMap>(tag: T): HTMLCollectionOf<HTMLElementTagNameMap[T]>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@name`.
         * 
         * @param name - The given name attribute of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@name`.
         * 
         * @example
         *  - Element.Name("fields"); -> NodeListOf<HTMLElement>
         */
        Name(name: string): NodeListOf<HTMLElement>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@namespaceURI` and `@localName`.
         * 
         * @param namespaceURI - The namespace URI of elements to retrieve from `@DOM`.
         * @param localName - The local name of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@namespaceURI` and `@localName`.
         * 
         * @example
         *  - Element.TagNS("http://www.w3.org/1998/Math/MathML", "annotation"); -> HTMLCollectionOf<MathMLElement>
         */
        TagNS<T extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", localeName: T): HTMLCollectionOf<T extends MathMLElementTagNameMap ? MathMLElementTagNameMap[T] : MathMLElement>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@namespaceURI` and `@localName`.
         * 
         * @param namespaceURI - The namespace URI of elements to retrieve from `@DOM`.
         * @param localName - The local name of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@namespaceURI` and `@localName`.
         * 
         * @example
         *  - Element.TagNS("http://www.w3.org/1999/xhtml", "p"); -> HTMLCollectionOf<HTMLParagraphElement>
         */
        TagNS<T extends keyof HTMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1999/xhtml", localName: T): HTMLCollectionOf<T extends HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@namespaceURI` and `@localName`.
         * 
         * @param namespaceURI - The namespace URI of elements to retrieve from `@DOM`.
         * @param localName - The local name of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@namespaceURI` and `@localName`.
         * 
         * @example
         *  - Element.TagNS("http://www.w3.org/2000/svg", "circle"); -> HTMLCollectionOf<SVGCircleElement>
         */
        TagNS<T extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", localName: T): HTMLCollectionOf<T extends SVGElementTagNameMap ? SVGElementTagNameMap[T] : SVGElement>;

        /**
         * Returns a live collection of `@DOM` elements that matches the specified `@namespaceURI` and `@localName`.
         * 
         * @param namespaceURI - The namespace URI of elements to retrieve from `@DOM`.
         * @param localName - The local name of elements to retrieve from `@DOM`.
         * 
         * @throws a warning when there's no any or at least 1 of `@elements` found with the specified `@namespaceURI` and `@localName`.
         * 
         * @example
         *  - Element.TagNS("myCustomNameSpace", "myCustomLocalName" | "p"); -> HTMLCollectionOf<Element>
         */
        TagNS<T extends keyof HTMLElementTagNameMap>(namespaceURI: string | null, localName: T | string): HTMLCollectionOf<T extends HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element>;
    };

    /**
     * Contains CSS-Class manipulation methods.
     */
    var Class: {
        /**
         * The root variable name.
         */
        name: "Class";

        /**
         * Returns a live collection of class tokens of the specified `@element`.
         * 
         * @param target - The specified element to retrieve its live collection of class tokens.
         * 
         * @example
         *  - const myBtn = Create("button");
         *    // Retrieve class tokens.
         *    Class.GetTokensOf(myBtn); -> DOMTokenList: []
         *    // Add new class item token.
         *    Class.AddFrom(myBtn, "submitBtn"); -> DOMTokenList: ["submitBtn"]
         *    // Retrieve class tokens.
         *    Class.GetTokensOf(myBtn); -> DOMTokenList: ["submitBtn"]
         */
        GetTokensOf(target: HTMLElement): DOMTokenList;

        /**
         * Checks the existence of the specified class token from the target `@element` `@DOMTokenList`.
         * 
         * @param target - The specified element to check the existence of class token to its `@DOMTokenList`.
         * @param thisTokens - The specified class token to check.
         * 
         * ***Notes***:
         *  - Accepts multiple class tokens by separating them with coma, and then check if some of the specified
         *    list of class tokens are exists at target `@element` `@DOMTokenList`.
         * 
         * @example
         *  - // [?]: Button element with a class of 'loginBtn'.
         *    const myBtn = Element.Id("loginBtn");
         *    Class.ExistsAt(myBtn, "loginBtn"); -> true
         */
        ExistsAt(target: Element, thisTokens: string): boolean;

        /**
         * Checks the existence of the specified list of class tokens from the target `@element` `@DOMTokenList`.
         * 
         * @param target - The specified element to check the existence of class token to its `@DOMTokenList`.
         * @param thisTokens - The specified list of class tokens to check.
         * 
         * @example
         *  - // [?]: Button element with a class of 'loginBtn'.
         *    const myBtn = Element.Id("loginBtn");
         *    Class.ExistsAt(myBtn, "loginBtn"); -> true
         */
        ExistsAt(target: Element, ...thisTokens: string[]): boolean;

        /**
         * Adds new specified class token for the specified `@element`.
         * 
         * ***Notes***:
         *  - Accepts multiple class tokens to add by separating them with coma.
         * 
         * @param target - The specified element to add/set new class token.
         * @param newTokens - The specified new class token to add.
         * 
         * @throws 
         *  - An error when parameter `@target` is not provided, or, a warning when parameter `@newTokens` are not provided.
         * 
         * @example
         *  - // [?]: Create a button element.
         *    const myBtn = Create("button"); -> DOMTokenList: []
         *    // [?]: Add class token 'submitBtn'.
         *    Class.AddFrom(myBtn, "submitBtn"); -> DOMTokenList: ["submitBtn"]
         */
        AddFrom(target: HTMLElement, newTokens: string): void;

        /**
         * Adds new specified collection of class tokens for the specified `@element`.
         * 
         * @param target - The specified element to add/set new collection of class tokens.
         * @param newTokens - The specified new collection of class tokens.
         * 
         * @throws
         *  - An error when parameter `@target` is not provided, or, a warning when parameter `@newTokens` are not provided.
         * 
         * @example
         *  - // [*] Create a div element.
         *    const Card = Create("div"); -> DOMTokenList: []
         *    //* Add class tokens "card" and "fetching".
         *    Class.AddFrom(Card, "card", "fetching"); -> DOMTokenList: ["card", "fetching"]
         */
        AddFrom(target: HTMLElement, ...newTokens: string[]): void;

        /**
         * Removes the specified class token from the target `@element`.
         * 
         * ***Note***:
         *  - Accepts multiple class tokens to add by separating them with coma.
         * 
         * @param target - The specified element to add/set new class token.
         * @param thisTokens - The specified class token to remove.
         * 
         * @throws
         *  - An error when parameter `@target` is not provided, or, a warning when parameter `@thisTokens` are not provided.
         * 
         * @example
         *  - // Button with class of 'submitBtn', and 'login'.
         *    const myBtn = Element.Class('submitBtn')[0]; -> DOMTokenList: ["submitBtn", "login"]
         *    // Removing class 'login' to button element.
         *    Class.RemoveFrom(myBtn, "login"); -> DOMTokenList: ["submitBtn"]
         */
        RemoveFrom(target: Element, ...thisTokens: string[]): void;

        /**
         * Toggle the specified class token from the target `@element` `@DOMTokenList`, if the specified
         * class token is currently exists at target '@element', it will be removed and return false as new state status, or else,
         * will be added and return true as new state status.
         * 
         * @param target - The specified target element to toggle class with.
         * @param thisToken - The specified class token to toggle state.
         * 
         * @throws
         *  - An error when parameter `@target` or `@thisToken` are not provided or invalid.
         * 
         * @example
         *  - // [?]: A button with class names.
         *    const myBtn = Create("button", { ClassNames: ["submitBtn", "login", "disabled"] }); -> HTMLButtonElement: DOMTokenList -> ["submitBtn", "login", "disabled"]
         *    // [?]: Toggle the state of class token 'disabled' into false, and removed from the DOMTokenList of button element.
         *    Class.ToggleFrom(myBtn, "disabled"); -> DOMTokenList: ["submitBtn", "login"]
         */
        ToggleFrom(target: Element, thisToken: string): boolean;

        /**
         * Toggle the specified class token from the target `@element` with an option to force its toggle state
         * by provided a `@boolean` status value ('@true' or '@false') at parameter `@force`.
         * 
         * ***States***:
         *  - **FALSE**: Removes the specified class token if exists at the specified target element, and return '@false'.
         *    **TRUE**: Adds the specified class token if not exists at the specified target element, and return '@true'.
         * 
         * @param target - The specified target element to toggle class with.
         * @param thisToken - The specified class token to toggle state.
         * @param force - (Optional): A force status to apply as toggle state of the specified class token.
         * 
         * @throws
         *  - An error when parameter `@target` or `@thisToken` are not provided or invalid.
         * 
         * @example
         *  - // [?]: A button with class names.
         *    const myBtn = Create("button", { ClassNames: ["submitBtn", "login", "disabled"] }); -> HTMLButtonElement: DOMTokenList -> ["submitBtn", "login", "disabled"]
         *    // [?]: Toggle the state of class token 'disabled' into false, and removed from the DOMTokenList of button element.
         *    Class.ToggleFrom(myBtn, "disabled"); -> DOMTokenList: ["submitBtn", "login"]
         *    // [?]: Always ensure class token 'disabled' exists at button element.
         *    Class.ToggleFrom(myBtn, "disabled", true); -> DOMTokenList: ["submitBtn", "login", "disabled"]
         */
        ToggleFrom(target: Element, thisToken: string, force?: boolean): boolean;
    }

    /* ===============|===============|===============|=============== */

    /**
     * |--------------------------------------------------|
     * |                                                  |
     * |     Global Array Object Methods Intellisense     |
     * |                                                  |
     * |--------------------------------------------------|
     */

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
     *  - EachOf([1, 2, 3, 4, 5], n => LOG(n * 2)); -> 2 4 6 8 10
     *    EachOf([1, 2, 3, 4, 5], function (n) { LOG(n * this); }, 2); -> 2 4 6 8 10
     */
    function EachOf<T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => void, thisArg?: A): void;

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
    function SomeOf<T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => unknown, thisArg?: A): boolean

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
     *  - EveryOf([1, 2, 3, 4, 5], n => (typeof n === "number" || n instanceof Number) && !Number.isNaN(n)); -> true
     *    EveryOf([1, 2, 3, '4', 5], n => (typeof n === "number" || n instanceof Number) && !Number.isNaN(n)); -> false
     */
    function EveryOf<T, S extends T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => value is S, thisArg?: A): this is S[];
    function EveryOf<T, A>(arr: T[], callback: (value: T, index: number, array: T[]) => unknown, thisArg?: A): boolean;

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
     *  - MapOf([1, 2, 3, 4, 5], n => n * 2); -> [2, 4, 6, 8, 10]
     *    MapOf([1, 2, 3, 4, 5], function (n) { return n * this.multiplier; }, { multiplier: 2 }); -> [2, 4, 6, 8, 10]
     */
    function MapOf<T, U, A>(arr: T[], callback: (value: T, index: number, array: T[]) => U, thisArg?: A): U[];

    /**
     * Returns a sliced collection of array elements from the specified `@arr` with the specified `@start` index position.
     * 
     * @Notes
     *  - When position parameter `@start` is not provided, there would be no modification or data changes
     *    from the specified collection of `@array` elements from parameter `@arr`. 
     *    In other words, the collection would remain the same.
     * 
     * @param arr - The specified collection of `@array` items to slice.
     * @param start - The starting position to slice from elements of parameter `@arr`.
     * 
     * @throws
     *  - An empty array '[]' when the specified data from parameter `@arr` is invalid, or else, when empty.
     * 
     * @example
     *  - Slice(['a', 1, 2, 3, 4, ...], 1); -> [1, 2, 3, 4, ...]
     */
    function Slice<T>(arr: T[], start: number): T[];

    /**
     * Returns a sliced collection of array elements from the specified `@arr` with the specified `@start` and `@end` index position.
     * 
     * @Notes
     *  - When position parameter `@start` is not provided, there would be no modification or data changes
     *    from the specified collection of `@array` elements from parameter `@arr`. 
     *    In other words, the collection would remain the same.
     * 
     * @param arr - The specified collection of `@array` items to slice.
     * @param start - The starting position to slice from elements of parameter `@arr`.
     * @param end - The ending position to slice from elements of parameter `@arr`.
     * 
     * @throws
     *  - If the provided type for parameter `@arr` is invalid, it will return an empty array '[]' as invalid response, or,
     *    a warning when the specified collection of `@array` elements is empty.
     * 
     * @example
     *  - Slice(['a', 1, 2, 3, 4, ...], 1, 5); -> [1, 2, 3, 4]
     */
    function Slice<T>(arr: T[], start: number, end: number): T[];

    /* ===============|===============| END OF FILE |===============|=============== */
}

export { };
