import { useState } from "react";
import styles from "./navMenu.module.scss";
import NavSidebar from "./navSidebar/navSidebar";
export default function NavMenu() {
  const [showSideBar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSideBar);
    const html = document.querySelector("html");
    const main = document.querySelector("main");
    if (html) {
      html.classList.toggle("overflowHidden");
      main?.classList.toggle("blur");
    }
  };
  return (
    <div className={styles.navMenu}>
      <button
        onClick={() => handleShowSidebar()}
        aria-label="Menu"
        className={styles.navMenu__button}
      >
        <div className={styles.navMenu__button__hamBox}>
          <div
            className={
              styles.navMenu__button__hamBox__inner +
              " " +
              (showSideBar ? styles.navMenu__button__hamBox__inner_active : "")
            }
          ></div>
        </div>
      </button>
      <NavSidebar
        showSidebar={showSideBar}
        handleShowSidebar={handleShowSidebar}
      ></NavSidebar>
    </div>
  );
}
