import GetLoader from '../ui/loader.js';
import Runtime from '../variables/global.js';

/**
 * Contains the **start** and **end** method for **loader**.
 */
const Loader: {
    IsLoading: boolean,
    Component: {
        Container?: Element,
        Context?: Element,
    };
    Start(Context?: string): Promise<void>;
    End(): Promise<void>;
} = {
    IsLoading: false,
    Component: {},
    async Start(Context?: string) {
        // [WARNING]: Exits and warn when there's already loader running.
        if (this.IsLoading) {
            console.warn(`Loader>Start(): There's already loader running in the background! (Exited)`);
            return;
        }

        // [CONTEXT]: Validate @View (root) element.
        if (!(View instanceof HTMLElement))
            throw new TypeError(`Loader>Start(): Cannot load loader components to an invalid root element! (Exited)`);

        // [CONTEXT]: Check if @Loader component is loaded, if not, load loader's components.
        if (!this.Component.Container || !(this.Component.Container instanceof Element)) {
            if (document.getElementById("loader") || document.getElementsByClassName("loader")[0]) {
                // [CONTEXT]: Retrieve existing loader.
                const C_Loader = document.getElementById("loader") || document.getElementsByClassName("loader")[0];

                // [CONTEXT]: Validate generated loader component if success.
                if (!(C_Loader instanceof Element))
                    throw new TypeError(`Loader>Start()>GetLoader(): Failed to load loader component! (Exited)`);

                // [CONTEXT]: Store retrieved loader component.
                this.Component.Container = C_Loader;
                this.Component.Context = C_Loader.children[1];

                this.Component.Context.textContent = Context || "(No-Process-Context-Provided)";
            } else {
                // [CONTEXT]: Generate loader component.
                const C_Loader = await GetLoader(Context);

                // [CONTEXT]: Validate generated loader component if success.
                if (!(C_Loader instanceof Element))
                    throw new TypeError(`Loader>Start()>GetLoader(): Failed to load loader component! (Exited)`);

                // [CONTEXT]: Store loader component.
                this.Component.Container = C_Loader;
                this.Component.Context = C_Loader.children[1];
            }
        }

        // [CONTEXT]: Mount loader component to root.
        View.appendChild(this.Component.Container);

        // [CONTEXT]: Start animation of @Loader.
        this.Component.Container.classList.add("in");

        // [CONTEXT]: Update loader state.
        this.IsLoading = true;
    },
    async End() {
        // [WARNING]: Exits and warn when there's no loader running.
        if (!this.IsLoading) {
            console.warn(`Loader>End(): There's no loader running in the background! (Exited)`);
            return;
        }

        // [ERROR]: Exits when loader component is not found.
        if (!this.Component.Container || !(this.Component.Container instanceof Element))
            throw new Error(`Loader>End(): There's no existing loader at the moment! Please ensure to start a loader first.`);

        // [CONTEXT]: Start out animation of @Loader.
        await Delay(2000);
        this.Component.Container.classList.add("out");

        // [CONTEXT]: Remove @Loader.
        await Delay(500);
        this.Component.Container.remove();

        // [CONTEXT]: Update loader state.
        this.IsLoading = false;
    }
};

/* -- @ApplicationLoader -- */
Runtime["Loader"] = Loader;
