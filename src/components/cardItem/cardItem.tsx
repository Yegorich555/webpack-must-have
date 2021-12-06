import React from "react";
import card from "./cardItem.module.scss";
import { CardProps } from "../../types/types";
const CardItem: React.FunctionComponent<CardProps> = function ({ item }) {
  return (
    <div className={card.cardItem}>
      <div className={card.cardPicture} style={{ backgroundImage: `url(${item.image})` }} />
      <div className={card.infoWrapper}>
        <p className={card.title}>{item.title}</p>
        <p className={card.price}>{item.price}$</p>
      </div>
    </div>
  );
};
export default CardItem;
