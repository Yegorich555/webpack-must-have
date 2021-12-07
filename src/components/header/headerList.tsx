import React from "react";
import header from "./header.module.scss";
import HeaderItem from "./headerItem";
import { HeaderListTypes } from "@/types/types";

const HeaderList: React.FunctionComponent<HeaderListTypes> = function ({ headerMenuArr, root = true }) {
  const classesList = [header.menu, root ? header.menuRoot : header.menuSub].join(" ");
  return (
    <ul className={classesList}>
      {headerMenuArr.map((elem) => (
        <HeaderItem item={elem} key={elem.id} root />
      ))}
    </ul>
  );
};
export default HeaderList;
