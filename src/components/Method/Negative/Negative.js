import React from 'react';
import negative from '../../../assets/negative.svg'

function Negative(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Use Negative Pairing</h1>
            <img
                src={negative}
                alt={'negative'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Pair temptations with undesireable images</li>
                <li className='card-li'>Imageine a disastrous outcome</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Negative;