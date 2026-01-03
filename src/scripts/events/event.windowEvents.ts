import Runtime from '../variables/global.js';
import ActiveNavigationPage from './event.navigation.js';

export async function InitWindowEvent() {
    (Runtime as Window || globalThis).addEventListener("load", () => {
        if (!location.href.endsWith("#")) {
            location.replace("#");

            if ((!IsNullUndefined(ActiveNavigationPage.Id) && ActiveNavigationPage.Id !== "Home") && (!IsNullUndefined(ActiveNavigationPage.Element) && IsElement(ActiveNavigationPage.Element))){
                Class.RemoveFrom(ActiveNavigationPage.Element, "active");
                ActiveNavigationPage.Element = undefined;
                ActiveNavigationPage.Id = undefined;
            }
        }

        const This = (Components["Nav"] as { [ComponentKey: string]: Element })["home"], Id = GetIdOf(This).replace("nav-", "");
        ActiveNavigationPage.Element = This;
        ActiveNavigationPage.Id = Id.charAt(0).toUpperCase() + Id.slice(1);
        Class.AddFrom(ActiveNavigationPage.Element, "active");
    });
}
