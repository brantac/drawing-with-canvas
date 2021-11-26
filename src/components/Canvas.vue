<template>
    <h3>Escolha alguma das opções abaixo para desenhar</h3>
    <h4 class="alert-text">Para limpar o canvas, atualize a página!</h4>

    <!-- Menu de opções de desenho -->
    <div class="drawing-options">
        <button class="btn-options"
            @click="setDrawingType" value="point">Ponto</button>
    </div>
    <div class="drawing-options">
        <button class="btn-options"
            @click="setDrawingType" value="line">Retas</button>
    </div>
    <div class="drawing-options">
        <button class="btn-options"
            @click="setDrawingType" value="circle">Circulo</button>
    </div>
    <div class="drawing-options">
        <button class="btn-options"
            @click="setDrawingType" value="figura-comum">Figura Comum</button>
    </div>
    <!-- /Menu de opções de desenho -->

    <!-- Canvas -->
    <canvas ref="canvas" id="canvas" width="300" height="300"
        @click="draw"></canvas>
    <!-- /Canvas -->
    
    <div class="input-group">
        <label>X: </label>
        <input type="text" v-model="x">
    </div>

    <div class="input-group">
        <label>Y: </label>
        <input type="text" v-model="y">
    </div>
    <button @click="draw">Desenhar ponto</button>
</template>

<script>
import { onMounted, ref } from 'vue';
// import GraphicalPoint from '../assets/js/GraphicalPoint';
import GraphicalPoint from '../assets/js/GraphicalPointTS';
// import GraphicalLine from '../assets/js/GraphicalLine';
import GraphicalLine from '../assets/js/GraphicalLineTS';
// import GraphicalCircle from "../assets/js/GraphicalCircle";
import GraphicalCircle from "../assets/js/GraphicalCircleTS";
// import FiguraComum from "../assets/js/FiguraComum";
import FiguraComum from "../assets/js/FiguraComumTS";

