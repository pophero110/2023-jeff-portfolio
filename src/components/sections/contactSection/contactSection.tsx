import SectionTitle from "@/components/sectionTitle/sectionTitle";
import styles from "./contactSection.module.scss";
export default function ContactSection() {
  return (
    <section id="contact" className={styles.aboutSection + " section"}>
      <div className={styles.aboutSection__wrapper}>
        <SectionTitle title="What's Next?" fontSize={"2rem"}></SectionTitle>
        <h2 className={styles.aboutSection__callout}>Get In Touch</h2>
        <p className={styles.aboutSection__description}>
          Let&apos;s connect and bring your ideas to life! I&apos;m thrilled to
          explore new opportunities, collaborate on exciting projects, and
          contribute to your success.
        </p>
        <a
          className={styles.aboutSection__contact}
          href="mailto:jeffou.dev@gmail.com"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
