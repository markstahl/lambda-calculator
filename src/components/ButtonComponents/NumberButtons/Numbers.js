import React, { useState } from "react";
import { numbers } from '../../../data' 
import NumberButton from "./NumberButton.js"

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numbers">
      {numbers.map((num, index) => {
        
        return (
        <NumberButton 
        numbers={num} 
        key={index}
        label={num}
        func={props.func}
        onClick={() => {return props.numbers()}}
        />
        );
      })}
    </div>
  );
};

export default Numbers
