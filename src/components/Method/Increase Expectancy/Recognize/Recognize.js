import React from 'react';
import recognize from '../../../../assets/recognize.svg'
import LogForm from '../../../LogForm/LogForm';
import { useState} from 'react';

function Recognize(props) {
    const [flipCard, setFlipCard] = useState(false);


    return (
        <div className='card'>
            <h1 className='card-title purple-h1'>Recognize Success</h1>
            <img
                src={recognize}
                alt={'recognize'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Pay attention to your wins, use success spirals to achieve one goal after another</li>
                <li className='card-li'>Recognize small improvements as victories and use them to gain confidence towards your next goal</li>
                <li className='card-li'>Tight feedback loops are helpful but in their absence mindfulness is especially important</li>
            </ul>
            <h4 className='recognize-h4'>What was your last win, big or small?</h4>
            <LogForm parent="Recognize" color="purple"/>
        </div>
    );
}

export default Recognize;