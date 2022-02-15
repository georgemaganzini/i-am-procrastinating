import React from 'react';
import Pomodoro from './Pomodoro3';
import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <Pomodoro />
        </div>
    );
}

export default Card;