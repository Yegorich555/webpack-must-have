import { Link } from "react-router-dom";
import styles from "./categories.module.scss";
import playstation from "../../../../../public/playstation.png";
import xbox from "../../../../../public/xbox.png";
import windows from "../../../../../public/windows.png";

const Categories = (): JSX.Element => (
  <div className={styles.categoriesContent}>
    <p className={styles.title}>Categories</p>
    <div className={styles.blockcards}>
      <div className={styles.card}>
        <Link to={{ pathname: "https://www.rockstargames.com/" }} target="_blank">
          <img src={windows} alt="description" className={styles.icon} />
          <p className={styles.description}>PC</p>
        </Link>
      </div>

      <div className={styles.card}>
        <Link to={{ pathname: "https://www.rockstargames.com/" }} target="_blank">
          <img src={playstation} alt="description" className={styles.icon} />
          <p className={styles.description}>Playstation 5</p>
        </Link>
      </div>

      <div className={styles.card}>
        <Link to={{ pathname: "https://www.rockstargames.com/" }} target="_blank" className={styles.icon}>
          <img src={xbox} alt="description" className={styles.icon} />
          <p className={styles.description}>XBox One</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Categories;
