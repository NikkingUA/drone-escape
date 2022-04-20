import React from "react";

//STYLE
import "./Ranking.scss"

//COMPONENTS
import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import { Link } from "react-router-dom";
import routes from "../../Routing/routes";


const Ranking = (props) => {

    const usersDB = JSON.parse(localStorage.getItem("drone-leaderboard"));
    usersDB.sort((a, b) => b.score - a.score);
    console.log(usersDB);

    const playAgain = (e) => {

        // set fake users in localstorage
        /*  const user = [
             {
                 name: "fede",
                 score: 200
             },
             {
                 name: "pascu",
                 score: 300
             },
             {
                 name: "mykyta",
                 score: 250
             },
             {
                 name: "fede",
                 score: 210
             },
             {
                 name: "pascu",
                 score: 341
             },
             {
                 name: "mykyta",
                 score: 450
             },
             {
                 name: "fede",
                 score: 522
             },
             {
                 name: "pascu",
                 score: 113
             },
             {
                 name: "mykyta",
                 score: 14
             },
             {
                 name: "fede",
                 score: 635
             },
             {
                 name: "pascu",
                 score: 1246
             },
             {
                 name: "mykyta",
                 score: 267
             },
             {
                 name: "fede",
                 score: 200
             },
             {
                 name: "pascu",
                 score: 300
             },
             {
                 name: "mykyta",
                 score: 250
             },
             {
                 name: "fede",
                 score: 210
             },
             {
                 name: "pascu",
                 score: 341
             },
             {
                 name: "mykyta",
                 score: 450
             },
             {
                 name: "fede",
                 score: 522
             },
             {
                 name: "pascu",
                 score: 113
             },
             {
                 name: "mykyta",
                 score: 14
             },
             {
                 name: "fede",
                 score: 635
             },
             {
                 name: "pascu",
                 score: 1246
             },
             {
                 name: "mykyta",
                 score: 267
             },
 
         ];
 
         localStorage.setItem("drone-leaderboard", JSON.stringify(user)); */

    }

    return <>
        <div className="ranking-screen">
            <div className="nes-container with-title is-rounded is-dark leaderboard">
                <h1 className="title">Leaderboard</h1>

                <Link to={routes.WELCOME} className="close-btn">
                    <i className="nes-icon close is-small icon-white"></i>
                </Link>

                <ol className="users-container">
                    {usersDB.map(renderUser)}
                </ol>


                <div className="leaderboard-footer">
                    <UiButton
                        btnType="submit"
                        callback={playAgain}
                        btnClass={"is-error leaderboard-btn"}
                        innerText={"Play Again"}
                    />
                </div>
            </div>
        </div>
    </>;
};

const renderUser = (user, key) => {
    console.log('test');
    return (
        <li key={`user_${key}`} className="leaderboard-item">
            <span>{key + 1}</span>
            <span className="leaderboard-name">{user.name}</span>
            <span className="leaderboard-score">
                {user.score}
            </span>
        </li>
    )
}

export default Ranking;
