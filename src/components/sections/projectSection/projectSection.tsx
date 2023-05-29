import styles from "./projectSection.module.scss";
import ProjectCard from "./projectCard/projectCard";
import { projects } from "@/data/project";
export default function ProjectSection() {
  return (
    <section className={styles.projectSection + " section"}>
      <h2 className={styles.projectSection__title}>
        Other Noteworthy Projects
      </h2>
      <ul className={styles.projectSection__projectList}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </ul>
    </section>
  );
}
