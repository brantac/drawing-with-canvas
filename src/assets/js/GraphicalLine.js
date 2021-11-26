import Line from './Line';
import GraphicalPoint from './GraphicalPoint';

export default class GraphicalLine extends Line {
    #color = null;

    constructor(x1,y1,x2,y2,name,color) {
        let p1 = {x: x1, y: y1};
        let p2 = {x: x2, y: y2};
        super(p1,p2,name);
        this.setColor(color);
    }

    set setColor(color) {
        if (color.length) {
            this.#color = color;
        }
        else {
            this.#color = 'black';
        }
    }

    get getColor() {
        return this.#color;
    }

    // This method does not optimize the drawings.
    // It only uses the pure line formula
    static drawNotOptimized(ctx,x1,y1,x2,y2,color) {
        let m = (y2-y1) / (x2-x1);
        let b = y1 - (m*x1);
        let deltaX = (x2 - x1) < 0 ?  x1-x2 : x2-x1;
        let deltaY = (y2 - y1) < 0 ? y1-y2 : y2-y1;
        
        if (deltaX > deltaY) {
            if (x1 < x2) {
                for (let x = x1; x <= x2; x++) {
                    let y = parseInt((m*x) + b);
                    GraphicalPoint.draw(ctx,x,y,color);
                }
            }
            else {
                for (let x = x1; x >= x2; x--) {
                    let y = parseInt((m*x) + b);
                    GraphicalPoint.draw(ctx,x,y,color);
                }
            }
        }
        else {
            if (y1 < y2) {
                for (let y=y1; y<=y2;y++) {
                    let x = parseInt((y-b)/m);
                    GraphicalPoint.draw(ctx,x,y,color);
                }
            }
            else {
                for (let y=y1; y>=y2;y--) {
                    let x = parseInt((y-b)/m);
                    GraphicalPoint.draw(ctx,x,y,color);
                }
            }
        }
    }
}