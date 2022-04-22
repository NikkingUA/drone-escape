import React from "react";

import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import UiInput from "../../Components/FunctionComponents/UiInput/UiInput";
import UiHeader from "../../Components/FunctionComponents/UiHeader/UiHeader";
import UiSocial from "../../Components/FunctionComponents/UiSocial/UiSocial";
import routes  from "../../Routing/routes";

import './Welcome.scss'


function Welcome() {


    function CbInput(e) {
        console.log(e);
    }



    return <div className="Welcome flex">
        <UiHeader />

        <UiInput
            callback={CbInput}
            innerText="Inserisci il tuo nome"
        />

        <UiButton
            navigate={routes.TUTORIAL}
            innerText="Vai al Tutorial"
        />
        <UiSocial />

    </div>;
};

export default Welcome;
