import { LiveComponent } from "./Base";

interface LiveTabParams extends LiveParams {
    fontname: string;
    fontsize: number;
    fontface: "regular" | "bold" | "italic" | "bold italic";
    activebgcolor: string;
    activebgoncolor: string;
    bgcolor: string;
    bgoncolor: string;
    bordercolor: string;
    focusbordercolor: string;
    textcolor: string;
    textoncolor: string;
    activetextcolor: string;
    activetextoncolor: string;
    mode: "equal" | "proportional";
    spacing_x: number;
    spacing_y: number;
    multiline: boolean;
}

export default class LiveTab extends LiveComponent<LiveTabParams> {
    static get params(): LiveTabParams {
        return {
            ...super.params,
            shortname: "live.tab",
            width: 90,
            height: 45,
            fontname: "Arial",
            fontsize: 10,
            fontface: "regular",
            activebgcolor: "rgba(165, 165, 165, 1)",
            activebgoncolor: "rgba(255, 181, 50, 1)",
            bgcolor: "rgba(165, 165, 165, 1)",
            bgoncolor: "rgba(195, 195, 195, 1)",
            bordercolor: "rgba(80, 80, 80, 1)",
            focusbordercolor: "rgba(80, 80, 80, 1)",
            textcolor: "rgba(90, 90, 90, 1)",
            textoncolor: "rgba(90, 90, 90, 1)",
            activetextcolor: "rgba(0, 0, 0, 1)",
            activetextoncolor: "rgba(0, 0, 0, 1)",
            mode: "equal",
            enum: ["one", "two", "three"],
            spacing_x: 6,
            spacing_y: 6,
            multiline: true
        };
    }
    _inTouch: boolean = false;
    tabRects: [number, number, number, number][] = [];

    getTabRects() {
        const {
            width,
            height,
            multiline,
            mode,
            spacing_x,
            spacing_y
        } = this.params;
        const enums = this.params.enum;
        const margin = 4;
        const minHeight = 10;
        const count = enums.length;
        let countPerLine = count;
        let lines = 1;
        let step = height / lines;
        let interval = 0;
        let rectWidth = 0;
        const spacingX = spacing_x / 2;
        const spacingY = spacing_y / 2;

        if (multiline && height >= 2 * minHeight) {
            lines = Math.max(1, Math.min(count, Math.floor(height / minHeight)));
            countPerLine = Math.ceil(count / lines);
            // if there's not enough height, increase the number of tabs per row
            while (lines * countPerLine < count) {
                countPerLine++;
                if (lines > 1) lines--;
            }
            // if there's extra height, reduce the number of rows
            while (lines * countPerLine > count && (lines - 1) * countPerLine >= count) {
                lines--;
            }
            step = height / lines;
        }
        if (mode === "equal") {
            interval = width / countPerLine;
            rectWidth = interval - spacingX;
            for (let i = 0; i < count; i++) {
                this.tabRects[i] = [
                    (i % countPerLine) * interval + spacingX / 2,
                    Math.floor(i / countPerLine) * step + spacingY / 2,
                    rectWidth,
                    (height / lines) - spacingY
                ];
            }
        } else {
            const textWidths = [];
            for (let i = 0; i < lines; i++) {
                let total = 0;
                let space = width;
                for (let j = i * countPerLine; j < Math.min((i + 1) * countPerLine, count); j++) {
                    const textDimensions = this.ctx.measureText(enums[j]);
                    textWidths[j] = textDimensions.width;
                    total += textWidths[j];
                    space -= 2 * margin + spacingX;
                }
                let used = 0;
                for (let j = i * countPerLine; j < Math.min((i + 1) * countPerLine, count); j++) {
                    const rectSpace = textWidths[j] / total;
                    this.tabRects[j] = [
                        used + spacingX / 2,
                        i * step + spacingY / 2,
                        space * rectSpace + 2 * margin,
                        height / lines - spacingY
                    ];
                    used += this.tabRects[j][2] + spacingX;
                }
            }
        }
        return this.tabRects;
    }
    paint() {
        const {
            active,
            focus,
            fontname,
            fontsize,
            fontface,
            activebgcolor,
            activebgoncolor,
            bgcolor,
            bgoncolor,
            bordercolor,
            focusbordercolor,
            textcolor,
            textoncolor,
            activetextcolor,
            activetextoncolor,
            value,
            width,
            height
        } = this.params;
        const enums = this.params.enum;
        const ctx = this.ctx;
        const tabRects = this.getTabRects();

        const borderWidth = 0.5;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.lineWidth = borderWidth;

        const buttonBorderColor = focus ? focusbordercolor : bordercolor;
        for (let i = 0; i < enums.length; i++) {
            const buttonBgColor = active ? (value === i ? activebgoncolor : activebgcolor) : (value === i ? bgoncolor : bgcolor);
            ctx.fillStyle = buttonBgColor;
            ctx.beginPath();
            ctx.rect(...tabRects[i]);
            ctx.fill();
            ctx.strokeStyle = buttonBorderColor;
            ctx.stroke();

            ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = active ? (value === i ? activetextoncolor : activetextcolor) : (value === i ? textoncolor : textcolor);
            ctx.fillText(enums[i], tabRects[i][0] + tabRects[i][2] / 2, tabRects[i][1] + tabRects[i][3] / 2);
        }
    }
    handlePointerDown = (e: PointerDownEvent) => {
        this._inTouch = true;
        for (let i = 0; i < this.tabRects.length; i++) {
            const rect = this.tabRects[i];
            if (e.x >= rect[0] && e.x <= rect[2] + rect[0] && e.y >= rect[1] && e.y <= rect[3] + rect[1]) {
                this.setParamValue("value", i);
                return;
            }
        }
    }
    handlePointerDrag = (e: PointerDragEvent) => {
        this.handlePointerDown(e);
    }
    handlePointerUp = () => {
        this._inTouch = false;
    }
    resetPointers() {
        this._inTouch = false;
    }
}
