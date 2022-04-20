import React, { Component } from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";

class Game extends Component {

    constructor(props) {
        super(props);

    }

    clickTest = (e) => {
        console.log(e);
    }

    render() {
        return <>
            <UiButton
                callback={this.clickTest}
                class={"is-success"}
                style={{ color: "grey" }}
                innerText={"Button text"}
            />

        </>;
    }
}

export default Game;
