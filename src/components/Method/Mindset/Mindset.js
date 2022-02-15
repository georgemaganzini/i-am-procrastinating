import React from 'react';
import mindset from '../../../assets/mindset.svg'

function Mindset(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Check Your Mindset</h1>
            <img
                src={mindset}
                alt={'mindset'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Qualities and skills are cultivated through effort</li>
                <li className='card-li'>Nothing is carved in stone</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Mindset;