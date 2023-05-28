import SectionTitle from "@/components/sectionTitle/sectionTitle";
import styles from "./projectSection.module.scss";
import ProjectImage from "./projectImage/projectImage";
import ProjectContent from "./projectContent/projectContent";
import { projects } from "@/data/project";
export default function ProjectSection() {
  return (
    <section id="project" className={`${styles.projectSection} section`}>
      <SectionTitle title="Some Things I’ve Built"></SectionTitle>
      {projects.map((project, id) => {
        return (
          <div key={project.name} className={styles.projectSection__wrapper}>
            <div
              className={
                id % 2 === 1
                  ? styles.projectSection__wrapper__leftContent
                  : styles.projectSection__wrapper__rightContent
              }
            >
              <ProjectContent
                project={project}
                onLeft={id % 2 === 1}
              ></ProjectContent>
            </div>
            <div
              className={
                id % 2 === 1
                  ? styles.projectSection__wrapper__rightImage
                  : styles.projectSection__wrapper__leftImage
              }
            >
              <ProjectImage
                imageUrl={project.imageUrl}
                link={
                  project.externalLink ? project.externalLink : project.repoLink
                }
              ></ProjectImage>
            </div>
          </div>
        );
      })}
    </section>
  );
}
