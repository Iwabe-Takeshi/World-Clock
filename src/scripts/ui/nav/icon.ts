interface IconMeta {
    Height?: number,
    Width?: number,
    ViewBox?: string | "0 -960 960 960",
    Fill?: string | "#000",
    Path: string,
}

export default class Icon {
    Height? = 30;
    Width? = 30;
    ViewBox? = "0 -960 960 960";
    Fill? = "#000";
    Path = "";

    constructor(Meta: IconMeta) {
        this.Height = Meta.Height || 30;
        this.Width = Meta.Width || 30;
        this.ViewBox = Meta.ViewBox || "0 -960 960 960";
        this.Fill = Meta.Fill || "#000";
        this.Path = Meta.Path || "";
    }

    Get() {
        const svg = DOM.createElementNS("http://www.w3.org/2000/svg", "svg");
        Attribute.SetFrom(svg, ["xmlns", "viewBox", "fill", "width", "height"],
            "http://www.w3.org/2000/svg", this.ViewBox, this.Fill, `${this.Width}px`, `${this.Height}px`
        );

        const path = DOM.createElementNS("http://www.w3.org/2000/svg", "path");
        Attribute.SetFrom(path, "d", this.Path);
        Mount(svg, path);

        return svg;
    }
}
