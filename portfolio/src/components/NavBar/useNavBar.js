import { useState, useEffect } from "react";

const useNavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);
  const handleCloseNav = () => setIsExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    isExpanded,
    isScrolled,
    handleToggle,
    handleCloseNav,
    setIsExpanded,
  };
};

export default useNavBar;
