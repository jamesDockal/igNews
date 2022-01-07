import { useSession, signIn, signOut } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const { data: session } = useSession();

  console.log("session", session);

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" onClick={() => signOut()} />
      James Dockal
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
