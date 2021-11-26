import Line from './LineTS';
import GraphicalPoint from './GraphicalPointTS';

export default class GraphicalLine extends Line {
    #color: string;
    #name: string;

    constructor (x1: number, y1: number, x2: number, y2: number,
        name = "reta", color: string = "black") {
            super(x1,y1,x2,y2);
            this.#color = color;
            this.#name = name;
        }

    // constructor(x1: number,y1: number,x2: number,
    //     y2: number, name: string, color: string) {
    //     super({x: x1, y: y1},{x: x2, y: y2},name);
    //     this.#color = color;
    // }

    set setColor (color: string) {
        this.#color = color;
    }

    set setName (name: string) {
        this.#name = name;
    }

    get getColor () {
        return this.#color;
    }

    get getName () {
        return this.#name;
    }

    draw(ctx: CanvasRenderingContext2D) {
        GraphicalLine.drawNotOptimized(ctx,
            super.getXP1, super.getYP1, super.getXP2, super.getYP2,
            this.#color);
    }

    // This method does not optimize the drawings.
    // It only uses the pure line formula
    static drawNotOptimized(ctx: CanvasRenderingContext2D,
        x1: number,y1: number,x2: number,y2: number,
        color: string) {
        let m = (y2-y1) / (x2-x1);
        let b = y1 - (m*x1);
        let deltaX = (x2 - x1) < 0 ?  x1-x2 : x2-x1;
        let deltaY = (y2 - y1) < 0 ? y1-y2 : y2-y1;
        
        if (deltaX > deltaY) {
            if (x1 < x2) {
                for (let x = x1; x <= x2; x++) {
                    let y = Math.floor((m*x) + b);
                    GraphicalPoint.staticDraw(ctx,x,y,color);
                }
            }
            else {
                for (let x = x1; x >= x2; x--) {
                    let y = Math.floor((m*x) + b);
                    GraphicalPoint.staticDraw(ctx,x,y,color);
                }
            }
        }
        else {
            if (y1 < y2) {
                for (let y=y1; y<=y2;y++) {
                    let x = Math.floor((y-b)/m);
                    GraphicalPoint.staticDraw(ctx,x,y,color);
                }
            }
            else {
                for (let y=y1; y>=y2;y--) {
                    let x = Math.floor((y-b)/m);
                    GraphicalPoint.staticDraw(ctx,x,y,color);
                }
            }
        }
    }
}