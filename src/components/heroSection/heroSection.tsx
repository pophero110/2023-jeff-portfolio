import HeadShot from "../headshot/headshot";
import styles from "./heroSection.module.scss";
import HeroContent from "./heroContent/heroContent";
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <HeroContent></HeroContent>
      <HeadShot></HeadShot>
    </section>
  );
}
