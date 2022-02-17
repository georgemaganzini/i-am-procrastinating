import React from 'react';
import competition from '../../../../assets/competition.svg'
import Timer from "react-compound-timerv2";
import { useState } from 'react';

function Competition(props) {
    const [isRunning, setIsRunning] = useState(false);

    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Create Competition</h1>
            <img
                src={competition}
                alt={'competition'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make the task a competition against yourself or others</li>
                <li className='card-li'>Turn it into a game, make it fun!</li>

            </ul>
            <div className='card-bottom'>
            <h4 className='speedrun-h4'>MAKE IT A SPEEDRUN?!</h4>
                <Timer
                    startImmediately={false}
                    onStart={() => setIsRunning(!isRunning)}
                    onPause={() => setIsRunning(!isRunning)}
                >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <button className='blue-button' onClick={()=> isRunning ? pause() : start()}>
                            <Timer.Hours />:
                            <Timer.Minutes />:
                            <Timer.Seconds />
                            {/* :<Timer.Milliseconds /> */}
                            {" "}⏱️
                        </button>
                    </React.Fragment>
                )}
                </Timer>
            </div>
        </div>
    );
}

export default Competition;