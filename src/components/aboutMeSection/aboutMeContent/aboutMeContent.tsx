import styles from "./aboutMeContent.module.scss";

export default function AboutMeContent() {
  return (
    <div className={styles.aboutMeContent}>
      <p>
        I started my career at{" "}
        <a
          href="https://www.chowbus.com"
          target="_blank"
          className="text-highlight"
        >
          Chowbus
        </a>
        , <span className="text-highlight">a startup</span> company which is an
        online food ordering, payment and delivery platform based in Chicago.
        Initially, I joined the company as an Operation Manager in the
        Operations team. During my free time, I dedicated myself to learning
        programming through various resources like Udemy, YouTube, and books. I
        also worked on personal projects to enhance my skills.
      </p>
      <br />
      <p>
        As time went on, I seized an opportunity to transition into the
        Engineering team as a{" "}
        <span className="text-highlight">Software QA Analyst</span>. Within
        three months, I was promoted to the role of{" "}
        <span className="text-highlight">Software Engineer</span>, demonstrating
        my growth and proficiency in the field. This journey has been
        instrumental in shaping my career and strengthening my passion for
        software development.
      </p>
      <br />
      <p>
        Recently, I completed a{" "}
        <a
          className="text-highlight"
          href="https://generalassemb.ly/education/software-engineering-immersive"
        >
          Software Engineering Immersive bootcamp
        </a>{" "}
        from General Assembly, gaining a solid foundation in technologies such
        as Java, Spring, TypeScript, and Angular, while also developing
        practical experience in building full-stack web applications and
        sharpening my problem-solving and teamwork skills through hands-on
        projects.
      </p>
      <br />
      <p>
        Here are a few of the technologies I have extensively used recently:
      </p>
      <ul className={styles.aboutMeContent__skillsList}>
        {[
          "TypeScript",
          "Java",
          "Angular",
          "Spring Boot",
          "Next.js",
          "IntelliJ",
        ].map((skill, index) => (
          <li key={index} className={styles.aboutMeContent__skillsList__item}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
