/**
 * Contains methods related for accessing DOM elements. (e.g. retrieval)
 */
export const ELEMENT = {
    /**
     * Retrieves the first DOM elements that matches the specified id.
     */
    ID: function ($id) {
        const Emitter = FuncName(ELEMENT.ID);
        /* -- Validation -- */
        if (!IsString($id))
            $UnexpectedTypeError(Emitter, "$id", GetConstructorOrTypeOf($id), "string");
        // Ensures that $id is not empty string.
        if (IsEmptyStr($id))
            $MissingParameterError(Emitter, "$id", $id);
        /* -- Retrieval Process -- */
        const e = DOM.getElementById($id);
        // Notify for not-found element.
        if (IsNullUndefined(e))
            WARN(`ELEMENT>ID(): There's no associated element found with an id of '${$id}'!`);
        return e;
    }
};
