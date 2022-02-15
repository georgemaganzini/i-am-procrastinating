import React from 'react';
import supression from '../../../assets/supression.svg'

function Suppression(props) {
    return (
        <div className='card'>
            <h1 className='green-h1 long'>Stop Supressing Thoughts</h1>
            <img
                src={supression}
                alt={'supression'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Do not force distractions out of your head</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Suppression;