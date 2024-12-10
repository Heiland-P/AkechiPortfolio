import React from "react";
import { useRef, useEffect , useState} from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import BgAbout from "../assets/image/Bg_About.png";
import BgGradient from "../assets/image/Bg_Gradient.png";
import Glass_1 from "../assets/image/glasses/glass_1.png";
import Glass_2 from "../assets/image/glasses/glass_2.png";
import Glass_3 from "../assets/image/glasses/glass_3.png";
import Glass_4 from "../assets/image/glasses/glass_4.png";
import Glass_5 from "../assets/image/glasses/glass_5.png";
import Glass_6 from "../assets/image/glasses/glass_6.png";
import Glass_7 from "../assets/image/glasses/glass_7.png";
import Glass_8 from "../assets/image/glasses/glass_8.png";
import Glass_9 from "../assets/image/glasses/glass_9.png";
import Glass_10 from "../assets/image/glasses/glass_10.png";

import GlassShard from "./GlassShard";

import "../css/AboutStyle.css";

function About() {
  //Scroll Animation enter
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "start start"],
  });

  const scaleY = useTransform(scrollYProgress, [0.6, 0.8, 0.95, 1], [0, 1, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0.95, 1], [1, 0.2]);

  const explode = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  //x-axis
  const transGlass_1 = useTransform(scrollYProgress, [0.95, 1], ["10%", "53%"]);
  const transGlass_2 = useTransform(scrollYProgress, [0.95, 1], ["10%", "33%"]);
  const transGlass_3 = useTransform(scrollYProgress, [0.95, 1], ["25%", "31%"]);
  const transGlass_4 = useTransform(scrollYProgress, [0.95, 1], ["25%", "20%"]);
  const transGlass_5 = useTransform(scrollYProgress, [0.95, 1], ["25%", "27%"]);
  const transGlass_6 = useTransform(scrollYProgress, [0.95, 1], ["25%", "7%"]);
  const transGlass_7 = useTransform(scrollYProgress, [0.95, 1], ["20%", "7%"]);
  const transGlass_8 = useTransform(scrollYProgress, [0.95, 1], ["30%", "25%"]);
  const transGlass_9 = useTransform(scrollYProgress, [0.95, 1], ["20%", "31%"]);
  const transGlass_10 = useTransform(scrollYProgress, [0.95, 1], ["8%", "36%"]);
  //y-axis
  const transGlassy_1 = useTransform(scrollYProgress, [0.95, 1], ["50%", "50%"]);
  const transGlassy_2 = useTransform(scrollYProgress, [0.95, 1], ["50%", "57%"]);
  const transGlassy_3 = useTransform(scrollYProgress, [0.95, 1], ["50%", "55%"]);
  const transGlassy_4 = useTransform(scrollYProgress, [0.95, 1], ["50%", "65%"]);
  const transGlassy_5 = useTransform(scrollYProgress, [0.95, 1], ["50%", "58%"]);
  const transGlassy_6 = useTransform(scrollYProgress, [0.95, 1], ["50%", "55%"]);
  const transGlassy_7 = useTransform(scrollYProgress, [0.95, 1], ["50%", "20%"]);
  const transGlassy_8 = useTransform(scrollYProgress, [0.95, 1], ["50%", "34%"]);
  const transGlassy_9 = useTransform(scrollYProgress, [0.95, 1], ["50%", "20%"]);
  const transGlassy_10 = useTransform(scrollYProgress, [0.95, 1], ["48%", "12%"]);

  // // Debug scrollYProgress value
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // console.log("scrollYProgress:", value);
      if (value === 1) {
        setMixBlendMode("luminosity");
      } else {
        setMixBlendMode("normal");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const [mixBlendMode, setMixBlendMode] = useState("normal");

  return (
    <div className="AboutParent" ref={scrollRef}>
      <motion.img
        src={BgAbout}
        alt="BgAbout"
        className="BgAbout"
        style={{ scaleY: scaleY , opacity: opacity, mixBlendMode: mixBlendMode }}
      />

      <div
        className="GlassPieces"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >

        <motion.div
          className="ShardContainer1"
          style={{
            scale: explode,
            left: transGlass_1,
            top: transGlassy_1,
          }}
        >
          <GlassShard imgURL={Glass_1} playAnimation = {true}/>
        </motion.div>

        <motion.div
          className="ShardContainer2"
          style={{
            scale: explode,
            left: transGlass_2,
            top: transGlassy_2,
          }}
        >
          <GlassShard imgURL={Glass_2} playAnimation = {true}/>
        </motion.div>

        <motion.div
          className="ShardContainer3"
          style={{
            scale: explode,
            left: transGlass_3,
            top: transGlassy_3,
          }}
        >
          <GlassShard imgURL={Glass_3} />
        </motion.div>

        <motion.div
          className="ShardContainer4"
          style={{
            scale: explode,
            left: transGlass_4,
            top: transGlassy_4,
          }}
        >
          <GlassShard imgURL={Glass_4} />
        </motion.div>

        <motion.div
          className="ShardContainer5"
          style={{
            scale: explode,
            left: transGlass_5,
            top: transGlassy_5,
          }}
        >
          <GlassShard imgURL={Glass_5} />
        </motion.div>

        <motion.div
          className="ShardContainer6"
          style={{
            scale: explode,
            left: transGlass_6,
            top: transGlassy_6,
          }}
        >
          <GlassShard imgURL={Glass_6} />
        </motion.div>

        <motion.div
          className="ShardContainer7"
          style={{
            scale: explode,
            left: transGlass_7,
            top: transGlassy_7,
          }}
        >
          <GlassShard imgURL={Glass_7} />
        </motion.div>

        <motion.div
          className="ShardContainer8"
          style={{
            scale: explode,
            left: transGlass_8,
            top: transGlassy_8,
          }}
        >
          <GlassShard imgURL={Glass_8} />
        </motion.div>
        
        <motion.div
          className="ShardContainer9"
          style={{
            scale: explode,
            left: transGlass_9,
            top: transGlassy_9,
          }}
        >
          <GlassShard imgURL={Glass_9} playAnimation = {true}/>
        </motion.div>

        <motion.div
          className="ShardContainer10"
          style={{
            scale: explode,
            left: transGlass_10,
            top: transGlassy_10,
          }}
        >
          <GlassShard imgURL={Glass_10} playAnimation = {true}/>
        </motion.div>


      </div>
    </div>
  );
}

export default About;
