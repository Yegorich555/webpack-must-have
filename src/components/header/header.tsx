import styles from "./header.module.scss";
import Navbar from "../navlinks/navbar";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Game Store</span>
      <Navbar />
    </header>
  );
}
