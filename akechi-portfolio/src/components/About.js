import React from "react";
import { useRef , useEffect} from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import BgAbout from "../assets/image/Bg_About.png";

import "../css/AboutStyle.css";

function About() {
  //Scroll Animation enter
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "start start"],
  });

  const scaleY = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  
  // // Debug scrollYProgress value
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", (value) => {
  //     console.log("scrollYProgress:", value);
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  return (
    <div className="AboutParent" ref={scrollRef}>
      <motion.img
        src={BgAbout}
        alt="BgAbout"
        className="BgAbout"
        style={{ scaleY: scaleY }}
      />
    </div>
  );
}

export default About;
