import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './Timer.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Take a Break 🍅</div>;
  }

    if (remainingTime > 60) {
            const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
    }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function Timer(props) {
    return (
        <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={props.duration}
          colors={["#00C354", "#6394ff", "#6C63FF", "#ff6394"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 0 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    );
}

export default Timer;