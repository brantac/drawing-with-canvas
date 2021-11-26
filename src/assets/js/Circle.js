export default class Circle {
    #radius = null;
    #center = null;

    constructor(radius,center) {
        this.#radius = radius;
        this.#center = center;
    }

    get getRadius() {
        return this.#radius;
    }

    get getCenter() {
        return this.#center;
    }

    static degreesToRadians(degrees) {
        const pi = Math.PI;
        return degrees * (pi/180);
    }
}