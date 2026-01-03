import Footer from './container.js';
import Icon from './icon.js';

/**
 * Generates the application's navigation interfaces.
 */
export default async function NAV(View: Element) {
    const Emitter = NameOf(NAV), Target = "View";

    // [ERROR]: Exits when root element (view) is not provided
    if (IsNullUndefined(View))
        $MissingParameterError(Emitter, Target, View);

    // [ERROR]: Exits when root element (view) is non-element.
    if (!IsElement(View))
        $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(View), "Element");

    /* -- Process -- */
    // [CONTEXT]: Generate footer navigation container component.
    const C_Foo = Footer();
    Mount(View, C_Foo);

    // [CONTEXT]: Generate navigation block component.
    const C_Nav = Create("nav", { ClassName: "foo-nav" });
    Mount(C_Foo, C_Nav);
    BuildPropertiesRule(ValidateObjectKey(ComponentStates.NAV, "Inner", {}), ["Block", "Status"], [C_Nav, C_Nav instanceof HTMLElement], false);
    StoreComponent("Nav", "Inner", C_Nav);

    // [TASK]: Load Navigation Icons.
    const IDs = [
        ["settings", "Settings", "Settings"], ["dashboard", "Clock", "Date & Time"],
        ["home", "Home", "Home"], ["guide", "Book", "Guide"], ["tools", "Apps", "Tools"]
    ] as const;

    for (const [Id, iconKey, title] of IDs) {
        let state = true, iconState = false, eventState = false;
        const block = Create("a", { ClassName: "foo-nav-i", Id: `nav-${Id}`, href: `#${Id}` });
        Mount(C_Nav, block);

        const span = Create("span", { ClassName: "nav-i-icon" });
        Mount(block, span);

        const icon = new Icon({ Path: SVGPaths[iconKey] });
        const iconElement = icon.Get();

        const Title = Create("strong", { Text: title });
        Mount(block, Title);

        if (iconElement instanceof SVGSVGElement)
            iconState = true;

        if (iconState)
            Mount(span, iconElement);

        BuildPropertyRule(ValidateObjectKey(ComponentStates.NAV, Id, {}), "Block", block, false);
        BuildPropertiesRule(ComponentStates.NAV[Id], ["IsIconLoaded", "IsEventAttached", "Status"], [iconState, eventState, state]);

        // [CONTEXT]: Store icon to @Components with group 'Nav'.
        StoreComponent("Nav", Id, block);
    }

    // [INFO]: Checking component states at @ComponentStates.
    for (const [group, data] of Object.entries(ComponentStates)) {
        for (const [prop, propVal] of Object.entries(data)) {
            if (!propVal.Status)
                throw new Error(`NAV(): Failed to load '${group}>${prop}'! (Status: ${propVal.Status})`);
        }
    }
}
