import React from 'react';
import temptations from '../../../../assets/temptations.svg'

function Temptations(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Eliminate Temptations</h1>
            <img
                src={temptations}
                alt={'temptations'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Focus on the abstract aspects of your temptation, not the fun parts</li>
                <li className='card-li'>Eliminate it! (or hide it)</li>
                <li className='card-li'>Recognize what is tempting you</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Temptations;