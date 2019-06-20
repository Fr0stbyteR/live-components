import { LiveComponent } from "./Base";
import { atodb } from "./utils";

interface LiveMeterParams extends LiveProps {
    orientation: "vertical" | "horizontal";
    mode: "decibel" | "linear";
    clip_size: "normal" | "extended";
    interval: number;
    bgcolor: string;
    inactivecoldcolor: string;
    inactivewarmcolor: string;
    coldcolor: string;
    warmcolor: string;
    hotcolor: string;
    overloadcolor: string;
}

export default class LiveMeter extends LiveComponent<LiveMeterParams> {
    static get props(): LiveMeterParams {
        return {
            ...super.props,
            shortname: "live.meter~",
            width: 120,
            height: 15,
            mode: "linear",
            clip_size: "normal",
            interval: 20,
            orientation: "vertical",
            bgcolor: "rgba(40, 40, 40, 1)",
            inactivecoldcolor: "rgba(130, 130, 130, 1)",
            inactivewarmcolor: "rgba(149, 149, 149, 1)",
            coldcolor: "rgba(12, 248, 100, 1)",
            warmcolor: "rgba(195, 248, 100, 1)",
            hotcolor: "rgba(255, 193, 10, 1)",
            overloadcolor: "rgba(255, 10, 10, 1)"
        };
    }
    paintValue: number = 0;
    maxValue: number = 0;
    paintTimer: number;
    maxTimer: number;
    get distance() {
        const { mode, value } = this.props;
        return (mode === "decibel" ? Math.max(-70, value) : atodb(Math.abs(value))) / 70 + 1;
    }

    paint(paintIn?: boolean) {
        this.paintValue = Math.max(this.paintValue, this.distance);
        if (!paintIn) {
            if (!this.paintTimer) this.paintTimer = setTimeout(() => this.paint(true), this.props.interval);
            return;
        }
        this.paintTimer = undefined;
        const {
            active,
            width,
            height,
            orientation,
            clip_size,
            bgcolor,
            inactivecoldcolor,
            inactivewarmcolor,
            coldcolor,
            warmcolor,
            hotcolor,
            overloadcolor
        } = this.props;
        const ctx = this.ctx;

        const clip = clip_size === "normal" ? 10 : 20;
        const paintValue = this.paintValue;
        if (paintValue > this.maxValue) {
            this.maxValue = paintValue;
            if (this.maxTimer) clearTimeout(this.maxTimer);
            this.maxTimer = setTimeout(() => this.maxValue = this.paintValue, 1000);
        }
        const maxValue = this.maxValue;

        ctx.canvas.style.width = width + "px";
        ctx.canvas.style.height = height + "px";
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        if (orientation === "horizontal") {
            const warmStop = width - clip - 1;
            const hotStop = width - clip;
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, active ? coldcolor : inactivecoldcolor);
            gradient.addColorStop(warmStop / width, active ? warmcolor : inactivewarmcolor);
            gradient.addColorStop(hotStop / width, active ? hotcolor : inactivewarmcolor);
            gradient.addColorStop(1, active ? overloadcolor : inactivewarmcolor);
            ctx.fillStyle = bgcolor;
            if (paintValue < 1) ctx.fillRect(0, 0, warmStop, height);
            if (paintValue < 2) ctx.fillRect(hotStop, 0, clip, height);
            ctx.fillStyle = gradient;
            if (paintValue > 0) ctx.fillRect(0, 0, Math.min(1, paintValue) * warmStop, height);
            if (paintValue > 1) ctx.fillRect(hotStop, 0, Math.min(1, (paintValue - 1) * 10) * clip, height);
            if (maxValue > paintValue) {
                if (maxValue <= 1) ctx.fillRect(Math.min(warmStop - 1, maxValue * warmStop), 0, 1, height);
                if (maxValue > 1) ctx.fillRect(Math.min(width - 1, hotStop + (maxValue - 1) * 10 * clip), 0, 1, height);
            }
        } else {
            const warmStop = clip + 1;
            const hotStop = clip;
            const gradient = ctx.createLinearGradient(0, height, 0, 0);
            gradient.addColorStop(0, active ? coldcolor : inactivecoldcolor);
            gradient.addColorStop((height - warmStop) / height, active ? warmcolor : inactivewarmcolor);
            gradient.addColorStop((height - hotStop) / height, active ? hotcolor : inactivewarmcolor);
            gradient.addColorStop(1, active ? overloadcolor : inactivewarmcolor);
            ctx.fillStyle = bgcolor;
            if (paintValue < 1) ctx.fillRect(0, warmStop, width, height - warmStop);
            if (paintValue < 2) ctx.fillRect(0, 0, width, hotStop);
            ctx.fillStyle = gradient;
            if (paintValue > 0) {
                const drawHeight = Math.min(1, paintValue) * (height - warmStop);
                ctx.fillRect(0, height - drawHeight, width, drawHeight);
            }
            if (paintValue > 1) {
                const drawHeight = Math.min(1, (paintValue - 1) * 10) * clip;
                ctx.fillRect(0, hotStop - drawHeight, width, drawHeight);
            }
            if (maxValue > paintValue) {
                if (maxValue <= 1) ctx.fillRect(0, height - maxValue * (height - warmStop), width, 1);
                if (maxValue > 1) ctx.fillRect(0, Math.max(0, hotStop - (maxValue - 1) * 10 * clip), width, 1);
            }
        }
        this.paintValue = 0;
    }
}
