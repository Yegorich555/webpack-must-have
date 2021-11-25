import { FC } from "react";
import StarRating from "../starRating/starRating";
import styles from "./renderCards.module.scss";

interface Cards {
  id: number;
  title: string;
  image: string;
  price: string;
  text: string;
  stars: number;
}

interface MyProps {
  item: Cards;
}

const RenderCards: FC<MyProps> = (props): JSX.Element => {
  const { id, image, title, price, text, stars } = props.item;
  return (
    <div key={id} className={styles.card}>
      <div className={styles.front}>
        <div className={styles.icon}>
          <img src={image} alt="description" className={styles.images} />
        </div>
        <div className={styles.iconContent}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <StarRating rating={stars} />
      </div>
      <div className={styles.back}>
        <span className={styles.backText}>{text}</span>
      </div>
    </div>
  );
};

export default RenderCards;
