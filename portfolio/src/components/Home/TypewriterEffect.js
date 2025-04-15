import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Home.module.css";

const TypewriterEffect = () => (
  <Typewriter
    options={{
      strings: [
        "Software Developer",
        "Freelancer",
        "Web Scrapy",
        "Web Developer",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      wrapperClassName: styles.typewriterWrapper,
      cursorClassName: styles.typewriterCursor,
    }}
  />
);

export default TypewriterEffect;
