import React from 'react';
import flowchart from '../../../assets/flow.png'

function Flow(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Find Flow</h1>
            <img
                src={flowchart}
                alt={'flow-pic'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'></li>
            </ul>
            <div>
                buttons etc
            </div>
        </div>
    );
}

export default Flow;