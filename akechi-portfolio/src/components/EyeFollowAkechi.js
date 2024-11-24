import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import NoEyeAkechi from "../assets/image/Confidant_Akechi_NoEye.png";
import LeftEye from "../assets/image/LeftEye.png";
import RightEye from "../assets/image/RightEye.png";
import EyeBackground from "../assets/image/EyeBack.png";

import "../css/EyeFollowAkechiStyle.css";

function EyeFollowAkechi({ pause }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [characterRect, setCharacterRect] = useState(null);
  const characterRef = useRef(null);

  useEffect(() => {

    let animationFrameId;

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        animationFrameId = requestAnimationFrame(() => {
          setMousePosition({ x: clientX, y: clientY });
        });
      };

    if (!pause) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pause]);

  useEffect(() => {
    const updateCharacterRect = () => {
      if (characterRef.current) {
        setCharacterRect(characterRef.current.getBoundingClientRect());
      }
    };

    // Initial update
    updateCharacterRect();

    // Update on resize
    window.addEventListener("resize", updateCharacterRect);
    return () => window.removeEventListener("resize", updateCharacterRect);
  }, []);

  const calculateEyePosition = (eyeXPercent, eyeYPercent,isLeft) => {
    if (!characterRect) return { x: 0, y: 0 };

    const { left, top, width, height } = characterRect;
    const eyeX = left + width * eyeXPercent;
    const eyeY = top + height * eyeYPercent;

    const distanceX = mousePosition.x - eyeX;
    const distanceY = mousePosition.y - eyeY;

    const maxMovementX = 7; // Limit movement range
    const maxMovementY = 5;
    const angle = Math.atan2(distanceY, distanceX);
    const moveX = Math.cos(angle) * maxMovementX;
    const moveY = Math.sin(angle) * maxMovementY;

    if(isLeft && moveY > 0){
        return { x: moveX, y: moveY * 0.5 };
    }

    return { x: moveX, y: moveY };
  };

  return (
    <div className="HAkechiImg" ref={characterRef}>
      <img src={EyeBackground} alt="" className="EyeBackground" />
      <motion.img
        src={LeftEye}
        alt=""
        className="LeftEye"
        animate={{
          x: calculateEyePosition(0.285, 0.265, true).x,
          y: calculateEyePosition(0.285, 0.265, true).y,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 10 }}
      />
      <motion.img
        src={RightEye}
        alt=""
        className="RightEye"
        animate={{
          x: calculateEyePosition(0.47, 0.25, false).x,
          y: calculateEyePosition(0.47, 0.25, false).y,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 10 }}
      />
      <img src={NoEyeAkechi} alt="" className="NoEyeAkechi" />
    </div>
  );
}

export default EyeFollowAkechi;
