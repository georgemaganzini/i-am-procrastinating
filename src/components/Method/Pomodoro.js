import React from 'react';
import styled from 'styled-components';
import womanTyping from '../../assets/pomo.svg';

// const Card = styled.div`
//     background-color: slategray;
// `

function Pomodoro(props) {
    return (
        <>
            <img
                src={womanTyping}
                alt={'woman-writing'}
                className="svg">
            </img>
            <button>Pomodoro 🍅</button>
        </>

    );
}

export default Pomodoro;