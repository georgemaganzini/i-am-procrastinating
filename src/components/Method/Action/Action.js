import React from 'react';
import action from '../../../assets/action.svg'

function Action(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Action is Required</h1>
            <img
                src={action}
                alt={'action'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Remember: lack of effor guarantees failure</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Action;