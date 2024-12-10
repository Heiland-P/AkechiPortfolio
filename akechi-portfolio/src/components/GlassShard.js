import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function GlassShard({
  imgURL,
  onHoverStart,
  onHoverEnd,
  playAnimation = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    console.log("isHovered:", isHovered);
  }, [isHovered]);

  const getRandomValue = (min, max) => Math.random() * (max - min) + min;

  const animationValues = playAnimation
    ? {
        x: [0, getRandomValue(-10, 10), 0],
        y: [0, getRandomValue(-10, 10), 0],
        rotate: [0, getRandomValue(-3, 3), 0], // Animate the rotation
        scale: [1, getRandomValue(0.97, 1.03), 1], // Animate the scale
      }
    : {};

  return (
    <motion.img
      className="glass-shard"
      src={imgURL}
      style={{
        width: `100%`,
        position: "absolute",
        border: "none",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        mixBlendMode: "normal", // Blend the shard with the background
      }}
      animate={animationValues}
      transition={{
        delay: getRandomValue(0, 1.5), // Delay the animation
        duration: getRandomValue(2, 3), // Animation duration
        repeat: Infinity, // Repeat the animation (rotation)
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
}

export default GlassShard;
