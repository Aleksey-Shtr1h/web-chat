import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([
    undefined,
    undefined
  ]);

  useEffect(() => {

    const handleResize = () => {
      setWindowSize([
        window.innerWidth,
        window.innerHeight
      ]);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}