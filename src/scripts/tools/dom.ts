/**
 * |--------------------------------------------------|
 * |                                                  |
 * |           Document Object Model Tools            |
 * |                                                  |
 * |--------------------------------------------------|
 */

/**
 * Contains **DOM** elements retrieval methods.
 */
export const GetElement = {
    /**
     * The root variable namespace.
     */
    name: "GetElement",

    /**
     * Returns the first **DOM** elements that matched the specified unique **id**.
     * 
     * @param id - The given unique id of element to retrieve from **DOM**.
     * 
     * @throws a warning when there's no **element** found with the specified unique **id**.
     * 
     * @example
     *  - GetElement.Id("myBtn"); -> HTMLElement
     */
    Id(id: string): HTMLElement | null {
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
            WARN(`Element>Id(): There's no associated element found with an id of '${id}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns the first **DOM** elements that matched the specified **selector**.
     * 
     * @param selector - The specified selector of element to retrieve from **DOM**.
     * 
     * @throws a warning when there's no **element** found with the specified **selector**.
     * 
     * @example
     *  - GetElement.Selector("button"); -> HTMLButtonElement 
     */
    Selector<T extends keyof HTMLElementTagNameMap>(selector: T): HTMLElementTagNameMap[T] | null {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[1]), Target = "selector";
        if (!IsString(selector))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(selector), "String");

        if (IsEmptyStr(selector))
            $MissingParameterError(Emitter, Target, selector);

        /* -- Retrieval Process -- */
        const result = DOM.querySelector(selector);

        if (IsNullUndefined(result))
            WARN(`Element>Selector(): There's no associated element found with a selector of '${selector}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of **DOM** elements that matches the specified **selector**.
     * 
     * @param selector - The specified selector of elements to retrieve from **DOM**.
     * 
     * @throws a warning when there's no any or at least 1 of **element** found with the specified **selector**. 
     * 
     * @example
     *  - GetElement.SelectorAll("div"); -> NodeListOf<HTMLDivElement>
     */
    SelectorAll<T extends keyof HTMLElementTagNameMap>(selector: T | string): T extends keyof HTMLElementTagNameMap ? NodeListOf<HTMLElementTagNameMap[T]> : NodeListOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[2]), Target = "selector";
        if (!IsString(selector))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(selector), "String");

        if (IsEmptyStr(selector))
            $MissingParameterError(Emitter, Target, selector);

        /* -- Retrieval Process -- */
        const result = DOM.querySelectorAll(selector) as T extends keyof HTMLElementTagNameMap ? NodeListOf<HTMLElementTagNameMap[T]> : NodeListOf<Element>;

        if (LengthOf(result) <= 0)
            WARN(`Element>SelectorAll(): There's no associated element found with a selector of '${selector}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of **DOM** elements that matches the specified **className**.
     * 
     * @param className - The given class name attribute of elements to retrieve from **DOM**.
     * 
     * @throws a warning when there's no any or at least 1 of **element** found with the specified **className**.
     * 
     * @example
     *  - GetElement.Class("cards"); -> HTMLCollectionOf<Element>
     */
    Class(className: string): HTMLCollectionOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[3]), Target = "className";

        if (!IsString(className))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(className), "String");

        if (IsEmptyStr(className))
            $MissingParameterError(Emitter, Target, className);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByClassName(className);

        if (LengthOf(result) <= 0)
            WARN(`Element>Class(): There's no elements found with a given class of '${className}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of **DOM** elements that matches the specified **tag**.
     * 
     * @param tag - The specified tag of elements to retrieve from **DOM**.
     * 
     * @throws a warning when there's no any or at least 1 of **elements** found with the specified **tag**.
     * 
     * @example
     *  - GetElement.Tag("div"); -> HTMLCollectionOf<HTMLDivElement>
     */
    Tag<T extends keyof HTMLElementTagNameMap>(tag: T): HTMLCollectionOf<HTMLElementTagNameMap[T]> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[4]), Target = "tag";

        if (!IsString(tag))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(tag), "String");

        if (IsEmptyStr(tag))
            $MissingParameterError(Emitter, Target, tag);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByTagName(tag);

        if (LengthOf(result) <= 0)
            WARN(`Element>Tag(): There's no elements found with specified tag of '${tag}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of **DOM** elements that matches the specified **name**.
     * 
     * @param name - The given name attribute of elements to retrieve from **DOM**.
     * 
     * @throws a warning when there's no any or at least 1 of **elements** found with the specified **name**.
     * 
     * @example
     *  - GetElement.Name("fields"); -> NodeListOf<HTMLElement>
     */
    Name(name: string): NodeListOf<HTMLElement> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[5]), Target = "name";

        if (!IsString(name))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(name), "String");

        if (IsEmptyStr(name))
            $MissingParameterError(Emitter, Target, name);

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByName(name);

        if (LengthOf(result) <= 0)
            WARN(`Element>Name(): There's no elements found with specified name of '${name}'!`);

        /* -- Result -- */
        return result;
    },

    /**
     * Returns a live collection of **DOM** elements that matches the specified **namespaceURI** and **localName**.
     * 
     * @param namespaceURI - The namespace URI of elements to retrieve from **DOM**.
     * @param localName - The local name of elements to retrieve from **DOM**.
     * 
     * @throws a warning when there's no any or at least 1 of **elements** found with the specified **namespaceURI** and **localName**.
     * 
     * @example
     *  - GetElement.TagNS("myCustomNameSpace", "myCustomLocalName" | "p"); -> HTMLCollectionOf<Element>
     */
    TagNS(namespaceURI: NameSpaceOptions, localName: string): HTMLCollectionOf<Element> {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[6]), P = [namespaceURI, localName], Targets = ["namespaceURI", "localName"];

        // Both parameter must be a string and not empty.
        EachOf(P, (t, i) => {
            if (!IsString(t))
                $UnexpectedTypeError(Emitter, Targets[i], GetConstructorOrTypeOf(t), "string");

            if (IsEmptyStr(t))
                $MissingParameterError(Emitter, Targets[i], t);
        });

        /* -- Retrieval Process -- */
        const result = DOM.getElementsByTagNameNS(P[0], P[1]);

        if (LengthOf(result) <= 0)
            WARN(`Element>TagNS(): There are no elements found with the specified @namespaceURI: '${P[0]}' and @localName: '${P[1]}'!`);

        /* -- Result -- */
        return result;
    }
}

