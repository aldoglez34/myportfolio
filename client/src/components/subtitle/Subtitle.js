import React from "react";
import PropTypes from "prop-types";
import "./subtitle.scss";

const Subtitle = React.memo(({ text }) => {
  return (
    <h1 className="text-center">
      <span className="text-light">{text}</span>
      <hr className="subtitleDivider" />
    </h1>
  );
});

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
