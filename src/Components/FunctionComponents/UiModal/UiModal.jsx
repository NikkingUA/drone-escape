import React from "react";
import routes from "../../../Routing/routes";
import UiButton from "../UiButton/UiButton"
import "./UiModal.css"
import { useNavigate, useSearchParams } from "react-router-dom";


function UiModal(props) {
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    let username = searchParams.get("username");

    // console.log(username);

    // console.log(props.score);
    if (username !== "") {
        const getLocal = localStorage.getItem("drone-leaderboard") //[{username, score},{},...]
        let newUser = {
            username: username,
            score: props.score
        }
        if (getLocal === null) {
            localStorage.setItem("drone-leaderboard", JSON.stringify(newUser))
        } else {
            const newLocal = JSON.parse(getLocal);
            // console.log(newLocal);
            newLocal.push(newUser);
            console.log(newLocal);
            localStorage.setItem("drone-leaderboard", JSON.stringify(newLocal))
        }
    }
        


        // console.log(leaderboard);

        const goNext = (params) => (e) => {
            console.log("next");
            navigate(params)
        }
        return (
            <div className="modal-container">

                <div className="card">
                    <h1>GAME OVER</h1>
                    <p>Player name: {username===""? "guest" : username}</p>
                    <p>Score: {props.score}</p>
                    <UiButton btnClass={"is-primary"} callback={goNext(routes.WELCOME)} innerText="Play Again" />
                    <UiButton btnClass={"is-success"} callback={goNext(routes.RANKING)} innerText="LeaderBoard" />
                </div>
            </div>

        );
    };

    export default UiModal;
