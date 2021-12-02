import React, { useState, useEffect } from "react";

import Button from "./Button";

const Timer = (props) => {
  const { time } = props;

  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

const TimeIndicator = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    setIsActive(!isActive);

    return !isActive ? setTime(0) : null;
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const buttonLabel = !isActive ? "Start" : "Stop";

  return (
    <div>
      <Timer time={time} />
      <Button buttonLabel={buttonLabel} handleStartStop={handleStartStop} />
    </div>
  );
};

export default TimeIndicator;
