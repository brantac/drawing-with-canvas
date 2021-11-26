import GraphicalLine from "./GraphicalLine.js";
import GraphicalCircle from "./GraphicalCircle.js";
import Circle from "./Circle.js";
import GraphicalPoint from "./GraphicalPoint.js";

export default class FiguraComum {
    static conectCenters (ctx, centers, color) {
        let centerA=[], centerB=[];
        for (let i=0; i<=centers.length-2; i++) {
            centerA = centers[i];
            centerB = centers[i+1];
            GraphicalLine.drawNotOptimized(ctx,
                centerA[0], centerA[1],
                centerB[0], centerB[1],
                color);
        }

        // Get the center of the last and the first circles
        let [lastCircleX, lastCircleY] = centers[[centers.length-1]];
        let [firstCircleX,firstCircleY] = centers[0];

        // Draw a line from the last center to the first one
        GraphicalLine.drawNotOptimized(ctx,
            lastCircleX, lastCircleY,
            firstCircleX,firstCircleY,
            color);
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} radius 
     * @param {[number,number]} center 
     * @param {string} color 
     */
    static draw(ctx,radius,center=[],color) {
        // let x,y,alfa;
        let centerX,centerY;
        // let circlesCenter = [];
        let intPoints = [];

        [centerX,centerY] = center;
        intPoints = FiguraComum.getIntersectionPoints(center, radius);
        GraphicalCircle.drawCircleNotOptimized(ctx,radius,center,color);
        // for(let i=0; i<=359;i=i+60) {
        //     alfa = Circle.degreesToRadians(i);
        //     x = centerX + radius * Math.cos(alfa);
        //     y = centerY + radius * Math.sin(alfa);
        //     circlesCenter.push([x,y]);
        //     GraphicalCircle.drawCircleNotOptimized(ctx,radius,[x,y],color);
        //     GraphicalLine.drawNotOptimized(ctx,
        //         center[0],
        //         center[1],
        //         x, y, 'blue');
        // };
        // FiguraComum.conectCenters(ctx,circlesCenter,'blue');
        // FiguraComum.conectCenters(ctx,intPoints,'blue');
        // intPoints.forEach(p => {
        //     GraphicalPoint.draw(ctx,p[0],p[1],'black');
        // });
        for (const point of intPoints) {
            GraphicalPoint.draw(ctx,point[0],point[1],'black');
        }
    }

    /**
     * 
     * @param {[number,number]} center 
     * @param {number} radius 
     * @returns {[[number,number]]}
     */
    static getIntersectionPoints(center, radius) {
        let points = [];
        // Angles where each intersection happens
        let anglesDegrees = [30,90,150,210,270,330];
        anglesDegrees.forEach(angle => {
            points.push(
                FiguraComum.computeIntersectionPointBetweenCircles(center, radius, angle)
            );
        });
        return points;
    }

    /**
     * 
     * @param {[number,number]} centerMainCircle 
     * @param {number} radius Radius of the inner circle
     * @param {number} angleDegrees Angle of the intersection point in degrees
     * @returns {number[]}
     */
    static computeIntersectionPointBetweenCircles(
        centerMainCircle,
        radius,
        angleDegrees) {
            let x, y, xc, yc, angleRadians;
            angleRadians = Circle.degreesToRadians(angleDegrees);
            [xc, yc] = centerMainCircle;
            // x = xc + 2 * radius * Math.pow(Math.cos(angle),2);
            // y = yc + 2 * radius * Math.cos(angle) * Math.sin(angle);
            x = xc + (2 * Math.pow(Math.cos(angleRadians),2)) / radius;
            y = yc + (2 * Math.cos(angleRadians) * Math.sin(angleRadians)) / radius;
            return [x, y];
    }

    static getQuadrante(p) {
        let q = null, x, y;
        let quadrantes = [1,2,3,4,'x','y'];
        [x, y] = p;

        if (x != 0 | y != 0) {
            if (x == 0) {q = quadrantes[5];}
            else if (y == 0) {q = quadrantes[4];}
            else if (x > 0) {
                if (y > 0) {q = quadrantes[0];}
                else {q = quadrantes[3];}
            }
            else { // x < 0
                if (y > 0) {q = quadrantes[1];}
                else {q = quadrantes[2];}
            }
        }

        return q;
    }
}
