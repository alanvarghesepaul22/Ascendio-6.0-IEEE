"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const isClient = typeof window === "object";

  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return isMobile;
};

export default useScreenSize;
