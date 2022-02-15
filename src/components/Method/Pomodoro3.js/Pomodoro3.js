import React from 'react';
import styled from 'styled-components';
import womanTyping from '../../../assets/pomo.svg';

const ButtonWrapper = styled.div`
    margin-bottom: 20px;
    margin-left: 30px;
`
function Pomodoro(props) {
    return (
        <div className='card'>
            <img
                src={womanTyping}
                alt={'woman-writing'}
                className="pomo-svg">
            </img>
            <h1 className='green-h1'>Try a Pomodoro</h1>
            <ul className='card-ul'>
            <li className='card-li'>Commit to working on a task for a set period of time, then take a break!</li>
            <li className='card-li'>Focus on process not product, i.e. "I will put 25 minutes of work into this
                 task", not "I will work on this task until complettion".</li>
            </ul>
            <ButtonWrapper>
                <button className='button-pomo'> 10:00   🍅</button>
                <button className='button-pomo'> 25:00   🍅</button>
                <button className='button-pomo'> 50:00   🍅</button>
            </ButtonWrapper>
        </div>
    );
}

export default Pomodoro;