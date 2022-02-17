import React from 'react';
import competition from '../../../../assets/competition.svg'
import Timer from "react-compound-timerv2";
import { useState } from 'react';

function Competition(props) {
    const [isRunning, setIsRunning] = useState(false);

    const toggleTimer = () =>{
        setIsRunning(!isRunning)
        console.log(isRunning)
    }

    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Create Competition</h1>
            <img
                src={competition}
                alt={'competition'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Turn it into a game, make it fun!</li>
                <li className='card-li'>Compete against yourself or others</li>

            </ul>
            <h4>SPEEDRUN?!</h4>
            <div className='card-bottom'>
                <Timer
                    startImmediately={false}
                    onStart={() => setIsRunning(!isRunning)}
                    onResume={() => setIsRunning(!isRunning)}
                    onPause={() => setIsRunning(!isRunning)}
                    onStop={() => setIsRunning(!isRunning)}
                    onReset={() => console.log("onReset hook")}
                >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <button className='blue-button' onClick={()=> isRunning ? pause() : start()}>
                            <Timer.Minutes />:
                            <Timer.Seconds />:
                            <Timer.Milliseconds /> ⏱️
                        </button>
                    </React.Fragment>
                )}
                </Timer>
            </div>
        </div>
    );
}

export default Competition;