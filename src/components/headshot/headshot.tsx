import styles from "./headshot.module.scss";
export default function HeadShot() {
  return (
    <div className={styles.headShot}>
      <img
        src={"./image/my-headshot-compressed.png"}
        alt="my headshot"
        className={styles.headShot__image}
      ></img>
      <div className={styles.headShot__background}></div>
      <div className={styles.headShot__borderBox}></div>
    </div>
  );
}
