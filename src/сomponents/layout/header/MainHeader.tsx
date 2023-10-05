"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./header.module.scss";
import Link from "next/link";
import MenuButton from "../../buttons/menuButton/MenuButton";
import MenuLink from "../../buttons/menuLink/MenuLink";
import { usePathname } from "next/navigation";

export default function () {
  const session = useSession();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>oystr</div>
      <div className={styles.menu}>
        <MenuLink pathname={pathname} href="/">
          Main
        </MenuLink>
        <MenuLink pathname={pathname} href="/about">
          About me
        </MenuLink>
        <MenuLink pathname={pathname} href="/profile">
          Profile
        </MenuLink>
      </div>
    </header>
  );
}
