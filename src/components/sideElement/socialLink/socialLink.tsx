import styles from "./socialLink.module.scss";
import { Linkedin, GitHub, Twitter } from "./socialIcons";
import { socialLink } from "@/data/socialLink";
export default function SocialLink() {
  return (
    <div className={styles.socialLink}>
      <a href={socialLink.linkedin} target="_blank">
        <Linkedin></Linkedin>
      </a>
      <a href={socialLink.github} target="_blank">
        <GitHub></GitHub>
      </a>
      {/* <a
        href={socialLink.twitter}
        target="_blank"
        className={styles.socialLink__twitter}
      >
        <Twitter></Twitter>
      </a> */}
    </div>
  );
}
