import React from 'react';
import remind from '../../../../assets/remind.svg'
import LogForm from '../../../LogForm/LogForm';

function Remind(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Use Goal Reminders</h1>
            <img
                src={remind}
                alt={'remind'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make your goals visible</li>
                <li className='card-li'>Look at your goals</li>
                <li className='card-li'>Read an inspiring quote</li>
            </ul>
            <LogForm parent="Remind" color="green"/>
        </div>
    );
}

export default Remind;