import React from "react";
import { Link } from "react-router-dom";
import { data, links } from "../../constants/constants";
import category from "./category.module.scss";
import { Data } from "@/types/types";

const Category: React.FunctionComponent = function () {
  return (
    <>
      {data.map((elem: Data) => (
        // eslint-disable-next-line react/no-array-index-key
        <Link to={`${links.product}/:${elem.link}`} className={category.categoryItem} key={elem.id}>
          {elem.link}
        </Link>
      ))}
    </>
  );
};
export default Category;
