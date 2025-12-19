/* -- Error Base Content Constructor -- */
interface ErrorBaseContent<OtherPropertyData extends {} = {}> {
    Message: string;
    Context?: {
        Message: string;
        EmittedBy: string;
    },
    Data?: {
        Target: string
    } & OtherPropertyData;
    Guide: string;
}

/* -- Create Config -- */
interface CreateConfig {
    /**
     * Attribute-Id: **class**.
     */
    ClassNames: string | string[];

    /**
     * Custom-Content: **ChildNodes**
     */
    Children: Element | Element[];

    /**
     * Attribute-Id: **id**.
     */
    Id: string;

    /**
     * Custom-Content: **TextContent**
     */
    Text: string,

    /**
     * (Other/Custom)-Attributes: { **attr-id**: **attr-val** }
     */
    [otherAttr: string]: any,
}
