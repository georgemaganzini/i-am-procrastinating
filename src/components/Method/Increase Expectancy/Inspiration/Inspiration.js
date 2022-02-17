import React from 'react';
import inspiration from '../../../../assets/inspiration.svg'
import LogForm from '../../../LogForm/LogForm';

function Inspiration(props) {
    return (
        <div className='card'>
            <h1 className='card-title purple-h1'>Get Inspired</h1>
            <img
                src={inspiration}
                alt={'inspiration-pic'}
                className="undraw-pic"
            />
            <ul className='card-ul'>
                <li className='card-li'>Know what inspires you and why</li>
                <li className='card-li'>Write out what movies, books, music, art, people, groups and ideas inspire you</li>
                <li className='card-li'>Make your inspirations easily accessible and visible</li>
                <li className='card-li'>Optimism is contagious, find and join a like-minded, inspiring, and optimistic group</li>
            </ul>
        <LogForm parent="Inspiration" color="purple"/>
        </div>
    );
}

export default Inspiration;