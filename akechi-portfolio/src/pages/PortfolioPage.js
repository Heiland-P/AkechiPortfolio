import React from "react";
import { useEffect } from "react";

import Hero from "../components/Hero";

import "../css/GeneralStyle.css";
import "../css/PortfolioPageStyle.css";

function PortfolioPage() {
  useEffect(() => {
    document.body.style.background = "#d9d9d9";
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}

export default PortfolioPage;
