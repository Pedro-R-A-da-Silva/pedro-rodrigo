// src/hooks/useResponsive.js
import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
};

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    isMobile: windowSize.width < breakpoints.mobile,
    isTablet: windowSize.width >= breakpoints.mobile && windowSize.width < breakpoints.tablet,
    isDesktop: windowSize.width >= breakpoints.tablet,
    isLargeDesktop: windowSize.width >= breakpoints.desktop,
    windowSize,
    breakpoints
  };
};