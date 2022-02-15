import React from 'react';
import pain from '../../../assets/pain.svg'

function Pain(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Make Failure Painful</h1>
            <img
                src={pain}
                alt={'pain'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>How will failure be painful?</li>
                <li className='card-li'>Make it more painful</li>
                <li className='card-li'>Make a costly bet with someone</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Pain;