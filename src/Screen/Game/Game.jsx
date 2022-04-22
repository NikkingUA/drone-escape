import React, { Component } from "react";
import UiModal from "../../Components/FunctionComponents/UiModal/UiModal";
import withRouter from "../../Utils/withNavigation";
import "./game.scss";
import sound from "../../Assets/sound/sound.mp3"

class Game extends Component {
    constructor(props) {
        super(props);

        this.drone = null;
        this.drone_height = null;
        this.maxOffset = null;
        this.descending = null;
        this.scoreInterval = null;
        this.obstaclesTimer = null;
        this.location = this.props.router.location;
        this.navigate = this.props.router.navigate;
        this.params = this.props.router.params;

        this.state = {
            ostacle: false,
            counter: 0,
            timeStart: 3,
            visibilityScoreModal: false,
            y: 0,
            game_over: false

        };

    }

    componentDidMount() {
        console.log("MOUNT");
        this.drone = document.getElementById("drone");
        this.drone_height = this.drone.offsetHeight;
        this.maxOffset = window.innerHeight / 2 - this.drone_height / 2;

        // timeout -> this.maxOffset -= 300px OBSTACLES!!!
        this.obstaclesTimer = setTimeout(() => {
            this.maxOffset -= 200;
            this.setState({
                ostacle: !this.state.ostacle,
            });
        }, 3000);

        this.scoreInterval = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, 250);

        this.descending = setInterval(() => {
            this.setState({
                y: this.state.y + 10
            })
        }, 30);
    }

    componentDidUpdate(prevProps, prevState) {

        // if drone is out of bounds
        if ((this.state.y > this.maxOffset || this.state.y < -this.maxOffset) && !this.state.game_over) {
            console.log("STOP");
            clearInterval(this.descending);

            this.setState({
                game_over: true,
            })

        } else if (this.state.game_over) {
            clearInterval(this.scoreInterval);
        }

    }

    jumpDrone = (e) => {
        let deltaY = 0;

        if (this.state.y < -this.maxOffset - 200) {
            console.log("STOP");
            clearInterval(this.descending)
        } else {
            deltaY = 200;
        }


        this.setState({
            y: this.state.y - deltaY
        })
    }

    play() {
        const audio = new Audio(sound);
        audio.play()
    }

    render() {
        return (
            <div className="container">
                <div className="parallax" onClick={this.jumpDrone}>
                    <div className="score">
                        Score: {this.state.counter}, timeStart: {this.state.timeStart}
                    </div>

                    {this.state.ostacle &&
                        <div className="ostacle_top bg"></div>
                    }

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
                    {
                        this.state.ostacle &&
                        <div className="ostacle_bottom bg "></div>
                    }
                </div >

                <div id="drone" className="drone scroll_smooth" style={{
                    transform: `translate(-50%, -50%) translateY(${this.state.y}px) scale(2)`
                }}>
                </div>

                {this.state.game_over === true &&

                    <UiModal score={this.state.counter} />
                }
            </div >
        );
    }
}

export default withRouter(Game);
