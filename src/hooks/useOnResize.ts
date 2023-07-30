import { useState, useEffect } from "react";

export default function useOnResize() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  useEffect(() => {
    const handleWindowResize = () => {
      window.innerWidth > 992 ? setIsMobile(false) : setIsMobile(true);
    };
    window.addEventListener("load", handleWindowResize);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("load", handleWindowResize);
    };
  }, []);
  return { isMobile };
}
