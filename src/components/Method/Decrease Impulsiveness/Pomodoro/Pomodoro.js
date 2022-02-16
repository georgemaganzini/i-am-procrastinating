import React from 'react';
import styled from 'styled-components';
import womanTyping from '../../../../assets/pomo.svg';

const ButtonWrapper = styled.div`
    margin-bottom: 20px;
    margin-left: 30px;
`
function Pomodoro(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Try a Pomodoro</h1>
            <img
                src={womanTyping}
                alt={'woman-writing'}
                className="undraw-pic">
            </img>
            <ul className='card-ul'>
            <li className='card-li'>Commit to working on a task for a set period of time, then take a break!</li>
            <li className='card-li'>Focus on <span className='underline green-underline'>process not product</span> , i.e. "I will put 25 minutes of work into this
                 task", rather than "I will complete this task".</li>
            </ul>
            <ButtonWrapper>
                <button className='green-button'> 10:00   🍅</button>
                <button className='green-button'> 25:00   🍅</button>
                <button className='green-button'> 50:00   🍅</button>
            </ButtonWrapper>
        </div>
    );
}

export default Pomodoro;