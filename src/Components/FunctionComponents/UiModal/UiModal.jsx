import React from "react";
import UiButton from "../UiButton/UiButton"


const UiModal = (props) => {


  return (
    <div className="card">
      <h1>Game Over</h1>
      <UiButton navigate="/drone-navigate"/>
      <UiButton navigate="/leaderboard" />
    </div>
  );
};

export default UiModal;
