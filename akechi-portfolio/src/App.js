import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import TitlePage from "./pages/TitlePage";
import PortfolioPage from "./pages/PortfolioPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="AkechiPortfolio" element={<TitlePage />} />
      <Route path="portfolio" element={<PortfolioPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
