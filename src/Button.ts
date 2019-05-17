import { LiveComponent } from "./Base";

type TLiveButtonParams = {
    active: boolean;
    activebgcolor: string;
    activebgoncolor: string;
    bgcolor: string;
    bgoncolor: string;
    bordercolor: string;
    focusbordercolor: string;
    value: boolean;
    width: number;
    height: number;
}

export default class LiveButton extends LiveComponent {
    params: TLiveButtonParams = {
        active: true,
        activebgcolor: "rgba(102, 102, 102, 1)",
        activebgoncolor: "rgba(242, 98, 0, 1)",
        bgcolor: "rgba(102, 102, 102, 1)",
        bgoncolor: "rgba(125, 123, 122, 1)",
        bordercolor: "rgba(50, 50, 50, 1)",
        focusbordercolor: "rgba(0, 5, 20, 1)",
        value: false,
        width: 15,
        height: 15
    };
    _inTouch: boolean = false;

    constructor() {
        super();
        this.paint(this.ctx, this.params);
    }
    paint(ctx: CanvasRenderingContext2D, paramsIn: TLiveButtonParams) {
        const {
            active,
            activebgcolor,
            activebgoncolor,
            bgcolor,
            bgoncolor,
            bordercolor,
            focusbordercolor,
            value,
            width,
            height
        } = { ...this.params, ...paramsIn };
        const borderWidth = 0.5;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.lineWidth = borderWidth;

        const buttonBgColor = active ? (value ? activebgoncolor : activebgcolor) : (value ? bgoncolor : bgcolor);
        const buttonBorderColor = value ? focusbordercolor : bordercolor;

        ctx.fillStyle = buttonBgColor;
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.5, width * 0.5 - 2 * borderWidth, height * 0.5 - 2 * borderWidth, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = buttonBorderColor;
        ctx.stroke();

        if (value && !this._inTouch) {
            setTimeout(() => this.setParamValue("value", 0), 100);
        }
    }
    handlePointerDown = () => {
        this._inTouch = true;
        this.setParamValue("value", 1);
    }
    handlePointerUp = () => {
        this._inTouch = false;
        this.setParamValue("value", 0);
    }
    resetPointers() {
        this._inTouch = false;
    }
}
