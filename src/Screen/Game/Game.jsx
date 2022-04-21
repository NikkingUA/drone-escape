import React, { Component } from "react";
import v from "./game.scss";
class Game extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log('mount');

        const drone = document.getElementById("drone");

        console.log(window.innerHeight);
        drone.style.setProperty("--y", window.innerHeight / 2 + "px");
    }

    test = (e) => {
        console.log(e);
    };

    render() {
        return (
            <div className="container">

                <div className="parallax">
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
                </div>

                <div id="drone" className="drone scroll_smooth">
                </div>
            </div>
        );
    }
}

export default Game;
