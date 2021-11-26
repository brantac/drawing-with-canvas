import Point from "./PointTS";

export default class Circle {
    #radius: number;
    #center: Point;

    constructor(radius: number, xc: number, yc: number) {
        this.#radius = radius;
        this.#center = new Point(xc, yc);
    }

    // #center: number[];

    // constructor(radius: number, center: number[]) {
    //     this.#radius = radius;
    //     this.#center = center;
    // }

    get getRadius() {
        return this.#radius;
    }

    get getCenterX () {
        return this.#center.getX;
    }

    get getCenterY () {
        return this.#center.getY;
    }

    get getCenter () {
        return [this.#center.getX, this.#center.getY];
    }

    set setRadius (r: number) {
        this.#radius = r;
    }

    static degreesToRadians(degrees: number) {
        const pi = Math.PI;
        return degrees * (pi/180);
    }
}