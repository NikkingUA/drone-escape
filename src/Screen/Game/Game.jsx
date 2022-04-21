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

                {/* <div className="bg"> */}
                <div className="sky bg">
                    <div className="backhouses bg">
                        <div className="front-houses2 bg">
                            <div className="front-houses1 bg">
                                <div className="road bg">
                                    <div className="crosswalk bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                <div className="drone">
                </div>
            </div>
        );
    }
}

export default Game;
