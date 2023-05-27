import styles from "./tabHighlight.module.scss";
type TransformStyle = {
  transform: string;
};
export default function TabHighlight({ jobIndex }: { jobIndex: number }) {
  const style: TransformStyle = {
    transform: `translateY(calc(${jobIndex * 50}px))`,
  };
  return <div className={styles.tabHighlight} style={style}></div>;
}
