import React from "react";
import card from "./cardItem.module.scss";

type CardProps = {
  src: string;
  title: string;
  price: string;
};
const CardItem: React.FunctionComponent<CardProps> = function ({ src, title, price }) {
  return (
    <div className={card.cardItem}>
      <div className={card.cardPicture} style={{ backgroundImage: `url(${src})` }} />
      <div className={card.infoWrapper}>
        <p className={card.title}>{title}</p>
        <p className={card.price}>{price}$</p>
      </div>
    </div>
  );
};
export default CardItem;
