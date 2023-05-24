import { ReactNode } from "react";
import styles from "./sideElement.module.scss";
export default function SideElement({
  children,
  left,
}: {
  children: ReactNode;
  left?: boolean;
}) {
  return (
    <div
      className={
        (left ? styles.sideElement__left : styles.sideElement__right) +
        ` ${styles.sideElement}`
      }
    >
      {children}
    </div>
  );
}
