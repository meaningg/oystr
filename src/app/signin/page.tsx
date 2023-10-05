"use client";
import { signIn } from "next-auth/react";
import styles from "./signin.module.scss";
import { useSearchParams } from "next/navigation";
import SignInButton from "@/сomponents/buttons/signInButton/SignInButton";
import Image from "next/image";

export default function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <div className={styles.main}>
      <h1 className={styles.signInTitle}>Sign in</h1>
      <SignInButton onClick={() => signIn("google", { callbackUrl })}>
        Sign in with
        <Image
          className={styles.signInLogo}
          src="/googleLogo.svg"
          width={"50"}
          height={"50"}
          alt="google logo"
        ></Image>
      </SignInButton>
      <SignInButton onClick={() => signIn("github", { callbackUrl })}>
        Sign in with
        <Image
          className={styles.signInLogo}
          src="/githubLogo.svg"
          width={"50"}
          height={"50"}
          alt="google logo"
        ></Image>
      </SignInButton>
      <SignInButton onClick={() => signIn("discord", { callbackUrl })}>
        Sign in with
        <Image
          className={styles.signInLogo}
          src="/discordLogo.svg"
          width={"50"}
          height={"50"}
          alt="google logo"
        ></Image>
      </SignInButton>
    </div>
  );
}
