/* eslint-disable @typescript-eslint/camelcase */
import { LiveComponent, PointerMoveEvent } from "./Base";

type TLiveSliderParams = {
    displayvalue: string;
    fontname: string;
    fontsize: number;
    fontface: "regular" | "bold" | "italic" | "bold italic";
    orientation: "Vertical" | "Horizontal";
    showname: boolean;
    shownumber: boolean;
    slidercolor: string;
    textcolor: string;
    tribordercolor: string;
    trioncolor: string;
    tricolor: string;
    distance: number;
    relative: "Absolute" | "Relative";
    width: number;
    height: number;
    _parameter_shortname: string;
    _parameter_range: number[] | string[];
    _parameter_steps: number;
    _parameter_type: "Enum" | "Int (0-255)" | "Float";
}

export default class LiveSlider extends LiveComponent {
    params: TLiveSliderParams = {
        displayvalue: "0",
        fontname: "Arial",
        fontsize: 9.5,
        fontface: "regular",
        orientation: "Vertical",
        showname: true,
        shownumber: true,
        slidercolor: "rgba(40, 40, 40, 1)",
        textcolor: "rgba(0, 0, 0, 1)",
        tribordercolor: "rgba(80, 80, 80, 1)",
        trioncolor: "rgba(0, 0, 0, 1)",
        tricolor: "rgba(165, 165, 165, 1)",
        distance: 0,
        relative: "Absolute",
        width: 40,
        height: 90,
        _parameter_shortname: "live.slider",
        _parameter_range: [0, 127],
        _parameter_steps: 127,
        _parameter_type: "Int (0-255)"
    };
    _inTouch: boolean = false;
    interactionRect: number[] = [0, 0, 0, 0];

    constructor() {
        super();
    }
    connectedCallback() {
        this.fetchAttribute();
        this.paint(this.ctx, this.params);
    }
    paint(ctx: CanvasRenderingContext2D, paramsIn: TLiveSliderParams) {
        const {
            width,
            height,
            displayvalue,
            fontname,
            fontsize,
            fontface,
            orientation,
            showname,
            shownumber,
            slidercolor,
            textcolor,
            tribordercolor,
            trioncolor,
            tricolor,
            _parameter_shortname,
            distance
        } = { ...this.params, ...paramsIn };
        const lineWidth = 0.5;
        const padding = 8;
        const popoverType = "VALUE_LABEL";

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = slidercolor;

        if (orientation === "Vertical") {
            ctx.beginPath();
            ctx.moveTo(width * 0.5, fontsize + padding);
            ctx.lineTo(width * 0.5, height - (fontsize + padding));
            ctx.stroke();

            this.interactionRect = [
                width * 0.5 - lineWidth / 2,
                fontsize + padding,
                lineWidth,
                height - 2 * (fontsize + padding)
            ];

            ctx.lineWidth = 1;
            ctx.strokeStyle = tribordercolor;
            const triOrigin: [number, number] = [
                this.interactionRect[0] + lineWidth + 0.5,
                this.interactionRect[1] - 4 + this.interactionRect[3] * (1 - distance)
            ];
            ctx.beginPath();
            ctx.moveTo(triOrigin[0], triOrigin[1] + 4);
            ctx.lineTo(triOrigin[0] + 8, triOrigin[1]);
            ctx.lineTo(triOrigin[0] + 8, triOrigin[1] + 8);
            ctx.lineTo(triOrigin[0], triOrigin[1] + 4);
            ctx.stroke();

            ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
            ctx.fill();

            ctx.font = `${fontface} ${fontsize} ${fontname}, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillStyle = textcolor;
            if (showname) ctx.fillText(_parameter_shortname, width / 2, fontsize, width);
            if (shownumber) ctx.fillText(displayvalue, width / 2, height, width);
        } else {
            ctx.beginPath();
            ctx.moveTo(padding, height * 0.5);
            ctx.lineTo(width - padding, height * 0.5);
            ctx.stroke();

            this.interactionRect = [
                padding,
                height * 0.5 - lineWidth,
                width - 2 * padding,
                lineWidth
            ];

            ctx.lineWidth = 1;
            ctx.strokeStyle = tribordercolor;
            const triOrigin: [number, number] = [
                this.interactionRect[0] + this.interactionRect[2] * distance - 4,
                this.interactionRect[1] + this.interactionRect[3] + 2
            ];
            ctx.beginPath();
            ctx.moveTo(triOrigin[0], triOrigin[1] + 8);
            ctx.lineTo(triOrigin[0] + 4, triOrigin[1]);
            ctx.lineTo(triOrigin[0] + 8, triOrigin[1] + 8);
            ctx.lineTo(triOrigin[0], triOrigin[1] + 8);
            ctx.stroke();

            ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
            ctx.fill();

            ctx.font = `${fontface} ${fontsize} ${fontname}, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillStyle = textcolor;
            if (showname) ctx.fillText(_parameter_shortname, width / 2, fontsize, width);
            ctx.textAlign = "left";
            if (shownumber) ctx.fillText(displayvalue, 4, height, width);
        }
    }
    handlePointerDown = () => {
        const { orientation, relative } = this.params;
        this._inTouch = true;
    }
    handlePointerMove = (e: PointerMoveEvent) => {
        this._inTouch = true;
    }
    handlePointerUp = () => {
        this._inTouch = false;
    }
    resetPointers() {
        this._inTouch = false;
    }
}
