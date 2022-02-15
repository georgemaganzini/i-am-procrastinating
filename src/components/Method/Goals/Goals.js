import React from 'react';
import goals from '../../../assets/goals.svg'

function Goals(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Set a Goal</h1>
            <img
                src={goals}
                alt={'goals'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>"Achieve this" not "avoid that"</li>
                <li className='card-li'>"For X minutes" not "finish task", process not product</li>
                <li className='card-li'>Break it down!</li>
                <li className='card-li'>Make goals: specific, realistic, and meaningful</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Goals;