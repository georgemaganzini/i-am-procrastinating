import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideView.css';
import Action from '../Method/Action/Action';
import Acceptance from '../Method/Acceptance/Acceptance';
import Accountability from '../Method/Accountability/Accountability';
import Bittersweet from '../Method/Bittersweet/Bittersweet';
import BrainHealth from '../Method/BrainHealth/BrainHealth';
import Competition from '../Method/Competition/Competition';
import Contrast from '../Method/Contrast/Contrast';
import Distractions from '../Method/Distractions/Distractions';
import Energy from '../Method/Energy/Energy';
import Flow from '../Method/Flow/Flow';
import Goals from '../Method/Goals/Goals';
import Habits from '../Method/Habits/Habits';
import Inspiration from '../Method/Inspiration/Inspiration';
import Meaning from '../Method/Meaning/Meaning';
import Mindset from '../Method/Mindset/Mindset';
import NegativePairing from '../Method/NegativePairing/NegativePairing';
import Pain from '../Method/Pain/Pain';
import Passion from '../Method/Passion/Passion';
import Plan from '../Method/Plan/Plan';
import Pomodoro from '../Method/Pomodoro/Pomodoro';
import Pomodoro2 from '../Method/Pomodoro2/Pomodoro2';
import Productive from '../Method/Productive/Productive';
import Recognize from '../Method/Recognize/Recognize';
import Remind from '../Method/Remind/Remind';
import Reward from '../Method/Reward/Reward';
import Suppression from '../Method/Suppression/Suppression';
import Temptations from '../Method/Temptations/Temptations';
import Visualize from '../Method/Visualize/Visualize';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SlideView(props) {
    return (
          <div className='slider-wrapper'>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                arrows={true}
                accessibility={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
            >
              <Pomodoro />
              <Pomodoro2 />
              <Flow />
              <Inspiration />
              <Action />
              <Acceptance />
              <Accountability />
              <Bittersweet />
              <BrainHealth />
              <Competition />
              <Contrast />
              <Distractions />
              <Energy />
              <Flow />
              <Goals />
              <Habits />
              <Meaning />
              <Mindset />
              <NegativePairing />
              <Pain />
              <Passion />
              <Plan />
              <Productive />
              <Recognize />
              <Remind />
              <Reward />
              <Suppression />
              <Temptations />
              <Visualize />
            </Slider>
          </div>
        );
    }

export default SlideView;
