import Circle from "./Circle";
import GraphicalPoint from "./GraphicalPoint";

export default class GraphicalCircle extends Circle {
    #name = null;

    constructor(radius, center, name="Circle") {
        super(radius,center);
        this.#name = name;
    }

    get getName() {
        return this.#name;
    }

    static drawCircleNotOptimized(ctx,radius,center=[],color) {
        let x,y,alfa;
        let centerX,centerY;
        [centerX,centerY] = center;
        for (let i=0; i<=359;i++) {
            alfa = Circle.degreesToRadians(i);
            x = centerX + radius * Math.sin(alfa);
            y = centerY + radius * Math.cos(alfa);
            GraphicalPoint.draw(ctx,x,y,color);
        }
    }

    static computeRadius(center,p) {
        let [a,b] = center;
        let [px,py] = p;
        let radius = Math.sqrt(Math.pow(px-a,2) + Math.pow(py-b,2));
        return radius;
    }
}