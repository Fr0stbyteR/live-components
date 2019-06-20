/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import "./Base.scss";
import { toMIDI } from "./utils";

export class LiveComponent<T extends LiveProps> extends React.Component {
    static props: LiveProps = {
        value: 0,
        active: true,
        focus: false,
        width: 15,
        height: 15,
        shortname: "",
        longname: "",
        order: 0,
        linknames: false,
        type: "float",
        mmin: 0,
        mmax: 1,
        enum: [],
        enum_icons: [],
        modmode: "none",
        initial_enable: false,
        initial: [0],
        unitstyle: "float",
        units: "",
        exponent: 1,
        step: 0,
        steps: 0,
        speedlim: 5,
        defer: false,
        invisible: "automated",
        mappable: true
    }
    props: T;
    className: string;
    refCanvas = React.createRef<HTMLCanvasElement>();
    get canvas() {
        return this.refCanvas.current;
    }
    get ctx() {
        return this.refCanvas.current.getContext("2d");
    }
    get isConnectedPolyfill() {
        return !!this.refCanvas.current;
    }
    constructor(props: T) {
        super(props);
    }
    handleKeyDown = (e: React.KeyboardEvent) => {};
    handleKeyUp = (e: React.KeyboardEvent) => {};
    handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        this.canvas.focus();
        const rect = this.canvas.getBoundingClientRect();
        let prevX = e.touches[0].pageX;
        let prevY = e.touches[0].pageY;
        const fromX = prevX - rect.left;
        const fromY = prevY - rect.top;
        const prevValue = this.props.value;
        this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const pageX = e.changedTouches[0].pageX;
            const pageY = e.changedTouches[0].pageY;
            const movementX = pageX - prevX;
            const movementY = pageY - prevY;
            prevX = pageX;
            prevY = pageY;
            const x = pageX - rect.left;
            const y = pageY - rect.top;
            this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX, movementY, originalEvent: e });
        };
        const handleTouchEnd = (e: TouchEvent) => {
            e.preventDefault();
            const x = e.changedTouches[0].pageX - rect.left;
            const y = e.changedTouches[0].pageY - rect.top;
            this.handlePointerUp({ x, y, originalEvent: e });
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
    handleWheel = (e: React.WheelEvent) => {};
    handleClick = (e: React.MouseEvent) => {};
    handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        this.canvas.focus();
        const rect = this.canvas.getBoundingClientRect();
        const fromX = e.pageX - rect.left;
        const fromY = e.pageY - rect.top;
        const prevValue = this.props.value;
        this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;
            this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX: e.movementX, movementY: e.movementY, originalEvent: e });
        };
        const handleMouseUp = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;
            this.handlePointerUp({ x, y, originalEvent: e });
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    handleMouseOver = (e: React.MouseEvent) => {};
    handleMouseOut = (e: React.MouseEvent) => {};
    handleContextMenu = (e: React.MouseEvent) => {};
    handlePointerDown = (e: PointerDownEvent) => {};
    handlePointerDrag = (e: PointerDragEvent) => {};
    handlePointerUp = (e: PointerUpEvent) => {};
    handleFocusIn = (e: React.FocusEvent) => {
        this.props.focus = true;
        this.paint();
    }
    handleFocusOut = (e: React.FocusEvent) => {
        this.props.focus = false;
        this.paint();
    }

    get displayValue() {
        const { value, type, unitstyle, units } = this.props;
        if (type === "enum") return this.props.enum[value];
        if (unitstyle === "int") return value.toFixed(0);
        if (unitstyle === "float") return value.toFixed(2);
        if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
        if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
        if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
        if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
        if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
        if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
        if (unitstyle === "midi") return toMIDI(value);
        if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
        if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
        return "N/A";
    }
    setValue(value: number) {
        this.props.value = value;
    }
    change() {
        if (this.props.onChange) this.props.onChange({ value: this.props.value, displayValue: this.displayValue });
    }
    componentDidMount() {
        this.paint();
    }
    componentDidUpdate() {
        this.paint();
    }
    paint() {}
    render() {
        return (
            <canvas
                ref={this.refCanvas}
                className={["live-component", this.className].join(" ")}
                tabIndex={1}
                onKeyDown={this.handleKeyDown}
                onKeyUp={this.handleKeyUp}
                onTouchStart={this.handleTouchStart}
                onWheel={this.handleWheel}
                onClick={this.handleClick}
                onMouseDown={this.handleMouseDown}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                onContextMenu={this.handleContextMenu}
                onFocus={this.handleFocusIn}
                onBlur={this.handleFocusOut}
            />
        );
    }
}
