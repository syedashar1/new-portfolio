import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN / REDUX / NextJs Developer",
          "Blockchain Developer",
          "TypeScript Master",
          "Electrical Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
