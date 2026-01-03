import Icon from '../nav/icon.js';

/**
 * Display's the error code (404) or Page-Not-Found.
 */
export default async function PageNotFound(PageId: string) {
    /* -- Validation -- */
    const Emitter = NameOf(PageNotFound), Target = "PageId";

    if (IsNullUndefined(PageId) || LengthOf(PageId.trim()) === 0)
        $MissingParameterError(Emitter, Target, PageId);

    if (!IsString(PageId))
        $UnexpectedTypeError(Emitter, Target, GetConstructorOrTypeOf(PageId), "String");

    /* -- Process -- */

    // [CONTEXT]: Container
    const Container = Create("div", { ClassName: "page-not-found", Id: "page-not-found-block" });

    // [CONTEXT]: Contents Block
    const Block = Create("div", { ClassName: "page-not-found-contents" });
    Mount(Container, Block);

    // [CONTEXT]: Icon Block
    const IBlock = Create("span");
    Mount(Block, IBlock);

    // [CONTEXT]: Icon
    const ICON = new Icon({ Path: SVGPaths.UnknownDocument });
    Mount(IBlock, ICON.Get());

    // [CONTEXT]: Title
    const Title = Create("h2", { Text: "404 - Page Not Found!" });
    Mount(Block, Title);

    // [CONTEXT]: Message
    const Message = Create("p");
    Message.innerHTML = `Page '${PageId}' were not found or initialize at page sector! <br> Submit a report to fix this issue.`;
    Mount(Block, Message);

    // [CONTEXT]: Action Block
    const ActionBlock = Create("span");
    Mount(Block, ActionBlock)

    // [CONTEXT]: Action Link
    const ReportAction = Create("a", { ClassName: "page-not-found-action", Text: "Report this issue!", href: "https://github.com/Iwabe-Takeshi/World-Clock/issues" });
    Mount(ActionBlock, ReportAction);

    return Container;
}
