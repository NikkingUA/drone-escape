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
    this.intervalOstacle();

    this.state = {
      ostacle: false,
      counter: 0,
      timeStart: 3,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        this.setState({
          timeStart: --i,
        });
        console.log(i);
      }, 3000);
    }
    setTimeout(() => {
      this.drone = document.getElementById("drone");
      this.drone_height = this.drone.offsetHeight;

      this.maxOffset = window.innerHeight / 2 - this.drone_height / 2;

      this.drone.style.setProperty("--y", this.maxOffset + "px");
      // this.scoreGame();
    }, 3000);
  }

  // componentDidUpdate() {
  //   this.scoreGame();
  // }

  jumpDrone = (e) => {
    this.drone.style.setProperty("--y", -this.maxOffset + "px");

    setTimeout(
      () => this.drone.style.setProperty("--y", this.maxOffset + "px"),
      2000
    );
  };

  scoreGame() {
    let myInterval = setInterval(() => {
      this.setState({
        ...this.state,
        counter: this.state.counter + 1,
      });
    }, 1000);

    if (this.state.counter === 100) {
      clearInterval(myInterval);
    }
  }

  intervalOstacle = () => {
    setTimeout(() => {
      this.setState({
        ostacle: !this.state.ostacle,
      });
    }, 13000);
  };

  render() {
    console.log("rerender");
    return (
      <div className="container" onClick={this.jumpDrone}>
        <div className="parallax">
          <div className="score">
            Score: {this.state.counter}, timeStart: {this.state.timeStart}
          </div>
          {this.state.ostacle ? (
            <div className="ostacle_top animate"></div>
          ) : (
            ""
          )}

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
          {this.state.ostacle ? (
            <div className="ostacle_bottom animate"></div>
          ) : (
            ""
          )}
        </div>

        <div id="drone" className="drone scroll_smooth"></div>
      </div>
    );
  }
}

export default Game;
