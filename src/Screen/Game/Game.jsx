import React, { Component } from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";
class Game extends Component {

    constructor(props) {
        super(props);

    }

    test = (e) => {
        console.log(e);
    }

    render() {
        return <>
            <form onSubmit={this.test}>

                <UiInput
                    inputType="text"
                    inputName="user_name"
                    inputClass="signup-input"
                    callback={this.test}
                    // inputValue={state.mail}
                    inputPlaceholder="type your email"
                    isRequired
                />

                <UiButton
                    btnType="submit"
                    callback={this.test}
                    btnClass={"is-success"}
                    btnStyle={{ color: "grey" }}
                    innerText={"Button text"}
                />
            </form>

        </>;
    }
}

export default Game;