/**
 * Contains CSS-Class manipulation methods.
 */
export const Class = {
    /**
     * The root variable namespace.
     */
    name: "Class",

    /**
     * Returns a live collection of class tokens of the specified **element**.
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
    GetTokensOf(target: Element): DOMTokenList {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[0]), Target = "target";

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(target), "Element");

            /* -- Result -- */
            return target.classList;
        } catch (err) {
            ERROR(`Class>GetTokensOf(): Failed to retrieve @DOMTokenList of target element! Error: ${err}`);
            return [] as any;
        }
    },

    /**
     * Checks the existence of the specified list of class tokens from the target **element** **DOMTokenList**.
     * 
     * @param target - The specified element to check the existence of class token to its **DOMTokenList**.
     * @param thisTokens - The specified list of class tokens to check.
     * 
     * @example
     *  - // [?]: Button element with a class of 'loginBtn'.
     *    const myBtn = GetElement.Id("loginBtn");
     *    Class.ExistsAt(myBtn, "loginBtn"); -> true
     */
    ExistsAt(target: Element, ...thisTokens: string[]): boolean {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[1]), Targets = ["target", "thisTokens"];

            // [!]: FALSE when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [#]: FALSE with warning when there are no class tokens provided.
            if (LengthOf(thisTokens) === 0) {
                WARN(`Class>ExistsAt(@${Targets[1]}: [empty]): Expects at least 1 class tokens to validate! (Exited)`);
                return false;
            }

            /* -- Process -- */
            return EveryOf(thisTokens, token => {
                // [!]: FALSE when there are non-string as class tokens specified to parameter @thisTokens.
                if (!IsString(token))
                    $UnexpectedTypeError(Emitter, `${Targets[1]}['${token}']`, GetConstructorOrTypeOf(token), "String");

                // [?]: Return @token validation result.
                return this.GetTokensOf(target).contains(token);
            });
        } catch (err) {
            LOG(Object.values(err as {}));
            ERROR(`Class>ExistsAt(): Failed to check existence of class token/s! Error: ${err}`);
            return false;
        }
    },

    /**
     * Adds new specified collection of class tokens for the specified **element**.
     * 
     * @param target - The specified element to add/set new collection of class tokens.
     * @param newTokens - The specified new collection of class tokens.
     * 
     * @throws
     *  - An error when parameter **target** is not provided, or, a warning when parameter **newTokens** are not provided.
     * 
     * @example
     *  - // Create a div element.
     *    const Card = Create("div"); -> DOMTokenList: []
     *    // Add class tokens "card" and "fetching".
     *    Class.AddFrom(Card, "card", "fetching"); -> DOMTokenList: ["card", "fetching"]
     */
    AddFrom(target: Element, ...newTokens: string[]): void {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[2]), Targets = ["target", "newTokens"];

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [#]: Exits and warn when there are no new class tokens provided.
            if (LengthOf(newTokens) === 0) {
                WARN(`Class>AddFrom(@${Targets[1]}: [Empty]): Expects at least 1 or more new class tokens to register! (Exited)`);
                return;
            }

            /* -- Process -- */
            EachOf(newTokens, token => {
                // [!]: Exits when there are non-string type value provided as new token item to parameter @newTokens.
                if (!IsString(token))
                    $UnexpectedTypeError(Emitter, `${Targets[1]}['${token}']`, GetConstructorOrTypeOf(token), "String");

                // [?]: Only register current token when its still not registered to @DOMTokenList.
                if (!this.ExistsAt(target, token))
                    this.GetTokensOf(target).add(token);
            });
        } catch (err) {
            ERROR(`Failed to register a new (list of) token(s) to a target element! Error: ${err}`);
            return;
        }
    },

    /**
     * Removes the specified list of class token from the specified target **element**.
     * 
     * @param target - The specified element to add/set new class token.
     * @param thisTokens - The specified collection of class tokens to remove.
     * 
     * @throws
     *  - An error when parameter **target** is not provided, or, a warning when parameter **thisTokens** are not provided.
     * 
     * @example
     *  - // Button with class of 'submitBtn', and 'login'.
     *    const myBtn = GetElement.Class('submitBtn')[0]; -> DOMTokenList: ["submitBtn", "login"]
     *    // Removing class 'login' to button element.
     *    Class.RemoveFrom(myBtn, "submitBtn", "login"); -> DOMTokenList: []
     */
    RemoveFrom(target: Element, ...thisTokens: string[]): void {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[3]), Targets = ["target", "thisTokens"];

        // [!]: Exits when parameter @target is invalid.
        if (!IsElement(target))
            $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

        // [#]: Exits and warn when there are no class tokens provided.
        if (LengthOf(thisTokens) === 0) {
            WARN(`Class>RemoveFrom(@${Targets[1]}: [empty]): Expects at least 1 or more class tokens to remove! (Exited)`);
            return;
        }

        /* -- Process -- */
        EachOf(thisTokens, token => {
            // [!]: Exits when there are non-string type value provided as class token to remove from @thisTokens.
            if (!IsString(token))
                $UnexpectedTypeError(Emitter, `${Targets[1]}['${token}']`, GetConstructorOrTypeOf(token), "String");

            // [?]: Only remove current token when its still existing @target element's to @DOMTokenList.
            if (this.ExistsAt(target, token))
                this.GetTokensOf(target).remove(token);
        });
    },

    /**
     * Toggle the specified class token from the target **element** with an option to force its toggle state
     * by provided a **boolean** status value ('true' or 'false') at parameter **force**.
     * 
     * ***States***:
     *  - **FALSE**: Removes the specified class token if exists at the specified target element, and return 'false'.
     *    **TRUE**: Adds the specified class token if not exists at the specified target element, and return 'true'.
     * 
     * @param target - The specified target element to toggle class with.
     * @param thisTokens - The specified class token to toggle state.
     * @param force - (Optional): A force status to apply as toggle state of the specified class token.
     * 
     * @throws
     *  - An error when parameter **target** or **thisTokens** are not provided or invalid.
     * 
     * @example
     *  - // [?]: A button with class names.
     *    const myBtn = Create("button", { ClassNames: ["submitBtn", "login", "disabled"] }); -> HTMLButtonElement: DOMTokenList -> ["submitBtn", "login", "disabled"]
     *    // [?]: Toggle the state of class token 'disabled' into false, and removed from the DOMTokenList of button element.
     *    Class.ToggleFrom(myBtn, "disabled"); -> DOMTokenList: ["submitBtn", "login"]
     *    // [?]: Always ensure class token 'disabled' exists at button element.
     *    Class.ToggleFrom(myBtn, "disabled", true); -> DOMTokenList: ["submitBtn", "login", "disabled"]
     */
    ToggleFrom(target: Element, thisTokens: string, force?: boolean): boolean {
        /* -- Validation -- */
        const Emitter = NameOf(Slice(Object.values(this), 1)[4]), Targets = ["target", "thisTokens", "force"];

        // [?]: Validating parameter @target and @thisTokens.
        EachOf([target, thisTokens], (val, pos) => {
            // [!]: Exits when parameter @target or @thisTokens is not provided.
            if (IsNullUndefined(val))
                $MissingParameterError(Emitter, Targets[pos], val);

            // [!]: Exits when parameter @target is invalid.
            if (pos === 0 && !IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [!]: Exits when parameter @thisTokens is invalid.
            if (pos > 0 && !IsString(thisTokens))
                $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(thisTokens), "String");
        });

        // [#]: Warns when @thisTokens is an empty-string.
        if (IsEmptyStr(thisTokens)) {
            WARN(`Class>ToggleFrom(@${Targets[1]}: ''): Expects a non-empty string. (Exited)`);
            return false;
        }

        /* -- Process & Result -- */
        const Tokens = this.GetTokensOf(target);

        // [#]: Warns when @force is not a valid boolean value. (@force will not be used.)
        if (force && !IsBool(force))
            return Tokens.toggle(thisTokens);

        return IsBool(force) ? Tokens.toggle(thisTokens, force) : Tokens.toggle(thisTokens);
    }
}

