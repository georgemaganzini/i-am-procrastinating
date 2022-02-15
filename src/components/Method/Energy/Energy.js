import React from 'react';
import energy from '../../../assets/energy.svg'

function Energy(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Get Some Energy</h1>
            <img
                src={energy}
                alt={'energy'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Get your blood moving</li>
                <li className='card-li'>Splash cold water on your face</li>
                <li className='card-li'>Eat well</li>
                <li className='card-li'>Energize your environment e.g. add music</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Energy;