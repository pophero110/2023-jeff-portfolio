import { useEffect, useState } from "react";
import NavLink from "../navLink/navLink";
import Logo from "../logo/logo";
import styles from "./navbar.module.scss";
export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarTranslate, setNavbarTranslate] = useState("translateY(0)");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        setNavbarTranslate("translateY(0)");
      } else {
        // Scrolling down, hide the navbar
        setNavbarTranslate("translateY(-100%)");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <nav className={styles.navbar} style={{ transform: navbarTranslate }}>
      <Logo></Logo>
      <NavLink></NavLink>
    </nav>
  );
}
