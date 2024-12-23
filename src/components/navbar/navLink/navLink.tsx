import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
import { useRef } from "react";
import styles from "./navLink.module.scss";
export default function NavLink() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, srConfig(400));
  return (
    <ul ref={sectionRef} className={styles.navLink}>
      <li>
        {/* <NavLinkItem number="01." text="About" href="#about" /> */}
        {/* <NavLinkItem number="02." text="Experience" href="#experience" /> */}
        {/* <NavLinkItem number="03." text="Project" href="#project" /> */}
        {/* <NavLinkItem number="04." text="Contact" href="#contact" /> */}
        <a
          target="_blank"
          className={styles.navLink__resumeLink}
          href="https://docs.google.com/document/d/15foeP4ZZ0PIRturgtbvl5T_UPz8SziHzxIcV5QzPwKk/edit?usp=sharing"
          download
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

interface NavLinkItemProps {
  number: string;
  text: string;
  href?: string;
  onClick?: () => void;
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ({
  number,
  text,
  href,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <span className={styles.navLink__number}>{number}</span>
      {text}
    </a>
  );
};
