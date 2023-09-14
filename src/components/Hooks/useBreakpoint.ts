import { useState, useLayoutEffect } from "react";

const useBreakpoint = () => {
  const [size, setSize] = useState<number>(window.innerWidth);
  const isMobile = size < 672; // sm
  const isTablet = size < 1056 && size >= 672; // md
  const isDesktop = size >= 1056 && size < 1584; // lg
  const isFullDesktop = size >= 1584;

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { isMobile, isTablet, isDesktop, isFullDesktop };
};

export default useBreakpoint;
