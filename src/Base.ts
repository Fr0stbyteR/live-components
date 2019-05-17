/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Base.scss";

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

export class LiveComponent extends LiveBaseComponent {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    params: { [key: string]: any };

    handleKeyDown = (e: KeyboardEvent) => {};
    handleKeyUp = (e: KeyboardEvent) => {};
    handleTouchStart = (e: TouchEvent) => {};
    handleWheel = (e: WheelEvent) => {};
    handleClick = (e: MouseEvent) => {};
    handleMouseDown = (e: MouseEvent) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.pageX - rect.left;
        const y = e.pageY - rect.top;
        this.handlePointerDown({ x, y, originalEvent: e });
        const handleMouseMove = (e: MouseEvent) => {
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;
            this.handlePointerMove({ x, y, movementX: e.movementX, movementY: e.movementY, originalEvent: e });
        };
        const handleMouseUp = (e: MouseEvent) => {
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
    handlePointerDown = (e: { x: number; y: number; originalEvent: MouseEvent | TouchEvent }) => {};
    handlePointerMove = (e: { x: number; y: number; movementX: number; movementY: number; originalEvent: MouseEvent | TouchEvent }) => {};
    handlePointerUp = (e: { x: number; y: number; originalEvent: MouseEvent | TouchEvent }) => {};

    constructor() {
        super();
        this.addEventListener("keydown", this.handleKeyDown);
        this.addEventListener("keyup", this.handleKeyUp);
        this.addEventListener("touchstart", this.handleTouchStart);
        this.addEventListener("wheel", this.handleWheel);
        this.addEventListener("click", this.handleClick);
        this.addEventListener("mousedown", this.handleMouseDown);
        this.addEventListener("mouseover", this.handleMouseOver);
        this.addEventListener("mouseout", this.handleMouseOut);
        this.canvas = this.root.children[0] as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
    }
    setParamValue(key: string, value: any) {
        this.params[key] = value;
        this.paint(this.ctx, this.params);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    paint(ctx: CanvasRenderingContext2D, params: { [key: string]: any }) {}
    render() {
        return "<canvas></canvas>";
    }
}
