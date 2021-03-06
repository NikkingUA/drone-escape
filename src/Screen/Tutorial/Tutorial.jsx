import React from "react";
import "./tutorial.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import Carousel from "../../Components/FunctionComponents/Carousel/Carousel";
import routes from "../../Routing/routes";
import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";

function Tutorial(){

  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();
  let username = searchParams.get("username");

  const goTo = (params) => (e) => {
    console.log("next");
    navigate(params)}

  return (
    <div className="block_screen">
      <Carousel />
      <div className="btn_position">
        <UiButton  className="is-error" callback={goTo(`${routes.GAME}/?username=${username}`)} innerText="Play"/>
      </div>
    </div>
  );
};

export default Tutorial;
