import styles from "./navLink.module.scss";
export default function NavLink() {
  return (
    <ul className={styles.navLink}>
      <li>
        <NavLinkItem number="01." text="About" href="#about" />
        <NavLinkItem number="02." text="Experience" href="#experience" />
        <NavLinkItem number="03." text="Project" href="#project" />
        <NavLinkItem number="04." text="Contact" href="#contact" />
        <a className={styles.navLink__resumeLink} href="./resume.pdf" download>
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
