import styles from "./header.module.scss";
import Navbar from "../navlinks/navbar";

interface HeaderProps {
  checkIfAuth: () => void;
}

const Header = ({ checkIfAuth }: HeaderProps): JSX.Element => (
  <header className={styles.header}>
    <span className={styles.logo}>Game Store</span>
    <Navbar checkIfAuth={checkIfAuth} />
  </header>
);

export default Header;
