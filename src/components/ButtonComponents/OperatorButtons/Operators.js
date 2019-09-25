import React, {useState} from "react";
import { operators } from "../../../data.js"
import OperatorButton from "./OperatorButton.js"

const Operators = () => {

  return (
    <div>
       {operators.map((operators, index) => {
         return (
        <OperatorButton operators={operators} key={index} />
         );
      })}
    </div>
  );
};
export default Operators;