/**
 * |--------------------------------------------------|
 * |                                                  |
 * |          World Clock Error Constructor           |
 * |                                                  |
 * |--------------------------------------------------|
 */

import Runtime from "../scripts/variables/global.js";

/* -- @Custom: World Clock Error -- */
/**
 * Customized application `@ErrorConstructor`.
 */
class WorldClockError<OtherProperties extends {} = {}> extends Error {
    /* -- Error Name -- */
    readonly Name: string;
    
    /* -- Error Message -- */
    readonly Message: string;

    /* -- Error Context -- */
    readonly Context?: {
        Message: string;
        EmittedBy: string;
    }

    /* -- Error Data -- */
    readonly Data?: {
        readonly Target: string;
    } & OtherProperties;

    /* -- Error Guide -- */
    readonly Guide?: string;

    /* -- Error Time Stamp -- */
    readonly TimeStamp: string;

    /* -- Constructor -- */
    constructor(Meta: {
        Message: string;
        Context?: { Message: string; EmittedBy: string; };
        Data?: { Target: string; } & OtherProperties;
        Guide?: string;
    }) {
        super(Meta.Message);
        this.Name = "@WorldClockError";
        this.Message = Meta.Message;
        this.Context = Meta.Context
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
        Object.setPrototypeOf(this, WorldClockError.prototype);
    }
}

/* -- @ApplicationCustomErrorConstructor -- */
Runtime.WorldClockError = WorldClockError;
