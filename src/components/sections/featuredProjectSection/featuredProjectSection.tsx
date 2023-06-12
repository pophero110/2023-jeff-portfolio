import SectionTitle from "@/components/sectionTitle/sectionTitle";
import styles from "./featuredProjectSection.module.scss";
import ProjectImage from "./projectImage/projectImage";
import ProjectContent from "./projectContent/projectContent";
import { featureDProjects } from "@/data/project";
import { srConfig } from "@/config";
import { useRef } from "react";
import useScrollReveal from "@/utils/useScrollReveal";
export default function FeaturedProjectSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig());
  return (
    <section
      ref={sectionRef}
      id="project"
      className={`${styles.projectSection} section`}
    >
      <SectionTitle title="Some Things I’ve Built"></SectionTitle>
      {featureDProjects.map((project, id) => {
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
                  project.externalLink
                    ? project.externalLink
                    : project.backendLink
                }
              ></ProjectImage>
            </div>
          </div>
        );
      })}
    </section>
  );
}
