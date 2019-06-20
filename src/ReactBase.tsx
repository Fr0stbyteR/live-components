import * as React from "react";
import { LiveComponent } from "./Base";
import { getDisplayValue } from "./utils";

export class LiveReactComponent<T extends LiveProps, C extends typeof LiveComponent> extends React.Component {
    static props: LiveProps = LiveComponent.props;
    WebComponent: C;
    props: T = this.WebComponent.props as any;
    className: string;
    refCanvas = React.createRef<HTMLCanvasElement>();
    get isConnectedPolyfill() {
        return !!this.refCanvas.current;
    }
    get canvas() {
        return this.refCanvas.current;
    }
    get ctx() {
        return this.refCanvas.current.getContext("2d");
    }
    get displayValue() {
        const { value, type, unitstyle, units } = this.props;
        return getDisplayValue(value, type, unitstyle, units, this.props.enum);
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
            const pageX = e.touches[0].pageX;
            const pageY = e.touches[0].pageY;
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
            const x = e.touches[0].pageX - rect.left;
            const y = e.touches[0].pageY - rect.top;
            this.handlePointerUp({ x, y, originalEvent: e });
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
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
    componentDidMount() {
        this.paint();
    }
    componentDidUpdate() {
        this.paint();
    }
    change() {
        if (this.props.onChange) this.props.onChange({ value: this.props.value, displayValue: this.displayValue });
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
