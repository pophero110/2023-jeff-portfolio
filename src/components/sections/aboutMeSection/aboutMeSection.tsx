import { useRef } from "react";
import SectionTitle from "../../sectionTitle/sectionTitle";
import AboutMeContent from "./aboutMeContent/aboutMeContent";
import styles from "./aboutMeSection.module.scss";
import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
export default function AboutMeSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig());
  return (
    <section
      ref={sectionRef}
      id="about"
      className={`${styles.aboutMe} section`}
    >
      <SectionTitle title="About Me"></SectionTitle>
      <AboutMeContent></AboutMeContent>
    </section>
  );
}
