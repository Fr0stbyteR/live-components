declare interface PointerDownEvent {
    x: number;
    y: number;
    originalEvent: MouseEvent | TouchEvent;
}

declare interface PointerDragEvent {
    prevValue: number;
    x: number;
    y: number;
    fromX: number;
    fromY: number;
    movementX: number;
    movementY: number;
    originalEvent: MouseEvent | TouchEvent;
}

declare interface PointerUpEvent {
    x: number;
    y: number;
    originalEvent: MouseEvent | TouchEvent;
}

declare interface LiveProps {
    value: number;
    active: boolean;
    focus: boolean;
    width: number;
    height: number;
    shortname: string;
    longname: string;
    order: number;
    linknames: boolean;
    type: "float" | "int" | "enum";
    mmin: number;
    mmax: number;
    enum: string[];
    enum_icons: string[];
    modmode: "none" | "unipolar" | "bipolar" | "additive" | "absolute";
    initial_enable: boolean;
    initial: (number | string)[];
    unitstyle: "int" | "float" | "time" | "hertz" | "decibel" | "%" | "pan" | "semitones" | "midi" | "custom" | "native";
    units: string;
    exponent: number;
    step: number;
    steps: number;
    speedlim: number;
    defer: boolean;
    invisible: "automated" | "stored" | "hidden";
    mappable: boolean;
}
