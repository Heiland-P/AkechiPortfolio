import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TitlePage from "./pages/TitlePage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Router basename="/AkechiPortfolio">
      <Switch>
        <Route path="/" exact component={TitlePage} />
        <Route path="/portfolio" exact component={PortfolioPage} />
      </Switch>
    </Router>
  );
};

export default App;
