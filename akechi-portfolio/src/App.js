import React from "react";

import { HashRouter as Router, Route, Routes} from 'react-router-dom';

import TitlePage from "./pages/TitlePage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<TitlePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes >
    </Router>
  );
};

export default App;
