import React from "react";

//STYLE
import "./Ranking.scss"

//COMPONENTS
import UiButton from "../../Components/FunctionComponents/UiButton/UiButton";
import { Link } from "react-router-dom";
import routes from "../../Routing/routes";
import { useNavigate } from "react-router-dom";


const Ranking = (props) => {
    const navigate = useNavigate()
    const usersDB = JSON.parse(localStorage.getItem("drone-leaderboard"));
    if (usersDB !== null) {
        usersDB.sort((a, b) => b.score - a.score);
    }
    //console.log(usersDB);

    const goTo = (params) => (e) => {
        navigate(params)
    }

    return <>
        <div className="ranking-screen">
            <div className="nes-container with-title is-rounded is-dark leaderboard">
                <h1 className="title">Leaderboard</h1>

                <Link to={routes.WELCOME} className="close-btn">
                    <i className="nes-icon close is-small icon-white"></i>
                </Link>

                {usersDB !== null ?
                    (<ol className="users-container">

                        {usersDB.map(renderUser)}
                    </ol>) :
                    (<p>Guests are not displayed in a leaderboard 🤨</p>)
                }

                <div className="leaderboard-footer">
                    <UiButton
                        btnType="submit"
                        callback={goTo(routes.WELCOME)}
                        btnClass={"is-error leaderboard-btn"}
                        innerText={"Play Again"}
                    />
                </div>
            </div>
        </div>
    </>;
};

const renderUser = (user, key) => {
    return (
        <li key={`user_${key}`} className="leaderboard-item">
            <span>{key + 1}</span>
            <span className="leaderboard-name">{user.username}</span>
            <span className="leaderboard-score">
                {user.score}
            </span>
        </li>
    )
}

export default Ranking;
