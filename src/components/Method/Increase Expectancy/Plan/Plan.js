import React from 'react';
import plan from '../../../../assets/plan.svg'

function Plan(props) {
    return (
        <div className='card'>
            <div><h1 className='card-title purple-h1 long'>Plan for the Worst</h1> <h1 className='card-title purple-h1 long'>Hope for the Best</h1></div>

            <img
                src={plan}
                alt={'plan'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Consider what could go wrong and anticipate difficulties and setbacks</li>
                <li className='card-li'>Are you generally over-optimistic or overly pessimistic?</li>
                <li className='card-li'>If you are over-optimistic, a healthy dose of pessimism can keep you from putting too little effort into the task</li>
                <li className='card-li'>If overly-pessimistic, expectancy needs to be increased rather than decreased</li>
                <li className='card-li'>Beware of the planning fallacy</li>
            </ul>
        </div>
    );
}

export default Plan;