import React from 'react';
import pain from '../../../../assets/pain.svg'
import cat from '../../../../assets/thumbsup.png'

function Pain(props) {
    return (
        <div className='card'>
            <h1 className='card-title green-h1'>Make Failure Painful</h1>
            <img
                src={pain}
                alt={'pain'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>How will failure be painful?</li>
                <li className='card-li'>Make it more painful</li>
                <li className='card-li'>Make a costly bet with someone</li>
                <li className='card-li'>Set aside money you will lose if you don't achieve your goal, donate it to a charity you don't like if you fail</li>
            </ul>
            <div>
                <button className='green-button'>okay<img src={cat} alt="cat" className='cat'/></button>
            </div>
        </div>
    );
}

export default Pain;