import styles from "./tabPanel.module.scss";
import { JobDetail } from "../../data/jobDetail";
export default function TabPanel({ jobDetail }: { jobDetail: JobDetail }) {
  return (
    <div className={styles.tabPanel}>
      <h3 className={styles.tabPanel__title}>
        {jobDetail.position}{" "}
        <span className="text-highlight">
          @{" "}
          <a
            href={jobDetail.companyLink}
            target="_blank"
            className="text-hover-underline"
          >
            {" "}
            {jobDetail.company}{" "}
          </a>
        </span>
      </h3>
      <p className={styles.tabPanel__date}>{jobDetail.workPeriod}</p>
      <ul className={styles.tabPanel__list}>
        {jobDetail.bulletPoints.map((bulletPoint, id) => {
          return <li key={id}>{bulletPoint}</li>;
        })}
      </ul>
    </div>
  );
}
