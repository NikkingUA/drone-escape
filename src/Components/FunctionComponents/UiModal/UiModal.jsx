import React from "react";
import routes from "../../../Routing/routes";
import UiButton from "../UiButton/UiButton"
import "./UiModal.css"


function UiModal() {

    return (
        <div className="modal-container">

            <div className="card">
                <h1>GAME OVER</h1>
                <UiButton btnClass={"is-primary"} navigate={routes.GAME} innerText="Play Again" />
                <UiButton btnClass={"is-success"} navigate={routes.RANKING} innerText="LeaderBoard" />
            </div>
        </div>

    );
};

export default UiModal;
