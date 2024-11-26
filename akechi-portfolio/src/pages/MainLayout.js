import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import LogButton from "../components/LogButton";
import DialogueBox from "../components/DialogueBox";

function MainLayout() {
  const [showDialogue, setShowDialogue] = useState(false);
  const [dialogueId, setDialogueId] = useState(null);

  const handleActivateDialogue = (id) => {
    setDialogueId(id);
    setShowDialogue(true);
  };

  const onDialogueEnd = () => {
    setShowDialogue(false);
    setDialogueId(null);
  };

  useEffect(() => {
    console.log("showDialogue:", showDialogue);
    console.log("dialogueId:", dialogueId);
  }, [showDialogue, dialogueId]);

  return (
    <div>
      <LogButton onActivateDialogue={handleActivateDialogue} />
      {showDialogue && (
        <DialogueBox dialogueId={dialogueId} onDialogueEnd={onDialogueEnd} />
      )}
      <Outlet />
    </div>
  );
}

export default MainLayout;
