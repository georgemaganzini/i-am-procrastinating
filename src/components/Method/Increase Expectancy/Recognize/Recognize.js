import React from 'react';
import recognize from '../../../../assets/recognize.svg'

function Recognize(props) {
    return (
        <div className='card'>
            <h1 className='card-title yellow-h1'>Recognize Success</h1>
            <img
                src={recognize}
                alt={'recognize'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Pay attention to your wins then use success spirals to achieve one goal after another</li>
                <li className='card-li'>Recognize small improvements as victories and use them to gain confidence towards your next goal</li>
                <li className='card-li'>Tight feedback loops are helpful but in their absence mindfulness is especially important</li>
                <li className='card-li'>Keep a daily log of successes and achievements</li>
            </ul>
            <div>
                What was your last success? Big or small.
            </div>
        </div>
    );
}

export default Recognize;