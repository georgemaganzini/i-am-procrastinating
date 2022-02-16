import React from 'react';
import meaning from '../../../../assets/meaning.svg'

function Meaning(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Find Meaning</h1>
            <img
                src={meaning}
                alt={'meaning'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Set and review your major life goals</li>
                <li className='card-li'>How does this connect?</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Meaning;