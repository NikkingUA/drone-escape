import React, { Component } from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";

import "./game.scss";
class Game extends Component {
  // constructor(props) {
  //     super(props);

  // }

  test = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="container">
        <div className="sky">
          <div className="backhouses">
            <div className="front-houses2">
              <div className="front-houses1">
                <div className="road">
                  <div className="crosswalk"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
