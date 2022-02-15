import React from 'react';
import PIC from '../../../assets/PIC'

function METHODNAME(props) {
    return (
        <div className='card'>
            <h1 className='COLOR-h1'>TITLE H1</h1>
            <img
                src={PIC}
                alt={'PIC'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'></li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default METHODNAME;