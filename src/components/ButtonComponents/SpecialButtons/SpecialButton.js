import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="buttons special-buttons">
      {props.specials}
    </button>
  );
};

export default SpecialButton;