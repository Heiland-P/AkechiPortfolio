import React from "react";
import {
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import HBShapeR from "../assets/image/HBottom_red.png";
import HBShapeY from "../assets/image/HBottom_y.png";

import "../css/HeroBottomShapeStyle.css";

function HeroBottomShape({ animationState, animationTime, scrollYProgress }) {
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

  //Scroll Animation
  const rotateY = useTransform(scrollYProgress, [0.05, 1], [0, 30]);
  const rotateR = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const opacityScroll = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

  // Debug scrollYProgress value
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", (value) => {
  //     console.log("scrollYProgress:", value);
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  return (
    <motion.div className="Parent" style={{opacity: opacityScroll}}>
      <motion.img
        style={{ rotate: rotateY }}
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
        style={{ rotate: rotateR }}
        src={HBShapeR}
        alt="Red Shape"
        variants={RoatateAnimation}
        initial="hidden"
        animate={RRControl}
        transition={{
          duration: animationTime,
          ease: "easeInOut",
          delay: 0.1,
        }}
      />
    </motion.div>
  );
}

export default HeroBottomShape;
