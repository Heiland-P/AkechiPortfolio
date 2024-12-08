import React from "react";
import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import SimpleButton from "../components/SimpleButton";
import HeroName from "./HeroName";
import HeroBottomShape from "./HeroBottomShape";
import HeroImage from "./HeroImage";

import Logo from "../assets/image/logo.png";

import "../css/GeneralStyle.css";
import "../css/HeroStyle.css";

function Hero({ isTest, isHiddenActive, onButtonClick }) {
  const animationTime = 0.5;

  const [NameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [playNavBarAnimation, setPlayNavBarAnimation] = useState(false);
  const [playBottomShapeAnimation, setPlayBottomShapeAnimation] =
    useState(false);
  const [playHeroImageAnimation, setPlayHeroImageAnimation] = useState(false);
  const [ColorAnimationComplete, setColorAnimationComplete] = useState(false);
  const [pauseEyeFollow, setPauseEyeFollow] = useState(true);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (NameAnimationComplete) {
      setPlayNavBarAnimation(true);
      setPlayBottomShapeAnimation(true);
    }
  }, [NameAnimationComplete]);

  useEffect(() => {
    if (ColorAnimationComplete) {
      setPlayHeroImageAnimation(true);
      setPauseEyeFollow(false);
    }
  }, [ColorAnimationComplete]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="HeroParent">
      <NavBar
        animationState={playNavBarAnimation}
        setAnimationState={setPlayNavBarAnimation}
        animationTime={animationTime}
        onAnimationComplete={() => {
          setColorAnimationComplete(true);
        }}
      />
      <div className="HText">
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
        <div className="LearnMoreButton">
          <SimpleButton
            text="Learn More"
            text_color="black"
            hover_text_color="white"
            bg_color="black"
          />
        </div>

        <div className="HTextSpacerB"></div>
      </div>

      <div className="background">
        <div className="bgWhite"></div>
        <img className="bgLogo" src={Logo} alt="Akechi Logo" />
      </div>

      <div className="HBottom">
        <div className="HBottonShape">
          <HeroBottomShape
            animationState={playBottomShapeAnimation}
            setAnimationState={setPlayBottomShapeAnimation}
            animationTime={animationTime}
          />
        </div>

        <div className="HBImage">
          <HeroImage
            animationState={playHeroImageAnimation}
            animationTime={0.2}
            pause={pauseEyeFollow}
          />
        </div>
      </div>


      {isTest && isHiddenActive && (
        <div
          className="HiddenButton"
          onClick={onButtonClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
      )}

      {isHovered && isTest && (
        <span
          className="TooltipText BodyText"
          style={{
            position: "absolute",
            top: mousePosition.y + 30,
            left: mousePosition.x + 90,
          }}
        >
          Reveal The Secret
        </span>
      )}
    </div>
  );
}

export default Hero;
