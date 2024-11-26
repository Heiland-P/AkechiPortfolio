import React from "react";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import dialogues from "../assets/dialogues.json";

import "../css/DialogueBoxStyle.css";
import "../css/GeneralStyle.css";

import decoImg from "../assets/image/Dialogue_deco.png";
import Icon from "../assets/image/Dialogue_Icon.png";
import IDBg from "../assets/image/DialogueID_gb.png";

function DialogueBox({ dialogueId, onDialogueEnd }) {
  
  const control = useAnimationControls();

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [dialogue, setDialogue] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    const selectedDialogue = dialogues.find((d) => d.id === dialogueId);
    setDialogue(selectedDialogue);
  }, [dialogueId]);

  useEffect(() => {
    if (dialogue) {
      const currentLine = dialogue.lines[currentLineIndex];
      import(`../${currentLine.background}`)
        .then((image) => setBackgroundImage(image.default))
        .catch((error) => {
          console.error("Error loading background image:", error);
          setBackgroundImage(null);
        });
    }
  }, [dialogue, currentLineIndex]);

  const handleNextLine = () => {
    if (currentLineIndex < dialogue.lines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    } else {
      onDialogueEnd();
      control.start("exit");
    }
  };

  useEffect(() => {
    control.start("enter");
  },[control]);

  if (!dialogue) return null;

  const currentLine = dialogue.lines[currentLineIndex];

  console.log(backgroundImage);

  return (
    <motion.div
      className="DialogueContainer"
      onClick={handleNextLine}
      variants={{
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }}
      animate={control}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="BgColor"></div>
      <motion.div className="ID" initial={{ x: -100 }} animate={{ x: 0 }}>
        <img className="IDImg" src={IDBg} alt="icon" />
        <div className="IDText">{dialogueId}</div>
      </motion.div>
      <motion.img
        className="DialogueDeco"
        src={decoImg}
        alt="deco"
        animate={{
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        initial={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "tween",
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="DialogueBg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <img className="DialogueImg" src={backgroundImage} alt="background" />
        <div className="DialogueText BodyText">{currentLine.text}</div>
        <motion.img
          className="DialogueIcon"
          src={Icon}
          alt="icon"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            type: "tween",
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default DialogueBox;
