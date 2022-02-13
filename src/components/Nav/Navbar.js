import React from 'react';
import styled from 'styled-components';
import Burger from './Burger'
// import image from '../../assets/5.png'


const Nav = styled.nav`
    width: 100%;
    /* height: 65px; */
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    /* background-color: #b8c0c8; */
    /* background-color: #cfcfcf; */
    /* background-color: #f8f8f8; */
    .logo {
        padding: 15px 0px 15px 15px;
        font-size: 18px;
    }


`

function Navbar() {
    return (
        <Nav>
            <div className="logo">
            I Am Procrastinating
            </div>
            <Burger />
        </Nav>
    );
}

export default Navbar;