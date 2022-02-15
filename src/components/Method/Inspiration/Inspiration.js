import React from 'react';
import inspiration from '../../../assets/inspiration.svg'

function Inspiration(props) {
    return (
        <div className='card'>
            <h1 className='yellow-h1'>Get Inspired</h1>
            <img
                src={inspiration}
                alt={'inspiration-pic'}
                className="inspiration-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Curabitur ac tristique mauris. Proin odio ipsum, bibendum at turpis quis, sollicitudin rutrum ligula. Nulla non sodales purus. Quisque congue diam nec cursus viverra. Sed et libero ipsum. Integer tortor sapien, </li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Inspiration;