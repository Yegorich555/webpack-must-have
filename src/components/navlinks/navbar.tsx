import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

import { useSelector } from "react-redux";
import DropDown from "../linksComponents/dropDown/dropDown";
import styles from "./navbar.module.scss";
import SignInModal from "../linksComponents/sign-in/signInModal";
import SignUpModal from "../linksComponents/sign-up/signUpModal";

interface RootState {
  user: {
    userName: string;
    isLogged: boolean;
  };
}

const Navbar = (): JSX.Element => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const { userName, isLogged } = useSelector((state: RootState) => state.user);

  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/home" activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li className={`${styles.item} ${styles.dropDown_link}`}>
        {!isLogged ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenProducts(true)}>
            <SignInModal
              isOpen={openProducts}
              onClose={() => {
                setOpenProducts(false);
              }}
              url="/products"
            />
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
            <div className={styles.dropDown_wrapper}>
              <DropDown />
            </div>
          </button>
        ) : (
          <>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
            <div className={styles.dropDown_wrapper}>
              <DropDown />
            </div>
          </>
        )}
      </li>
      <li className={styles.item}>
        {!isLogged ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenAbout(true)}>
            <SignInModal
              isOpen={openAbout}
              onClose={() => {
                setOpenAbout(false);
              }}
              url="/about"
            />
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </button>
        ) : (
          <NavLink to="/about" activeClassName={styles.active}>
            About
          </NavLink>
        )}
      </li>
      <li className={styles.item}>
        {!isLogged ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenSignIn(true)}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              Sign In
            </NavLink>
            <SignInModal isOpen={openSignIn} onClose={() => setOpenSignIn(false)} url="/home" />
          </button>
        ) : (
          <NavLink to="/sign-in" activeClassName={styles.active}>
            {userName}
          </NavLink>
        )}
      </li>
      {!isLogged ? (
        <li className={styles.item}>
          <button type="button" className={styles.modaleButton} onClick={() => setOpenSignUp(true)}>
            <NavLink to="/sign-up" activeClassName={styles.active}>
              Sign Up
            </NavLink>
            <SignUpModal isOpen={openSignUp} onClose={() => setOpenSignUp(false)} />
          </button>
        </li>
      ) : (
        <>
          <li className={styles.item}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              <FaShoppingCart />
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              <FaSignOutAlt />
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navbar;
