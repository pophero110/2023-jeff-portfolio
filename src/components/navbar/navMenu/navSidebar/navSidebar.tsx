import styles from "./navSidebar.module.scss";
import { NavLinkItem } from "../../navLink/navLink";
import { Dispatch, SetStateAction } from "react";
export default function NavSidebar({
  showSidebar,
  handleShowSidebar,
}: {
  showSidebar: boolean;
  handleShowSidebar: () => void;
}) {
  return (
    <aside
      className={
        styles.navSidebar + " " + (showSidebar ? styles.navSidebar__show : "")
      }
    >
      <nav>
        <ul className={styles.navSidebar__navList}>
          <NavLinkItem
            number="01."
            text="About"
            href="#about"
            onClick={handleShowSidebar}
          />
          <NavLinkItem
            number="02."
            text="Experience"
            href="#experience"
            onClick={handleShowSidebar}
          />
          <NavLinkItem
            number="03."
            text="Project"
            href="#project"
            onClick={handleShowSidebar}
          />
          <NavLinkItem
            number="04."
            text="Contact"
            href="#contact"
            onClick={handleShowSidebar}
          />
          <a
            className={styles.navSidebar__navList__resumeLink}
            href="./resume.pdf"
            download
          >
            Resume
          </a>
        </ul>
      </nav>
    </aside>
  );
}
