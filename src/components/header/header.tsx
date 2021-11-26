// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import React from "react";
import header from "./header.module.scss";
import links from "../../constants/constants";

const Header: React.FunctionComponent = function () {
  return (
    <header>
      <Link to={links.home} className={header.logo}>
        Game Store
      </Link>
      <ul className={header.navigation}>
        <li>
          <Link to={links.home}>Home</Link>
        </li>
        <li>
          <Link to={links.product}>Product</Link>
        </li>
        <li>
          <Link to={links.about}>About</Link>
        </li>
        <li>
          <Link to={links.signIn}>Sign In</Link>
        </li>
        <li>
          <Link to={links.signUp}>Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
