import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideView.css';
import Pomodoro from '../Method/Pomodoro/Pomodoro';
import Pomodoro2 from '../Method/Pomodoro2/Pomodoro2';
import Pomodoro3 from '../Method/Pomodoro3.js/Pomodoro3'
import Flow from '../Method/Flow/Flow';
import Inspiration from '../Method/Inspiration/Inspiration';

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
              <Pomodoro3 />
              <Flow />
              <Inspiration />
            </Slider>
          </div>
        );
    }

export default SlideView;
