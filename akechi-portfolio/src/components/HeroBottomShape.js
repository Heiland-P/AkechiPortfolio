import React from "react";
import { motion, useAnimationControls } from "framer-motion";

import HBShapeR from "../assets/image/HBottom_red.png";
import HBShapeY from "../assets/image/HBottom_y.png";

import "../css/HeroBottomShapeStyle.css";

function HeroBottomShape({
    animationState,
    setAnimationState,
}) {
    
//   const RYControl = useAnimationControls();
//   const RRControl = useAnimationControls();

//   const RoatateAnimation = {
//     RHidden: {
//       opacity: 1,
//       rotate: 180,
//       y: 0,
//     },
//     RVisible: {
//       opacity: 1,
//       rotate: 0,
//       y: 0,
//     },
//   };

//   const RTransition = {
//     duration: 2,
//     ease: "easeOut",
//   };

  return (
    <div>
      <motion.img
        className="HBShape YShape"
        src={HBShapeY}
        alt="Yellow Shape"
        // variants={RoatateAnimation}
        // initial="RHidden"
        // animate={RYControl}
      />
      <motion.img className="HBShape RShape" src={HBShapeR} alt="Red Shape" />
    </div>
  );
}

export default HeroBottomShape;
