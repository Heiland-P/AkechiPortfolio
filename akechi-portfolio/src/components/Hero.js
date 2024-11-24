import React from "react";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import NavBar from "../components/NavBar";
import SimpleButton from "../components/SimpleButton";
import HeroName from "./HeroName";
import HeroBottomShape from "./HeroBottomShape";
import HeroImage from "./HeroImage";

import Logo from "../assets/image/logo.png";

import "../css/GeneralStyle.css";
import "../css/HeroStyle.css";

function Hero() {
  const [NameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [playNavBarAnimation, setPlayNavBarAnimation] = useState(false);
  const [playBottomShapeAnimation, setPlayBottomShapeAnimation] =
    useState(false);

  useEffect(() => {
    if (NameAnimationComplete) {
      setPlayNavBarAnimation(true);
      setPlayBottomShapeAnimation(true);
    }
  }, [NameAnimationComplete]);

  return (
    <div>
      <NavBar
        animationState={playNavBarAnimation}
        setAnimationState={setPlayNavBarAnimation}
      />
      <div className="HText body">
        <div className="HTextSpacerT"></div>
        <div className="HName">
          <HeroName
            onAnimationComplete={() => {
              setNameAnimationComplete(true);
            }}
          />
        </div>

        <div className="HSubtitle"> Private Detective</div>
        <div className="HQuote">
          "Justice is a balacnce and my role is to tip the scale towards truth."
        </div>

        <div className="HTextSpacerB"></div>
      </div>

      <div className="background body">
        <div className="bgWhite"></div>
        <img className="bgLogo" src={Logo} alt="Akechi Logo" />
      </div>

      <div className="HBottom">
        <div className="HBottonShape">
          <HeroBottomShape
            animationState={playBottomShapeAnimation}
            setAnimationState={setPlayBottomShapeAnimation}
          />
        </div>

        <div className="HBImage body">
          <HeroImage />
        </div>
      </div>

      <div className="LearnMoreButtonParent body">
        <div className="LearnMoreButton">
          <SimpleButton
            text="Learn More"
            text_color="black"
            hover_text_color="white"
            bg_color="black"
            text_size="32px"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
