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
var _FiguraComum_gpcInnerCircle, _FiguraComum_gpcExternalCircles, _FiguraComum_externalCirclesCenters, _FiguraComum_outerMostIntersections, _FiguraComum_gpcLines, _FiguraComum_name;
import GraphicalLine from "./GraphicalLineTS";
import GraphicalCircle from "./GraphicalCircleTS";
import Circle from "./CircleTS";
export default class FiguraComum {
    constructor(xc, yc, radius, color = "black", name = "FiguraComum") {
        _FiguraComum_gpcInnerCircle.set(this, void 0);
        _FiguraComum_gpcExternalCircles.set(this, void 0);
        _FiguraComum_externalCirclesCenters.set(this, void 0);
        _FiguraComum_outerMostIntersections.set(this, void 0);
        _FiguraComum_gpcLines.set(this, void 0);
        _FiguraComum_name.set(this, void 0);
        __classPrivateFieldSet(this, _FiguraComum_gpcInnerCircle, new GraphicalCircle(xc, yc, radius, color), "f");
        __classPrivateFieldSet(this, _FiguraComum_name, name, "f");
        __classPrivateFieldSet(this, _FiguraComum_externalCirclesCenters, [], "f");
        __classPrivateFieldSet(this, _FiguraComum_gpcExternalCircles, [], "f");
        __classPrivateFieldSet(this, _FiguraComum_gpcLines, [], "f");
        __classPrivateFieldSet(this, _FiguraComum_outerMostIntersections, [], "f");
    }
    draw2(ctx) {
        this.drawInnerCircle(ctx);
        this.drawExternalCircles(ctx);
        this.drawLines(ctx);
    }
    drawInnerCircle(ctx) {
        GraphicalCircle.drawCircleNotOptimized(ctx, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getRadius, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenter, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getColor);
    }
    drawExternalCircles(ctx) {
        for (let i = 0; i <= 359; i = i + 60) {
            let newCenter;
            let xc, yc;
            [xc, yc] = this.computeXAndYInRelationFromInnerCircleCenter(i);
            newCenter = [xc, yc];
            __classPrivateFieldGet(this, _FiguraComum_externalCirclesCenters, "f").push(newCenter);
            GraphicalCircle.drawCircleNotOptimized(ctx, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getRadius, [xc, yc], __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getColor);
        }
    }
    drawLines(ctx) {
        this.connectInnerCircleCenterToExternalCenters(ctx);
        this.connectExternalCenters(ctx);
        this.connectInnerCenterToOuterMostIntersections(ctx);
    }
    connectInnerCircleCenterToExternalCenters(ctx) {
        for (const center of __classPrivateFieldGet(this, _FiguraComum_externalCirclesCenters, "f")) {
            GraphicalLine.drawNotOptimized(ctx, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterX, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterY, center[0], center[1], 'blue');
        }
    }
    connectExternalCenters(ctx) {
        let size = __classPrivateFieldGet(this, _FiguraComum_externalCirclesCenters, "f").length;
        for (let i = 0; i < size; i++) {
            let centerA, centerB;
            let next = i + 1;
            if (next >= size)
                next = next % size;
            centerA = __classPrivateFieldGet(this, _FiguraComum_externalCirclesCenters, "f")[i];
            centerB = __classPrivateFieldGet(this, _FiguraComum_externalCirclesCenters, "f")[next];
            GraphicalLine.drawNotOptimized(ctx, centerA[0], centerA[1], centerB[0], centerB[1], 'blue');
        }
    }
    connectInnerCenterToOuterMostIntersections(ctx) {
        this.computeOuterMostIntersections();
        __classPrivateFieldGet(this, _FiguraComum_outerMostIntersections, "f").forEach(intersection => {
            GraphicalLine.drawNotOptimized(ctx, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterX, __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterY, intersection[0], intersection[1], "blue");
        });
    }
    computeXAndYInRelationFromInnerCircleCenter(angleInDegrees) {
        let alfa, x, y;
        alfa = Circle.degreesToRadians(angleInDegrees);
        x = __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterX + __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getRadius * Math.cos(alfa);
        y = __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenterY + __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getRadius * Math.sin(alfa);
        return [x, y];
    }
    computeOuterMostIntersections() {
        let anglesOfEachIntersectionPoint = [30, 90, 150, 210, 270, 330];
        let xc, yc, radius;
        [xc, yc] = __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getCenter;
        radius = __classPrivateFieldGet(this, _FiguraComum_gpcInnerCircle, "f").getRadius;
        anglesOfEachIntersectionPoint.forEach(angle => {
            let x, y;
            let radians = Circle.degreesToRadians(angle);
            x = xc + ((3 / 2) * Math.pow(radius, 2) * Math.cos(radians));
            y = yc + ((3 / 2) * Math.pow(radius, 2) * Math.sin(radians));
            __classPrivateFieldGet(this, _FiguraComum_outerMostIntersections, "f").push([x, y]);
        });
        console.log(radius, __classPrivateFieldGet(this, _FiguraComum_outerMostIntersections, "f"));
    }
}
_FiguraComum_gpcInnerCircle = new WeakMap(), _FiguraComum_gpcExternalCircles = new WeakMap(), _FiguraComum_externalCirclesCenters = new WeakMap(), _FiguraComum_outerMostIntersections = new WeakMap(), _FiguraComum_gpcLines = new WeakMap(), _FiguraComum_name = new WeakMap();
//# sourceMappingURL=FiguraComumTS.js.map