import React, { Component } from "react"; import UiModal from "../../Components/FunctionComponents/UiModal/UiModal";
import "./game.scss";
import sound from "../../Assets/sound/sound.mp3"

// const drone = document.getElementById("drone");
// const drone_height = drone.offsetHeight;
// const maxOffset = window.innerHeight / 2 - drone_height / 2;
class Game extends Component {
    constructor(props) {
        super(props);

        this.drone = null;
        this.drone_height = null;
        this.maxOffset = null;
        this.state = {
            visibilityScoreModal: false
        }
    }

    componentDidMount() {
        this.drone = document.getElementById("drone");
        this.drone_height = this.drone.offsetHeight;

        // console.log(drone_height);
        this.maxOffset = window.innerHeight / 2 - this.drone_height / 2;

        this.drone.style.setProperty("--y", this.maxOffset + "px");
    }

    jump = (e) => {

        this.drone.style.setProperty("--y", -this.maxOffset + "px");

        setTimeout(() => this.drone.style.setProperty("--y", this.maxOffset + "px"), 1000)

    }

    play() {
        const audio = new Audio(sound);
        audio.play()
    }

    viewScoreModal = () => {
        this.setState({ visibilityScoreModal: true })
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

                <div id="drone" className="drone scroll_smooth">
                </div>
                {this.state.game_over === true && 

                <UiModal playSound={this.play} />
                }
            </div>

        );
    }
}

export default Game;
