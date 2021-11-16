import { useEffect, useState } from "react";
import { API_CARDS } from "../../../../constants/api";
import { getApiResourse } from "../../../../utils/network";

import styles from "./gameCards.module.scss";
import RenderCards from "./renderCards";

interface Card {
  item: [];
}

function Gamecards(): JSX.Element {
  const [items, setItems] = useState([]);

  const getResponse = async (param: string) => {
    const res = await getApiResourse(param);
    if (res) {
      const cardsList = res.map((item: Card) => item);
      setItems(cardsList);
    }
  };

  useEffect(() => getResponse(API_CARDS), []);

  return (
    <div className={styles.categoriesContent}>
      <p className={styles.title}>New Games</p>
      <div className={styles.blockcards}>
        {items.map((element) => (
          <RenderCards item={element} />
        ))}
      </div>
    </div>
  );
}
export default Gamecards;
