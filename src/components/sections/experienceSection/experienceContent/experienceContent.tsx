import TabList from "@/components/tabList/tabList";
import styles from "./experienceContent.module.scss";
import TabPanel from "@/components/tabPanel/tabPanel";
import { jobDetails } from "@/data/jobDetail";
import { useState } from "react";
export default function ExperienceContent() {
  let [jobIndex, setJobIndex] = useState(0);
  let companyNames = jobDetails.map((job) => job.company);
  return (
    <div className={styles.experienceContent}>
      <TabList
        companyNames={companyNames}
        jobIndex={jobIndex}
        setJobIndex={setJobIndex}
      ></TabList>
      <TabPanel jobDetail={jobDetails[jobIndex]}></TabPanel>
    </div>
  );
}
