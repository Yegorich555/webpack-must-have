import Categories from "./categories/categories";
import Searchbar from "./searchBar/searchBar";
import styles from "./home.module.scss";
import Gamecards from "./gameCards/gameCards";

const Home = (): JSX.Element => (
  <div className={styles.homecontent}>
    <Searchbar />
    <Categories />
    <Gamecards />
  </div>
);

export default Home;
