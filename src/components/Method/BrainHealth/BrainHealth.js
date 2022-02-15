import React from 'react';
import brainhealth from '../../../assets/brainhealth.svg'

function BrainHealth(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Keep Your Brain Healthy</h1>
            <img
                src={brainhealth}
                alt={'brainhealth'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Sleep</li>
                <li className='card-li'>Excercise</li>
                <li className='card-li'>Take genuine breaks</li>
                <li className='card-li'>Reduce your commitments</li>
            </ul>
            <div>
                try an NSDR
            </div>
        </div>
    );
}

export default BrainHealth;