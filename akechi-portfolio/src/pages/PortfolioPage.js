import React from "react";
import { useEffect, useState } from "react";
import { saveProgress, loadProgress } from "../Hooks/SaveLoad";

import DialogueBox from "../components/DialogueBox";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/GeneralStyle.css";
import "../css/PortfolioPageStyle.css";

function PortfolioPage() {
  const [gameProgress, setGameProgress] = useState(0);

  const [isDialogueVisible, setIsDialogueVisible] = useState(false);
  const [dialogueId, setDialogueId] = useState(null);

  // init game progress
  useEffect(() => {
    document.body.style.background = "black";

    const fetchProgress = async () => {
      const progress = await loadProgress();
      setGameProgress(progress);
      console.log("SaveLoad: Loaded Level: ", progress);
    };

    fetchProgress();
  }, []);

  useEffect(() => {
    document.body.style.background = "#d9d9d9";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showDialogue = (id) => {
    setDialogueId(id);
    setIsDialogueVisible(true);
  };

  const onDialogueEnd = () => {
    if (dialogueId === "Secret") {
      saveProgress("level:1");
      setGameProgress(1);
    }
    setDialogueId(null);
    setIsDialogueVisible(false);
  };

  const revealFullPage = () => {
    showDialogue("Secret");
  };

  return (
    <div>
      <DialogueBox dialogueId={dialogueId} onDialogueEnd={onDialogueEnd} />
      <Hero isTest={true} isHiddenActive={gameProgress<1} onButtonClick={revealFullPage} />
      {gameProgress >= 1 && (
        <div>
          <About />
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;
