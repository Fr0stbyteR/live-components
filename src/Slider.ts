import { LiveComponent } from "./Base";

interface LiveSliderParams extends LiveParams {
    relative: boolean;
    fontname: string;
    fontsize: number;
    fontface: "regular" | "bold" | "italic" | "bold italic";
    orientation: "vertical" | "horizontal";
    showname: boolean;
    shownumber: boolean;
    slidercolor: string;
    textcolor: string;
    tribordercolor: string;
    trioncolor: string;
    tricolor: string;
}

export default class LiveSlider extends LiveComponent<LiveSliderParams> {
    static get params(): LiveSliderParams {
        return {
            ...super.params,
            shortname: "live.slider",
            width: 40,
            height: 90,
            fontname: "Arial",
            fontsize: 12,
            fontface: "regular",
            orientation: "vertical",
            showname: true,
            shownumber: true,
            slidercolor: "rgba(40, 40, 40, 1)",
            textcolor: "rgba(0, 0, 0, 1)",
            tribordercolor: "rgba(80, 80, 80, 1)",
            trioncolor: "rgba(0, 0, 0, 1)",
            tricolor: "rgba(165, 165, 165, 1)",
            relative: false,
            mmin: 0,
            mmax: 127,
            type: "int"
        };
    }
    _inTouch: boolean = false;
    interactionRect: number[] = [0, 0, 0, 0];

    get trueSteps() {
        const { orientation, type, mmax, mmin, steps, step } = this.params;
        const full = this.interactionRect[orientation === "vertical" ? 3 : 2];
        const maxSteps = type === "enum" ? this.params.enum.length : type === "int" ? mmax - mmin : full;
        if (step) {
            if (type === "enum") return this.params.enum.length;
            if (type === "int") return Math.min(Math.floor((mmax - mmin) / Math.round(step)), maxSteps);
            return Math.min(Math.floor((mmax - mmin) / step), maxSteps);
        }
        if (steps) return Math.min(steps, maxSteps);
        return maxSteps;
    }
    get distance() {
        const { type, mmax, mmin, value } = this.params;
        return type === "enum" ? value / this.params.enum.length : (value - mmin) / (mmax - mmin);
    }
    get stepRange() {
        const { orientation, type, mmax, mmin, step } = this.params;
        const full = this.interactionRect[orientation === "vertical" ? 3 : 2];
        if (step) return type === "enum" ? full / this.params.enum.length : type === "int" ? Math.round(step) / (mmax - mmin) * full : step / (mmax - mmin) * full;
        const trueSteps = this.trueSteps;
        return full / trueSteps;
    }
    paint() {
        const {
            width,
            height,
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
            shortname
        } = this.params;
        const ctx = this.ctx;
        const lineWidth = 0.5;
        const padding = 8;
        const distance = this.distance;
        const displayValue = this.displayValue;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = slidercolor;

        if (orientation === "vertical") {
            ctx.beginPath();
            ctx.moveTo(width * 0.5, fontsize + padding);
            ctx.lineTo(width * 0.5, height - (fontsize + padding));
            ctx.stroke();

            const interactionWidth = width * 0.5;
            this.interactionRect = [
                width * 0.5 - interactionWidth * 0.5,
                fontsize + padding,
                interactionWidth,
                height - 2 * (fontsize + padding)
            ];

            ctx.lineWidth = 1;
            ctx.strokeStyle = tribordercolor;
            const triOrigin: [number, number] = [
                width * 0.5 + lineWidth * 0.5 + 0.5,
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

            ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillStyle = textcolor;
            if (showname) ctx.fillText(shortname, width * 0.5, fontsize, width);
            if (shownumber) ctx.fillText(displayValue, width * 0.5, height, width);
        } else {
            ctx.beginPath();
            ctx.moveTo(padding, height * 0.5);
            ctx.lineTo(width - padding, height * 0.5);
            ctx.stroke();

            const interactionWidth = height * 0.5;
            this.interactionRect = [
                padding,
                height * 0.5 - interactionWidth * 0.5,
                width - 2 * padding,
                interactionWidth
            ];

            ctx.lineWidth = 1;
            ctx.strokeStyle = tribordercolor;
            const triOrigin: [number, number] = [
                this.interactionRect[0] + this.interactionRect[2] * distance - 4,
                height * 0.5 + lineWidth * 0.5 + 2
            ];
            ctx.beginPath();
            ctx.moveTo(triOrigin[0], triOrigin[1] + 8);
            ctx.lineTo(triOrigin[0] + 4, triOrigin[1]);
            ctx.lineTo(triOrigin[0] + 8, triOrigin[1] + 8);
            ctx.lineTo(triOrigin[0], triOrigin[1] + 8);
            ctx.stroke();

            ctx.fillStyle = this._inTouch ? trioncolor : tricolor;
            ctx.fill();

            ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
            ctx.textAlign = "center";
            ctx.fillStyle = textcolor;
            if (showname) ctx.fillText(shortname, width * 0.5, fontsize, width);
            ctx.textAlign = "left";
            if (shownumber) ctx.fillText(displayValue, 4, height, width);
        }
    }
    getValueFromPos(e: { x: number; y: number }) {
        const { orientation, type, mmin, mmax } = this.params;
        const stepRange = this.stepRange;
        const trueSteps = this.trueSteps;
        const step = this.params.step || (mmax - mmin) / trueSteps;
        let steps = Math.round((orientation === "vertical" ? this.interactionRect[3] - (e.y - this.interactionRect[1]) : e.x - this.interactionRect[0]) / stepRange);
        steps = Math.min(trueSteps, Math.max(0, steps));
        if (type === "enum") return steps;
        if (type === "int") return Math.round(steps * step + mmin);
        return steps * step + mmin;
    }
    handlePointerDown = (e: PointerDownEvent) => {
        const { value } = this.params;
        if (
            e.x < this.interactionRect[0]
            || e.x > this.interactionRect[0] + this.interactionRect[2]
            || e.y < this.interactionRect[1]
            || e.y > this.interactionRect[1] + this.interactionRect[3]
        ) return;
        const newValue = this.getValueFromPos(e);
        if (newValue !== value) this.setParamValue("value", this.getValueFromPos(e));
        this._inTouch = true;
    }
    handlePointerDrag = (e: PointerDragEvent) => {
        if (!this._inTouch) return;
        const newValue = this.getValueFromPos(e);
        if (newValue !== this.params.value) this.setParamValue("value", newValue);
    }
    handlePointerUp = () => {
        this._inTouch = false;
    }
    resetPointers() {
        this._inTouch = false;
    }
}
