import React from 'react';
import visualize from '../../../../assets/visualize.svg'
import LogForm from '../../../LogForm/LogForm';

function Visualize(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Make Progress Visual</h1>
            <img
                src={visualize}
                alt={'visualize'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make goals visible, think bulletin board, Post-it notes, etc. </li>
                <li className='card-li'>Track your progress with an app or notebook</li>
            </ul>
            <LogForm parent="Visualize" color="green"/>
        </div>
    );
}

export default Visualize;