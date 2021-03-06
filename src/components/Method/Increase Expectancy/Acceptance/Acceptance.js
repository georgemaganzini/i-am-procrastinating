import React from 'react';
import acceptance from '../../../../assets/acceptance.svg'
import LogForm from '../../../LogForm/LogForm';

function Acceptance(props) {
    return (
        <div className='card'>
            <h1 className='card-title purple-h1'>Accept Procrastination</h1>
            <img
                src={acceptance}
                alt={'acceptance'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Accept that procrastination is normal, remember that you are human</li>
                <li className='card-li'>Recognize your own brain's tricks, e.g. "Just this once".</li>
                <li className='card-li'>Consider how you normally procrastinate. What distracts you? What do you do instead? What types of things do you put off?</li>
            </ul>
            <LogForm parent="Acceptance" color="purple"/>
        </div>
    );
}

export default Acceptance;