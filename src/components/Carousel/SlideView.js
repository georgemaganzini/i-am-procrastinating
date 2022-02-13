import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pomodoro from '../Method/Pomodoro';
import './SlideView.css';

const Wrapper = styled.div`
    position: fixed;
    top: 15%;
    max-height: 650px;
    min-height: 650px;
    max-width: 300px;
    min-width: 200px;
    /* background-color: slategray; */
    background-color: hsl(0deg 0% 97%);
    border-radius: 0.3125rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    		&:hover {
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		}
`;

const Page = styled.div`

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
          <Wrapper>
            <Slider
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
                arrows={true}
                accessibility={true}
                // dots={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}
            >
                <Page>
                    <Pomodoro />
                </Page>
                <Page>page 2</Page>
                <Page>page 3</Page>
            </Slider>
          </Wrapper>
        );
    }

export default SlideView;
