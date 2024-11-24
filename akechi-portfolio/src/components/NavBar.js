import React from "react";
import { motion , useAnimationControls} from "framer-motion";
import { useEffect } from "react";

import ComplexButton from "../components/ComplexButton";

import "../css/NavBarStyle.css";
import "../css/GeneralStyle.css";

function NavBar({
  animationState,
  setAnimationState,
  animationTime = 1,
  onAnimationComplete,
}) {

  const controls = useAnimationControls();

  useEffect(() => {
    if (animationState) {
      controls.start("enter");
    }
  }, [animationState]);

  return (
    <nav className="Header">
      <motion.div
        className="topBar"
        initial={{ width: 0 }}
        variants={{
          enter: { width: "100vw" },
        }}
        transition={{ duration: animationTime, ease: "easeInOut" }}
        animate={controls}
        onAnimationComplete={onAnimationComplete}
      />

      <div className="NavParent">
        <div className="NavBarName TitleText">Goro Akechi</div>
        <div className="SpacerChild"></div>
        <div className="NavButtons">
          <ComplexButton
            text="About"
            text_color="black"
            bg_color_1="#FFE285"
            bg_color_2="#FF7878"
            text_size="16px"
            onClickHandler={() => {}}
          />
        </div>
        <div className="NavButtons">
          <ComplexButton
            text="Detective Files"
            text_color="black"
            bg_color_1="#FFE285"
            bg_color_2="#FF7878"
            text_size="16px"
            onClickHandler={() => {}}
          />
        </div>
        <div className="NavButtons">
          <ComplexButton
            text="Public Image"
            text_color="black"
            bg_color_1="#FFE285"
            bg_color_2="#FF7878"
            text_size="16px"
            onClickHandler={() => {}}
          />
        </div>
        <div className="NavButtons">
          <ComplexButton
            text="Message Board"
            text_color="black"
            bg_color_1="#FFE285"
            bg_color_2="#FF7878"
            text_size="16px"
            onClickHandler={() => {}}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
