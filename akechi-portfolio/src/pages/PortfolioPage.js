import React from "react";
import { useEffect, useState } from "react";

import DialogueBox from "../components/DialogueBox";
import Hero from "../components/Hero";
import About from "../components/About";

import "../css/GeneralStyle.css";
import "../css/PortfolioPageStyle.css";

function PortfolioPage() {

  const [isDialogueVisible, setIsDialogueVisible] = useState(false);
  const [dialogueId, setDialogueId] = useState(null);

  useEffect(() => {
    document.body.style.background = "#d9d9d9";
  }, []);

  const showDialogue = (id) => {
    setDialogueId(id);
    setIsDialogueVisible(true);
  };

  const onDialogueEnd = () => {
    setDialogueId(null);
    setIsDialogueVisible(false);
  };

  const revealNextSection = () => {
    showDialogue("Secret");
    console.log("Reveal next section");
  }


  return (
    <div>
      <DialogueBox dialogueId={dialogueId} onDialogueEnd={onDialogueEnd}/>
      <Hero isTest={true} onButtonClick={revealNextSection}/>
      <About/>
    </div>
  );
}

export default PortfolioPage;
