import React from 'react';
import distractions from '../../../assets/distractions.svg'

function Distractions(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Eliminate Distractions</h1>
            <img
                src={distractions}
                alt={'distractions'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Recognize what is distracting you</li>
                <li className='card-li'>Eliminate it</li>
                <li className='card-li'>Hide it</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Distractions;