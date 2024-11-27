import React from "react";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Config from "../Config";

import TitleIcon from "../assets/image/TitleScreen_Icon.png";
import SimpleButton from "../components/SimpleButton";

import "../css/GeneralStyle.css";
import "../css/TitlePageStyle.css";

const TitlePageTest = () => {

  const navigate = useNavigate();

  const [testCode, setTestCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.style.background = "black";
  }, []);

  // Handle test code input
  const handleTestCodeChange = (e) => {
    setTestCode(e.target.value);
  };


  const handleTestCodeSubmit = async () => {
    if(!testCode) {
      navigate("/portfoliotest");
      return;
    }

    console.log("test code:", testCode);
    
    try {
      const response = await fetch(`${Config.backendUrl}/check-testcode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passcode: testCode }),
      }
      );

      const data = await response.json();


      console.log("Test code validation response:", data);

      if (data.success) {
        navigate("/portfolio");
      } else {
        setErrorMessage("Invalid test code.");
      }
    } catch (error) {
      console.error("Error validating test code:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };



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
          Click Start without testcode to check the main page.

          {/* <br />
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
          <br /> */}
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
            handleTestCodeSubmit();
          }}
        />
      </div>

      <div className="TestCodeInput">
        <input
          type="text"
          value={testCode}
          onChange={handleTestCodeChange}
          placeholder="Enter test code"
        /> 
        {errorMessage && <div className="ErrorMessage">{errorMessage}</div>}
      </div>


    </div>
  );
};

export default TitlePageTest;
