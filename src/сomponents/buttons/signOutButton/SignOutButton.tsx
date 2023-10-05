"use client";
import { signOut } from "next-auth/react";

type TypeProps = {
  children: React.ReactNode;
};

export default function SignOutButton(props: TypeProps) {
  return (
    <>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
        className="py-1 px-3 text-white  rounded-md border-2 border-white hover:text-black hover:bg-white ease-in-out duration-200"
      >
        {props.children}
      </button>
    </>
  );
}
