import React from "react";

const Button = (props) => {
  const { buttonLabel, handleStartStop } = props;
  return (
    <div>
      <button type="button" onClick={handleStartStop}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Button;
