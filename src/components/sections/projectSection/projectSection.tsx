import SectionTitle from "@/components/sectionTitle/sectionTitle";
import styles from "./projectSection.module.scss";
import ProjectImage from "./projectImage/projectImage";
import ProjectContent from "./projectContent/projectContent";
export default function ProjectSection() {
  return (
    <section id="project" className={`${styles.projectSection} section`}>
      <SectionTitle title="Some Things I’ve Built"></SectionTitle>
      <div className={styles.projectSection__wrapper}>
        <div className={styles.projectSection__wrapper__content}>
          <ProjectContent></ProjectContent>
        </div>
        <div className={styles.projectSection__wrapper__image}>
          <ProjectImage></ProjectImage>
        </div>
      </div>
    </section>
  );
}
