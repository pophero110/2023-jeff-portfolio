import SocialLink from "../sideElement/socialLink/socialLink";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLink></SocialLink>
      <a
        href="https://github.com/pophero110/Jeff-Ou-Portfolio"
        target="_blank"
        className="text-hover-highlight text-hover-underline"
      >
        <div>Designed &amp; Built by Jeff Ou</div>
      </a>
    </footer>
  );
}
