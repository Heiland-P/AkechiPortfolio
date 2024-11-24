import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

import HBShapeR from "../assets/image/HBottom_red.png";
import HBShapeY from "../assets/image/HBottom_y.png";

import "../css/HeroBottomShapeStyle.css";
import { use } from "motion/react-client";

function HeroBottomShape({ animationState, setAnimationState, animationTime }) {
  const RYControl = useAnimationControls();
  const RRControl = useAnimationControls();

  useEffect(() => {
    if (animationState) {
      RYControl.start("visible");
      RRControl.start("visible");
    }
  }, [animationState]);

  const RoatateAnimation = {
    hidden: {
      opacity: 0,
      rotate: 90,
      y: 100,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
    },
  };

  return (
    <div className="Parent">
      <motion.img
        className="HBShape YShape"
        src={HBShapeY}
        alt="Yellow Shape"
        variants={RoatateAnimation}
        initial="hidden"
        animate={RYControl}
        transition={{
          duration: animationTime,
          ease: "easeInOut",
        }}
      />
      <motion.img
        className="HBShape RShape"
        src={HBShapeR}
        alt="Red Shape"
        variants={RoatateAnimation}
        initial="hidden"
        animate={RRControl}
        transition={{
          duration: animationTime,
          ease: "easeInOut",
          delay:0.1
        }}
      />
    </div>
  );
}

export default HeroBottomShape;
