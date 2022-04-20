import React from "react";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import "../../../Screen/Welcome/Welcome.scss"

const UiButton = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <button className="nes-btn is-primary" 
      onClick={() => { navigate(props.navigate)}}
      >
        {props.label}
      </button>
    </div>
  );
}
UiButton.defaultProps = {
};

UiButton.propTypes = {
  navigate:PropTypes.string.isRequired,
    label: PropTypes.string,
    
}

export default UiButton;
