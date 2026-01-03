/**
 * Generate the main panel of application, where contents of pages will be
 * displayed.
 */
export default function Panel() {
    // [CONTEXT]: Generate panel (main) component.
    let panel = Create("main", { ClassName: "contents", Id: "live-panel" });

    // [INFO]: Check if panel component is non-element or unknown element.
    if (!IsElement(panel) || IsUnknownElement(panel)) {
        ERROR(`Panel(): Failed to create panel element! (Possible Cause: Non-Element | UnknownElement)`);
        // [CONTEXT]: Generate a warning notification block for failed panel generation.
        (panel as unknown) = Create("span", { ClassNames: ["-warn -notif"], Id: "warning-notif-panel", Text: "PANEL ERROR" });
    }

    let state: boolean = true;
    if (panel instanceof HTMLSpanElement && Class.ExistsAt(panel, "-warn", "-notif"))
        state = false;

    // @ts-ignore
    BuildPropertyRule(ValidateObjectKey(ComponentStates.VIEW, "Panel", {}), "Block", panel, false);

    // @ts-ignore
    BuildPropertyRule(ComponentStates.VIEW["Panel"], "Status", state);

    // [CONTEXT]: Store panel to @Components.
    StoreComponent("Panel", panel);

    return panel;
}
