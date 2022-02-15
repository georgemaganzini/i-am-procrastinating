import React from 'react';
import plan from '../../../assets/plan.svg'

function METHODNAME(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Plan for the Worst, Hope for the Best</h1>
            <img
                src={plan}
                alt={'plan'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>What could go wrong?</li>
                <li className='card-li'>Draw on past experiences</li>
                <li className='card-li'>Make a backup plan</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default METHODNAME;