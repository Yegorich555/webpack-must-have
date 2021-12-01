// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import header from "./header.module.scss";
import { links, data } from "../../constants/constants";
import { DropdownAndCategory, ElementsForLogInLogOut } from "../../types/types";
import Signin from "@/pages/signin/signin";

const Header: React.FunctionComponent<ElementsForLogInLogOut> = function ({
  controllModalHeader,
  modalActive,
  setModalActive,
  checkAuthorized,
  setCheckAuthorized,
  userName,
  setUserName
}) {
  const [isActive, setIsActive] = useState(false);

  const signIn = () => {
    setModalActive(true);
  };

  const history = useHistory();
  const logOut = () => {
    if (setCheckAuthorized) {
      setCheckAuthorized(false);
    }
    localStorage.removeItem("token");
    history.push("/home");
  };
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
        {!checkAuthorized ? (
          <>
            <li onClick={signIn}>Sign In</li>
            <li>Registration</li>
          </>
        ) : (
          <>
            <li>{userName}</li>
            <li onClick={logOut}>Log Out</li>
          </>
        )}
      </ul>
      {!checkAuthorized ? (
        <Signin
          active={modalActive}
          setActive={setModalActive}
          userLoggedIn={controllModalHeader}
          setUserName={setUserName}
        />
      ) : (
        ""
      )}
    </header>
  );
};
export default Header;