/**
 * Contains **Element** attribute manipulation methods.
 */
export const Attribute = {
    /**
     * The root variable namespace.
     */
    name: "Attribute",

    /**
     * Returns a **boolean** result whether if every of the specified collection of **elements** has any attributes.
     * 
     * @param elements - The specified collection of elements.
     * 
     * @throws
     *  - An error when some of parameter **elements** are invalid.
     * 
     * @example
     *  - const [a, b, c] = [Create("div"), Create("button", { Id: "myBtn" }), Create("span", { ClassNames: "spanE" })];
     *    Attribute.HasAny(a, b, c); -> false // 'const a' have no any attributes existing.
     */
    HasAny(...elements: Array<Element>): boolean {
        /* -- Validation -- */

        // [!]: Exits when there are no elements provided from parameter @element.
        if (LengthOf(elements) === 0) {
            ERROR(`Attribute>HasAny(): Expects an element! (Exited with false)`);
            return false;
        }

        // [!]: Exits when some of parameter @target item are invalid.
        SomeOf(elements, element => {
            if (!IsElement(element)) {
                ERROR(`Attribute>HasAny(@elements['${element}']: non-element): Expects a valid element! (Exited with false)`);
                return false;
            }
        });


        /* -- Process & Result -- */
        return EveryOf(elements, element => element.hasAttributes());
    },

    /**
     * Returns a collection of the specified **attribute key** value from the specified target **element**.
     * 
     * @param target - The specified target element.
     * @param attrKeys - The specified collection of attribute keys.
     * 
     * @throws
     *  - An error when parameter **target** or **attrKeys** are not provided or invalid, or,
     *    a warning when some of parameter **attrKeys** items are empty string or not existing.
     * 
     * @example
     *  - const Card = Create("div", { ClassName: "i-card", Id: "item-card" });
     *    Attribute.GetFrom(Card, "class", "id"); -> ["i-card", "item-card"]
     */
    GetFrom(target: Element, ...attrKeys: Array<string>): Array<(string | null)> {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[1]), Targets = ["target", "attrKeys"];

            // [!]: Exits when parameter @target or @attrKeys is not provided.
            EachOf([target, attrKeys], (val, pos) => {
                if (pos === 0 && IsNullUndefined(val) || pos === 1 && LengthOf(val) === 0)
                    $MissingParameterError(Emitter, Targets[pos], val);
            });

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [#]: Warn and exit when parameter @target has no attributes.
            if (!this.HasAny(target)) {
                WARN(`Attribute>GetFrom(@target: no-attributes-exists): The specified target element has currently no attributes exists! (Exited)`);
                return [];
            }

            /* -- Process -- */
            const Result: (string | null)[] = [];
            for (const key of attrKeys) {
                // [#]: Warn and skip current @key if its not a string.
                if (!IsString(key)) {
                    WARN(`Attribute>GetFrom(@attrKeys['${key}']: non-string): A non-string item key is found at @attrKeys. (Skipped)`);
                    continue;
                }

                // [*]: Store result from @Result array.
                Result.push(target.getAttribute(key));
            }

            /* -- Result -- */
            return Result;
        } catch (err) {
            ERROR(`Attribute>GetFrom(): Failed to retrieve attribute from the element! Error: ${err}`);
            return [];
        }
    },

    /**
     * Returns the collection of **attribute node** of the specified collection of **attribute keys** from 
     * the target **element**.
     * 
     * @param target - The specified target element.
     * @param attrKeys - The specified collection of attribute keys.
     * 
     * @throws
     *  - An error when parameter **target** or **attrKeys** are not provided or invalid, or,
     *    a warning when some of parameter **attrKeys** items are empty string or not existing.
     * 
     * @example
     *  - const Card = Create("div", { ClassNames: "i-card", Id: "item-card" });
     *    Attribute.GetNodeFrom(Card, "class", "id"); -> Attr[]
     */
    GetNodeFrom(target: Element, ...attrKeys: Array<string>): Array<(Attr | null)> {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[2]), Targets = ["target", "attrKeys"];

            // [!]: Exits when parameter @target or @attrKeys are not provided.
            EachOf([target, attrKeys], (val, pos) => {
                if (pos === 0 && IsNullUndefined(val) || pos > 1 && LengthOf(val) === 0)
                    $MissingParameterError(Emitter, Targets[pos], val);
            });

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [#]: Warn and exit when parameter @target has no attributes.
            if (!this.HasAny(target)) {
                WARN(`Attribute>GetNodeFrom(@target: no-attributes-exists): The specified target element has currently no attributes exists! (Exited)`);
                return [];
            }

            /* -- Process -- */
            const Result: Array<(Attr | null)> = [];
            for (const key in attrKeys) {
                // [#]: Warns and skip current @key if non-string.
                if (!IsString(key)) {
                    WARN(`Attribute>GetNodeFrom(@attrKeys['${key}']: non-string): A non-string item key is found at @attrKeys! (Skipped)`);
                    continue;
                }

                // [*]: Store result from @Result array.
                Result.push(target.getAttributeNode(key));
            }

            /* -- Result -- */
            return Result;
        } catch (err) {
            ERROR(`Attribute>GetNodeFrom(): Failed to retrieve the attribute node from target element! Error: ${err}`);
            return [];
        }
    },

    /**
     * Returns a **boolean** result whether if every of the specified **attribute keys** are existing from the
     * specified target **element**.
     * 
     * @param target - The specified target element.
     * @param attrKeys - The specified collection of attribute keys.
     * 
     * @throws
     *  - An error when parameter **target** or **attrKeys** are not provided or invalid, or,
     *    a warning when some of parameter **attrKeys** items are empty string.
     * 
     * @example
     *  - const Card = Create("div", { ClassNames: "i-card", Id: "item-card" });
     *    Attribute.ExistsFrom(Card, "class", "id"); -> true
     *    Attribute.ExistsFrom(Card, "class", "id", "role"); -> false
     */
    ExistsFrom(target: Element, ...attrKeys: Array<string>): boolean {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[3]), Targets = ["target", "attrKeys"];

            // [!]: Exits when parameter @target or @attrKeys are not provided.
            EachOf([target, attrKeys], (val, pos) => {
                if (pos === 0 && IsNullUndefined(val) || pos === 1 && LengthOf(val) === 0)
                    $MissingParameterError(Emitter, Targets[pos], val);
            });

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");

            // [!]: Exits when some of key(s) from parameter @attrKeys are non-string.
            EachOf(attrKeys, key => {
                if (!IsString(key))
                    $UnexpectedTypeError(Emitter, `${Targets[1]}['${key}']`, GetConstructorOrTypeOf(key), "String");
            });

            // [#]: Warn and exit when parameter @target has no attributes.
            if (!this.HasAny(target)) {
                WARN(`Attribute>ExistsFrom(@target: no-attributes-exists): The specified target element has currently no attributes exists! (Exited)`);
                return false;
            }

            /* -- Process & Result -- */
            return EveryOf(attrKeys, key => target.hasAttribute(key));
        } catch (err) {
            ERROR(`Attribute>ExistsFrom(): Failed to check existence of attribute key(s) from the target element! Error: ${err}`);
            return false;
        }
    },

    /**
     * Sets (or update when already existing) the specified list of **attribute keys** with their **attribute values** from
     * the specified target **element**
     * 
     * @param target - The specified target element.
     * @param attrKeys - The specified collection of attribute keys.
     * @param attrVals - The specified collection of attribute key values.
     * 
     * @throws
     *  - An error when parameter **target**, **attrKeys**, or **attrVals** are not provided or invalid, or,
     *    a warning when some of parameter **attrKeys** item are empty string.
     * 
     * @example
     *  - const Card = Create("div");
     *    Attribute.SetFrom(Card, ["class", "id"], "items i-card", "i-card");
     */
    SetFrom(target: Element, attrKeys: string | Array<string>, ...attrVals: Array<any>): void {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(Object.values(this), 1)[4]), P = [target, attrKeys, attrVals],
                Targets = ["target", "attrKeys", "attrVals"];

            // [!]: Exits when parameter @target, @attrKeys, or @attrVals are not provided.
            EachOf(P, (val, pos) => {
                if (pos < 2 && IsNullUndefined(val) || LengthOf(val) === 0)
                    $MissingParameterError(Emitter, Targets[pos], val);
            });

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(P[0]), "Element");

            // [!]: Exits when parameter @attrKeys is invalid.
            if (!IsString(attrKeys) && !IsArray(attrKeys))
                $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(P[1]), "String | Array<String>");

            // [!]: Exits when parameter @attrKeys and @attrVals are not same type array and length. (Only when there are multiple attribute values provided)
            if (LengthOf(attrVals) > 1) {
                if (!IsArray(attrKeys))
                    $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(P[1]), "Array");

                if (LengthOf(attrKeys) !== LengthOf(attrVals))
                    $MismatchArrayLengthError(Emitter, Targets[1], LengthOf(attrVals), LengthOf(attrVals));
            }

            /* -- Process & Result -- */
            if (IsString(attrKeys)) {
                target.setAttribute(attrKeys, attrVals[0]);
                return;
            }

            // [*]: Iterate through attribute keys.
            for (const [pos, key] of attrKeys.entries()) {
                // [#]: Warns and skip current @key if its non-string.
                if (!IsString(key)) {
                    WARN(`Attribute>SetFrom(@attrKeys['${key}']: non-string): An invalid item key is found! (Skipped)`);
                    continue;
                }

                // [?]: Only change the value of attribute key if its already existed.
                if (this.ExistsFrom(target, key)) {
                    // @ts-ignore
                    this.GetNodeFrom(target, key)[0].value = String(attrVals[pos]);
                    continue;
                }

                // [*]: Set new attribute from the target element.
                target.setAttribute(key, String(attrVals[pos]));
            }
        } catch (err) {
            ERROR(`Attribute>SetFrom(): Failed to set new attribute(s) from the target element! Error: ${err}`);
        }
    },

    /**
     * Removes the specified list of **attribute keys** from the specified target **element**.
     * 
     * @param target - The specified target element.
     * @param attrKeys - The specified collection of attribute keys.
     * 
     * @throws
     *  - An error when parameter **target** or **attrKeys** are not provided or invalid, or,
     *    a warning when some of parameter **attrKeys** items are empty string or not existing.
     * 
     * @example
     *  - const Card = Create("div", { ClassNames: ["i-cont", "card"], Id: "i-card", tooltip: "Item Card..." });
     *    Attribute.GetNamesFrom(Card); -> ["class", "id", "tooltip"]
     *    Attribute.RemoveFrom(Card, "class", "tooltip");
     *    Attribute.GetNamesFrom(Card); -> ["id"]
     */
    RemoveFrom(target: Element, ...attrKeys: Array<string>): void {
        try {
            /* -- Validation -- */
            const Emitter = NameOf(Slice(ValuesOf(this), 1)[5]), Targets = ["target", "attrKeys"];

            // [!]: Exits when parameter @target or @attrKeys are not provided.
            EachOf([target, attrKeys], (val, pos) => {
                if (pos === 0 && IsNullUndefined(val) || pos > 0 && LengthOf(val) === 0)
                    $MissingParameterError(Emitter, Targets[pos], val);
            });

            // [!]: Exits when parameter @target is invalid.
            if (!IsElement(target))
                $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(target), "Element");



            /* -- Process -- */
            for (const key in attrKeys) {
                // [#]: Warns and skip current @key if its non-string type.
                if (!IsString(key)) {
                    WARN(`Attribute>RemoveFrom(@attrKeys['${key}']: ${GetConstructorOrTypeOf(key)}): An invalid item key is found! (Skipped)`);
                    continue;
                }

                // [?]: Only remove when current @key is existing.
                if (this.ExistsFrom(target, key))
                    target.removeAttribute(key);
            }
        } catch (err) {
            ERROR(`Attribute>RemoveFrom(): Failed to remove the attribute from the target element! Error: ${err}`);
        }
    }
}

