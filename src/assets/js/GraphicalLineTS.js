var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GraphicalLine_color, _GraphicalLine_name;
import Line from './LineTS';
import GraphicalPoint from './GraphicalPointTS';
export default class GraphicalLine extends Line {
    constructor(x1, y1, x2, y2, name = "reta", color = "black") {
        super(x1, y1, x2, y2);
        _GraphicalLine_color.set(this, void 0);
        _GraphicalLine_name.set(this, void 0);
        __classPrivateFieldSet(this, _GraphicalLine_color, color, "f");
        __classPrivateFieldSet(this, _GraphicalLine_name, name, "f");
    }
    set setColor(color) {
        __classPrivateFieldSet(this, _GraphicalLine_color, color, "f");
    }
    set setName(name) {
        __classPrivateFieldSet(this, _GraphicalLine_name, name, "f");
    }
    get getColor() {
        return __classPrivateFieldGet(this, _GraphicalLine_color, "f");
    }
    get getName() {
        return __classPrivateFieldGet(this, _GraphicalLine_name, "f");
    }
    draw(ctx) {
        GraphicalLine.drawNotOptimized(ctx, super.getXP1, super.getYP1, super.getXP2, super.getYP2, __classPrivateFieldGet(this, _GraphicalLine_color, "f"));
    }
    static drawNotOptimized(ctx, x1, y1, x2, y2, color) {
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - (m * x1);
        let deltaX = (x2 - x1) < 0 ? x1 - x2 : x2 - x1;
        let deltaY = (y2 - y1) < 0 ? y1 - y2 : y2 - y1;
        if (deltaX > deltaY) {
            if (x1 < x2) {
                for (let x = x1; x <= x2; x++) {
                    let y = Math.floor((m * x) + b);
                    GraphicalPoint.staticDraw(ctx, x, y, color);
                }
            }
            else {
                for (let x = x1; x >= x2; x--) {
                    let y = Math.floor((m * x) + b);
                    GraphicalPoint.staticDraw(ctx, x, y, color);
                }
            }
        }
        else {
            if (y1 < y2) {
                for (let y = y1; y <= y2; y++) {
                    let x = Math.floor((y - b) / m);
                    GraphicalPoint.staticDraw(ctx, x, y, color);
                }
            }
            else {
                for (let y = y1; y >= y2; y--) {
                    let x = Math.floor((y - b) / m);
                    GraphicalPoint.staticDraw(ctx, x, y, color);
                }
            }
        }
    }
}
_GraphicalLine_color = new WeakMap(), _GraphicalLine_name = new WeakMap();
//# sourceMappingURL=GraphicalLineTS.js.map