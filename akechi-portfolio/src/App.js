import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import TitlePage from "./pages/TitlePage";
import PortfolioPageTest from "./pages/PortfolioPageTest";
import PortfolioPage from "./pages/PortfolioPage";
import TitlePageTest from "./pages/TitlePageTest";
import Loading from "./components/Loading";

import { useEffect, useState } from "react";
import { usePreloadImages, usePreloadFont } from "./Hooks/LoadImage";

const App = () => {
  const [imagesToPreload, setImagesToPreload] = useState([]);

  const [fontsToPreload, setFontsToPreload] = useState([
    { name: "P5_Expose", url: require("./assets/font/Expose-Regular.otf") },
    {
      name: "P5_Menu",
      url: require("./assets/font/Persona5MenuFontPrototype-Regular.ttf"),
    },
    {
      name: "Optima nova LT Black",
      url: require("./assets/font/Optima-nova-LT-Black-Regular.otf"),
    },
    {
      name: "Optima nova LT Italic",
      url: require("./assets/font/Optima-nova-LT-Black-Italic.otf"),
    },
    {
      name: "Optima nova LT",
      url: require("./assets/font/Optima-nova-LT-Regular.otf"),
    },
  ]);

  useEffect(() => {

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

  const isLoadingImage = usePreloadImages(imagesToPreload);
  const isLoadingFont = usePreloadFont(fontsToPreload);

  // useEffect(() => {
  //   if (!isLoadingImage) {
  //     console.log("Image preloading: " + isLoadingImage);
  //   }
  // }, [isLoadingImage]);

  // useEffect(() => {
  //   if (!isLoadingFont) {
  //     console.log("Font preloading: " + isLoadingFont);
  //   }
  // }, [isLoadingFont]);

  return (
    <div>
      {isLoadingImage || isLoadingFont ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route exact path="/" element={<TitlePageTest />} />
              <Route path="/portfoliotest" element={<PortfolioPageTest />} />
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
