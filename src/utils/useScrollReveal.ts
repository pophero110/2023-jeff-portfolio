import { useEffect } from "react";

const useScrollReveal = (ref: any, config: any) => {
  useEffect(() => {
    const animate = async () => {
      if (ref.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(ref.current, config);
      }
    };

    animate();
  }, []);
};

export default useScrollReveal;
