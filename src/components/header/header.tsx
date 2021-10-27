import styles from "./header.module.scss";
import Navbar from "../navlinks/navbar";

export default function Header(): JSX.Element {
  return (
    <header>
      <span className={styles.logo}>Game Store</span>
      <Navbar />
    </header>
  );
}
