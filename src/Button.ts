import { LiveComponent } from "./Base";

interface LiveButtonParams extends LiveParams {
    activebgcolor: string;
    activebgoncolor: string;
    bgcolor: string;
    bgoncolor: string;
    bordercolor: string;
    focusbordercolor: string;
}

export default class LiveButton extends LiveComponent<LiveButtonParams> {
    static get params(): LiveButtonParams {
        return {
            ...super.params,
            shortname: "live.button",
            width: 15,
            height: 15,
            activebgcolor: "rgba(90, 90, 90, 1)",
            activebgoncolor: "rgba(109, 215, 255, 1)",
            bgcolor: "rgba(90, 90, 90, 1)",
            bgoncolor: "rgba(195, 195, 195, 1)",
            bordercolor: "rgba(80, 80, 80, 1)",
            focusbordercolor: "rgba(80, 80, 80, 1)"
        };
    }
    _inTouch: boolean = false;

    paint() {
        const {
            active,
            focus,
            activebgcolor,
            activebgoncolor,
            bgcolor,
            bgoncolor,
            bordercolor,
            focusbordercolor,
            value,
            width,
            height
        } = this.params;
        const ctx = this.ctx;

        const borderWidth = 0.5;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.lineWidth = borderWidth;

        const buttonBgColor = active ? (value ? activebgoncolor : activebgcolor) : (value ? bgoncolor : bgcolor);
        const buttonBorderColor = focus ? focusbordercolor : bordercolor;

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
