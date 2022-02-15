import React from 'react';
import recognize from '../../../assets/recognize.svg'

function Recognize(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Recognize Success</h1>
            <img
                src={recognize}
                alt={'recognize'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Achieve one goal after another</li>
                <li className='card-li'>Recognize small improvements as victories</li>
                <li className='card-li'>Keep a daily log</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Recognize;