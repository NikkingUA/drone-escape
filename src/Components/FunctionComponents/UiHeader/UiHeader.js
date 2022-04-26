import React from "react";
import "./header.scss"

function UiHeader() {
    return (
        <div className="header">
            <h1 style={{ color: "#f7d51d" }}>Welcome to</h1>
            <br />
            <h1 style={{ color: "#f7d51d" }}>Drone Escape</h1>
            <br />
            <br />
            <br />
            <br />
            <h4 style={{ color: "#fff" }}>Insert your name here</h4>
            <span style={{ color: "#fff" }}>↓↓↓</span>
        </div>
    )
}

export default UiHeader;