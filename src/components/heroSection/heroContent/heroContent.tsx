import styles from "./heroContent.module.scss";
export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.heroContent__container}>
        <p className={styles.heroContent__greeting}>Hi, my name is</p>
        <h1 className={styles.heroContent__name}>Jeff Ou</h1>
        <h2 className={styles.heroContent__skill}>
          Specialized in full-stack development
        </h2>
        <h3 className={styles.heroContent__summary}>
          I care about building software that is safe from bugs, easy to
          understand and ready for change
        </h3>
      </div>
    </div>
  );
}
