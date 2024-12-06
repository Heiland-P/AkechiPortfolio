import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TitleIcon from "../assets/image/TitleScreen_Icon.png";
import SimpleButton from "../components/SimpleButton";
import Loading from "../components/Loading";

import { loadProgress, newGame } from "../Hooks/SaveLoad";

import "../css/GeneralStyle.css";
import "../css/TitlePageStyle.css";

const TitlePage = () => {
  const navigate = useNavigate();
  const [gameProgress, setGameProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNewGame = async () => {
    setLoading(true);
    await newGame();
    setLoading(false);
    navigate("/portfolio");
  };

  useEffect(() => {
    document.body.style.background = "black";

    const fetchProgress = async () => {
      const progress = await loadProgress();
      setGameProgress(progress);
      console.log("SaveLoad: Loaded Level: ", progress);
    };

    fetchProgress();
  }, []);

  return (
    <div>
      {loading && <Loading />}
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
        </div>

        <div className="StartButton">
          <SimpleButton
            text="New Game"
            text_color="white"
            hover_text_color="black"
            bg_color="white"
            text_sizes={["1.2rem", "1.7rem", "2rem"]}
            onClickHandler={handleNewGame}
          />
        </div>

        {gameProgress > 0 && (
          <div className="ConButton">
            <SimpleButton
              text="Continue"
              text_color="white"
              hover_text_color="black"
              bg_color="white"
              text_sizes={["1.2rem", "1.7rem", "2rem"]}
              onClickHandler={() => {
                navigate("/portfolio");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TitlePage;
