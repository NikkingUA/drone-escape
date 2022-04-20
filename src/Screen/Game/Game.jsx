import React, { Component } from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";

import "../../Screen/Welcome/Welcome.scss"
class Game extends Component {

    // constructor(props) {
    //     super(props);

    // }

    test = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <div className="sky height">
                    <div className="backhouses height">
                        <div className="road height">
                            <div className="crosswalk height">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
