import React, { useEffect, useState } from "react";
import axios from "axios";
import home from "./home.module.scss";
import SearchInput from "@/components/searchInput/searchInput";
import CardItem from "@/components/cardItem/cardItem";
import Category from "@/components/categories/category";
import { Product } from "../../types/types";

const Home: React.FunctionComponent = function () {
  const [topProducts, setTopProducts] = useState<Array<Product>>([]);

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
      <div className={home.blockWrapper}>
        <p className={home.title}>Categories</p>
        <Category />
      </div>
      <div className={home.blockWrapper}>
        <p className={home.title}>New games</p>
        {topProducts.map((elem: Product) => (
          <CardItem key={elem.id} src={elem.image} title={elem.title} price={String(elem.price)} />
        ))}
      </div>
    </div>
  );
};
export default Home;
