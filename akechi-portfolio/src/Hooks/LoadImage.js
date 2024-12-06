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

    console.log("Preload: TotalImage"+ totalImages);

    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setLoadedImages((prevCount) => prevCount + 1);
      };

      img.onerror = () => {
        console.error(`Preload: Failed to load image: ${src}`);
        setLoadedImages((prevCount) => prevCount + 1);
      };
    };

    imageArray.forEach(preloadImage);
  }, [imageArray]);

  useEffect(() => {
    // Once all images are loaded, set the loading state to false
    if (loadedImages === imageArray.length && imageArray.length > 0) {
      console.log("Preload: All images loaded.");
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
        console.log(`Preload: Font loaded: ${font.name}`);
      }).catch(error => {
        console.error(`Preload: Failed to load font: ${font.name}`, error);
      });
    });

    Promise.all(promises)
      .then(() => {
        setIsLoading(false);
        console.log("Preload: ll fonts loaded.");
      })
      .catch(error => {
        setIsLoading(false);
        console.error("Preload: Error loading fonts", error);
      });
  }, [fonts]);

  return isLoading;
};

export { usePreloadImages , usePreloadFont};
