import Car from './Car';
import NeuralNetwork from './network';
import Road from './road';
import { lerp } from './utility';
import { Visualizer } from './visualizer';

const width = 400;
const height = 400;
const N = 300;

const config = {
    carColors: [[0, 0, 255]],
    carSizes: [30, 50],
    laneCenters: [0, 1, 2, 3, 4, 5,],
};

let road;
let bestCar;
let nCar;
let workingcars;
let cars = [];
let traffic = [];
let passed = false;
function save() {
    try {
        localStorage.setItem('bestBrain', JSON.stringify(bestCar.brain));
        console.log('Saved to localStorage');
    } catch (error) {
        console.error('Failed to save to localStorage', error);
    }
}

function deleteBrain() {
    localStorage.clear();
    console.log('LocalStorage cleared');
}

function setup(p) {
    p.createCanvas(width, height);
    road = new Road(width / 2, width * 0.9, 6);
    for (let i = 0; i < N; i++) {
        // cars.push(new Car(road.getLaneCentre(2), 100, 30, 50, "AI", [0, 0, 255]))
        cars.push(new Car(road.getLaneCentre(1), 100, 30, 50, "AI", [0, 0, 255]))
        // cars.push(new Car(road.getLaneCentre(0), 100, 30, 50, "Car", [0, 0, 255]))
    }

    if (localStorage.getItem('bestBrain')) {
        for (let i = 0; i < cars.length; i++) {

            cars[i].brain = JSON.parse(
                localStorage.getItem('bestBrain'));
            if (i != 0) {
                NeuralNetwork.mutate(cars[i].brain, .1);
            }
        }
    }
    traffic = [
        new Car(getRandomLaneCentre(), -300, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -150, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -300, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -500, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -800, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -900, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1090, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1100, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1210, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1310, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1310, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1310, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1310, 30, 50, 'traffic', [255, 0, 0], 2),
        new Car(getRandomLaneCentre(), -1310, 30, 50, 'traffic', [255, 0, 0], 2),
    ];

}

function getRandomColor() {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
}
function getRandomLaneCentre() {
    const randomLaneIndex = Math.floor(Math.random() * config.laneCenters.length);
    return road.getLaneCentre(config.laneCenters[randomLaneIndex]);
}
function mouseClicked(p) {

    traffic.push(new Car(getRandomLaneCentre(), bestCar.y - 400, 30, 50, 'traffic', getRandomColor(), Math.floor(Math.random() * 3) + 1));
}

function keyPressed(p) {
    bestCar.control.keyPressed(p);
}

function keyReleased(p) {
    bestCar.control.keyReleased(p);
}

function draw(p) {
    p.background(212, 212, 212);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }
    // console.log(cars.length);
    workingcars = cars.filter(car => !car.damaged);
    if (workingcars.length == 0) {
        // console.log('allcrasherd');
    }
    else {
        for (let i = 0; i < workingcars.length; i++) {
            workingcars[i].update(road.borders, traffic);
        }

        // console.log(workingcars.length);
        bestCar = cars.find(
            c => c.y == Math.min(...cars.map(c => c.y))
        );
    }
    if (bestCar.y < -2500) {
        passed = true;
    }
    p.translate(0, -bestCar.y + height * .7);

    road.draw(p);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(p);
    }
    for (let i = 0; i < cars.length; i++) {
        cars[i].alpha = 0.2;
        cars[i].draw(p);
    }
    bestCar.alpha = 1;
    bestCar.draw(p);

}
function visualizer(networkCtx) {
    Visualizer.drawNetwork(networkCtx, bestCar.brain);

}
function randomTraffic() {
    // for (let i = 0; i < 10; i++) {
    //     nCar = new Car(bestCar.x, bestCar.y, 30, 50, "AI", [0, 0, 255]);
    //     if (localStorage.getItem('bestBrain')) {

    //         nCar.brain = JSON.parse(
    //             localStorage.getItem('bestBrain'));
    //         NeuralNetwork.mutate(nCar.brain, Math.min(.18, Math.random()));
    //         cars.push(nCar);
    //     }
    // }
    if (passed) {
        // console.log('randomcar');
        mouseClicked();
    }
};


export { setup, visualizer, mouseClicked, keyPressed, keyReleased, draw, save, deleteBrain, randomTraffic };