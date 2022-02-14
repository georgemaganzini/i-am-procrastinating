import React from 'react';
import styled from 'styled-components';
import pomo from '../../assets/pomo.svg';

// const Card = styled.div`
//     background-color: slategray;
// `

function Pomodoro(props) {
    return (
        <>  <img
                src={pomo}
                alt={'woman-writing'}
                className="svg">
            </img>
            <button>Pomodoro 🍅</button>
        </>

    );
}

export default Pomodoro;