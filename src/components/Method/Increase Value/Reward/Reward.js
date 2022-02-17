import React from 'react';
import reward from '../../../../assets/reward.svg'

function Reward(props) {
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Create a Reward</h1>
            <img
                src={reward}
                alt={'reward'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make the situation more rewarding</li>
                <li className='card-li'>Reward your success with things such as bevereges, desserts, frivolous purchases and more</li>
                <li className='card-li'>Properly linking a reward to a behavior can create neurological cravings to help you engage in that behavior</li>
                <li className='card-li'>Variable schedule or unexpected rewards are powerful motivators, but require someone else to be in charge of rewarding you</li>
            </ul>
            <div>
                Input reward ideas / display previous
            </div>
        </div>
    );
}

export default Reward;