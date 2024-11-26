import React from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import LogButton from '../components/LogButton'
import DialogueBox from '../components/DialogueBox'

function MainLayout() {

  const {showDialogue, setShowDialogue} = useState(false);

  const onDialogueEnd = () => {
    console.log("Dialogue ended");
  };

  return (
    <div>
      <LogButton />
      {showDialogue && <DialogueBox dialogueId={"Greeting"} onDialogueEnd={onDialogueEnd} />}
      
      <Outlet />
    </div>
  )
}

export default MainLayout