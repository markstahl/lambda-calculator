import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="buttons operator-buttons">
      {props.operators.char}
    </button>
  );
};


export default OperatorButton
