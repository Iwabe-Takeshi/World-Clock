// [TASK]: Create a centralized @DOM elements generator.

/**
 * Generates an **@HTMLElement** instance with the specified **tag**, and allows you to configure
 * the element's **attribute** properties, **text content**, and **child nodes**.
 * 
 * @param tag - The specified **HTML tag** to generate.
 * @param config - (Optional): The available configuration for generated element.
 * 
 * @example
 *  - Create("div", { ClassNames: "card", Id: "card-apple" Text: "Apple" }); -> HTMLDivElement
 *    Create("button", { ClassName: "login", Id: "loginBtn", Text: "Login", "aria-label": "Login Button" }); -> HTMLButtonElement
 */
function Create<T extends keyof HTMLElementTagNameMap>(tag: T, config?: CreateConfig) {
    try {
        /* -- Validation -- */
        const Emitter = NameOf(Create), Targets = ["tag", "config"];

        // [!]: Exits when parameter @tag is not provided.
        if (IsNullUndefined(tag))
            $MissingParameterError(Emitter, Targets[0], tag);

        // [!]: Exits when parameter @tag is invalid.
        if (!IsString(tag))
            $UnexpectedTypeError(Emitter, Targets[0], GetConstructorOrTypeOf(tag), "String");

        // [!]: Exits when parameter @config is provided and not a valid object.
        if (config && !IsObj(config))
            $UnexpectedTypeError(Emitter, Targets[1], GetConstructorOrTypeOf(config), "Object");

        /* -- Process -- */

        // [?]: Generate the HTMLElement with the specified @tag.
        const element = DOM.createElement(tag);

        // [!]: Exits when variable @element is unknown.
        if (IsUnknownElement(element))
            $UnknownHTMLTagError(Emitter, Targets[0], tag);

        // [?]: Only format and process @config when provided.
        if (config) {
            // [?]: Stores the specified @CustomConfigKeys.
            const CustomConfigKeys: Array<any> = [];
            const DefinedConfigKeys = ["classname", "children", "id", "text"];

            // [?]: Storing @CustomConfigKeys.
            EachOf(Object.values(config), ([key, data]) => {
                // [?]: Format @key into a valid string type.
                const strKey = String(key);

                // [?]: Check if @key is not existing to @DefinedConfigKeys.
                if (!DefinedConfigKeys.includes(strKey.toLowerCase())) {
                    CustomConfigKeys.push([strKey, data]);
                    return;
                }
            });

            // [*]: @ClassNames
            if (config.ClassNames)
                Class.AddFrom(element, ...config.ClassNames);

            // [*]: @Children
            if (config.Children)
                Mount(element, ...(IsArray(config.Children) ? config.Children : [config.Children]));

            // [*]: @Id
            if (config.Id)
                SetIdOf(element, config.Id);

            // [*]: @Text
            if (config.Text)
                SetContentOf(element, config.Text);
            

            // [*]: @Other/Custom attributes.
            if (LengthOf(CustomConfigKeys) > 0)
                EachOf(CustomConfigKeys, ([key, data]) => {
                    // [?]: Format key into a string type to avoid type error.
                    key = String(key);

                    // [*]: Set the @other or @custom attribute.
                    Attribute.SetFrom(element, key, data);
                });
        }

        /* -- Result -- */
        return element;
    } catch (err) {
        ERROR(`Create(): Failed to generate an HTMLElement instance! Error: ${err}`);
        return null;
    }
}

/* -- @ApplicationCentralizedElementsGenerator -- */
export default Create;
