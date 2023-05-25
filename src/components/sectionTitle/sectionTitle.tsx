import styles from "./sectionTitle.module.scss";

export default function SectionTitle({ title }: { title: string }) {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}
