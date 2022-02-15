import React from 'react';
import visualize from '../../../assets/visualize.svg'

function Visualize(props) {
    return (
        <div className='card'>
            <h1 className='green-h1'>Make Progress Visual</h1>
            <img
                src={visualize}
                alt={'visualize'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Track your progress</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Visualize;