import SectionTitle from "@/components/sectionTitle/sectionTitle";
import styles from "./contactSection.module.scss";
import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
import { useRef } from "react";
export default function ContactSection() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig());
  return (
    <section
      ref={sectionRef}
      id="contact"
      className={styles.aboutSection + " section"}
    >
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
