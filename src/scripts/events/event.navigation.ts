/**
 * Holds the current active navigation element.
 */
const ActiveNavigationPage: { Id?: string, Element?: Element } = {
    Id: undefined,
    Element: undefined
}
export default ActiveNavigationPage;

/**
 * Initialize the navigation items events.
 */
export async function InitNavigationEvent() {
    const Items = Slice(ValuesOf((Components["Nav"] as { [ComponentKey: string]: Element })), 2);
    for (const item of Items) {
        item.addEventListener("click", function (this: Element) {
            const Id = GetIdOf(this).replace("nav-", "");

            if (ActiveNavigationPage.Id || ActiveNavigationPage.Element) {
                if (!IsString(ActiveNavigationPage.Id))
                    throw new TypeError(`Anonymous.click(): 'ActiveNavigationPage>Id' was found invalid!`);

                if (!IsElement(ActiveNavigationPage.Element))
                    throw new TypeError(`Anonymous.click(): 'ActiveNavigationPage>Element' was found invalid!`);

                if (ActiveNavigationPage.Id === String.prototype.concat(Id.charAt(0).toUpperCase(), Id.slice(1)))
                    return;

                Class.RemoveFrom(ActiveNavigationPage.Element, "active");
                ActiveNavigationPage.Element = undefined;
                ActiveNavigationPage.Id = undefined;
            }

            ActiveNavigationPage.Element = this;
            ActiveNavigationPage.Id = Id.charAt(0).toUpperCase() + Id.slice(1);
            Class.AddFrom(this, "active");
        });
    }
}
