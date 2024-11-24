import React from "react";
import { useEffect, useState } from "react";


import TypedInWords from "../components/TypedInWords";
import "../css/HeroNameStyle.css";

function HeroName({
    onAnimationComplete,
}) {

    const [playFirstNameAnimation, setFirstNameAnimation] = useState(true);
    const [playLastNameAnimation, setLastNameAnimation] = useState(false);
    const [firstNameComplete, setFirstNameComplete] = useState(false);
    // const [lastNameComplete, setLastNameComplete] = useState(false);

    useEffect(() => {
        if (firstNameComplete) {
          setLastNameAnimation(true);
        }
      }, [firstNameComplete]);

  return (
    <div>
      <div className="HFirstName">
        <TypedInWords
          text="GORO"
          fontfamily="P5_Expose"
          fontSize="128px"
          fontColor="black"
          onAnimationComplete={() => {
            setFirstNameComplete(true);
          }}
          animationState={playFirstNameAnimation}
          setAnimationState={setFirstNameAnimation}
        />
      </div>

      <div className="HLastName">
        <TypedInWords
          text="AKECHI"
          fontfamily="P5_Expose"
          fontSize="128px"
          start={firstNameComplete}
          onAnimationComplete={() => {
            onAnimationComplete();
          }}
          style={{
            opacity: firstNameComplete ? 1 : 0,
          }}
          animationState={playLastNameAnimation}
          setAnimationState={setLastNameAnimation}
        />
      </div>
    </div>
  );
}

export default HeroName;
