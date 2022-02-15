import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlideView.css';
import Pomodoro from '../Method/Pomodoro';
import Pomodoro2 from '../Method/Pomodoro2';

const Wrapper = styled.div`
    // hover effect, make permanent?
    /* transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    		&:hover {
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		} */
`;

const Page = styled.div`
  /* max-height: 650px;
  min-height: 650px;
  max-width: 300px;
  min-width: 200px; */
  /* border: 1px solid green; */
`;

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
          <Wrapper className='wrapper'>
            <Slider className='page'
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                arrows={true}
                accessibility={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
            >
                <Page className='page-test'>
                    <Pomodoro />
                </Page>
                <Page className='page-test'>
                  <Pomodoro2 />
                </Page>
                <Page className='page-test'>page 3</Page>
            </Slider>
          </Wrapper>
        );
    }

export default SlideView;
