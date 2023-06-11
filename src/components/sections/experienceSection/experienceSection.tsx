import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
import { useRef } from "react";
import SectionTitle from "../../sectionTitle/sectionTitle";
import ExperienceContent from "./experienceContent/experienceContent";
import styles from "./experienceSection.module.scss";
export default function ExperienceSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig());
  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`${styles.experienceSection} section`}
    >
      <SectionTitle title="Where I’ve Worked"></SectionTitle>
      <ExperienceContent></ExperienceContent>
    </section>
  );
}
