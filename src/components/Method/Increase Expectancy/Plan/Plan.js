import React from 'react';
import plan from '../../../../assets/plan.svg'

function Plan(props) {
    return (
        <div className='card'>
            <div><h1 className='card-title yellow-h1 long'>Plan for the Worst</h1> <h1 className='card-title yellow-h1 long'>Hope for the Best</h1></div>

            <img
                src={plan}
                alt={'plan'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>What could go wrong?</li>
                <li className='card-li'>Draw on past experiences</li>
                <li className='card-li'>Make a backup plan</li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Plan;