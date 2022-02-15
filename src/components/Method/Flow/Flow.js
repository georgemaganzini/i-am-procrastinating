import React from 'react';
import flow from '../../../assets/flow.svg'
import flowchart from '../../../assets/flow.png'

function Flow(props) {
    return (
        <div className='card'>
            <h1 className='blue-h1'>Find Flow</h1>
            <img
                src={flow}
                alt={'flow-pic'}
                className="PIC-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Match difficulty with skill</li>
                <li className='card-li'>Too easy? Make it harder</li>
                <li className='card-li'>Too hard? Make it easier</li>
            </ul>
            <div>
                     <img
                src={flowchart}
                alt={'flow-pic'}
                className="PIC-pic"
            />
            </div>
        </div>
    );
}

export default Flow;