import React from 'react';
import action from '../../../../assets/action.svg'
import cat from '../../../../assets/thumbsup.png'

function Action(props) {
    return (
        <div className='card'>
            <h1 className='card-title purple-h1'>Action is Required</h1>
            <img
                src={action}
                alt={'action'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Do you often feel eager to give up? Do you tend to see things as doomed to failure?</li>
                <li className='card-li'>Remember: lack of effort guarantees failure</li>
            </ul>
            <div>
                <button className='purple-button'>okay<img src={cat} alt="cat" className='cat'/></button>
            </div>
        </div>
    );
}

export default Action;