import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current URL path
  
    useEffect(() => {
      // Jump to the top of the page instantly
      window.scrollTo(0, 0);
    }, [pathname]); // Runs whenever the path changes
  
    return null; // No UI rendering
  };
  
  export default ScrollToTop;