/**
 * Returns the id of the specified **element**.
 * 
 * @param element - The specified target element.
 * 
 * @throws
 *  - An error when parameter **@element** is not provided or invalid, or,
 *    a warning when specified target **element** does not have an id.
 * 
 * @example
 *  - const myBtn = Create("button");
 *    GetIdOf(myBtn); -> "Warning message..."
 *    SetIdOf(myBtn, "btn");
 *    GetIdOf(myBtn); -> "btn"
 */
export function GetIdOf(element: Element): string {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(GetIdOf), Target = "element";

        // [!]: Exits when parameter @element is invalid.
        if (!IsElement(element))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(element), "Element");

        // [#]: Warns and exit when "id" property is not supported.
        if (!In(element, "id")) {
            WARN(`GetIdOf(@element: id-not-supported): Does not have or support "id" property! (Exited with empty string)`);
            return "";
        }

        /* -- Result -- */
        return element.id;
    } catch (err) {
        ERROR(`GetIdOf(): Failed to retrieve the id of element! Error: ${err}`);
        return "";
    }
}

/**
 * Sets (or update the existing) unique **id** of the specified **element**.
 * 
 * @param target - The specified target element.
 * @param Id - The specified unique id.
 * 
 * @throws
 *  - An error when parameter **@target** or **@Id** are not provided or invalid, or,
 *    a warning when parameter **@Id** is an empty string.
 * 
 * @example
 *  - const myBtn = Create("button");
 *    SetIdOf(myBtn, "btn");
 *    GetIdOf(myBtn); -> "btn"
 */
