import React from 'react';
import contrast from '../../../assets/contrast.svg'

function Contrast(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Contrast</h1>
            <img
                src={contrast}
                alt={'contrast'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Compare ideal state with current state</li>
                <li className='card-li'>Visualize and contrast the present and future</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Contrast;