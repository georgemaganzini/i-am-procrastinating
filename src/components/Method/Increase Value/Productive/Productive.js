import React from 'react';
import productive from '../../../../assets/productive.svg'

function Productive(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1 long'>Productive Procrastination</h1>
            <img
                src={productive}
                alt={'productive'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Procrastinating by doing less-important work is better than procrastinating by doing nothing. Motivation can come easy when weβre avoiding something.</li>
                <li className='card-li'>What can you do by avoiding this?</li>
                <li className='card-li'>What can you avoid by doing this?</li>
                <li className='card-li'>For example: procrastinate on your portfolio by working on Project 4 π</li>
            </ul>
            <div>
                <button className='blue-button'>Okay! π</button>
            </div>
        </div>
    );
}

export default Productive;