export function SetIdOf(element: Element, Id: string): string {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(SetIdOf), Targets = ["element", "Id"];

        // [!]: Exits when parameter @element or @Id are not provided or invalid.
        EachOf([element, Id], (val, pos) => {
            if (IsNullUndefined(val))
                $MissingParameterError(Emitter, Targets[pos], val);

            if (pos === 0 && !IsElement(val))
                $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Element");

            if (pos > 0 && !IsString(val))
                $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "String");
        });

        // [#]: Warn and exits when parameter @id is an empty string.
        if (IsEmptyStr(Id)) {
            WARN(`SetIdOf(@Id: ""): Receives an empty string as unique id of element! (Exited with empty string)`);
            return "";
        }

        /* -- Process & Result -- */
        return element.id = Id;
    } catch (err) {
        ERROR(`SetIdOf()`);
        return "";
    }
}

/**
 * Returns the **content** of the specified **element**.
 * 
 * @param element - The specified element.
 * 
 * @throws
 *  - An error when parameter **@element** is not provided or invalid.
 * 
 * @example
 *  - const span = Create("span");
 *    SetContentOf(span, "Hello!");
 *    GetContentOf(span); -> "Hello!"
 */
export function GetContentOf(element: Element): string {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(GetContentOf), Target = "element";

        // [!]: Exits when parameter @element is not provided.
        if (IsNullUndefined(element))
            $MissingParameterError(Emitter, Target, element);

        // [!]: Exits when parameter @element is invalid.
        if (!IsElement(element))
            $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(element), "Element");

        /* -- Result -- */
        return element.textContent;
    } catch (err) {
        ERROR(`GetContentOf(): Failed to retrieve contents of element! Error: ${err}`);
        return "";
    }
}

