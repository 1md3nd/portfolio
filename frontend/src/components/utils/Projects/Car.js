import Control from './controls';
import Sensor from './sensor';
import NeuralNetwork from './network';
import carpng from './car.png';
import { lerp, getIntersection, polyIntersect } from './utility';
export default class Car {
    constructor(x, y, widthCar, length, carType, color, maxSpeed = 3) {
        this.x = x;
        this.y = y;
        this.widthCar = widthCar;
        this.length = length;
        this.carAI = carType == 'AI';
        if (carType != 'traffic') {
            this.sensor = new Sensor(this);
            this.brain = new NeuralNetwork([this.sensor.rayCount, 7, 4]);

        }
        this.control = new Control(carType);
        this.speed = 0;
        this.acceleration = 0.5;
        this.maxSpeed = maxSpeed;
        this.carType = carType;
        this.friction = 0.05;
        this.angle = 0;
        this.polygon = [];
        this.damaged = false;
        this.color = color;
        this.alpha = 1;
    }
    update(roadBorders, traffic) {
        if (!this.damaged) {
            this.#moveCar();
            this.polygon = this.#createPolygon();
            this.damaged = this.#assertDamage(roadBorders, traffic);
        }
        if (this.sensor) {
            this.sensor.update(roadBorders, traffic);
            const offsets = this.sensor.readings.map(s => s == null ? 0 : 1 - s.offset);
            const outputs = NeuralNetwork.feedForward(offsets, this.brain);
            if (this.carAI) {
                this.control.up = outputs[0];
                this.control.down = outputs[1];
                this.control.right = outputs[2];
                this.control.left = outputs[3];
            }
        }
    }

    #assertDamage(roadBorders, traffic) {
        for (let i = 0; i < roadBorders.length; i++) {
            if (polyIntersect(this.polygon, roadBorders[i])) {
                return true;
            }
        };
        for (let i = 0; i < traffic.length; i++) {
            if (polyIntersect(this.polygon, traffic[i].polygon)) {
                return true;
            }
        };
        return false;
    }

    #createPolygon() {
        const points = [];
        const rad = Math.hypot(this.widthCar, this.length) / 2;
        const alpha = Math.atan2(this.widthCar, this.length);
        points.push({
            x: this.x - Math.sin(this.angle - alpha) * rad,
            y: this.y - Math.cos(this.angle - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(this.angle + alpha) * rad,
            y: this.y - Math.cos(this.angle + alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle - alpha) * rad
        });
        points.push({
            x: this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
            y: this.y - Math.cos(Math.PI + this.angle + alpha) * rad
        });
        return points;
    }
    #moveCar() {
        if (this.control.up) {
            this.speed += this.acceleration;
        }
        if (this.control.down) {
            this.speed -= this.acceleration;
        }
        if (this.speed != 0) {

            const flip = this.speed > 0 ? 1 : -1;
            if (this.control.left) {
                this.angle += 0.03 * flip;

            }
            if (this.control.right) {
                this.angle -= 0.03 * flip;
            }
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(p) {
        if (this.damaged) {
            p.fill(128, 128, 128, this.alpha * 255); // Grey color with alpha
        } else {
            p.fill(this.color[0], this.color[1], this.color[2], this.alpha * 255); // Your custom color with alpha
        }
        p.stroke(0);
        p.strokeWeight(1);
        p.smooth();
        p.beginShape();
        for (let i = 0; i < this.polygon.length; i++) {
            p.vertex(this.polygon[i].x, this.polygon[i].y);
        }
        p.endShape(p.CLOSE);
        if (this.sensor && this.alpha == 1) {
            // console.log(this.sensor.readings);
            this.sensor.draw(p);
        }
    }

}
