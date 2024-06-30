import SocialLink from "../sideElement/socialLink/socialLink";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__socialLink}>
        <SocialLink></SocialLink>
      </div>

      <a
        href="https://github.com/pophero110/Jeff-Ou-Portfolio"
        target="_blank"
        className="text-hover-highlight text-hover-underline"
      >
        <div>Built by Jeff Ou</div>
      </a>
    </footer>
  );
}
