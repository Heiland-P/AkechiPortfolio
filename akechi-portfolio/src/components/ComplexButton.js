import React from "react";
import { motion, useAnimationControls } from "framer-motion";

import "../css/GeneralStyle.css";
import "../css/ComplexButtonStyle.css";

function ComplexButton({
  text = "button",
  text_color = "red",
  hover_text_color = "red",
  bg_color_1 = "blue",
  bg_color_2 = "blue",
  text_sizes = ["0.9rem", "1rem", "1.3rem"],
  onClickHandler,
}) {
  const bgControls_1 = useAnimationControls();
  const bgControls_2 = useAnimationControls();

  const initialPoints = "10,8.5 100.7,0 90.1,32.7 0,47";
  const hoverPoints_2 = "20,10 105.7,5 98.1,30.7 5,40";
  const hoverPoints_1 = "15,7 110.7,8 90.1,33.7 8,37";

  const initialPoints_2 = "18,10 90.7,1 95,24.7 5,40";
  const hoverPoints_2_2 = "15,15 80.7,3 85,28.7 0,25";
  const hoverPoints_1_2 = "13,8 100.7,0 95.1,30.7 6,22";

  return (
    <motion.button
      className="ComplexButton TitleText"
      style={{
        "--text-color": text_color,
        "--text-color-hover": hover_text_color,
        "--text-size-small": text_sizes[0],
        "--text-size-medium": text_sizes[1],
        "--text-size-large": text_sizes[2],
      }}
      onHoverStart={() => {
        bgControls_1.start("hover");
        bgControls_2.start("hover");
      }}
      onHoverEnd={() => {
        bgControls_1.stop();
        bgControls_2.stop();
      }}
      onClick={onClickHandler}
    >
      <div className="backgroundShape">
        <svg viewBox="0 0 108.1 47" preserveAspectRatio="none">
          <motion.polygon
            fill={bg_color_1}
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
            animate={bgControls_1}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>

        <svg viewBox="0 0 108.1 47" preserveAspectRatio="none">
          <motion.polygon
            fill={bg_color_2}
            points={initialPoints_2}
            variants={{
              hover: {
                points: [
                  initialPoints_2, // Initial points
                  hoverPoints_1_2, // Intermediate points
                  hoverPoints_2_2,
                  initialPoints_2, // Back to initial points
                ],
              },
            }}
            animate={bgControls_2}
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
}

export default ComplexButton;
