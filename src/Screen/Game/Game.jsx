import React, { Component } from "react";
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

                <div className="drone scroll_smooth">
                </div>
            </div>
        );
    }
}

export default Game;
