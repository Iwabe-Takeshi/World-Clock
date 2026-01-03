/**
 * Generates the footer container of navigation.
 */
export default function Footer() {
    let foo = Create("footer", { ClassName: "foo-cont" });

    if (!IsElement(foo) || IsUnknownElement(foo)) {
        ERROR(`Foo(): Failed to generate navigation footer container!`);
        foo = Create("span", { ClassNames: ["-warn -notif"], Id: "warning-notif-panel", Text: "FOOTER ERROR" });
    }

    let state: boolean = true;
    if (foo instanceof HTMLSpanElement && Class.ExistsAt(foo, "-warn", "-notif"))
        state = false;

    // [CONTEXT]: Store component and state of footer component
    BuildPropertiesRule(ValidateObjectKey(ComponentStates.NAV, "Main", {}), ["Block", "Status"], [foo, state], false);
    StoreComponent("Nav", "Main", foo);

    return foo;
}
