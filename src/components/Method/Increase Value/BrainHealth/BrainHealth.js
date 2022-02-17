import React from 'react';
import brainhealth from '../../../../assets/brainhealth.svg'
import youtube from '../../../../assets/youtube.svg'

function BrainHealth(props) {

    const handleClick = () => {
        window.open("https://www.youtube.com/watch?v=pL02HRFk2vo")
    }
    return (
        <div className='card'>
            <h1 className='card-title blue-h1'>Keep Your Brain Healthy</h1>
            <img
                src={brainhealth}
                alt={'brainhealth'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Sleep</li>
                <li className='card-li'>Excercise</li>
                <li className='card-li'>Take genuine breaks</li>
                <li className='card-li'>Reduce your commitments</li>
            </ul>
            <button className='blue-button yt' onClick={handleClick}>Try an NSDR! <img src={youtube} alt="youtube" className='youtube'/></button>

        </div>
    );
}

export default BrainHealth;