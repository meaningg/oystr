"use client";

import { usePathname } from "next/navigation";
import MenuLink from "../../buttons/menuLink/MenuLink";
import styles from "./mobileMenu.module.scss";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkIsMobile();
  }, []);

  if (isMobile) {
    const pathname: string = usePathname();
    return (
      <div className={styles.main}>
        <div className={styles.menuContainer}>
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
      </div>
    );
  }
}
