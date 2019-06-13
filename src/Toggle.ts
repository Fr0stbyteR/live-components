import { LiveComponent } from "./Base";

interface LiveToggleParams extends LiveParams {
    activebgcolor: string;
    activebgoncolor: string;
    bgcolor: string;
    bgoncolor: string;
    bordercolor: string;
    focusbordercolor: string;
}

export default class LiveToggle extends LiveComponent<LiveToggleParams> {
    static get params(): LiveToggleParams {
        return {
            ...super.params,
            shortname: "live.toggle",
            width: 15,
            height: 15,
            activebgcolor: "rgba(165, 165, 165, 1)",
            activebgoncolor: "rgba(255, 181, 50, 1)",
            bgcolor: "rgba(165, 165, 165, 1)",
            bgoncolor: "rgba(195, 195, 195, 1)",
            bordercolor: "rgba(80, 80, 80, 1)",
            focusbordercolor: "rgba(80, 80, 80, 1)"
        };
    }

    paint() {
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
        } = this.params;
        const ctx = this.ctx;

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
        ctx.rect(borderWidth, borderWidth, width - 2 * borderWidth, height - 2 * borderWidth);
        ctx.fill();
        ctx.strokeStyle = buttonBorderColor;
        ctx.stroke();
    }
    handlePointerDown = () => {
        const { value } = this.params;
        this.setParamValue("value", 1 - value);
    }
}
