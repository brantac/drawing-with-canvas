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
var _Point_x, _Point_y;
export default class Point {
    constructor(x, y) {
        _Point_x.set(this, void 0);
        _Point_y.set(this, void 0);
        __classPrivateFieldSet(this, _Point_x, x, "f");
        __classPrivateFieldSet(this, _Point_y, y, "f");
    }
    get getX() {
        return __classPrivateFieldGet(this, _Point_x, "f");
    }
    set setX(x) {
        __classPrivateFieldSet(this, _Point_x, x, "f");
    }
    get getY() {
        return __classPrivateFieldGet(this, _Point_y, "f");
    }
    set setY(y) {
        __classPrivateFieldSet(this, _Point_y, y, "f");
    }
    get getPoint() {
        return [__classPrivateFieldGet(this, _Point_x, "f"), __classPrivateFieldGet(this, _Point_y, "f")];
    }
}
_Point_x = new WeakMap(), _Point_y = new WeakMap();
//# sourceMappingURL=PointTS.js.map