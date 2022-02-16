import React from 'react';
import action from '../../../../assets/action.svg'

function Action(props) {
    return (
        <div className='card'>
            <h1 className='card-title yellow-h1'>Action is Required</h1>
            <img
                src={action}
                alt={'action'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Do you often feel eager to give up? Do you tend to see things as doomed to failure?</li>
                <li className='card-li'>Remember: lack of effort guarantees failure</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Action;