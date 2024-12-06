import React from "react";
import { motion, useAnimationControls } from "framer-motion";

import "../css/GeneralStyle.css";
import "../css/SimpleButtonStyle.css";

const SimpleButton = ({
  text = "button",
  text_color = "red",
  hover_text_color = "red",
  bg_color = "blue",
  text_sizes = ["1.5rem", "1.9rem", "2.3rem"],
  onClickHandler,
}) => {
  const bgControls = useAnimationControls();

  const initialPoints = "10,8.5 100.7,0 90.1,32.7 0,47";
  const hoverPoints_2 = "20,10 105.7,5 98.1,30.7 5,40";
  const hoverPoints_1 = "15,7 110.7,8 90.1,33.7 8,37";

  return (
    <motion.button
      className="SimpleButton TitleText"
      style={{
        "--text-color": text_color,
        "--text-color-hover": hover_text_color,
        "--text-size-small": text_sizes[0],
        "--text-size-medium": text_sizes[1],
        "--text-size-large": text_sizes[2],
      }}
      onHoverStart={() => {
        bgControls.start("hover");
      }}
      onHoverEnd={() => {
        bgControls.stop("hover");
      }}
      onClick={onClickHandler}
    >
      <div className="backgroundShape">
        <svg viewBox="0 0 108.1 47" preserveAspectRatio="none">
          <motion.polygon
            fill={bg_color}
            points={initialPoints}
            variants={{
              hover: {
                points: [
                  initialPoints, // Initial points
                  hoverPoints_1, // Intermediate points
                  hoverPoints_2,
                  initialPoints, // Back to initial points
                ],
              },
            }}
            animate={bgControls}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>
      </div>

      {text}
    </motion.button>
  );
};

export default SimpleButton;
