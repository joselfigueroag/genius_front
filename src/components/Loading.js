import { useState, useEffect } from "react";

import Emotions from "./Emotions";
import Sentiments from "./Sentiments";
import Legend from "./Legend";

function Loading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <Legend />,
    <Sentiments />,
    <Emotions />,
  ] 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, components.length]);

  return(
    <>
      {components[currentIndex]}
    </>
  )
}

export default Loading