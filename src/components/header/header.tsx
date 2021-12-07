import React from "react";
import header from "./header.module.scss";
import { headerData, links } from "../../constants/constants";

import HeaderList from "@/components/header/headerList";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = function () {
  return (
    <header className={header.main}>
      <Link to={links.home} className={header.logo}>
        Game Store
      </Link>
      <HeaderList headerMenuArr={headerData} root />
    </header>
  );
};
export default Header;
