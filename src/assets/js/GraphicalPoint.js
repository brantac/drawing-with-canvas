import Point from './Point';

export default class GraphicalPoint extends Point {
    #color = '';

    constructor(x, y, color) {
        super(x,y);
        this.#setGraphicalPointColor(color);
    }

    get graphicalPoint() {
        return [super.getX(), super.getY(), this.#color];
    }

    set graphicalPoint(gPoint) {
        super.setX(gPoint[0]);
        super.setY(gPoint[1]);
        this.#setGraphicalPointColor(gPoint[2]);
    }

    #setGraphicalPointColor(color) {
        if (color.length) {
            this.#color = color;            
        }
        else {
            this.#color = 'black';
        }
    }

    instanceDraw(ctx) {
        let [x, y, color] = this.graphicalPoint;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x,y,1,1,Math.PI/4,0,2*Math.PI);
        // ctx.stroke();
        ctx.fill()
    }
    
    static draw(ctx, x, y, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x,y,1,1,Math.PI/4,0,2*Math.PI);
        // ctx.stroke();
        ctx.fill()
    }
}