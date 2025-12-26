// [TASK]: Generate a centralized generator for navigation interface.

import Footer from './container.js';
import Icon from './icon.js';

/**
 * Generates the application's navigation interfaces.
 */
export default async function NAV(View: Element) {
    const Emitter = NameOf(NAV), Target = "View";
    const Loader = GetElement.Id("loader");

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
    ComponentStates.NAV["Block"] = {
        Block: C_Nav,
        Status: true
    }

    // [TASK]: Load Navigation Icons.
    const IDs = [
        ["settings", "Settings", "Settings"], ["dashboard", "Clock", "Date & Time"],
        ["home", "Home", "Home"], ["guide", "Book", "Guide"], ["tools", "Apps", "Tools"]
    ] as const;
    for (const [Id, iconKey, title] of IDs) {
        let state = true, iconState = false, eventState = false;
        const block = Create("i", { ClassName: "foo-nav-i", Id: `nav-${Id}` });
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

        ComponentStates.NAV[Id] = {
            Block: block,
            IsIconLoaded: iconState,
            IsEventAttached: eventState,
            Status: state
        }
    }

    // [INFO]: Checking component states at @ComponentStates.
    for (const group of Object.keys(ComponentStates)) {
        for (const item of Object.values(ComponentStates[group as keyof typeof ComponentStates])) {
            if (!item.Status)
                throw new Error(`NAV(): Failed to load component '${item.Block}'! (Exited)`);
        }
    }

    // [ERROR]: Exits when element loader is not found or invalid.
    if (!IsElement(Loader))
        $UnexpectedTypeError(Emitter, "[VAR]: Loader", GetConstructorOrTypeOf(Loader), "Element");

    // [CONTEXT]: Loader OUT animation and removal.
    setTimeout(() => Class.AddFrom(Loader, "out"), 2000);
    setTimeout(() => Unmount(Loader), 2500);
}
