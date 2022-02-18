import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import About from './About';


const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 10;
	cursor: pointer;

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
                <li><div>Home</div></li>
                <li>
                    <About />
                </li>
                <li>
                    <Contact />
                </li>
            </Ul>
    );
}

export default RightNav;