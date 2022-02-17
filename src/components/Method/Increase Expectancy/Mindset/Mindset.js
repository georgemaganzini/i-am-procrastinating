import React from 'react';
import mindset from '../../../../assets/mindset.svg'

function Mindset(props) {
    return (
        <div className='card'>
            <h1 className='card-title purple-h1'>Check Your Mindset</h1>
            <img
                src={mindset}
                alt={'mindset'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Qualities and skills are cultivated through effort</li>
                <li className='card-li'>Nothing is carved in stone</li>
                <li className='card-li'>Passions can broaden, change, or grow</li>
            </ul>
            <div>
                <button className='purple-button'>Okay! 👍</button>
            </div>
        </div>
    );
}

export default Mindset;