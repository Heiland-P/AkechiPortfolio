import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import ButtonIcon from "../assets/image/Btn_Icon.png";
import ComplexButton from "./ComplexButton";

import "../css/LogButtonStyle.css";
import "../css/GeneralStyle.css";

function LogButton({ onShowList }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (id) => {
    onShowList(id);
  }

  return (
    <div className="Log">
      {showTooltip && (
        <motion.div
          className="Tooltip BodyText"
          initial={{ opacity: 0, y: 10, x: "-50%" }}
          animate={{ opacity: 0.8, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 10, x: "-50%" }}
          transition={{ duration: 0.2 }}
        >
          Review Story
        </motion.div>
      )}

      <button className="LogButton" onClick= {() => handleClick("Greeting")}>
        <motion.img
          className="LBImge"
          src={ButtonIcon}
          alt=""
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => setShowTooltip(true)}
          onHoverEnd={() => setShowTooltip(false)}
        />
      </button>

      {/* <button className="LogButton" onClick={onShowList}>
        <motion.img
          className="LBImge"
          src={ButtonIcon}
          alt=""
          whileHover={{ scale: 1.2 }}
          onHoverStart={() => setShowTooltip(true)}
          onHoverEnd={() => setShowTooltip(false)}
        />
      </button> */}
      
    </div>
  );
}

export default LogButton;
