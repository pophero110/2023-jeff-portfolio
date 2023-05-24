import styles from "./socialLink.module.scss";
import { Linkedin, GitHub, Twitter } from "./socialIcons";
export default function SocialLink() {
  return (
    <div className={styles.socialLink}>
      <a href="">
        <Linkedin></Linkedin>
      </a>
      <a href="">
        <GitHub></GitHub>
      </a>
      <a href="" className={styles.socialLink__twitter}>
        <Twitter></Twitter>
      </a>
    </div>
  );
}
