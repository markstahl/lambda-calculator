import React, { useState } from "react";
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton.js";

const Specials = () => {

  return (
    <div>
       {specials.map((specials, index) => {
         return (
        <SpecialButton specials={specials} key={index} />
         );
      })}
    </div>
  );
};


export default Specials;
