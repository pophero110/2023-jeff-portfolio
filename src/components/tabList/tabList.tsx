import { Dispatch, SetStateAction } from "react";
import styles from "./tabList.module.scss";
import TabHighlight from "../tabHighlight/tabHighlight";
export default function TabList({
  companyNames,
  jobIndex,
  setJobIndex,
}: {
  companyNames: string[];
  jobIndex: number;
  setJobIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className={styles.tabList}>
      {companyNames.map((companyName, id) => {
        return (
          <button
            className={
              jobIndex === id
                ? `${styles.tabList__tab} ${styles.tabList__tab_highlight}`
                : styles.tabList__tab
            }
            key={id}
            onClick={() => setJobIndex(id)}
          >
            {companyName}
          </button>
        );
      })}
      <TabHighlight jobIndex={jobIndex}></TabHighlight>
    </div>
  );
}
