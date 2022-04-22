import React, { Component } from "react";
import "./game.scss";

// const drone = document.getElementById("drone");
// const drone_height = drone.offsetHeight;
// const maxOffset = window.innerHeight / 2 - drone_height / 2;
class Game extends Component {
    constructor(props) {
        super(props);

        this.drone = null;
        this.drone_height = null;
        this.maxOffset = null;
        this.descending = null;
        this.ascending = null;
        this.smooth_jump = null;
        this.stop = false;

        this.state = {
            y: 0,
            game_over: false
        }
    }

    componentDidMount() {
        console.log("MOUNT");
        this.drone = document.getElementById("drone");
        this.drone_height = this.drone.offsetHeight;

        this.maxOffset = window.innerHeight / 2 - this.drone_height / 2;


        this.descending = setInterval(() => {
            this.setState({
                y: this.state.y + 10
            })
        }, 30);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.maxOffset, this.state.y);
        // console.log(this.state.y);
        // let stop = false;

        // if drone is out of bounds

        if ((this.state.y > this.maxOffset || this.state.y < -this.maxOffset) && !this.state.game_over) {
            console.log("STOP");
            console.log(prevState);
            // this.stop = true
            clearInterval(this.descending);

            this.setState({
                game_over: true,
            })
        }

    }

    jump = (e) => {
        let deltaY = 0;

        if (this.state.y < -this.maxOffset - 200) {
            console.log("STOP");
            clearInterval(this.descending)
        } else {
            deltaY = 200;
            /* this.smooth_jump = setInterval(() => {
                this.setState({
                    y: this.state.y - 10
                })
            }, 20);

            setTimeout(() => clearInterval(this.smooth_jump), 200) */
        }


        // clearInterval(this.smooth_jump);

        this.setState({
            y: this.state.y - deltaY
        })
    }

    render() {
        return (
            <div className="container" onClick={this.jump}>

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

                <div id="drone" className="drone scroll_smooth" style={{
                    transform: `translate(-50%, -50%) translateY(${this.state.y}px) scale(2)`
                }}>
                </div>
            </div>
        );
    }
}

export default Game;
