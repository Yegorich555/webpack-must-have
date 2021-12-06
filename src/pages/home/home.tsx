import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import home from "./home.module.scss";
import SearchInput from "@/components/searchInput/searchInput";
import CardItem from "@/components/cardItem/cardItem";
import Category from "@/components/categories/category";
import { HomeType, Product } from "../../types/types";
import SignIn from "../signIn/signIn";

interface ShowModalLocation {
  from: object;
  show: boolean;
}

const Home: React.FunctionComponent<HomeType> = function ({ modalActive, userLoggedIn, setUserName }) {
  const [topProducts, setTopProducts] = useState<Array<Product>>([]);
  const location = useLocation();
  const state = location.state as ShowModalLocation;
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
          <CardItem key={elem.id} item={elem} />
        ))}
      </div>
      {state?.show ? <SignIn active={modalActive} userLoggedIn={userLoggedIn} setUserName={setUserName} /> : ""}
    </div>
  );
};
export default Home;
