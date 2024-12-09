import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  //Scroll Animation
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const bgScroll = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.4, 0]);
  const translateLeft = useTransform(scrollYProgress, [0.1, 0.5], [0, -50]);
  const translateRight = useTransform(scrollYProgress, [0.1, 0.5], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);

  return (
    <div className="HeroParent" ref={scrollRef} style={{
      overflow: !isTest ? "hidden" : (isHiddenActive ? "hidden" : "visible"),
    }}>
      <NavBar
        animationState={playNavBarAnimation}
        setAnimationState={setPlayNavBarAnimation}
        animationTime={animationTime}
        onAnimationComplete={() => {
          setColorAnimationComplete(true);
        }}
      />
      <motion.div className="HText" style={{x:translateRight, opacity:textOpacity}}>
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
      </motion.div>

      <div className="background">
        <motion.div style={{ width: "100%", height:"100%", scaleX: bgScroll }}>
          <div className="bgWhite"></div>
        </motion.div>
        <motion.img className="bgLogo" src={Logo} alt="Akechi Logo" style={{
          opacity: logoOpacity,
          x: translateLeft,
        }}/>
      </div>

      <div className="HBottom">
        <div className="HBottonShape">
          <HeroBottomShape
            scrollYProgress={scrollYProgress}
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
            scrollYProgress={scrollYProgress}
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
