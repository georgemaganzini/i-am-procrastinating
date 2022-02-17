import React from 'react';
import supression from '../../../../assets/supression.svg'

function Suppression(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1 long'>Stop Supressing Thoughts</h1>
            <img
                src={supression}
                alt={'supression'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Do not try to bury or supress your temptations or distractions, it doesn't work!</li>
                <li className='card-li'>Acknowledge them so that you can begin to deal with them logically</li>
                <li className='card-li'></li>
            </ul>
            <div>
                <button className='green-button'>Okay! 👍</button>
            </div>
        </div>
    );
}

export default Suppression;