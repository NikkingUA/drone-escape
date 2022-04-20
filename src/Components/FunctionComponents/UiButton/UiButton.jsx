import React from "react";
import { PropTypes } from "prop-types";

import './UiButton.scss'

const UiButton = (props) => {

    const handleClick = (e) => {
        props.callback(e);
    }

    return <>
        <button
            type={props.type}
            onClick={handleClick}
            className={`nes-btn ${props.class}`}
            style={props.style}
        >
            {props.innerText}
        </button>
    </>;
};

UiButton.defaultProps = {
    innerText: "Button"
}

UiButton.propTypes = {
    callback: PropTypes.func.isRequired,
    type: PropTypes.string,
    class: PropTypes.string,
    style: PropTypes.object,

}

export default UiButton;
