// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import React from "react";
import header from "./header.module.css";

const Header: React.FunctionComponent = function () {
  return (
    <header>
      <Link to="/home" className={header.logo}>
        Game Store
      </Link>
      <ul className={header.navigation}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signIn">Sign In</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
