import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar(): JSX.Element {
  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/home" activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/products" activeClassName={styles.active}>
          Products
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/about" activeClassName={styles.active}>
          About
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/sign-in" activeClassName={styles.active}>
          Sign In
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/sign-up" activeClassName={styles.active}>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
}
