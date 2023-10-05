"use client";

import Link from "next/link";
import styles from "./MenuLink.module.scss";

type TypeProps = {
  children: React.ReactNode;
  href: string;
  pathname?: string;
};

export default function MenuLink(props: TypeProps) {
  return (
    <>
      <Link
        className={
          props.pathname === props.href ? styles.link_active : styles.link
        }
        href={props.href}
      >
        {props.children}
      </Link>
    </>
  );
}
