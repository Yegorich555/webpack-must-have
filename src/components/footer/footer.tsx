import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = (): JSX.Element => (
  <footer className={styles.myfooter}>
    <span className={styles.textlogo}>Incredible convenient</span>
    <Link to={{ pathname: "https://www.rockstargames.com/" }} target="_blank">
      <img src="./rockstar_games_logo.png" alt="description" className={styles.fotterlogo} />
    </Link>
  </footer>
);

export default Footer;
