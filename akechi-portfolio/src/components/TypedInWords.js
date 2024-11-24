import React, { useEffect } from "react";

import { motion, useAnimationControls } from "framer-motion";

import "../css/TypedInWordsStyle.css";

function TypedInWords({
  text = "TypedInWords",
  fontfamily = "Optima nova LT Black",
  fontSize = "16px",
  fontColor = "black",
  duration = 0.15,
  start = false,
  onAnimationComplete,
  animationState = false,
  setAnimationState,
}) {

  const controls = useAnimationControls();

  useEffect(() => {
    if (animationState) {
      controls.start("visible");
    }
  }, [animationState]);

  const letterAnimation = {
    hidden: { opacity: 0, y: -50 },
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
          animate= {controls}
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
