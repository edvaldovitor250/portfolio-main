import React from "react";
import PropTypes from "prop-types";

const Pre = ({ load }) => {
  const preloaderId = load ? "preloader" : "preloader-none";

  return <div id={preloaderId} role="status" aria-live="polite" />;
};

Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;
