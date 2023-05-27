import SectionTitle from "../../sectionTitle/sectionTitle";
import ExperienceContent from "./experienceContent/experienceContent";
import styles from "./experienceSection.module.scss";
export default function ExperienceSection() {
  return (
    <section id="experience" className={`${styles.experienceSection} section`}>
      <SectionTitle title="Where I’ve Worked"></SectionTitle>
      <ExperienceContent></ExperienceContent>
    </section>
  );
}
