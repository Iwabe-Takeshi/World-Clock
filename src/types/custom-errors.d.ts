/* |--------------------------------------------------|
 * |                                                  |
 * |      Custom Application Errors Intellisense      |
 * |                 (Access: Global)                 |
 * |                                                  |
 * |--------------------------------------------------|
 */
declare global {
    /**
     * Custom application error base properties that extends with ErrorConstructor.
     * This will be used as base properties 
     */
    class WorldClockError<OtherProperties extends {} = {}> extends Error {
        /* -- Error Name / Type -- */
        Name: string;

        /* -- Error Message -- */
        Message: string;

        /* -- Error Context for Message & Emitter -- */
        Context?: {
            Message: string;
            EmittedBy: string;
        };

        /* -- Error Cause Data -- */
        Data?: {
            Target: string;
        } & OtherProperties;

        /* -- Error Guide -- */
        Guide?: string;

        /* -- Error Time Stamp -- */
        TimeStamp: string;

        /* -- Error Constructor -- */
        constructor(Meta: ErrorBaseContent<OtherProperties>);
    }

    /**
     * Custom error for missing parameters.
     */
    type MissingParameterErrorProps = { Value: any }
    type MissingParameterErrorMeta = ErrorBaseContent<MissingParameterErrorProps>;
    class MissingParameterError extends WorldClockError<MissingParameterErrorProps> {}

    /**
     * Enhanced custom `TypeError` for invalid types.
     */
    type UnexpectedTypeErrorProps = { UnexpectedType: string; ExpectedType: string }
    type UnexpectedTypeErrorMeta = ErrorBaseContent<UnexpectedTypeErrorProps>;
    class UnexpectedTypeError extends WorldClockError<UnexpectedTypeErrorProps> {}

    /**
     * Custom error for not matched or equal length of 2 target arrays.
     */
    type MismatchArrayLengthErrorProps = { TargetLength: number; ExpectedTargetLength: number }
    type MismatchArrayLengthErrorMeta = ErrorBaseContent<MismatchArrayLengthErrorProps>;
    class MismatchArrayLengthError extends WorldClockError<MismatchArrayLengthErrorProps> {}

    /**
     * Custom error for out-of-range array indexes.
     */
    type IndexOutOfBoundsErrorProps = { ReceivedIndex: number; MinMaxIndex: number[] }
    type IndexOutOfBoundsErrorMeta = ErrorBaseContent<IndexOutOfBoundsErrorProps>;
    class IndexOutOfBoundsError extends WorldClockError<IndexOutOfBoundsErrorProps> {}

    /**
     * Custom error for unknown or invalid tags of HTML.
     */
    type UnknownHTMLTagErrorProps = { UnknownTag: string };
    type UnknownHTMLTagErrorMeta = ErrorBaseContent<UnknownHTMLTagErrorProps>;
    class UnknownHTMLTagError extends WorldClockError<UnknownHTMLTagErrorProps> {}
}

export { };