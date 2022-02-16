import React from 'react';
import bittersweet from '../../../../assets/bittersweet.svg'

function Bittersweet(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Mix Bitter & Sweet</h1>
            <img
                src={bittersweet}
                alt={'bittersweet'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Combine long-term interests with short-term gains, for example:</li>
                <li className='card-li'>Only let yourself watch your favorite show while you're on an exercise bike</li>
                <li className='card-li'>Only listen to a podcast, audiobook, or album while you're outside running</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Bittersweet;