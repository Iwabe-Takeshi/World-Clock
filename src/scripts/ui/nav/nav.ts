// [TASK]: Generate a centralized generator for navigation interface.

import Footer from './container.js';

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

    // [TASK]: Load Navigation Icons
}
