import React, { useState, useEffect } from "react";

const ScrollDetector = () => {
  const [scrollDirection, setScrollDirection] = useState(""); // Default scroll direction

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      
      if (st > lastScrollTop + 50) {
        setScrollDirection("down");
      } else if (st < lastScrollTop) {
        setScrollDirection("up");
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      if(st == 0) setScrollDirection(null)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    scrollDirection
  );
};

export default ScrollDetector;
