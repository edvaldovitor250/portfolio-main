import React from "react";
import PropTypes from "prop-types";

const Preloader = ({ load }) => {
  const preloaderId = load ? "preloader" : "preloader-none";

  return <div id={preloaderId} role="status" aria-live="polite" />;
};

Preloader.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Preloader;
