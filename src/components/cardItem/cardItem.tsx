import React from "react";
import card from "./cardItem.module.scss";
import { CardProps } from "../../types/types";
const CardItem: React.FunctionComponent<CardProps> = function ({ item: { image, title, price } }) {
  return (
    <div className={card.cardItem}>
      <div className={card.cardPicture} style={{ backgroundImage: `url(${image})` }} />
      <div className={card.infoWrapper}>
        <p className={card.title}>{title}</p>
        <p className={card.price}>{price}$</p>
      </div>
    </div>
  );
};
export default CardItem;
