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

    // @ts-ignore
    ComponentStates.NAV["Main"] = BuildPropertiesRule(["Block", "Status"], [foo, state], false);

    return foo;
}
