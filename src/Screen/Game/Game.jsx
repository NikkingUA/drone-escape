import React, { Component } from "react";
import v from "./game.scss";
class Game extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const drone = document.getElementById("drone");
        const drone_height = drone.offsetHeight;

        console.log(drone_height);
        let maxOffset = window.innerHeight / 2 - drone_height / 2;

        /* let y = 0;
        for (let i = 0; i < maxOffset; i++) {
            y++
        } */
        drone.style.setProperty("--y", -maxOffset + "px");
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
