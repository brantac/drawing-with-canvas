import Point from './PointTS';

export default class GraphicalPoint extends Point {
    #color: string;
    #name: string;
    #type: string;

    constructor(x: number, y: number, color: string, name: string = "Point") {
        super(x,y);
        this.#color = color;
        this.#name = name;
        this.#type = "GraphicalPoint";
    }

    movePoint (p: number[], ctx: CanvasRenderingContext2D,
        backgroundColor = "white") {
        let tempX, tempY;
        tempX = super.getX;
        tempY = super.getY;
        super.setX = p[0];
        super.setY = p[1];
        this.#repaint(ctx);
        GraphicalPoint.staticDraw(ctx,tempX,tempY,backgroundColor);
    }

    set setColor(color: string) {
        this.#color = color;
    }

    set setName (name: string) {
        this.#name = name;
    }

    get getName () {
        return this.#name;
    }

    get getType () {
        return this.#type;
    }
    
    setColorRepaint (color: string, ctx: CanvasRenderingContext2D) {
        this.#color = color;
        this.#repaint(ctx);
    }
    
    static staticDraw(ctx: CanvasRenderingContext2D,
        x: number, y: number, color: string) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x,y,1,1,Math.PI/4,0,2*Math.PI);
        ctx.fill()
    }

    draw(ctx: CanvasRenderingContext2D) {
        GraphicalPoint.staticDraw(ctx,this.getX,this.getY,this.#color);
    }

    #repaint(ctx: CanvasRenderingContext2D) {
        GraphicalPoint.staticDraw(ctx,this.getX,this.getY,this.#color);
    }
}