/**
 * Sets (or update the) specified **data** as content of the specified **element**.
 * 
 * @param element - The specified element.
 * @param data - The specified text content. 
 * 
 * @throws
 *  - An error when parameter **@element** or **@data** are not provided or invalid.
 * 
 * @example
 *  - const span = Create("span");
 *    SetContentOf(span, "Hello!"); -> "Hello!"
 *    GetContentOf(span); -> "Hello!"
 */
export function SetContentOf(element: Element, data: any): string {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(SetContentOf), Targets = ["element", "data"];

        // [!]: Exits when parameter @element or @data are not provided or invalid.
        EachOf([element, data], (val, pos) => {
            if (IsNullUndefined(val))
                $MissingParameterError(Emitter, Targets[pos], val);

            if (pos === 0 && !IsElement(val))
                $UnexpectedTypeError(Emitter, Targets[pos], GetConstructorOrTypeOf(val), "Element");
        });

        // [?]: Converted @data into a valid string type.
        const dataStr = String(data);
        if (IsEmptyStr(dataStr)) {
            WARN(`SetContentOf(@data: ""): Data should not be an empty! (Exited)`);
            return "";
        }

        /* -- Process & Result -- */
        return element.textContent = dataStr;
    } catch (err) {
        ERROR(`SetTextOf(): Failed to set content of element! Error: ${err}`);
        return "";
    }
}

