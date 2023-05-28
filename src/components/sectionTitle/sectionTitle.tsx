import styles from "./sectionTitle.module.scss";

export default function SectionTitle({
  title,
  fontSize,
}: {
  title: string;
  fontSize?: string;
}) {
  return (
    <h2
      className={styles.sectionTitle}
      style={{
        fontSize: fontSize,
        width: fontSize ? "fit-content" : "100%",
      }}
    >
      {title}
    </h2>
  );
}
