import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div>
      <div className={`card ${reverse && "reverse"}`}>{children}</div>
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
