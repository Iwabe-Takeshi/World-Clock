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

/* -- Icon Meta -- */
interface IconMeta {
    Height?: number,
    Width?: number,
    ViewBox?: string | "0 -960 960 960",
    Fill?: string | "#000",
    Path: string,
}
