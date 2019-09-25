import React from "react";

const NumberButton = (props) => {

  return (
    <button className="buttons number-buttons">
      {props.numbers}
    </button>
  );
};

export default NumberButton
