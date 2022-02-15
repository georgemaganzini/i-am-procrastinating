import React from 'react';
import reward from '../../../assets/reward.svg'

function Reward(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Create a Reward</h1>
            <img
                src={reward}
                alt={'reward'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make the situation more rewarding</li>
                <li className='card-li'>Reward your success</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Reward;