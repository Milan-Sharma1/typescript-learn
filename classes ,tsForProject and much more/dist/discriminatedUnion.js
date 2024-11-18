"use strict";
function getTrueShape(val) {
    if (val.kind === "circle") {
        return Math.PI * val.radius ** 2;
    }
    // return val.side * val.side;
}
function getArea(val) {
    switch (val.kind) {
        case "circle":
            return Math.PI * val.radius ** 2;
        case "square":
            return val.side * val.side;
        case "rectangle":
            return val.length * val.width;
        default:
            const _defaultForShape = val;
            return _defaultForShape;
    }
}
