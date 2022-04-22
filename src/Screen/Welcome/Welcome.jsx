import React, { useState } from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";
import UiHeader from "../../Components/FunctionComponents/UiHeader/UiHeader";
import UiSocial from "../../Components/FunctionComponents/UiSocial/UiSocial";
import routes from "../../Routing/routes";

import './Welcome.scss'
import { useNavigate} from "react-router-dom";


function Welcome() {

    const navigate = useNavigate()
    const [state, setState] = useState(
        {
            username:""
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
        console.log(state.username);
    }



    return <div className="Welcome flex">
        <UiHeader />

        <UiInput
            callback={CbInput}
            innerText="Inserisci il tuo nome"
            isRequired
        />

        <UiButton
            callback={goTo(`${routes.TUTORIAL}/?username=${state.username}`)}
            innerText="Vai al Tutorial"
        />
        <UiSocial />

    </div>;
};

export default Welcome;
