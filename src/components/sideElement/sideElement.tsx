import { ReactNode, useRef } from "react";
import styles from "./sideElement.module.scss";
import { srConfig } from "@/config";
import useScrollReveal from "@/utils/useScrollReveal";
export default function SideElement({
  children,
  left,
}: {
  children: ReactNode;
  left?: boolean;
}) {
  const refElement = useRef(null);
  useScrollReveal(refElement, srConfig(1200));
  return (
    <div
      ref={refElement}
      className={
        (left ? styles.sideElement__left : styles.sideElement__right) +
        ` ${styles.sideElement}`
      }
    >
      {children}
    </div>
  );
}
