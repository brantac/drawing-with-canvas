export default class Point {
    // Private properties
    #x: number;
    #y: number;

    constructor(x: number,y: number) {
        this.#x = x;
        this.#y = y;
    }

    // Getters and setters
    get getX() {
        return this.#x;
    }

    set setX(x: number) {
        this.#x = x;
    }

    get getY() {
        return this.#y;
    }

    set setY(y: number) {
        this.#y = y;
    }

    get getPoint () {
        return [this.#x, this.#y];
    }
}