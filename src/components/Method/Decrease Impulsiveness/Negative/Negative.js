import React from 'react';
import negative from '../../../../assets/negative.svg'

function Negative(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Use Negative Pairing</h1>
            <img
                src={negative}
                alt={'negative'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Use covert sensitization to pair temptations with undesireable images</li>
                <li className='card-li'>Vividly visualize a scenario that links your temptation with a disastrous outcome</li>
                <li className='card-li'>Imagine everything that could go wrong if you delay getting to work on a task</li>
            </ul>
            <div>
                <button className='green-button'>Okay! 👍</button>
            </div>
        </div>
    );
}

export default Negative;