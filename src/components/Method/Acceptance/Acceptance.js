import React from 'react';
import acceptance from '../../../assets/acceptance.svg'

function Acceptance(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Accept Procrastination</h1>
            <img
                src={acceptance}
                alt={'acceptance'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Don't trivialize "I'll only give in once."</li>
                <li className='card-li'>Log your procrastination habits.</li>
                <li className='card-li'>Remember that you are human</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Acceptance;