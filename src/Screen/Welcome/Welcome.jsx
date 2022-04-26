import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Welcome.scss'

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";
import UiHeader from "../../Components/FunctionComponents/UiHeader/UiHeader";
import UiSocial from "../../Components/FunctionComponents/UiSocial/UiSocial";
import ParallaxBg from "../../Components/FunctionComponents/ParallaxBg/ParallaxBg";

import routes from "../../Routing/routes";

function Welcome() {

    const navigate = useNavigate()
    const [state, setState] = useState(
        {
            username: ""
        }
    )
    const goTo = (params) => (e) => {
        console.log("next");
        navigate(params)
    }

    function CbInput(e) {
        setState({
            username: e.target.value
        })
        // console.log(state.username);
    }



    return <div className="Welcome flex">
        <ParallaxBg />
        <UiHeader />

        <UiInput
            callback={CbInput}
            innerText="Inserisci il tuo nome"
            inputPlaceholder={"Type your nickname"}
            isRequired
        />

        <UiButton
            callback={goTo(`${routes.TUTORIAL}/?username=${state.username}`)}
            innerText="Play"
            btnClass={"is-warning"}
        />
        <UiSocial />

    </div>;
};

export default Welcome;
