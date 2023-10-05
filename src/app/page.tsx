import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainTitle}>
        <p>Based</p>
        <p>pictures</p>
      </div>
      <div className="text-neutral-500 mt-10">Page still in dev</div>
    </main>
  );
}
