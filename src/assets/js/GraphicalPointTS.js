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
var _GraphicalPoint_instances, _GraphicalPoint_color, _GraphicalPoint_name, _GraphicalPoint_type, _GraphicalPoint_repaint;
import Point from './PointTS';
export default class GraphicalPoint extends Point {
    constructor(x, y, color, name = "Point") {
        super(x, y);
        _GraphicalPoint_instances.add(this);
        _GraphicalPoint_color.set(this, void 0);
        _GraphicalPoint_name.set(this, void 0);
        _GraphicalPoint_type.set(this, void 0);
        __classPrivateFieldSet(this, _GraphicalPoint_color, color, "f");
        __classPrivateFieldSet(this, _GraphicalPoint_name, name, "f");
        __classPrivateFieldSet(this, _GraphicalPoint_type, "GraphicalPoint", "f");
    }
    movePoint(p, ctx, backgroundColor = "white") {
        let tempX, tempY;
        tempX = super.getX;
        tempY = super.getY;
        super.setX = p[0];
        super.setY = p[1];
        __classPrivateFieldGet(this, _GraphicalPoint_instances, "m", _GraphicalPoint_repaint).call(this, ctx);
        GraphicalPoint.staticDraw(ctx, tempX, tempY, backgroundColor);
    }
    set setColor(color) {
        __classPrivateFieldSet(this, _GraphicalPoint_color, color, "f");
    }
    set setName(name) {
        __classPrivateFieldSet(this, _GraphicalPoint_name, name, "f");
    }
    get getName() {
        return __classPrivateFieldGet(this, _GraphicalPoint_name, "f");
    }
    get getType() {
        return __classPrivateFieldGet(this, _GraphicalPoint_type, "f");
    }
    setColorRepaint(color, ctx) {
        __classPrivateFieldSet(this, _GraphicalPoint_color, color, "f");
        __classPrivateFieldGet(this, _GraphicalPoint_instances, "m", _GraphicalPoint_repaint).call(this, ctx);
    }
    static staticDraw(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, 1, 1, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
    }
    draw(ctx) {
        GraphicalPoint.staticDraw(ctx, this.getX, this.getY, __classPrivateFieldGet(this, _GraphicalPoint_color, "f"));
    }
}
_GraphicalPoint_color = new WeakMap(), _GraphicalPoint_name = new WeakMap(), _GraphicalPoint_type = new WeakMap(), _GraphicalPoint_instances = new WeakSet(), _GraphicalPoint_repaint = function _GraphicalPoint_repaint(ctx) {
    GraphicalPoint.staticDraw(ctx, this.getX, this.getY, __classPrivateFieldGet(this, _GraphicalPoint_color, "f"));
};
//# sourceMappingURL=GraphicalPointTS.js.map