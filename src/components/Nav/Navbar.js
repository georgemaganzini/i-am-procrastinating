import React from 'react';
import Burger from './Burger'
import ThemeToggle from '../ThemeToggle/ThemeToggle';



function Navbar() {
    return (
        <div className='nav'>
            <div className="logo">
            I Am Procrastinating
            </div>
            <ThemeToggle />
            <Burger />
        </div>
    );
}

export default Navbar;