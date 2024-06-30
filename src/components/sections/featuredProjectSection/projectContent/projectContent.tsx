import { Project } from "@/data/project";
import styles from "./projectContent.module.scss";
export default function ProjectContent({
  project,
  onLeft,
}: {
  project: Project;
  onLeft: boolean;
}) {
  return (
    <div className={styles.project}>
      <p className={styles.project__overline}>Featured Project</p>
      <h3 className={styles.project__title + " text-hover-highlight"}>
        {project.name}
      </h3>
      <div className={styles.project__description}>
        <p>{project.description}</p>
      </div>
      <ul
        className={
          styles.project__techList +
          " " +
          (onLeft ? styles.project__techList__onLeft : "")
        }
      >
        {project.techList.map((techItem) => {
          return <li key={techItem + "1"}>{techItem}</li>;
        })}
      </ul>
      <div
        className={
          styles.project__links +
          " " +
          (onLeft ? styles.project__links__onLeft : "")
        }
      >
        {project.backendLink && (
          <a
            href={project.backendLink}
            aria-label="GitHub Link"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.project__links__github + " tooltip"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-hover-highlight"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="tooltiptext">Backend</span>
          </a>
        )}
        {project.frontendLink && (
          <a
            href={project.frontendLink}
            aria-label="GitHub Link"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.project__links__github + " tooltip"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-hover-highlight"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="tooltiptext">Frontend</span>
          </a>
        )}
        {project.externalLink && (
          <a
            href={project.externalLink}
            aria-label="External Link"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.project__links__externalLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-hover-highlight"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
