import { useState, useEffect } from "react";

function usePreloadImages(imageArray, fontArray) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const totalImages = imageArray.length;

    if (totalImages === 0) {
      //setIsLoading(false);
      return;
    }

    console.log(totalImages);

    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;

      //console.log(img);

      img.onload = () => {
        //console.log(`Successfully loaded image: ${src}`);
        setLoadedImages((prevCount) => prevCount + 1);
      };

      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setLoadedImages((prevCount) => prevCount + 1);
      };
    };

    imageArray.forEach(preloadImage);
  }, [imageArray]);

  useEffect(() => {
    // Once all images are loaded, set the loading state to false
    if (loadedImages === imageArray.length && imageArray.length > 0) {
      console.log("All images loaded.");
      setIsLoading(false);
    }
  }, [loadedImages, imageArray.length]);

  return isLoading;
}

const usePreloadFont = (fonts) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promises = fonts.map(font => {
      const fontFace = new FontFace(font.name, `url(${font.url})`);
      return fontFace.load().then(loadedFont => {
        document.fonts.add(loadedFont);
        console.log(`Font loaded: ${font.name}`);
      }).catch(error => {
        console.error(`Failed to load font: ${font.name}`, error);
      });
    });

    Promise.all(promises)
      .then(() => {
        setIsLoading(false);
        console.log("All fonts loaded.");
      })
      .catch(error => {
        setIsLoading(false);
        console.error("Error loading fonts", error);
      });
  }, [fonts]);

  return isLoading;
};

export { usePreloadImages , usePreloadFont};
