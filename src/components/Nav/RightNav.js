import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;


    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    }
`

function RightNav({open}) {
    return (
            <Ul open={open}>
                <li>Home</li>
                <li>How To Use</li>
                <li>About</li>
                <li>Contact Me</li>
            </Ul>
    );
}

export default RightNav;