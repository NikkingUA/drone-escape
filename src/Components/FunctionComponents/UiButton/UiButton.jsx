import React from "react";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import './UiButton.scss'

const UiButton = (props) => {

    const navigate = useNavigate();

    function handleClick(e){
        props.callback(e);
    }

    return <>
        <button
            type={props.btnType}
            onClick={props.navigate}
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
    navigate:PropTypes.string.isRequired,
    callback: PropTypes.func,
    type: PropTypes.string,
    class: PropTypes.string,
    style: PropTypes.object,

}

export default UiButton;
