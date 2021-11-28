import React, { useEffect, useState } from "react";
import axios from "axios";
import home from "./home.module.scss";
import SearchInput from "@/components/searchInput/searchInput";
import CardItem from "@/components/cardItem/cardItem";
import Category from "@/components/categories/category";

const Home: React.FunctionComponent = function () {
  const [topProducts, setTopProducts] = useState<Array<object | any>>([]);

  useEffect(() => {
    axios.get("api/getTopProducts").then((res) => {
      setTopProducts((prevState) => [...prevState, ...res.data.slice(0, 3)]);
    });
  }, []);

  return (
    <div className={home.homeWrapper}>
      <div className={home.firstBlock}>
        <SearchInput />
      </div>
      <div className={home.thirdBlock}>
        <Category/>
      </div>
      <div className={home.secondBlock}>
        {topProducts.map((elem: object | any, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardItem key={i} src={elem.image} title={elem.title} price={elem.price} />
        ))}
      </div>

    </div>
  );
};
export default Home;
