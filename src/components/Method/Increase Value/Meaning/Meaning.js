import React from 'react';
import meaning from '../../../../assets/meaning.svg'
import LogForm from '../../../LogForm/LogForm';

function Meaning(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Find Meaning</h1>
            <img
                src={meaning}
                alt={'meaning'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Having major goals that are personally meaningful can help us see the value of each small task and goal that is linked to them which will increase our motivation</li>
                <li className='card-li'>Set and review your major life goals</li>
                <li className='card-li'>Remind yourself how this task helps you achieve your larger goals</li>
            </ul>
            <LogForm parent="Meaning" color="blue"/>
        </div>
    );
}

export default Meaning;