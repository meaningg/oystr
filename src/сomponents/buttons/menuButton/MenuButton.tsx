"use client";

type TypeProps = {
  children: React.ReactNode;
};

export default function MenuButton(props: TypeProps) {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
}
