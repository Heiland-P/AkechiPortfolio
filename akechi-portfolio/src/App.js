import React from "react";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import TitlePage from "./pages/TitlePage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Router basename="/AkechiPortfolio">
      <Routes >
        <Route exact path="/" element={<TitlePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes >
    </Router>
  );
};

export default App;
