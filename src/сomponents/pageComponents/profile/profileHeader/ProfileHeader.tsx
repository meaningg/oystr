"use client";

import { Session } from "next-auth";
import styles from "./profileHeader.module.scss";
import { DefaultSession } from "next-auth";
import "next-auth";
import Image from "next/image";
import { signOut } from "next-auth/react";
import SignOutButton from "@/сomponents/buttons/signOutButton/SignOutButton";
type TypeProps = {
  session: Session | null;
};

export default function ProfileHeader(props: TypeProps) {
  return (
    <div className={styles.main}>
      <div className={styles.userWelcome}>
        <Image
          src={props.session?.user?.image!}
          height={"500"}
          width={"500"}
          alt="Profile picure"
          className={styles.userWelcomeImage}
        ></Image>
        <div className={styles.userWelcomeTitle}>
          Hi {props.session?.user?.name}!
        </div>
      </div>
      <div>
        <SignOutButton>Sign out</SignOutButton>
      </div>
    </div>
  );
}
