import React from "react";

import HAkechi from "../assets/image/Confidant_Akechi.png";
import HAkechiR from "../assets/image/Confidant_Akechi_R.png";
import HAkechiY from "../assets/image/Confidant_Akechi_Y.png";

import "../css/HeroImageStyle.css";

function HeroImage() {
  return (
    <div>
      <div className="HAkechi">
        <img className="HAkechiImgY" src={HAkechiY} alt="" />
        <img className="HAkechiImgR" src={HAkechiR} alt="" />
        <img className="HAkechiImg" src={HAkechi} alt="" />
      </div>
    </div>
  );
}

export default HeroImage;
