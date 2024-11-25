import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import TitlePage from "./pages/TitlePage";
import PortfolioPageTest from "./pages/PortfolioPageTest";
import PortfolioPage from "./pages/PortfolioPage";
import TitlePageTest from "./pages/TitlePageTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TitlePageTest />} />
        <Route path="/portfoliotest" element={<PortfolioPageTest />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="/title" element={<TitlePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
