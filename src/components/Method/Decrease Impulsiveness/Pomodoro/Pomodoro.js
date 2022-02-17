import React from 'react';
import pomo1 from '../../../../assets/pomo.svg';
import pomo2 from '../../../../assets/pomo2.svg';
import Timer from './Timer'
import { useState} from 'react';

function Pomodoro(props) {
    const [showButtons, setShowButtons] = useState(true)
    const [seconds, setSeconds] = useState(600)

    const handleClick = (seconds) => {
        setSeconds(seconds)
        setShowButtons(false)
    }

    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Try a Pomodoro</h1>
            {showButtons ?
                <>
                    <img
                        src={pomo1}
                        alt={'guy typing'}
                        className="undraw-pic">
                    </img>
                    <ul className='card-ul'>
                        <li className='card-li'>Commit to working on a task for a set period of time, then take a break!</li>
                        <li className='card-li'>Focus on <span className='underline green-underline'>process not product</span> , i.e. "I will put 25 minutes of work into this
                            task", rather than "I will complete this task".</li>
                    </ul>
                    <div className='button-wrapper'>
                        <button className='green-button' onClick={()=>handleClick(600)}> 10:00   🍅</button>
                        <button className='green-button' onClick={()=>handleClick(1500)}> 25:00   🍅</button>
                        <button className='green-button' onClick={()=>handleClick(3000)}> 50:00   🍅</button>
                    </div>
                </> :
                <>
                    <Timer duration={seconds}/>
                    <img
                        src={pomo2}
                        alt={'guy pointing at clock'}
                        className="undraw-pic">
                    </img>
                    <button className='green-button' onClick={()=> setShowButtons(true)}>
                        Go Back
                    </button>
                </>
            }

        </div>
    );
}

export default Pomodoro;