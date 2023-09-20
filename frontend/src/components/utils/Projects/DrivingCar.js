import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
import FreeCar from './freecar';
import css from './DrivingCar.css';
import { visualizersetup } from './visualizer';
import refresh from '../../../../static/images/refresh.png';
import savebtn from '../../../../static/images/save.png';
import deletebtn from '../../../../static/images/delete.png';
import { setup, visualizer, mouseClicked, keyPressed, keyReleased, draw, save, deleteBrain, randomTraffic } from './Sketch';
function DrivingCar() {
    const sketchRef = useRef();
    let preventDefault = true; // Flag to control preventing default behavior
    let p5Instance = null; // Store the p5 instance
    let p5Instance2 = null; // Store the p5 instance
    const networkCanvasRef = useRef();

    useEffect(() => {

        p5Instance = new p5((p) => {
            p.setup = () => {
                setup(p);
            };
            p.draw = () => {
                draw(p); // Call the draw function from Sketch

            };
            p.mouseClicked = () => {
                // mouseClicked(p); // Call the mouseClicked function from Sketch
            };
            p.keyPressed = () => {
                keyPressed(p); // Call the keyPressed function from Sketch
            };
            p.keyReleased = () => {
                keyReleased(p); // Call the keyReleased function from Sketch
            };
        }, sketchRef.current);

        p5Instance2 = new p5((p) => {
            p.setup = () => {
                visualizersetup(p);
            };
            p.draw = () => {
                visualizer(p);
            };
        }, networkCanvasRef.current);

        // Add a global keypress event listener
        const handleGlobalKeyPress = (event) => {
            if (preventDefault) {
                event.preventDefault(); // Prevent default behavior for the specified key(s)
            }
        };

        // Use useEffect to start the interval when the component mounts
        const executeEverySecond = () => {
            randomTraffic();
        };

        const intervalId = setInterval(executeEverySecond, 3000);

        // Add the global keypress event listener
        window.addEventListener('keydown', handleGlobalKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            clearInterval(intervalId);
            window.removeEventListener('keydown', handleGlobalKeyPress);
            // Optionally, you can also destroy the p5.js instance when unmounting
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
        <div className={css.sketch}>
            <div ref={sketchRef} className={css.canvascar}></div>
            {/* <canvas ref={networkCanvasRef}></canvas> */}
            <div className={css.verticalButtons}>
                <button onClick={refreshCanvas}>
                    <img src={refresh} />
                </button>
                <button onClick={saveCar}>
                    <img src={savebtn} />
                </button>
                <button onClick={deleteCar}>
                    <img src={deletebtn} />
                </button>
            </div>
            <div ref={networkCanvasRef} className={css.canvascar}></div>
        </div>
    );
}

export default DrivingCar;
