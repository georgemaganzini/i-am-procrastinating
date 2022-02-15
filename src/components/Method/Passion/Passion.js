import React from 'react';
import passion from '../../../assets/passion.svg'

function Passion(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Find Passion</h1>
            <img
                src={passion}
                alt={'passion'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Know what you are passionate about</li>
                <li className='card-li'>Is this connected</li>
                <li className='card-li'>Is this intrinsically motivating</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Passion;