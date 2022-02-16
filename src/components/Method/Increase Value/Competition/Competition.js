import React from 'react';
import competition from '../../../../assets/competition.svg'

function Competition(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Create Competition</h1>
            <img
                src={competition}
                alt={'competition'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Turn it into a game, make it fun!</li>
                <li className='card-li'>Compete against yourself or others</li>

            </ul>
            <div className='card-bottom'>
                <h4>SPEEDRUN?!</h4>
                <button className='blue-button'>00:00 ⏱️</button>
            </div>
        </div>
    );
}

export default Competition;