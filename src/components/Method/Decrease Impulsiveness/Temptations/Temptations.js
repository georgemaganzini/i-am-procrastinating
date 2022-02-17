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
                <li className='card-li'>Recognize what in your environment is tempting you and eliminate it</li>
                <li className='card-li'>If it's something you cant remove, try increasing friction, e.g. block websites on your computer or phone during work hours or delete the app/bookmark</li>
                <li className='card-li'>Focus on the abstract aspects of your temptation, not the fun parts. Do the math on how much time it would take to finish that TV show, or how many calories are in that unhealthy food</li>
            </ul>
            <div>
                <button className='green-button'>Okay! 👍</button>
            </div>
        </div>
    );
}

export default Temptations;