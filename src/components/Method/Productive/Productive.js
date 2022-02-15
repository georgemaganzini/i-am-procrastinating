import React from 'react';
import productive from '../../../assets/productive.svg'

function Productive(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Use Productive Procrastination</h1>
            <img
                src={productive}
                alt={'productive'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>What can you avoid by doing this?</li>
                <li className='card-li'>What can you do by avoiding this?</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Productive;