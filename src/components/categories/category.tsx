import React from "react";
import { Link } from "react-router-dom";
import { data, links } from "../../constants/constants";
import category from "./category.module.scss";

const Category: React.FunctionComponent = function () {
  return (
    <>
      {data.map((elem, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link to={`${links.product}/:${elem}`} className={category.categoryItem} key={i}>
          {elem}
        </Link>
      ))}
    </>
  );
};
export default Category;
