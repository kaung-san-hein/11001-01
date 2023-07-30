import { useState, useEffect } from "react";

const useTop = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 5;
      setTop(isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return top;
};

export default useTop;
