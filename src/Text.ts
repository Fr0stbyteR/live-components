import { LiveComponent } from "./Base";
import { fillRoundedRect } from "./utils";

interface LiveTextParams extends LiveParams {
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
    text: string;
    texton: string;
    mode: "button" | "toggle";
}

export default class LiveText extends LiveComponent<LiveTextParams> {
    static get params(): LiveTextParams {
        return {
            ...super.params,
            shortname: "live.text",
            width: 90,
            height: 45,
            fontname: "Arial",
            fontsize: 12,
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
            text: "A",
            texton: "B",
            mode: "toggle"
        };
    }
    _inTouch: boolean = false;

    paint() {
        const {
            active,
            fontname,
            fontsize,
            fontface,
            text,
            texton,
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
            mode,
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
        if (mode === "button") {
            fillRoundedRect(ctx, 0.5, 0.5, width - 1, height - 1, height / 2 - 1);
        } else {
            ctx.beginPath();
            ctx.rect(0.5, 0.5, width - 1, height - 1);
            ctx.fill();
        }
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = buttonBorderColor;
        ctx.stroke();

        ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = active ? (value ? activetextoncolor : activetextcolor) : (value ? textoncolor : textcolor);
        ctx.fillText(value && mode === "toggle" ? texton : text, width * 0.5, (height + fontsize) * 0.5);
    }
    handlePointerDown = () => {
        const { value, mode } = this.params;
        this._inTouch = true;
        this.setParamValue("value", mode === "button" ? 1 : 1 - value);
    }
    handlePointerUp = () => {
        this._inTouch = false;
        if (this.params.mode === "button") this.setParamValue("value", 0);
    }
    resetPointers() {
        this._inTouch = false;
    }
}
