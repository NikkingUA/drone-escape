import React from "react";
import "./tutorial.css";

import Carousel from "../../Components/FunctionComponents/Carousel/Carousel";
import routes from "../../Routing/routes";
import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";

function Tutorial(){
  return (
    <div className="block_screen">
      <Carousel />
      <div className="btn_position">
        <UiButton  className="is-error" navigate={routes.GAME} innerText="Play"/>
      </div>
    </div>
  );
};

export default Tutorial;
