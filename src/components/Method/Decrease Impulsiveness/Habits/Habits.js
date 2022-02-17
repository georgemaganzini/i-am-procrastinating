import React from 'react';
import habits from '../../../../assets/habits.svg'

function Habits(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Habits & Routines</h1>
            <img
                src={habits}
                alt={'habits'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Routines and habits are powerful forces that can help circumvent impulsiveness</li>
                <li className='card-li'>Can part of this be turned into a habit or added to an existing routine?</li>
                <li className='card-li'>Separate work and play, e.g. only do work in your work area and relax in a different area</li>
                <li className='card-li'>Schedule leisure before work. Sometimes it can be best to satisfy needs before they get to intense to pull you from work</li>
            </ul>
            <div>
                <button className='green-button'>Okay! 👍</button>
            </div>
        </div>
    );
}

export default Habits;