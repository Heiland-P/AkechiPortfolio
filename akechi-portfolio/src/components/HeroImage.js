import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

// import HAkechi from "../assets/image/Confidant_Akechi.png";
import HAkechiR from "../assets/image/Confidant_Akechi_R.png";
import HAkechiY from "../assets/image/Confidant_Akechi_Y.png";

import EyeFollowAkechi from "./EyeFollowAkechi";

import "../css/HeroImageStyle.css";

function HeroImage({ animationState, setAnimationState, animationTime,pause }) {

  const YControl = useAnimationControls();
  const RControl = useAnimationControls();

  useEffect(() => {
    if (animationState) {
      YControl.start("visible");
      RControl.start("visible");
    }
  }, [animationState]);

  return (
    <div>
      <div className="HAkechi">
        <motion.img
          className="HAkechiImgY"
          src={HAkechiY}
          alt=""
          variants={{
            hidden: {
              opacity: 0,
              x: 0,
              y: 0,
            },
            visible: {
              opacity: [0,1,1],
              x: 10,
              y: -10,
            },
          }}
          initial="hidden"
          animate={YControl}
          transition={{
            duration: animationTime,
            ease: "easeInOut",
          }}
        />

        <motion.img
          className="HAkechiImgR"
          src={HAkechiR}
          alt=""
          variants={{
            hidden: {
              opacity: 0,
              x: 0,
              y: 0,
            },
            visible: {
              opacity: 1,
              x: -7,
              y: -5,
            },
          }}
          initial="hidden"
          animate={RControl}
          transition={{
            duration: animationTime,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />

        {/* <img className="HAkechiImg" src={HAkechi} alt="" /> */}
      
        <EyeFollowAkechi pause={pause}/>
      
      </div>
    </div>
  );
}

export default HeroImage;
