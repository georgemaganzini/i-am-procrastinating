import React from 'react';
import contrast from '../../../../assets/contrast.svg'

function Contrast(props) {
    return (
        <div className='card'>
            <h1 className='card-title yellow-h1'>Contrast</h1>
            <img
                src={contrast}
                alt={'contrast'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Compare ideal state with current state</li>
                <li className='card-li'>Regularly and vividly imagine what you want to achieve</li>
                <li className='card-li'>Contrast what you want to achieve with where you are now</li>
                <li className='card-li'>View the current situation an obstacle that needs to be overcome to achieve your dreams</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Contrast;