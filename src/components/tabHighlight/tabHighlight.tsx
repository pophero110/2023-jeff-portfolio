import { useEffect, useState } from "react";
import styles from "./tabHighlight.module.scss";
type TransformStyle = {
  transform: string;
};
export default function TabHighlight({ jobIndex }: { jobIndex: number }) {
  const breakpoint = "(max-width: 480px)";
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint);

    setMatches(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  const style: TransformStyle = {
    transform: matches
      ? `translateX(calc(${jobIndex * 120}px))`
      : `translateY(calc(${jobIndex * 50}px))`,
  };

  return <div className={styles.tabHighlight} style={style}></div>;
}
