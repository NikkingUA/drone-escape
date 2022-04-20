import React from "react";
import { PropTypes } from "prop-types";

import './UiButton.scss'

const UiButton = (props) => {

    const handleClick = (e) => {
        props.callback(e);
    }

    return <>
        <button
            type={props.btnType}
            onClick={handleClick}
            className={`nes-btn ${props.btnClass}`}
            style={props.btnStyle}
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
