import SectionTitle from "../../sectionTitle/sectionTitle";
import AboutMeContent from "./aboutMeContent/aboutMeContent";
import styles from "./aboutMeSection.module.scss";
export default function AboutMeSection() {
  return (
    <section id="about" className={`${styles.aboutMe} section`}>
      <SectionTitle title="About Me"></SectionTitle>
      <AboutMeContent></AboutMeContent>
    </section>
  );
}
