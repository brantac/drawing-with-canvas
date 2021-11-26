export default class Line {
    #name = null;
    #p1 = {x: null, y: null};
    #p2 = {x: null, y: null};

    constructor(p1, p2, name) {
        Line.#p1 = p1;
        Line.#p2 = p2;
        this.setName(name);
    }

    get getName() {
        return this.#name;
    }

    set setName(name) {
        if (name.length) {
            this.#name = name;
        }
        else {
            this.#name = 'Line';
        }
    }
}