import React from 'react';
import habits from '../../../assets/habits.svg'

function Habits(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Create Routines and Habits</h1>
            <img
                src={habits}
                alt={'habits'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Can part of this be turned into a habit?</li>
                <li className='card-li'>Can part of this be added to an existing routine?</li>
                <li className='card-li'>Separate work and play</li>
                <li className='card-li'>Schedule leisure before work</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Habits;