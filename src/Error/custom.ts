/**
 * |----------------------------------------------------|
 * |                                                    |
 * |           Customized Application Errors            |
 * |                                                    |
 * |----------------------------------------------------|
 */

/**
 * Custom error for missing parameters.
 */
export class MissingParameterError extends WorldClockError {
    constructor(Meta: MissingParameterErrorMeta) {
        super(Meta);
        this.Name = this.name;
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
    }
}

/**
 * Enhanced version of `@TypeError`.
 */
export class UnexpectedTypeError extends WorldClockError {
    constructor(Meta: UnexpectedTypeErrorMeta) {
        super(Meta);
        this.Name = this.name;
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
    }
}

/**
 * Custom error for `@MismatchArrayLengthError`.
 */
export class MismatchArrayLengthError extends WorldClockError {
    constructor(Meta: MismatchArrayLengthErrorMeta) {
        super(Meta);
        this.Name = this.name;
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
    }
}

/**
 * Enhanced version of `@RangeError`.
 */
export class IndexOutOfBoundsError extends WorldClockError {
    constructor(Meta: IndexOutOfBoundsErrorMeta) {
        super(Meta);
        this.Name = this.name;
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
    }
}

/**
 * Custom error for `@UnknownHTMLTagError`.
 */
export class UnknownHTMLTagError extends WorldClockError {
    constructor(Meta: UnknownHTMLTagErrorMeta) {
        super(Meta);
        this.Name = this.name;
        this.Message = Meta.Message;
        this.Context = Meta.Context;
        this.Data = Meta.Data;
        this.Guide = Meta.Guide;
        this.TimeStamp = LocaleDateTime();
    }
}