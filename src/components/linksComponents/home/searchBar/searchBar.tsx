import { useCallback, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from "lodash/debounce";
import { API_SEARCH } from "../../../../constants/api";
import { getApiCardResourse } from "../../../../utils/network";
import styles from "./searchBar.module.scss";
import ListResults from "./listResults/listResults";

interface Card {
  id: number;
  image: string;
  title: string;
  price: string;
  text: string;
  stars: number;
  date: string;
}

const Searchbar = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState<Array<Card>>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getResponse = async (param: string) => {
    setIsLoading(true);
    try {
      const res = await getApiCardResourse<Array<Card>>(API_SEARCH + param);
      setIsLoading(false);
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      debouncedGetResponse(searchValue);
    } else console.log("enter value");
  };

  return (
    <div className={styles.input_form}>
      <div className={styles.input_search}>
        <div className={styles.loader_icon}>
          {isLoading && <img src="https://i.gifer.com/g0R5.gif" alt="" className={styles.loader} />}
        </div>
        <input
          type="text"
          className={styles.searchbar}
          value={searchInput}
          onChange={(e) => searchItems(e.target.value)}
          placeholder="Search name"
        />
      </div>
      {items.length >= 1 && searchInput && <ListResults elements={items} />}
    </div>
  );
};

export default Searchbar;
