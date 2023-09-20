import NeuralNetwork from './network';
import { lerp, getRGBA } from './utility';
function visualizersetup(networkCtx) {
    networkCtx.canvas.width = 400;
    networkCtx.canvas.height = 400;
    networkCtx.createCanvas(networkCtx.canvas.width, networkCtx.canvas.height);


}


class Visualizer {
    static drawNetwork(networkCtx, network) {
        networkCtx.background(0);

        // console.log(network);
        const margin = 50;
        const left = margin;
        const top = margin;

        const width = networkCtx.canvas.width - margin * 2;
        const height = networkCtx.canvas.height - margin * 2;
        // console.log(width, height);
        // networkCtx.line(0, 0, width, height);
        const levelHeight = height / network.levels.length;

        for (let i = network.levels.length - 1; i >= 0; i--) {
            const levelTop = top + lerp(height - levelHeight, 0,
                network.levels.length == 1 ? 0.5 : i / (network.levels.length - 1));
            this.drawLevel(networkCtx, network.levels[i], left, levelTop,
                width, levelHeight, i == network.levels.length - 1 ? ['▲', '▼', '➤', '◀'] : []);
        }
    }
    static drawLevel(networkCtx, level, left, top, width, height, outputLabels) {
        // Clear the canvas

        const right = left + width;
        const bottom = top + height;
        const nodeRadius = 20;

        const { inputs, outputs, weights, bias } = level;

        networkCtx.drawingContext.setLineDash([7, 3]);

        for (let i = 0; i < inputs.length; i++) {
            for (let j = 0; j < outputs.length; j++) {
                networkCtx.stroke(getRGBA(weights[i][j]));
                networkCtx.strokeWeight(2);
                networkCtx.line(this.#getNodePos(inputs, i, left, right), bottom, this.#getNodePos(outputs, j, left, right), top);
            }
        }
        networkCtx.drawingContext.setLineDash([2, 3]);
        for (let i = 0; i < outputs.length; i++) {
            networkCtx.fill('black');
            const x = this.#getNodePos(outputs, i, left, right)
            networkCtx.noStroke();

            networkCtx.ellipse(x, top, nodeRadius); // Use ellipse to draw circles
            networkCtx.fill(getRGBA(outputs[i]));
            networkCtx.noStroke();
            networkCtx.ellipse(x, top, nodeRadius * 0.6); // Use ellipse to draw circles
            networkCtx.stroke(getRGBA(bias[i]));
            networkCtx.strokeWeight(1);
            networkCtx.ellipse(x, top, nodeRadius * 0.8); // Use ellipse to draw circles

            if (outputLabels[i]) {
                networkCtx.fill('black');
                networkCtx.textAlign('centre');
                networkCtx.stroke('yellow');
                networkCtx.text(outputLabels[i], x - nodeRadius * 0.3, top + nodeRadius * 0.18);
            }
        }
        networkCtx.strokeWeight(0);

        for (let i = 0; i < inputs.length; i++) {
            const x = this.#getNodePos(inputs, i, left, right);
            networkCtx.fill('black');
            networkCtx.ellipse(x, bottom, nodeRadius); // Use ellipse to draw circles
            networkCtx.fill(getRGBA(inputs[i]));
            networkCtx.ellipse(x, bottom, nodeRadius * 0.8); // Use ellipse to draw circles
        }
        networkCtx.drawingContext.setLineDash([]);

    }
    static #getNodePos(nodes, index, left, right) {
        return lerp(left, right, nodes.length == 1 ? 0.5 : index / (nodes.length - 1))
    }

}


export { visualizersetup, Visualizer };