import React from "react";

import { motion } from "framer-motion";

import "../css/TypedInWordsStyle.css";

function TypedInWords({
  text = "TypedInWords",
  fontfamily = "Optima nova LT Black",
  fontSize = "16px",
  fontColor = "black",
  duration = 0.1,
  start = false,
  onAnimationComplete,
}) {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * duration,
      },
    }),
  };

  return (
    <div
      className="TypedText"
      style={{
        fontFamily: fontfamily,
        fontSize: fontSize,
        color: fontColor,
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          startAnimation={start}
          key={char + "-" + index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterAnimation}
          onAnimationComplete={() => {
            if (index === text.length - 1) {
              onAnimationComplete();
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default TypedInWords;
