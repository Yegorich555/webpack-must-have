import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import DropDown from "../linksComponents/dropDown/dropDown";
import styles from "./navbar.module.scss";
import SignInModal from "../linksComponents/sign-in/signInModal";
import SignUpModal from "../linksComponents/sign-up/signUpModal";

interface NavProps {
  checkIfAuth: () => void;
}

const Navbar = ({ checkIfAuth }: NavProps): JSX.Element => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [userName, setUserName] = useState(false);

  const showUserName = () => {
    setUserName(true);
    checkIfAuth();
  };

  return (
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/home" activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li className={`${styles.item} ${styles.dropDown_link}`}>
        {!userName ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenAbout(true)}>
            <SignInModal
              isOpen={openAbout}
              onClose={() => {
                setOpenAbout(false);
                console.log("close modal");
              }}
              isSignIn={showUserName}
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
        {!userName ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenAbout(true)}>
            <SignInModal
              isOpen={openAbout}
              onClose={() => {
                setOpenAbout(false);
                console.log("close modal");
              }}
              isSignIn={showUserName}
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
        {!userName ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenSignIn(true)}>
            <NavLink to="/sign-in" activeClassName={styles.active}>
              Sign In
            </NavLink>
            <SignInModal isOpen={openSignIn} onClose={() => setOpenSignIn(false)} isSignIn={showUserName} />
          </button>
        ) : (
          <NavLink to="/sign-in" activeClassName={styles.active}>
            User Name
          </NavLink>
        )}
      </li>
      <li className={styles.item}>
        {!userName ? (
          <button type="button" className={styles.modaleButton} onClick={() => setOpenSignUp(true)}>
            <NavLink to="/sign-up" activeClassName={styles.active}>
              Sign Up
            </NavLink>
            <SignUpModal isOpen={openSignUp} onClose={() => setOpenSignUp(false)} isSignIn={showUserName} />
          </button>
        ) : (
          <NavLink to="/sign-in" activeClassName={styles.active}>
            <FaShoppingCart />
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default Navbar;
