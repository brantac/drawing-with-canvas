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
var _GraphicalCircle_name, _GraphicalCircle_color;
import Circle from "./CircleTS";
import GraphicalPoint from "./GraphicalPointTS";
export default class GraphicalCircle extends Circle {
    constructor(xc, yc, radius, color = "black", name = "circle") {
        super(radius, xc, yc);
        _GraphicalCircle_name.set(this, void 0);
        _GraphicalCircle_color.set(this, void 0);
        __classPrivateFieldSet(this, _GraphicalCircle_color, color, "f");
        __classPrivateFieldSet(this, _GraphicalCircle_name, name, "f");
    }
    get getName() {
        return __classPrivateFieldGet(this, _GraphicalCircle_name, "f");
    }
    get getColor() {
        return __classPrivateFieldGet(this, _GraphicalCircle_color, "f");
    }
    draw(ctx) {
        GraphicalCircle.drawCircleNotOptimized(ctx, super.getRadius, super.getCenter, __classPrivateFieldGet(this, _GraphicalCircle_color, "f"));
    }
    static drawCircleNotOptimized(ctx, radius, center, color) {
        let x, y, alfa;
        let centerX, centerY;
        [centerX, centerY] = center;
        for (let i = 0; i <= 359; i++) {
            alfa = Circle.degreesToRadians(i);
            x = centerX + radius * Math.sin(alfa);
            y = centerY + radius * Math.cos(alfa);
            GraphicalPoint.staticDraw(ctx, x, y, color);
        }
    }
    static computeRadius(center, p) {
        let [a, b] = center;
        let [px, py] = p;
        let radius = Math.sqrt(Math.pow(px - a, 2) + Math.pow(py - b, 2));
        return radius;
    }
}
_GraphicalCircle_name = new WeakMap(), _GraphicalCircle_color = new WeakMap();
//# sourceMappingURL=GraphicalCircleTS.js.map