import styles from "./signInButton.module.scss";

type TypeProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SignInButton(props: TypeProps) {
  return (
    <button className={styles.main} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
