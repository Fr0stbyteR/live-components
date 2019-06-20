/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Base.scss";
import { getDisplayValue } from "./utils";
import { LiveComponentChangeEvent } from "./ChangeEvent";

export class LiveBaseComponent extends HTMLElement {
    root: ShadowRoot;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.root.innerHTML = this.render();
    }
    render() {
        return "";
    }
}

export class LiveComponent<T extends LiveProps> extends LiveBaseComponent {
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
    static get observedAttributes() {
        return Object.keys(this.props);
    }
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    isConnectedPolyfill: boolean;
    props: T;

    handleKeyDown = (e: KeyboardEvent) => {};
    handleKeyUp = (e: KeyboardEvent) => {};
    handleTouchStart = (e: TouchEvent) => {
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
    handleWheel = (e: WheelEvent) => {};
    handleClick = (e: MouseEvent) => {};
    handleMouseDown = (e: MouseEvent) => {
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
    handleMouseOver = (e: MouseEvent) => {};
    handleMouseOut = (e: MouseEvent) => {};
    handleContextMenu = (e: MouseEvent) => {};
    handlePointerDown = (e: PointerDownEvent) => {};
    handlePointerDrag = (e: PointerDragEvent) => {};
    handlePointerUp = (e: PointerUpEvent) => {};
    handleFocusIn = (e: FocusEvent) => {
        this.props.focus = true;
        this.paint();
    }
    handleFocusOut = (e: FocusEvent) => {
        this.props.focus = false;
        this.paint();
    }

    constructor() {
        super();
        this.addEventListener("keydown", this.handleKeyDown);
        this.addEventListener("keyup", this.handleKeyUp);
        this.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.addEventListener("wheel", this.handleWheel);
        this.addEventListener("click", this.handleClick);
        this.addEventListener("mousedown", this.handleMouseDown, { passive: false });
        this.addEventListener("mouseover", this.handleMouseOver);
        this.addEventListener("mouseout", this.handleMouseOut);
        this.addEventListener("focusin", this.handleFocusIn);
        this.addEventListener("focusout", this.handleFocusOut);
        this.canvas = this.root.children[0] as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.props = (this.constructor as typeof LiveComponent).props as T;
    }
    get displayValue() {
        const { value, type, unitstyle, units } = this.props;
        return getDisplayValue(value, type, unitstyle, units, this.props.enum);
    }
    fetchAttribute() {
        for (let i = 0; i < this.root.host.attributes.length; i++) {
            const attr = this.root.host.attributes[i];
            const { name, value } = attr;
            (this.props as any)[name] = value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value;
        }
    }
    attributeChangedCallback(key: string, oldValue: string, value: string) {
        if (!this.isConnectedPolyfill) return;
        if (typeof value === "undefined" || value === null) return;
        this.setParamValue(key, value.match(/^[+-]?(\d*\.)?\d+$/) ? +value : value);
    }
    connectedCallback() {
        this.fetchAttribute();
        this.paint();
        this.isConnectedPolyfill = true;
    }
    setParamValue(key: string, value: any) {
        if (!(key in this.props)) return;
        (this.props as any)[key] = value;
        if (key === "value") this.change();
        this.paint();
    }
    setValue(value: number) {
        this.setParamValue("value", value);
    }
    change() {
        this.dispatchEvent(new LiveComponentChangeEvent("change", { detail: { value: this.props.value, displayValue: this.displayValue } }));
    }
    paint() {}
    render() {
        return '<canvas tabindex="1" style="outline: none;"></canvas>';
    }
}