/**
 * Mounts the specified collection of **child nodes** from the specified **parent node**.
 * 
 * @param parentNode - The specified parent node.
 * @param childNodes - The specified collection of child nodes.
 * 
 * @throws
 *  - An error when parameter **parentNode** or **childNodes** are not provided or invalid, or, a warning when
 *    some of **childNodes** items are invalid.
 * 
 * @example
 *  - const myButton = Create("button", { ClassName: "a-block-btn", Id: "action-btn" });
 *    const myButtonIcon = Create("i", { ... });
 *    const myButtonText = Create("i", { ... });
 *    Mount(myButton, myButtonIcon, myButtonText);
 */
export function Mount(parentNode: ParentNode, ...childNodes: Array<ChildNode>): void {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(Mount), Targets = ["parentNode", "childNodes"];

        // [!]: Exits when parent node or child nodes are not provided.
        EachOf([parentNode, childNodes], (val, pos) => {
            if (pos === 0 && IsNullUndefined(val) || pos > 0 && LengthOf(val) === 0)
                $MissingParameterError(Emitter, Targets[pos], val);
        });

        // [!]: Exits when parent node is invalid.
        if (!IsParentNode(parentNode))
            $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(parentNode), "ParentNode");

        // [#]: Warns and exit when parent node does not support "@appendChild" property method.
        if (!In(parentNode, "appendChild")) {
            WARN(`Mount(@parentNode: not-supported-child-mounting): Expects a parent node that supports child mounting! (Exited)`);
            return;
        }
        
        /* -- Process -- */
        for (const childNode of childNodes) {
            // [#]: Warns and skip when current @childNode is invalid.
            if (!IsChildNode(childNode)) {
                WARN(`Mount(@childNodes['${childNode}']: Not-A-ChildNode): Expects all items to be a child node! (Skipped)`);
                continue;
            }

            // [*]: Mount current @childNode to @parentNode.
            parentNode.appendChild(childNode);
        }
    } catch (err) {
        ERROR(`Mount(): Failed to mount the child node(s) of parent node! Error: ${err}`);
    }
}

