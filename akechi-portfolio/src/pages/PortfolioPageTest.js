import React from "react";
import { useEffect } from "react";

import Hero from "../components/Hero";

import "../css/GeneralStyle.css";
import "../css/PortfolioPageStyle.css";

function PortfolioPageTest() {
  useEffect(() => {
    document.body.style.background = "#d9d9d9";
  }, []);

  return (
    <div>
      <Hero isTest={false}/>
      <div className="TitleText"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "70%",
          transform: "translateX(-50%)",
          color: "white",
        }}
      >Full Game Coming 2025</div>
    </div>
  );
}

export default PortfolioPageTest;
