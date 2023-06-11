import styles from "./projectSection.module.scss";
import ProjectCard from "./projectCard/projectCard";
import { projects } from "@/data/project";
import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
import { useRef } from "react";
export default function ProjectSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig());
  return (
    <section ref={sectionRef} className={styles.projectSection + " section"}>
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
