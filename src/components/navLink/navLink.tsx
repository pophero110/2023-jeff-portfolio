import styles from "./navLink.module.scss";
export default function NavLink() {
  return (
    <ul className={styles.navLink}>
      <li>
        <NavLinkItem number="01." text="About" href="#about" />
        <NavLinkItem number="02." text="Experience" href="#experience" />
        <NavLinkItem number="03." text="Project" href="#project" />
        <NavLinkItem number="04." text="Contact" href="#contact" />
        <a className={styles.resumeLink} href="#">
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
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ number, text, href }) => {
  return (
    <a href={href}>
      <span className={styles.number}>{number}</span>
      {text}
    </a>
  );
};
