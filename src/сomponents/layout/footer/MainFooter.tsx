"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.scss";

export default function () {
  const pathname: string = usePathname();

  return (
    <footer className={styles.footer}>
      <p className={styles.path}>{pathname}</p>
      <a href="https://github.com/meaningg" target="_blank">
        by mng.sh
      </a>
    </footer>
  );
}
