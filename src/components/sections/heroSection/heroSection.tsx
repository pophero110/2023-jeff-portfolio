import HeadShot from "../../headshot/headshot";
import styles from "./heroSection.module.scss";
import HeroContent from "./heroContent/heroContent";
import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
import { useRef } from "react";
export default function HeroSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig(800));
  return (
    <section ref={sectionRef} id="hero" className={styles.hero}>
      <HeroContent></HeroContent>
      <HeadShot></HeadShot>
    </section>
  );
}
