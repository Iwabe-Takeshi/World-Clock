/**
 * Generates the loader components with the specified context for its process.
 */
export default async function GetLoader(Context?: string) {
    /* -- Validation -- */

    // [CONTEXT]: Check if context is not provided or invalid. If it is, set to default.
    if (Context === null || Context === undefined || Context.constructor !== String)
        Context = "(No-Process-Context-Provided)";

    /* -- Helpers -- */
    const setClass = (target: Element, ...tokens: string[]) =>
        tokens.forEach(token => target.classList.add(token));
    const mount = (target: ParentNode, node: ChildNode) => target.appendChild(node);
    const create = <T extends keyof HTMLElementTagNameMap>(tag: T) => document.createElement(tag);

    /* -- Process -- */

    // [CONTEXT]: Generate loader container.
    const loader = create("div");
    loader.id = "loader";
    setClass(loader, "loader");

    // [CONTEXT]: Generate loader icons container.
    const IContainer = create("div");
    setClass(IContainer, "loader-icon")
    mount(loader, IContainer);

    // [CONTEXT]: Generate loader icons and then mount from @IContainer.
    for (let i = 0; i < 3; i++) {
        const icon = create("i");
        setClass(icon, "loader-icon-block");
        mount(IContainer, icon);
    }

    // [CONTEXT]: Generate loader context.
    const context = create("i");
    setClass(context, "loader-context");
    context.setAttribute("context", Context);
    mount(loader, context)

    // [CONTEXT]: Generate loader sub-context.
    const subContext = create("span");
    setClass(subContext, "loader-subContext");
    mount(loader, subContext);

    /* -- Result -- */
    return loader;
}
