import React from "react";
import "./tutorial.css";

import Carousel from "../../Components/FunctionComponents/Carousel/Carousel";

const Tutorial = (props) => {
  return (
    <div className="block_screen">
      <Carousel />
      <div className="btn_position">
        <button type="button" className=" nes-btn is-error" navigate="/drone-escape">
          Play
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
