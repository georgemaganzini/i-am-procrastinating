import React from 'react';
import goals from '../../../../assets/goals.svg'

function Goals(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Set a Goal</h1>
            <img
                src={goals}
                alt={'goals'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make goals: specific, measurable, and meaningful</li>
                <li className='card-li'>Approach goals are better than avoidance goals, e.g. "achieve this" not "avoid that"</li>
                <li className='card-li'>"For X minutes" not "finish task", process not product</li>
                <li className='card-li'>Can the goal be broken down into sub-goals?</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Goals;