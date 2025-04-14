import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => (
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
    }}
  />
);

export default Type;
