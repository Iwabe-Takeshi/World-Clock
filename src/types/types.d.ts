/* -- Name Space Available Options -- */
type NameSpaceOptions = "http://www.w3.org/1998/Math/MathML" | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg";

/* -- Create Configuration -- */
type M_CreateConfig = {
    /**
     * Collection of multiple class name tokens to set/add at the generated element.
     */
    ClassNames?: Array<string>;
    /**
     * Collection of **child nodes** to mount from the generated element.
     */
    Children: Array<ChildNode>;
    /**
     * A unique **id** to set from the generated element.
     */
    Id?: string;
    /**
     * A **text content** to set as default text content of the generated element.
     */
    Text?: string;
    /**
     * Other of custom attribute property to set/add at the generated element.
     */
    [attrKey: string]: any;
}

type S_CreateConfig = {
    /**
     * A class name token to set/add at the generated element.
     */
    ClassName?: string,
    /**
     * A **child node** to mount from the generated element.
     */
    Child?: ChildNode,
    /**
     * A unique **id** to set from the generated element.
     */
    Id?: string;
    /**
     * A **text content** to set as default text content of the generated element.
     */
    Text?: string;
    /**
     * Other of custom attribute property to set/add at the generated element.
     */
    [attrKey: string]: any;
}

/* -- App COnfigurations -- */
type AppConfig = {
    ComponentsState?: boolean;
    EventsState?: boolean;
    RuntimeErrorListenerState?: boolean;
    RuntimeToolsState?: boolean;
    UpdateState(key: "ComponentsState" | "RuntimeErrorListenerState" | "RuntimeToolsState", state: boolean): void;
    IsReady(): boolean;
}
type AppStatesConfigKeys = "ComponentsState" | "EventsState" | "RuntimeErrorListenerState" | "RuntimeToolsState";
