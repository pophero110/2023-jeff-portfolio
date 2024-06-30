import HeadShot from "@/components/headshot/headshot";
import styles from "./aboutMeContent.module.scss";

export default function AboutMeContent() {
  return (
    <div className={styles.aboutMeContent}>
      <p>
        I started my career at{" "}
        <a
          href="https://www.chowbus.com"
          target="_blank"
          className="text-highlight text-hover-underline"
        >
          Chowbus
        </a>
        , <span className="text-highlight">a startup</span> company which is an
        online food ordering, payment and delivery platform based in Chicago.
        Initially, I joined the company as an{" "}
        <span className="text-highlight">Operation Manage</span>. During my free
        time, I dedicated myself to learning programming through various
        resources like Udemy, YouTube, and books. I also worked on personal
        projects to enhance my skills.
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
        Later on, I completed a{" "}
        <a
          className="text-highlight text-hover-underline"
          target="_blank"
          href="https://generalassemb.ly/education/software-engineering-immersive"
        >
          Software Engineering Immersive bootcamp
        </a>{" "}
        from{" "}
        <a
          className="text-highlight text-hover-underline"
          target="_blank"
          href="https://generalassemb.ly/education/software-engineering-immersive"
        >
          General Assembly
        </a>
        , gaining a solid foundation in technologies such as Java, Spring,
        TypeScript, and Angular, while also developing practical experience in
        building full-stack web applications and sharpening my problem-solving
        and teamwork skills through hands-on projects.
      </p>
      <br />
      <p>
        After completing the bootcamp, I joined{" "}
        <a
          className="text-highlight text-hover-underline"
          target="_blank"
          href="https://interapt.com/"
        >
          Interapt
        </a>{" "}
        as a <span className="text-highlight">Software Engineer</span>, where I
        worked at{" "}
        <a
          className="text-highlight text-hover-underline"
          target="_blank"
          href="https://www.cvs.com/"
        >
          CVS
        </a>{" "}
        to develop microservices for integrating ServiceNow. In addition to{" "}
        <span className="text-highlight">mentoring</span> junior software
        engineers, I played a pivotal role in implementing major features and
        establishing best practices in coding and design. I also authored
        comprehensive documentation, including architectural diagrams, decision
        documents, and cookbooks.
      </p>
      <br />
      <p>Here are the technologies I have extensively used recently:</p>
      <ul className={styles.aboutMeContent__skillsList}>
        {[
          "Java",
          "Spring Boot",
          "GitHub Actions",
          "Azure",
          "Splunk",
          "AppDynamic",
          "PostgreSQL",
          "ServiceNow",
          "Docker",
          "IntelliJ",
          "TypeScript",
          "Jira",
        ].map((skill, index) => (
          <li key={index} className={styles.aboutMeContent__skillsList__item}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
