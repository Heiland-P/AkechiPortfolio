import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import TitlePage from "./pages/TitlePage";
import PortfolioPageTest from "./pages/PortfolioPageTest";
import PortfolioPage from "./pages/PortfolioPage";
import TitlePageTest from "./pages/TitlePageTest";
import Loading from "./components/Loading";

import { useEffect, useState } from "react";
import { usePreloadImages } from "./Hooks/LoadImage";

const App = () => {
  const [imagesToPreload, setImagesToPreload] = useState([]);

  useEffect(() => {
    console.log("Preloading images...");

    const loadImagesFromContext = (context) => {
      return context.keys().map(context);
    };

    const imageContext = require.context(
      "./assets/image",
      false,
      /\.(jpg|jpeg|png|gif)$/
    );
    const dialogueImageContext = require.context(
      "./assets/image/Dialogue",
      false,
      /\.(jpg|jpeg|png|gif)$/
    );

    const images = [
      ...loadImagesFromContext(imageContext),
      ...loadImagesFromContext(dialogueImageContext),
    ];

    // Set the images for preloading
    setImagesToPreload(images);
  }, []);

  const isLoading = usePreloadImages(imagesToPreload);

  useEffect(() => {
    if (!isLoading) {
      console.log(isLoading);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default App;
