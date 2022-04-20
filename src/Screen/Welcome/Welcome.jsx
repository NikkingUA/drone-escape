import React from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.scss'


const Welcome = (props) => {
    const navigate = useNavigate();

    return <>
        <button onClick={() => { navigate("/Tutorial") }} className="bg-red">
            Vai al Tutorial
        </button>
    </>;
};

export default Welcome;
