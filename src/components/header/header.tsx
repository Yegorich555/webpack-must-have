import styles from "./header.module.scss";
import Navbar from "../navlinks/navbar";

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <span className={styles.logo}>Game Store</span>
    <Navbar />
  </header>
);

export default Header;
