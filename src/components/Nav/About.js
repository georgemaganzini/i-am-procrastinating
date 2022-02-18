import React from 'react';
import Modal from 'react-overlays/Modal'
import styled from 'styled-components';
import {useState} from 'react';
import equation from '../../assets/equation.png'

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const PositionedModal = styled(Modal)`
  position: absolute;
  width: 400px;
  top: 10%;
  left: 40%;
  margin: auto;
  z-index: 1040;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

function About() {
  const [show, setShow] = useState(false);

  const renderBackdrop = (props) => <Backdrop {...props} />;

  return (
    <div className="modal-example">
      <p onClick={() => setShow(true)}>About</p>

      <PositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
        onBackdropClick={() => setShow(true)}
      >
        <div onClick={() => setShow(false)}  className="about-modal-wrapper">
          <h4 id="modal-label">The Procrastination Equation:</h4>

                <img src={equation} alt="procrastination equation" className='pro-pic' />
           <div><span className='green-h1 card-title about-span'>Green</span> cards help users reduce impulsiveness. <br></br>
            <span className='blue-h1 card-title about-span'>Blue</span> cards help users increase value, and <br></br><span className='purple-h1 card-title about-span'>purple</span> cards help users increase expectancy.
          </div>
          <div>
        <br></br>{" "}
          </div>
          <div>
            The information is based on scientific research on motivation and
            procrastination documented in Piers Steel's book <a href='https://www.amazon.com/Procrastination-Equation-Putting-Things-Getting/dp/0061703621'>The Procrastination Equation</a> as
            well as inspired by <a href='https://alexvermeer.com/limit-procrastination/'>Alex Vermeer's blog posts</a> and <a href='https://alexvermeer.com/getmotivated/'>poster</a>.
           </div>
          <button type="button" onClick={() => setShow(false)} className="modal-button about-button">
            close
          </button>
        </div>
      </PositionedModal>
    </div>
  );
}

export default About;