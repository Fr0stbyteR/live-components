import { LiveComponent } from "./Base";
import { toRad, roundedRect, fillRoundedRect } from "./utils";

interface LiveDialProps extends LiveProps {
    fontname: string;
    fontsize: number;
    fontface: "regular" | "bold" | "italic" | "bold italic";
    showname: boolean;
    shownumber: boolean;
    appearance: "vertical" | "tiny" | "panel";
    triangle: boolean;
    bordercolor: string;
    focusbordercolor: string;
    activedialcolor: string;
    dialcolor: string;
    activeneedlecolor: string;
    needlecolor: string;
    panelcolor: string;
    textcolor: string;
    tribordercolor: string;
    tricolor: string;
}

export default class LiveDial extends LiveComponent<LiveDialProps> {
    static get props(): LiveDialProps {
        return {
            ...super.props,
            shortname: "live.dial",
            width: 45,
            height: 45,
            fontname: "Arial",
            fontsize: 12,
            fontface: "regular",
            appearance: "vertical",
            triangle: false,
            showname: true,
            shownumber: true,
            bordercolor: "rgba(90, 90, 90, 1)",
            focusbordercolor: "rgba(80, 80, 80, 1)",
            activedialcolor: "rgba(109, 215, 255, 1)",
            dialcolor: "rgba(195, 195, 195, 1)",
            activeneedlecolor: "rgba(40, 40, 40, 1)",
            needlecolor: "rgba(105, 105, 105, 1)",
            panelcolor: "rgba(165, 165, 165, 1)",
            textcolor: "rgba(0, 0, 0, 1)",
            tribordercolor: "rgba(50, 50, 50, 1)",
            tricolor: "rgba(40, 40, 40, 1)",
            mmin: 0,
            mmax: 127,
            type: "int"
        };
    }
    _inTouch: boolean = false;
    interactionRect: number[] = [0, 0, 0, 0];

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
            triangle,
            showname,
            shownumber,
            bordercolor,
            focusbordercolor,
            panelcolor,
            activeneedlecolor,
            needlecolor,
            activedialcolor,
            dialcolor,
            textcolor,
            tribordercolor,
            tricolor,
            shortname
        } = this.props;
        const ctx = this.ctx;
        const distance = this.distance;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;


        const triangleHeight = 4;
        const triangleLineWidth = 0.6;

        let start: number;
        let end: number;
        let valPos: number;
        let dialHeight: number;

        if (appearance === "tiny") {
            dialHeight = 18;
            start = -3 * Math.PI * 0.5;
            end = 0;
            valPos = start + toRad(this.distance * 270);
        } else {
            dialHeight = 25;
            start = Math.PI - 3 * Math.PI / 8;
            end = 2 * Math.PI + 3 * Math.PI / 8;
            valPos = start + toRad(this.distance * 315);
        }
        const dialRadius = dialHeight * 0.5;

        let dialCenterX = width * 0.5;
        let dialCenterY = height * 0.5 + 1;
        if (appearance === "panel") {
            dialCenterY += 10;
        } else if (appearance === "vertical") {
            if (shownumber) dialCenterY -= fontsize - 5;
            if (showname) dialCenterY += fontsize - 5;
            if (triangle) dialCenterY += triangleHeight - 1;
        } else if (appearance === "tiny") {
            if (showname) {
                dialCenterY += 6;
                dialCenterX = 10;
            }
        }
        this.interactionRect = [0, dialCenterY - dialHeight * 0.5, width, dialHeight];
        const arcStartX = dialCenterX + (dialHeight * 0.5 * Math.cos(start));
        const arcStartY = dialCenterY + (dialHeight * 0.5 * Math.sin(start));
        const arcEndX = dialCenterX + (dialHeight * 0.5 * Math.cos(end));
        const arcEndY = dialCenterY + (dialHeight * 0.5 * Math.sin(end));
        const valuePosX = dialCenterX + (dialHeight * 0.5 * Math.cos(valPos));
        const valuePosY = dialCenterY + (dialHeight * 0.5 * Math.sin(valPos));
        const endCapRadius = 1;
        const lineWidth = 2;
        let panelOffset = 0;

        if (appearance === "panel") {
            panelOffset = 5;
            ctx.strokeStyle = focus ? focusbordercolor : bordercolor;
            ctx.lineWidth = 0.4;
            roundedRect(ctx, 1, 1, width - 2, height - 2, 5);
            ctx.fillStyle = panelcolor;
            fillRoundedRect(ctx, 1.2, 1.2, width - 2.4, 30 - 0.4, [5, 5, 0, 0]);
        }

        ctx.strokeStyle = active ? activeneedlecolor : needlecolor;
        ctx.fillStyle = ctx.strokeStyle;
        ctx.lineWidth = lineWidth;
        // draw background arc endcaps
        ctx.beginPath();
        ctx.arc(arcStartX, arcStartY, endCapRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(arcEndX, arcEndY, endCapRadius, 0, 2 * Math.PI);
        ctx.fill();
        // draw background arc
        ctx.beginPath();
        ctx.arc(dialCenterX, dialCenterY, dialRadius, start, end);
        ctx.stroke();

        // draw value arc, which changes if triangle is enabled
        ctx.strokeStyle = active ? activedialcolor : dialcolor;
        ctx.fillStyle = ctx.strokeStyle;
        if (triangle) {
            const midpoint = (start + end) * 0.5;
            ctx.strokeStyle = active ? activedialcolor : dialcolor;
            ctx.beginPath();
            if (distance > 0.5) ctx.arc(dialCenterX, dialCenterY, dialRadius, midpoint, valPos);
            else ctx.arc(dialCenterX, dialCenterY, dialRadius, valPos, midpoint);
            ctx.stroke();
        } else {
            // draw value arc endcap
            ctx.beginPath();
            ctx.arc(arcStartX, arcStartY, endCapRadius, 0, 2 * Math.PI);
            ctx.fill();
            // draw value arc
            ctx.beginPath();
            ctx.arc(dialCenterX, dialCenterY, dialRadius, start, valPos);
            ctx.stroke();
        }
        // draw dial
        // draw dial round endcaps
        ctx.strokeStyle = active ? activeneedlecolor : needlecolor;
        ctx.fillStyle = ctx.strokeStyle;
        ctx.beginPath();
        ctx.arc(dialCenterX, dialCenterY, endCapRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(valuePosX, valuePosY, endCapRadius, 0, 2 * Math.PI);
        ctx.fill();
        // draw dial line
        ctx.beginPath();
        ctx.moveTo(dialCenterX, dialCenterY);
        ctx.lineTo(valuePosX, valuePosY);
        ctx.stroke();
        // add text if it is enabled
        ctx.font = `${fontface === "regular" ? "" : fontface} ${fontsize}px ${fontname}, sans-serif`;
        ctx.fillStyle = textcolor;
        if (showname) {
            if (appearance === "tiny") {
                ctx.textAlign = "left";
                ctx.fillText(shortname, 0, panelOffset + fontsize, width);
            } else {
                ctx.textAlign = "center";
                ctx.fillText(shortname, width * 0.5, panelOffset + fontsize, width);
            }
        }
        if (shownumber) {
            const tinyOffset = appearance === "tiny" ? 12 : 0;
            if (appearance === "tiny") {
                ctx.textAlign = "left";
                ctx.fillText(this.displayValue, tinyOffset, height - panelOffset, width);
            } else {
                ctx.textAlign = "center";
                ctx.fillText(this.displayValue, width * 0.5, height - panelOffset, width);
            }
        }
        // draw triangle if it is enabled
        if (triangle) {
            if (!distance) ctx.fillStyle = tricolor;
            else if (!active) ctx.fillStyle = dialcolor;
            else ctx.fillStyle = activedialcolor;
            ctx.beginPath();
            if (appearance === "tiny") {
                const tipPositionX = dialCenterX + dialHeight * 0.5 * Math.cos(-3 * Math.PI / 4) - 1;
                const tipPositionY = dialCenterY + dialHeight * 0.5 * Math.sin(-3 * Math.PI / 4) - 1;
                ctx.moveTo(tipPositionX, tipPositionY);
                ctx.lineTo(tipPositionX - triangleHeight, tipPositionY);
                ctx.lineTo(tipPositionX, tipPositionY - triangleHeight);
                ctx.lineTo(tipPositionX, tipPositionY);
            } else {
                ctx.moveTo(dialCenterX, dialCenterY - dialRadius - 1);
                ctx.lineTo(dialCenterX - triangleHeight, dialCenterY - dialRadius - 1 - triangleHeight);
                ctx.lineTo(dialCenterX + triangleHeight, dialCenterY - dialRadius - 1 - triangleHeight);
                ctx.lineTo(dialCenterX, dialCenterY - dialRadius - 1);
            }
            ctx.fill();
            ctx.strokeStyle = tribordercolor || "transparent";
            ctx.lineWidth = triangleLineWidth;
            ctx.stroke();
        }
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
    handlePointerDown = (e: PointerDownEvent) => {
        if (
            e.x < this.interactionRect[0]
            || e.x > this.interactionRect[0] + this.interactionRect[2]
            || e.y < this.interactionRect[1]
            || e.y > this.interactionRect[1] + this.interactionRect[3]
        ) return;
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
