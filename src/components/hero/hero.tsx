import HeadShot from "../headshot/headshot";
import styles from "./hero.module.scss";
import HeroContent from "./heroContent/heroContent";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroContent></HeroContent>
      <HeadShot></HeadShot>
    </section>
  );
}
