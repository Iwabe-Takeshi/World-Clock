/**
 * |--------------------------------------------------|
 * |                                                  |
 * |           Document Object Model Tools            |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Contains retrieval methods for `@DOM` elements.
 */
export var ELEMENT = {
    /**
     * The root variable name.
     */
    name: "ELEMENT",
    
    /**
     * Returns the first `@DOM` elements that matches the specified `@id`.
     * 
     * @param id - The given unique id of element to retrieve from `@DOM`.
     */
    ID(id: string): HTMLElement | null {
        const Emitter = NameOf(Slice(Object.values(this), 1)[0]), Target = "id";

        /* -- Validation -- */
        if (!IsString(id))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(id), "String");

        // Ensures that id is not empty string.
        if (IsEmptyStr(id))
            $MissingParameterError(Emitter, Target, id);

        /* -- Retrieval Process -- */
        const result = DOM.getElementById(id);

        // Notify for not-found element.
        if (IsNullUndefined(result))
            WARN(`ELEMENT>ID(): There's no associated element found with an id of '${id}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns the first `@DOM` elements that matches the specified `@selector`.
     * 
     * @param selector - The specified selector of elements to retrieve from `@DOM`.
     */
    SELECTOR<T extends keyof HTMLElementTagNameMap>(selector: T): HTMLElementTagNameMap[T] | null {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[1]), Target = "selector";
        if (!IsString(selector))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(selector), "String");

        if (IsEmptyStr(selector))
            $MissingParameterError(Emitter, Target, selector);

        /* -- Retrieval Process -- */
        const result = DOM.querySelector(selector);

        if (IsNullUndefined(result))
            WARN(`ELEMENT>SELECTOR(): There's no associated element found with a selector of '${selector}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of `@DOM` elements that matches the specified `@selector`.
     * 
     * @param selector - The specified selector of elements from `@DOM`.
     */
    SELECTOR_ALL<T extends keyof HTMLElementTagNameMap>(selector: T | string): T extends keyof HTMLElementTagNameMap ? NodeListOf<HTMLElementTagNameMap[T]> : NodeListOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[2]), Target = "selector";
        if (!IsString(selector))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(selector), "String");

        if (IsEmptyStr(selector))
            $MissingParameterError(Emitter, Target, selector);

        /* -- Retrieval Process -- */
        const result = DOM.querySelectorAll(selector) as T extends keyof HTMLElementTagNameMap ? NodeListOf<HTMLElementTagNameMap[T]> : NodeListOf<Element>;

        if (LengthOf(result) <= 0)
            WARN(`ELEMENT>SELECTOR_ALL(): There's no associated element found with a selector of '${selector}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of `@DOM` elements that matches the specified `@className`.
     * 
     * @param className - The given class name attribute of elements to retrieve from `@DOM`.
     */
    CLASS(className: string): HTMLCollectionOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[3]), Target = "className";

        if (!IsString(className))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(className), "String");

        if (IsEmptyStr(className))
            $MissingParameterError(Emitter, Target, className);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByClassName(className);

        if (LengthOf(result) <= 0)
            WARN(`ELEMENT>CLASS(): There's no elements found with a given class of '${className}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of `@DOM` elements that matches the specified `@tag`.
     * 
     * @param tag - The specified tag of elements to retrieve from `@DOM`.
     */
    TAG<T extends keyof HTMLElementTagNameMap>(tag: T): HTMLCollectionOf<HTMLElementTagNameMap[T]> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[4]), Target = "tag";

        if (!IsString(tag))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(tag), "String");

        if (IsEmptyStr(tag))
            $MissingParameterError(Emitter, Target, tag);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByTagName(tag);

        if (LengthOf(result) <= 0)
            WARN(`ELEMENTS>TAG(): There's no elements found with specified tag of '${tag}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of `@DOM` elements that matches the specified `@name`.
     * 
     * @param name - The specified name of elements to retrieve from `@DOM`.
     */
    NAME(name: string): NodeListOf<HTMLElement> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[5]), Target = "name";

        if (!IsString(name))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(name), "String");

        if (IsEmptyStr(name))
            $MissingParameterError(Emitter, Target, name);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByName(name);

        if (LengthOf(result) <= 0)
            WARN(`ELEMENT>NAME(): There's no elements found with specified name of '${name}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of `@DOM` elements that matches the specified `@namespaceURI` and `@localName`.
     * 
     * @param namespaceURI - The namespace URI of elements to retrieve from `@DOM`.
     * @param localName - The local name of elements to retrieve from `@DOM`.
     */
    TAGNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[6]), P = [namespaceURI, localName], Targets = ["namespaceURI", "localName"];

        // Both parameter must be a string and not empty.
        P.forEach((t, i) => {
            if (!IsString(t))
                $UnexpectedTypeError(Emitter, Targets[i], GetConstructorOrTypeOf(t), "string");

            if (IsEmptyStr(t))
                $MissingParameterError(Emitter, Targets[i], t);
        });

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByTagNameNS(P[0], P[1]);

        if (LengthOf(result) <= 0)
            WARN(`ELEMENT>TAGNS(): There are no elements found with the specified @namespaceURI: '${P[0]}' and @localName: '${P[1]}'!`);

        /* -- Result -- */
        return result;
    }
}

/**
 * Contains all CSS-Class manipulation methods.
 */
export var CLASS = {
    /**
     * The root name variable.
     */
    name: "CLASS",

    /**
     * Returns a live collection of class tokens from the specified element.
     * 
     * @param element - The specified element to retrieve its class tokens collection.
     */
    GET(element: HTMLElement) {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[1]), Target = "element";
    }
}
