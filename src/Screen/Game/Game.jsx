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
      timeStart: 0,
    };
  }

  componentDidMount() {
    this.drone = document.getElementById("drone");
    this.drone_height = this.drone.offsetHeight;

    this.maxOffset = window.innerHeight / 2 - this.drone_height / 2;

    this.drone.style.setProperty("--y", this.maxOffset + "px");
  }

  jumpDrone = (e) => {
    this.drone.style.setProperty("--y", -this.maxOffset + "px");

    setTimeout(
      () => this.drone.style.setProperty("--y", this.maxOffset + "px"),
      2000
    );
  };

  //   const myTimeout = setTimeout(myGreeting, 3000);

  // function myGreeting() {
  //   document.getElementById("demo").innerHTML = "Happy Birthday to You !!"
  // }

  // function myStopFunction() {
  //   clearTimeout(myTimeout);
  // }

  scoreGame() {
    let myTimeout = setTimeout(() => {
      this.setState({
        ...this.state,
        counter: this.state.counter + 1,
      });
    }, 100);

    if (this.state.counter === 100) {
      clearTimeout(myTimeout);
    }
  }

  intervalOstacle = () => {
    setTimeout(() => {
      this.setState({
        ostacle: !this.state.ostacle,
      });
    }, 10000);
  };

  render() {
    this.scoreGame();

    return (
      <div className="container" onClick={this.jumpDrone}>
        <div className="parallax">
          <div className="score">Score: {this.state.counter}</div>
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
