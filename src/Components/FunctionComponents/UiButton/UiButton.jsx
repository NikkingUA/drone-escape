import React from "react";
import { PropTypes } from "prop-types";
import './UiButton.scss'

const UiButton = (props) => {

    function handleClick(e) {
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
    btnType: PropTypes.string,
    btnClass: PropTypes.string,
    btnStyle: PropTypes.object,

}

export default UiButton;
