import React from "react";
import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import TypedInWords from "../components/TypedInWords";
import SimpleButton from "../components/SimpleButton";

import Logo from "../assets/image/logo.png";
import HBShapeR from "../assets/image/HBottom_red.png";
import HBShapeY from "../assets/image/HBottom_y.png";
import HAkechi from "../assets/image/Confidant_Akechi.png";
import HAkechiR from "../assets/image/Confidant_Akechi_R.png";
import HAkechiY from "../assets/image/Confidant_Akechi_Y.png";

import "../css/GeneralStyle.css";
import "../css/PortfolioPageStyle.css";
import { s } from "motion/react-client";

function PortfolioPage() {
  useEffect(() => {
    document.body.style.background = "#d9d9d9";
  }, []);

  const [firstNameComplete, setFirstNameComplete] = useState(false);
  const [lastNameComplete, setLastNameComplete] = useState(false);
  const [playNavBarAnimation, setPlayNavBarAnimation] = useState(false);

  useEffect(() => {
    if (firstNameComplete) {
      setPlayNavBarAnimation(true);
    }
  }, [firstNameComplete]);

  return (
    <div>
      <NavBar animationState={playNavBarAnimation} setAnimationState={setPlayNavBarAnimation} />
      <div className="HText body">
        <div className="HTextSpacerT"></div>
        <div className="HName">
          <div className="HFirstName">
            <TypedInWords
              text="GORO"
              fontfamily="P5_Expose"
              fontSize="128px"
              fontColor="black"
              onAnimationComplete={() => {
                setFirstNameComplete(true);
              }}
            />
          </div>

          <div className="HLastName">
            <TypedInWords
              text="AKECHI"
              fontfamily="P5_Expose"
              fontSize="128px"
              start={firstNameComplete}
              onAnimationComplete={() => {
                setLastNameComplete(true);
              }}
              style={{
                opacity: firstNameComplete ? 1 : 0,
              }}
            />
          </div>
        </div>

        <div className="HSubtitle"> Private Detective</div>
        <div className="HQuote">
          "Justice is a balacnce and my role is to tip the scale towards truth."
        </div>

        <div className="HTextSpacerB"></div>
      </div>

      <div className="background body">
        <div className="bgWhite"></div>
        <img className="bgLogo" src={Logo} alt="Akechi Logo" />
      </div>

      <div className="HBottom">
        <div className="HBottonShape">
          <img className="HBShape YShape" src={HBShapeY} alt="Yellow Shape" />
          <img className="HBShape RShape" src={HBShapeR} alt="Red Shape" />
        </div>

        <div className="HBImage body">
          <div className="HAkechi">
            <img className="HAkechiImgY" src={HAkechiY} alt="" />
            <img className="HAkechiImgR" src={HAkechiR} alt="" />
            <img className="HAkechiImg" src={HAkechi} alt="" />
          </div>
        </div>
      </div>

      <div className="LearnMoreButtonParent body">
        <div className="LearnMoreButton">
          <SimpleButton
            text="Learn More"
            text_color="black"
            hover_text_color="white"
            bg_color="black"
            text_size="32px"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
