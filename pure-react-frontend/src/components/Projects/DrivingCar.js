import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import FreeCar from './freecar';
import { visualizersetup } from './visualizer';
import refresh from '../../assets/images/refresh.png';
import savebtn from '../../assets/images/save.png';
import deletebtn from '../../assets/images/delete.png';
import {
    setup,
    visualizer,
    draw,
    keyPressed,
    keyReleased,
    save,
    deleteBrain,
    randomTraffic
} from './Sketch';
import './DrivingCar.css'; // Make sure this path matches your structure

function DrivingCar() {
    const sketchRef = useRef();
    const networkCanvasRef = useRef();
    let preventDefault = true; // Flag to control preventing default behavior
    let p5Instance = null;
    let p5Instance2 = null;

    useEffect(() => {
        p5Instance = new p5((p) => {
            p.setup = () => {
                setup(p);
            };
            p.draw = () => {
                draw(p); // Call the draw function from Sketch
            };
            p.keyPressed = () => {
                keyPressed(p); // Call the keyPressed function from Sketch
            };
            p.keyReleased = () => {
                keyReleased(p); // Call the keyReleased function from Sketch
            };
        }, sketchRef.current);

        p5Instance2 = new p5((p2) => {
            p2.setup = () => {
                visualizersetup(p2);
            };
            p2.draw = () => {
                visualizer(p2);
            };
        }, networkCanvasRef.current);

        const handleGlobalKeyPress = (event) => {
            if (preventDefault) {
                event.preventDefault(); // Prevent default behavior for the specified key(s)
            }
        };

        const intervalId = setInterval(() => {
            randomTraffic();
        }, 3000);

        window.addEventListener('keydown', handleGlobalKeyPress);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('keydown', handleGlobalKeyPress);
            p5Instance.remove();
            p5Instance2.remove();
        };
    }, []);

    function saveCar() {
        save();
    }

    function deleteCar() {
        deleteBrain();
    }

    function refreshCanvas() {
        window.location.reload();
    }

    return (
        <div className="sketch">
            <div ref={sketchRef} className="canvascar"></div>
            <div className="verticalButtons">
                <div className="btn_text">
                    <button onClick={refreshCanvas}>
                        <img src={refresh} alt="Refresh" />
                    </button>
                    <p>Reload if performing well</p>
                </div>
                <div className="btn_text">
                    <button onClick={saveCar}>
                        <img src={savebtn} alt="Save" />
                    </button>
                    <p>Save the current best car</p>
                </div>
                <div className="btn_text">
                    <button onClick={deleteCar}>
                        <img src={deletebtn} alt="Delete" />
                    </button>
                    <p>Delete the saved car</p>
                </div>
                <div className="btn_text">
                    <p>By saving the best cars several times, we can achieve a fully self-driving car.</p>
                </div>
                <div className="btn_text">
                    <p>Use a wide screen like a laptop or PC for better view.</p>
                </div>
            </div>
            <div ref={networkCanvasRef} className="network"></div>
        </div>
    );
}

export default DrivingCar;
