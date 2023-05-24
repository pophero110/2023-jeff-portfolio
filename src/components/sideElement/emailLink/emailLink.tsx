import styles from "./emailLink.module.scss";

export default function EmailLink() {
  return (
    <div className={styles.emailLink}>
      <a href="mailto:jeffou.dev@gmail.com">jeffou.dev@gmail.com</a>
    </div>
  );
}