/**
 * Unmounts the specified collection of **child nodes** from their respective **parent node**.
 * 
 * @param childNodes - The specified collection of child nodes.
 * 
 * @throws
 *  - An error when there are no provided or invalid child nodes from parameter **childNodes**.
 * 
 * @example
 *  - const Btns = [Create("button", { ... }), Create("button", { ... })];
 *    Unmount(...Btns); -> "Removed collection of child node from child nodes tree of parent."
 */
export function Unmount(...childNodes: Array<ChildNode>): void {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(Unmount), Target = "childNodes";

        // [!]: Exits when there are no child nodes provided.
        if (LengthOf(childNodes) === 0)
            $MissingParameterError(Emitter, Target, childNodes);

        /* -- Process -- */
        for (const childNode of childNodes) {
            // [#]: Warns and skip when current @childNode is invalid.
            if (!IsChildNode(childNode)) {
                WARN(`Unmount(@childNodes['${childNode}']: Not-A-ChildNode): Expects all of items to be a child node! (Skipped)`);
                continue;
            }

            // [?]: Only unmount current @childNode if it supports "@remove" property method.
            if (In(childNode, "remove"))
                childNode.remove();
        }
    } catch (err) {
        ERROR(`Unmount(): Failed to unmount node(s)! Error: ${err}`);
        return;
    }
}
