import React from "react";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";

import TitleIcon from "../assets/image/TitleScreen_Icon.png";
import SimpleButton from "../components/SimpleButton";

import "../css/GeneralStyle.css";
import "../css/TitlePageStyle.css";

const TitlePageTest = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = "black";
  }, []);


  return (
    <div className="TitleMenu">
      <img className="Titlescreen_Icon" src={TitleIcon} alt="" />

      <div className="StartTitleText TitleText">WELCOME</div>

      <div className="TitleBodyText BodyText">
        <span>
          This is a fan-made mini game centered around Goro Akechi and The
          Protagonist.
          <br /> <br />
          This game is designed to play with a{" "}
        </span>
        <span
          style={{
            color: "red",
            fontStyle: "italic",
          }}
        >
          Name Card
        </span>
        <span>
          {" "}
          given by Goro Akechi himself.
          <br />
          You cannot proceed without the name card.
          <br />
          <br />
          Contact the author of the game for pictures of the name card.
          <br />
          <br />
          If you haven't received the name card &nbsp;
          <span
            style={{
              color: "red",
              fontStyle: "italic",
            }}
          >
            in person
          </span>
          , <br />
          you are strongly suggested to read the previous story <br />
          by click on the button on the &nbsp;
          <span
            style={{
              color: "red",
              fontStyle: "italic",
            }}
          >
            bottom right
          </span>
          .
          <br />
        </span>

        <span>
          <br />
          Full game coming 2025.
          </span>
      </div>

      <div className="StartButton">
        <SimpleButton
          text="Start"
          text_color="white"
          hover_text_color="black"
          bg_color="white"
          text_size="25px"
          onClickHandler={() => {
            navigate("/portfoliotest");
          }}
        />
      </div>


    </div>
  );
};

export default TitlePageTest;
