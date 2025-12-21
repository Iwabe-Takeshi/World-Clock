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
