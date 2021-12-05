import React from "react";
import header from "./header.module.scss";
import HeaderItem from "./headerItem";
import { HeaderListTypes } from "@/types/types";

const HeaderList: React.FunctionComponent<HeaderListTypes> = function ({ headerMenuArr, root = true }) {
  const classesList = [header.menu, root ? header.menuRoot : header.menuSub].join(" ");
  return (
    <ul className={classesList}>
      {headerMenuArr.map((elem, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <HeaderItem item={elem} key={i} root />
      ))}
    </ul>
  );
};
export default HeaderList;
