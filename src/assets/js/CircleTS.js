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
var _Circle_radius, _Circle_center;
import Point from "./PointTS";
export default class Circle {
    constructor(radius, xc, yc) {
        _Circle_radius.set(this, void 0);
        _Circle_center.set(this, void 0);
        __classPrivateFieldSet(this, _Circle_radius, radius, "f");
        __classPrivateFieldSet(this, _Circle_center, new Point(xc, yc), "f");
    }
    get getRadius() {
        return __classPrivateFieldGet(this, _Circle_radius, "f");
    }
    get getCenterX() {
        return __classPrivateFieldGet(this, _Circle_center, "f").getX;
    }
    get getCenterY() {
        return __classPrivateFieldGet(this, _Circle_center, "f").getY;
    }
    get getCenter() {
        return [__classPrivateFieldGet(this, _Circle_center, "f").getX, __classPrivateFieldGet(this, _Circle_center, "f").getY];
    }
    set setRadius(r) {
        __classPrivateFieldSet(this, _Circle_radius, r, "f");
    }
    static degreesToRadians(degrees) {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }
}
_Circle_radius = new WeakMap(), _Circle_center = new WeakMap();
//# sourceMappingURL=CircleTS.js.map