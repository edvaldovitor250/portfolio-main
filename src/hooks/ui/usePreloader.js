import { useState, useEffect } from "react";

const usePreloader = (duration = 1200) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return load;
};

export default usePreloader;
