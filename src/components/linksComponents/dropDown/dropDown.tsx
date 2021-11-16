import { NavLink } from "react-router-dom";
import styles from "./dropDown.module.scss";

const DropDown = (): JSX.Element => (
  <>
    <NavLink to="/playstation" className={styles.item} activeClassName={styles.active}>
      PlayStation 5
    </NavLink>
    <NavLink to="/xbox" className={styles.item} activeClassName={styles.active}>
      Xbox One
    </NavLink>
    <NavLink to="/pc" className={styles.item} activeClassName={styles.active}>
      PC
    </NavLink>
  </>
);

export default DropDown;
