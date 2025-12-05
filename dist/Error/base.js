/**
 * |--------------------------------------------------|
 * |                                                  |
 * |          World Clock Error Constructor           |
 * |                                                  |
 * |--------------------------------------------------|
 */
/* -- @Custom: World Clock Error -- */
/**
 * Customized application `@ErrorConstructor`.
 */
class WorldClockError extends Error {
    /* -- Error Name -- */
    Name;
    /* -- Error Message -- */
    Message;
    /* -- Error Context -- */
    Context;
    /* -- Error Data -- */
    Data;
    /* -- Error Guide -- */
    Guide;
    /* -- Error Time Stamp -- */
    TimeStamp;
    /* -- Constructor -- */
    constructor(Meta) {
        super(Meta.Message);
        this.Name = "@WorldClockError";
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
        Object.setPrototypeOf(this, WorldClockError.prototype);
    }
}
export default WorldClockError;
