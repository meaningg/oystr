import styles from "./about.module.scss";
import AboutmeMDX from "../../content/aboutme.mdx";
import Image from "next/image";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContent}>
        <div className={styles.imageContainer}>
          <div className={styles.imageTitleBox}>
            <div className={styles.imageTitle}>it's me, just chillin :)</div>
          </div>
          <Image
            src="/authorimg.jpg"
            width={853}
            height={1280}
            className={styles.authorImg}
            alt="Author photo"
          ></Image>
          <a href="#mainText">
            <Image
              src="/arrowDown.svg"
              width={"100"}
              height={"100"}
              alt="arrow down"
              className={styles.arrowDownIcon}
            ></Image>
          </a>
          <div id="mainText"></div>
        </div>

        <AboutmeMDX />
      </div>
    </main>
  );
}
