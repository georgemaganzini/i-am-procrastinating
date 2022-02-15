import React from 'react';
import inspiration from '../../../assets/inspiration.svg'

function Inspiration(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Get Inspired</h1>
            <img
                src={inspiration}
                alt={'inspiration-pic'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Make your inspirations visible</li>
                <li className='card-li'>Know what inspires you and why</li>
                <li className='card-li'>Review your inspirations</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Inspiration;