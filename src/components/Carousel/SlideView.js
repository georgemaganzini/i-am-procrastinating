import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideView.css';
import Action from '../Method/Increase Expectancy/Action/Action';
import Acceptance from '../Method/Increase Expectancy/Acceptance/Acceptance';
import Accountability from '../Method/Increase Value/Accountability/Accountability';
import Bittersweet from '../Method/Increase Value/Bittersweet/Bittersweet'
import BrainHealth from '../Method/Increase Value/BrainHealth/BrainHealth';
import Competition from '../Method/Increase Value/Competition/Competition';
import Contrast from '../Method/Increase Expectancy/Contrast/Contrast';
import Distractions from '../Method/Decrease Impulsiveness/Distractions/Distractions';
import Energy from '../Method/Increase Value/Energy/Energy';
import Flow from '../Method/Increase Value/Flow/Flow';
import Goals from '../Method/Decrease Impulsiveness/Goals/Goals';
import Habits from '../Method/Decrease Impulsiveness/Habits/Habits';
import Inspiration from '../Method/Increase Expectancy/Inspiration/Inspiration';
import Meaning from '../Method/Increase Value/Meaning/Meaning';
import Mindset from '../Method/Increase Expectancy/Mindset/Mindset';
import Negative from '../Method/Decrease Impulsiveness/Negative/Negative';
import Pain from '../Method/Decrease Impulsiveness/Pain/Pain';
import Passion from '../Method/Increase Value/Passion/Passion';
import Plan from '../Method/Increase Expectancy/Plan/Plan';
import Pomodoro from '../Method/Decrease Impulsiveness/Pomodoro/Pomodoro';
import Productive from '../Method/Increase Value/Productive/Productive';
import Recognize from '../Method/Increase Expectancy/Recognize/Recognize';
import Remind from '../Method/Decrease Impulsiveness/Remind/Remind';
import Reward from '../Method/Increase Value/Reward/Reward';
import Suppression from '../Method/Decrease Impulsiveness/Suppression/Suppression';
import Temptations from '../Method/Decrease Impulsiveness/Temptations/Temptations';
import Visualize from '../Method/Decrease Impulsiveness/Visualize/Visualize';
import { isMobile } from 'react-device-detect';


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
                speed={1000}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                arrows={true}
                swipe={ isMobile ? true : false}
                accessibility={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
            >
              <Pomodoro />
              <Recognize />
              <Energy />
              <Habits />
              <Acceptance />
              <Competition />
              <Negative />
              <Inspiration/>
              <Flow />
              <Temptations />
              <Action />
              <Reward />
              <Goals />
              <Contrast />
              <Accountability />
              <Distractions />
              <Bittersweet />
              <Meaning />
              <Pain />
              <Passion />
              <Plan />
              <Productive />
              <Remind />
              <Visualize />
              <Mindset />
              <Suppression />
              <BrainHealth />
            </Slider>
          </div>
        );
}

export default SlideView;
