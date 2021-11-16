import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from "../linksComponents/dropDown/dropDown";
import Modal from "../../modal/modal";

import styles from "./navbar.module.scss";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState(false);

  const showUserName = () => {
    setUserName(true);
  };

  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/home" activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li className={`${styles.item} ${styles.dropDown_link}`}>
        <NavLink to="/products" activeClassName={styles.active}>
          Products
        </NavLink>
        <div className={styles.dropDown_wrapper}>
          <DropDown />
        </div>
      </li>
      <li className={styles.item}>
        <NavLink to="/about" activeClassName={styles.active}>
          About
        </NavLink>
      </li>
      {!userName ? (
        <>
          <li className={styles.item}>
            <button type="button" className={styles.modaleButton} onClick={() => setOpen(true)}>
              <NavLink to="/sign-up" activeClassName={styles.active}>
                Sign In
              </NavLink>
            </button>
            <Modal isOpen={open} onClose={() => setOpen(false)} isSignIn={showUserName} />
          </li>
          <li className={styles.item}>
            <NavLink to="/sign-up" activeClassName={styles.active}>
              Sign Up
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className={styles.item}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              User Name
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              <FaShoppingCart />
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
