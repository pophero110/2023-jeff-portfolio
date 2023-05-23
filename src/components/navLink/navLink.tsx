import styles from "./navLink.module.scss";
export default function NavLink() {
  return (
    <ul className={styles.navLink}>
      <li>
        <NavLinkItem number="01." text="About" />
        <NavLinkItem number="02." text="Project" />
        <NavLinkItem number="03." text="Experience" />
        <NavLinkItem
          number="04."
          text="Contact"
          className={styles.contactLink}
        />
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
  className?: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({
  number,
  text,
  className,
}) => {
  return (
    <a className={className} href="#">
      <span className={styles.number}>{number}</span>
      {text}
    </a>
  );
};
