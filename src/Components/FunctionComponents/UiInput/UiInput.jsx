import React from "react"

import './UiInput.scss'

import PropTypes from 'prop-types';


const UiInput = (props) => {

    const handleChange = (e) => {
        props.callback(e);
    }

    return <>
        <div className="nes-field">

            <label htmlFor={props.inputName}>
                {props.inputLabel}
            </label>

            <input
                id={props.inputName}
                name={props.inputName}
                type={props.inputType}
                onChange={handleChange}
                className={`nes-input ${props.inputClass}`}
                placeholder={props.inputPlaceholder}
                value={props.inputValue}
                required={props.isRequired}
            />

        </div>
    </>;
};

UiInput.defaultProps = {
    inputPlaceholder: "Your placeholder here"
}

UiInput.propTypes = {
    callback: PropTypes.func.isRequired,
    name: PropTypes.string,
    inputType: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    isRequired: PropTypes.bool,
}

export default UiInput;
