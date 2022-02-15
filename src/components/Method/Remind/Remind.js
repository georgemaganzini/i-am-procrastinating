import React from 'react';
import remind from '../../../assets/remind.svg'

function METHODNAME(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Use Goal Reminders</h1>
            <img
                src={remind}
                alt={'remind'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make your goals visible</li>
                <li className='card-li'>Look at your goals</li>
                <li className='card-li'>Read an inspiring quote</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default METHODNAME;