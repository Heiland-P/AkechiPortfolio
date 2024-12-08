import React, { useEffect } from "react";

import { motion, useAnimationControls } from "framer-motion";

import "../css/TypedInWordsStyle.css";

function TypedInWords({
  text = "TypedInWords",
  fontfamily = "Optima nova LT Black",
  fontSizes = ["1.5rem", "1.9rem", "2.3rem"],
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
        color: fontColor,
        "--text-size-small": fontSizes[0],
        "--text-size-medium": fontSizes[1],
        "--text-size-large": fontSizes[2],
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
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
