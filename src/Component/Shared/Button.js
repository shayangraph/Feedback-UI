import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      Send
    </button>
  );
};

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisable: false,
};
Button.propType = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool,
};
export default Button;
