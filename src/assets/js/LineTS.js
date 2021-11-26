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
var _Line_p1, _Line_p2;
import Point from "./PointTS";
export default class Line {
    constructor(x1, y1, x2, y2) {
        _Line_p1.set(this, void 0);
        _Line_p2.set(this, void 0);
        __classPrivateFieldSet(this, _Line_p1, new Point(x1, y1), "f");
        __classPrivateFieldSet(this, _Line_p2, new Point(x2, y2), "f");
    }
    get getLine() {
        return [__classPrivateFieldGet(this, _Line_p1, "f"), __classPrivateFieldGet(this, _Line_p2, "f")];
    }
    get getP1() {
        return __classPrivateFieldGet(this, _Line_p1, "f");
    }
    get getXP1() {
        return __classPrivateFieldGet(this, _Line_p1, "f").getX;
    }
    get getYP1() {
        return __classPrivateFieldGet(this, _Line_p1, "f").getY;
    }
    get getXP2() {
        return __classPrivateFieldGet(this, _Line_p2, "f").getX;
    }
    get getYP2() {
        return __classPrivateFieldGet(this, _Line_p2, "f").getY;
    }
    get getP2() {
        return __classPrivateFieldGet(this, _Line_p2, "f");
    }
    set setP1(p) {
        __classPrivateFieldGet(this, _Line_p1, "f").setX = p[0];
        __classPrivateFieldGet(this, _Line_p1, "f").setY = p[1];
    }
    set setP2(p) {
        __classPrivateFieldGet(this, _Line_p2, "f").setX = p[0];
        __classPrivateFieldGet(this, _Line_p2, "f").setY = p[1];
    }
}
_Line_p1 = new WeakMap(), _Line_p2 = new WeakMap();
//# sourceMappingURL=LineTS.js.map