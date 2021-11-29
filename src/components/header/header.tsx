// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import React, { useState } from "react";
import header from "./header.module.scss";
import { links, data } from "../../constants/constants";
import { DropdownAndCategory } from "../../types/types";

const Header: React.FunctionComponent = function () {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <Link to={links.home} className={header.logo}>
        Game Store
      </Link>
      <ul className={header.navigation}>
        <li>
          <Link to={links.home}>Home</Link>
        </li>
        <li onClick={() => setIsActive(!isActive)} className={header.dropdown}>
          Product
          {isActive && (
            <div className={header.dropdownContent}>
              {data.map((elem: DropdownAndCategory) => (
                <div
                  className={header.dropdownItem}
                  key={elem.id}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <Link to={`${links.product}/:${elem.link}`}>{elem.link}</Link>
                </div>
              ))}
            </div>
          )}
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
