import React from 'react';
import accountability from '../../../assets/accountability.svg'

function Accountability(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Add Accountability</h1>
            <img
                src={accountability}
                alt={'accountability'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Who knows about this?</li>
                <li className='card-li'>Can you make it public?</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Accountability;