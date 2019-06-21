import { LiveComponent } from "./Base";

interface LiveNumboxProps extends LiveProps {
    fontname: string;
    fontsize: number;
    fontface: "regular" | "bold" | "italic" | "bold italic";
    appearance: "slider" | "triangle" | "default";
    activebgcolor: string;
    bordercolor: string;
    focusbordercolor: string;
    textcolor: string;
    tricolor: string;
    activetricolor: string;
    tricolor2: string;
    activetricolor2: string;
    activeslidercolor: string;
}

export default class LiveNumbox extends LiveComponent<LiveNumboxProps> {
    static get props(): LiveNumboxProps {
        return {
            ...super.props,
            shortname: "live.numbox",
            width: 45,
            height: 15,
            fontname: "Arial",
            fontsize: 10,
            fontface: "regular",
            appearance: "default",
            activebgcolor: "rgba(195, 195, 195, 1)",
            bordercolor: "rgba(80, 80, 80, 1)",
            focusbordercolor: "rgba(80, 80, 80, 1)",
            textcolor: "rgba(0, 0, 0, 1)",
            tricolor: "rgba(195, 195, 195, 1)",
            activetricolor: "rgba(165, 165, 165, 1)",
            tricolor2: "rgba(165, 165, 165, 1)",
            activetricolor2: "rgba(109, 215, 255, 1)",
            activeslidercolor: "rgba(109, 215, 255, 1)",
            mmin: 0,
            mmax: 127,
            type: "int",
            unitstyle: "int"
        };
    }
    _inTouch: boolean = false;

    get trueSteps() {
        const { type, mmax, mmin, steps, step } = this.props;
        const full = 100;
        const maxSteps = type === "enum" ? this.props.enum.length : type === "int" ? mmax - mmin : full;
        if (step) {
            if (type === "enum") return this.props.enum.length;
            if (type === "int") return Math.min(Math.floor((mmax - mmin) / (Math.round(step) || 1)), maxSteps);
            return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
        }
        if (steps) return Math.min(steps, maxSteps);
        return maxSteps;
    }
    get distance() {
        const { type, mmax, mmin, value } = this.props;
        return type === "enum" ? value / this.props.enum.length : (value - mmin) / (mmax - mmin);
    }
    get stepRange() {
        const { type, mmax, mmin, step } = this.props;
        const full = 100;
        if (step) return type === "enum" ? full / this.props.enum.length : type === "int" ? (Math.round(step) || 1) / (mmax - mmin) * full : step / (mmax - mmin) * full;
        const trueSteps = this.trueSteps;
        return full / trueSteps;
    }
    paint() {
        const {
            width,
            height,
            active,
            focus,
            fontname,
            fontsize,
            fontface,
            appearance,
            activebgcolor,
            bordercolor,
            focusbordercolor,
            textcolor,
            tricolor,
            activetricolor,
            tricolor2,
            activetricolor2,
            activeslidercolor
        } = this.props;
        const ctx = this.ctx;
        const distance = this.distance;
        const displayValue = this.displayValue;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        // draw background
        ctx.fillStyle = activebgcolor;
        ctx.rect(0, 0, width, height);
        ctx.fill();

        // draw border (eventually we might need to redefine the shape)
        ctx.lineWidth = 1;
        ctx.strokeStyle = focus ? focusbordercolor : bordercolor;
        ctx.stroke();

        if (appearance === "slider" && active && distance) {
            ctx.fillStyle = activeslidercolor;
            ctx.fillRect(0.5, 0.5, distance * width - 1, height - 1);
        }
        if (appearance === "triangle") {
            const triangleHeight = 8;
            ctx.fillStyle = active ? (distance ? activetricolor2 : activetricolor) : (distance ? tricolor2 : tricolor);
            ctx.beginPath();
            ctx.moveTo(width - triangleHeight - 0.5, height * 0.5);
            ctx.lineTo(width - 0.5, 0.5);
            ctx.lineTo(width - 0.5, height - 0.5);
            ctx.closePath();
            ctx.fill();
        }
        // display the text
        ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
        ctx.fillStyle = textcolor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(displayValue, width * 0.5, height * 0.5, width);
    }
    getValueFromDelta(e: PointerDragEvent) {
        const { type, mmin, mmax } = this.props;
        const stepRange = this.stepRange;
        const trueSteps = this.trueSteps;
        const step = type === "enum" ? 1 : (mmax - mmin) / trueSteps;
        const prevSteps = type === "enum" ? e.prevValue : (e.prevValue - mmin) / step;
        const dSteps = Math.round((e.fromY - e.y) / stepRange);
        const steps = Math.min(trueSteps, Math.max(0, prevSteps + dSteps));
        if (type === "enum") return steps;
        if (type === "int") return Math.round(steps * step + mmin);
        return steps * step + mmin;
    }
    handlePointerDown = () => {
        this._inTouch = true;
    }
    handlePointerDrag = (e: PointerDragEvent) => {
        if (!this._inTouch) return;
        const newValue = this.getValueFromDelta(e);
        if (newValue !== this.props.value) this.setValue(newValue);
    }
    handlePointerUp = () => {
        this._inTouch = false;
    }
    resetPointers() {
        this._inTouch = false;
    }
}
