import React from 'react';
import energy from '../../../../assets/energy.svg'

function Energy(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Get Some Energy</h1>
            <img
                src={energy}
                alt={'energy'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>According to Steel, being too tired is one of the top reasons for procrastination</li>
                <li className='card-li'>Get your blood moving, exercise regularly</li>
                <li className='card-li'>Splash cold water on your face</li>
                <li className='card-li'>Eat healthy, avoid sugar and its crashes</li>
                <li className='card-li'>Energize your environment e.g. add music</li>
                <li className='card-li'>Plan around your energy, not your time</li>
                <li className='card-li'>Take genuinely relaxing breaks</li>
            </ul>
                <button className='blue-button'>Try NSDR</button>
               {/* https://www.youtube.com/watch?v=pL02HRFk2vo */}
        </div>
    );
}

export default Energy;