export default {
    name: 'Canvas',
    setup() {
        // Creating ref's makes the objects reactive
        const canvas = ref(null);
        const x = ref(null);
        const y = ref(null);
        const p1 = ref({x: null, y: null});
        const p2 = ref({x: null, y: null});
        const color = ref('red');
        const ctx = ref(null);
        const drawingMode = ref(null);
        const supportedDrawings = ['point','line','circle','figura-comum'];
        const hasUserClickedCanvasOnce = ref(false);
        
        const getContext = onMounted(() => {
            ctx.value = canvas.value.getContext('2d');
        });

        // Functionalities specific to the UI
        // (This will be migrated to a new Vue Component!)
        const setDrawingType = (e) => {
            let drawingType = e.target.value;
            if (supportedDrawings.includes(drawingType)) {
                let currentDrawingModeSelected = document.querySelector('.active-type');
                if (currentDrawingModeSelected) currentDrawingModeSelected.classList.remove('active-type');
                e.target.classList.add('active-type');
                drawingMode.value = drawingType;
            }
        }

        const drawPoint = (e) => {
            let coordinates = getMouseCoordinates(e);
            x.value = coordinates.x;
            y.value = coordinates.y;
            // GraphicalPoint.staticDraw(ctx.value, x.value, y.value, color.value);
            const p1 = new GraphicalPoint(x.value,y.value,color.value);
            p1.draw(ctx.value);
        };

        const drawLine = (e) => {
            let coordinates = getMouseCoordinates(e);
            if (!hasUserClickedCanvasOnce.value) {
                hasUserClickedCanvasOnce.value = true;
                x.value = coordinates.x;
                y.value = coordinates.y;
                p1.value.x = coordinates.x;
                p1.value.y = coordinates.y;
            }
            else {
                hasUserClickedCanvasOnce.value = false;
                x.value = coordinates.x;
                y.value = coordinates.y;
                p2.value.x = coordinates.x;
                p2.value.y = coordinates.y;
                // Desenhar com o método estático da classe Reta
                // Gráfica
                // GraphicalLine.drawNotOptimized(ctx.value,
                //     p1.value.x,p1.value.y,
                //     p2.value.x,p2.value.y,
                //     color.value);
                // Desenhar com uma instancia da classe Reta Gráfica
                const r1 = new GraphicalLine(p1.value.x,p1.value.y,
                    p2.value.x,p2.value.y,"r1",color.value);
                r1.draw(ctx.value);

                p1.value.x = 0;
                p1.value.y = 0;
                p2.value.x = 0;
                p2.value.y = 0;
            }
        };

        const drawCircle = (e) => {
            let center=[], p=[], radius;
            let coordinates = getMouseCoordinates(e);
            if (!hasUserClickedCanvasOnce.value) {
                hasUserClickedCanvasOnce.value = true;
                p1.value.x = coordinates.x;
                p1.value.y = coordinates.y;
            }
            else {
                hasUserClickedCanvasOnce.value = false;
                p2.value.x = coordinates.x;
                p2.value.y = coordinates.y;
                center = [p1.value.x,p1.value.y];
                p = [p2.value.x, p2.value.y];
                radius = GraphicalCircle.computeRadius(center,p);
                // Desenhar círculo com o método estático
                // GraphicalCircle.drawCircleNotOptimized(ctx.value,
                //     radius, center,
                //     color.value);
                // Desenhar círculo o método de instancia
                const c1 = new GraphicalCircle(center[0], center[1],
                radius, color.value, "c1");
                c1.draw(ctx.value);

                p1.value.x = 0;
                p1.value.y = 0;
                p2.value.x = 0;
                p2.value.y = 0;
            }
        };

        const drawFiguraComum = (e) => {
            let center=[], p=[], radius;
            let coordinates = getMouseCoordinates(e);
            if (!hasUserClickedCanvasOnce.value) {
                hasUserClickedCanvasOnce.value = true;
                p1.value.x = coordinates.x;
                p1.value.y = coordinates.y;
            }
            else {
                hasUserClickedCanvasOnce.value = false;
                p2.value.x = coordinates.x;
                p2.value.y = coordinates.y;
                center = [p1.value.x,p1.value.y];
                p = [p2.value.x, p2.value.y];
                // Desenhar com método estático
                radius = GraphicalCircle.computeRadius(center,p);
                // FiguraComum.draw(ctx.value,
                //     radius, center,
                //     color.value);
                // Desenhar com método de instancia
                const fig1 = new FiguraComum(center[0],center[1],radius,
                color.value,"figura 1");
                fig1.draw2(ctx.value);
                p1.value.x = 0;
                p1.value.y = 0;
                p2.value.x = 0;
                p2.value.y = 0;
            }
        };

        const draw = (e) => {
            if (drawingMode.value == 'point') {
                // chamar desenhar ponto
                drawPoint(e);
            }
            else if (drawingMode.value == 'line') {
                // chamar desenhar reta
                drawLine(e);
            }
            else if (drawingMode.value == 'circle') {
                drawCircle(e);
            }
            else if (drawingMode.value == 'figura-comum') {
                drawFiguraComum(e);
            }
        };

        const getMouseCoordinates = (e) => {
            return {x: e.offsetX, y: e.offsetY};
        };

        return {canvas, x, y, getContext, hasUserClickedCanvasOnce,
            p1, p2, ctx, getMouseCoordinates,
            setDrawingType, draw };
    }
}
</script>

<style>
#canvas {
    border: 1px gray solid;
    border-radius: 4px;
}
/* Menu component */
button.btn-options {
    font-weight: 700;
    letter-spacing: 0.5px;
    background-color: white;
    color: rgba(255, 171, 171, 0.8);
    border: none;
    border-bottom: 1px solid white;
    cursor: pointer;
    padding: 8px 16px;
    margin: 0 0 8px 0;
}
button.btn-options:hover,
button.active-type {
    background-color: rgba(255, 247, 247, 0.8);
    border-bottom: 1px solid rgba(255, 171, 171, 0.8);
}
.alert-text {
    color:salmon;
}
</style>