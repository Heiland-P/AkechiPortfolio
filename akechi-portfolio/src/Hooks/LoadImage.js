import { useState, useEffect } from 'react';

function usePreloadImages(imageArray) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {

    const totalImages = imageArray.length;
    
    if (totalImages === 0) {
      //setIsLoading(false);
      return;
    }

    console.log(totalImages)
    
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
  }, [loadedImages,imageArray.length]);

  return isLoading;
}

export { usePreloadImages };
