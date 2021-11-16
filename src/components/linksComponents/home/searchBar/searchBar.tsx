import { useCallback, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from "lodash/debounce";
import { API_SEARCH } from "../../../../constants/api";
import { getApiResourse } from "../../../../utils/network";
import styles from "./searchBar.module.scss";
import ListResults from "./listResults/listResults";

const Searchbar = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getResponse = async (param: string): Promise<void> => {
    setIsLoading(true);

    const res = await getApiResourse(API_SEARCH + param);
    try {
      if (res) {
        setIsLoading(false);
        const arr = res.map((e: string | number) => e);
        setItems(arr);
      }
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
    console.log(typeof searchInput);

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
