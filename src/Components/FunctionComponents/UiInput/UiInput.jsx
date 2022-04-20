import React from "react";
import PropTypes from "prop-types"

import "../../../Screen/Welcome/Welcome.scss"

const UiInput = (props) => {
  function onChangeInput(e) {
    props.callback(e.target.value)
}

  return <div className="inputbox">
  <input 
  onChange={onChangeInput}
  placeholder={props.placeholder}/>
  </div>;
};

UiInput.defaultProps = {
};

UiInput.propTypes = {
  callback: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
export default UiInput;
