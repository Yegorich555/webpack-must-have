import React from "react";
import { Link } from "react-router-dom";
import header from "./header.module.scss";
import HeaderList from "@/components/header/headerList";
import { HeaderItemTypes } from "@/types/types";

const HeaderItem: React.FunctionComponent<HeaderItemTypes> = function ({ item}) {
  const classesList = [header.item].join(" ");
  return (
    <li className={classesList}>
      <Link to={item.path}>{item.label}</Link>
      {item.sub && <HeaderList headerMenuArr={item.sub} root={false} />}
    </li>
  );
};
export default HeaderItem;
