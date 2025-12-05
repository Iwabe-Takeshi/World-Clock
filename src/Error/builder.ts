/**
 * |----------------------------------------------------|
 * |                Builder Methods For                 |
 * |                 Customized Errors                  |
 * |----------------------------------------------------|
 */

/**
 * Build and emits the contents of `@MissingParameterError`.
 */
export function $MissingParameterError(emitter: string, target: string, value: any) {
    throw new MissingParameterError({
        Message: `A missing parameter is found!`,
        Context: {
            Message: `A parameter is missing at ${emitter}(@${target}: missing)`,
            EmittedBy: emitter
        },
        Data: {
            Target: target,
            Value: value
        },
        Guide: `Ensure to provide the missing parameter @${target} for ${emitter}()`
    });
}

/**
 * Build and emits the contents of `@UnexpectedTypeError`.
 */
export function $UnexpectedTypeError(emitter: string, target: string, unexpected: string, expected: string) {
    throw new UnexpectedTypeError({
        Message: `An unexpected type is found!`,
        Context: {
            Message: `Unexpected type at ${emitter}(@${target}: ${unexpected}): Expected: ${expected}.`,
            EmittedBy: emitter
        },
        Data: {
            Target: target,
            UnexpectedType: unexpected,
            ExpectedType: expected
        },
        Guide: `Ensure to provide the expected type for parameter @${target} at ${emitter}()`
    });
}

/**
 * Build and emits the contents of `@MismatchArrayLengthError`.
 */
export function $MismatchArrayLengthError(emitter: string, target: string, targetLength: number, expectedTargetLength: number) {
    throw new MismatchArrayLengthError({
        Message: `A mismatch array length is found!`,
        Context: {
            Message: `Mismatch array length at ${emitter}(@${target}: @length: ${targetLength}): @expectedLength: ${expectedTargetLength}`,
            EmittedBy: emitter
        },
        Data: {
            Target: target,
            TargetLength: targetLength,
            ExpectedTargetLength: expectedTargetLength
        },
        Guide: `Ensure to provide the same item of length of parameter @${target} with expected length of ${expectedTargetLength}.`
    });
}

/**
 * Build and emits the contents of `@IndexOutOfBoundsError`.
 */
export function $IndexOutOfBoundsError(emitter: string, target: string, receivedIndex: number, minMaxIndex: number[]) {
    throw new IndexOutOfBoundsError({
        Message: `An out-of-bounds index is found!`,
        Context: {
            Message: `Ouf-Of-Bounds index at ${emitter}(@${target}: ${receivedIndex}): @OutOfBounds.`,
            EmittedBy: emitter
        },
        Data: {
            Target: target,
            ReceivedIndex: receivedIndex,
            MinMaxIndex: minMaxIndex
        },
        Guide:
            `Ensure to only provide a index within the @MINIMUM = ${minMaxIndex[0]} and @MAXIMUM = ${minMaxIndex[1]} index available from parameter @${target} at ${emitter}()`
    });
}

/**
 * Build and emits the contents of `@UnknownHTMLTagError`.
 */
export function $UnknownHTMLTagError(emitter: string, target: string, unknownTag: string) {
    throw new UnknownHTMLTagError({
        Message: `An unknown html tag is found!`,
        Context: {
            Message: `Unknown html tag at ${emitter}(@${target}: ${unknownTag}): @Unknown.`,
            EmittedBy: emitter
        },
        Data: {
            Target: target,
            UnknownTag: unknownTag
        },
        Guide: `Ensure to provide a valid html tag from parameter @${target} at ${emitter}()`
    });
}
