import React from 'react';
import Modal from 'react-overlays/Modal'
import styled from 'styled-components';
import {useState} from 'react';
import { SocialIcon } from 'react-social-icons';

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
    @media only screen and (max-width: 600px) {
    left: .5em;
    width: 340px;
    height: 150px;
  }
`;

function Contact() {
  const [show, setShow] = useState(false);

  const renderBackdrop = (props) => <Backdrop {...props} />;

  return (
    <div className="modal-example">
      <p onClick={() => setShow(true)}>Contact</p>

      <PositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
        onBackdropClick={() => setShow(true)}
      >
        <div onClick={() => setShow(false)} className="modal-wrapper">


          <p>
            Email me at georgemaganzini@gmail.com or find me on LinkedIn   <SocialIcon url="https://www.linkedin.com/in/georgemaganzini/" target="_blank"/>
          </p>
          <button type="button" onClick={() => setShow(false)} className="modal-button contact-close">
            close
          </button>
        </div>
      </PositionedModal>
    </div>
  );
}

export default Contact;