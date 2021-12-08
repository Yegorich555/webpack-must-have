import { useEffect, useState } from "react";
import { API_CARDS } from "../../../../constants/api";
import { getApiCardResourse } from "../../../../utils/network";

import styles from "./gameCards.module.scss";
import RenderCards from "./renderCards";

interface Card {
  id: number;
  image: string;
  title: string;
  price: string;
  text: string;
  stars: number;
  date: string;
}

function Gamecards(): JSX.Element {
  const [items, setItems] = useState<Array<Card>>([]);

  const getResponse = async (param: string) => {
    try {
      const res = await getApiCardResourse<Array<Card>>(param);
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResponse(API_CARDS);
  }, []);

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
