import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import header from "./header.module.scss";
import { links, data } from "../../constants/constants";
import { DropdownAndCategory, ElementsForLogInLogOut } from "../../types/types";
import Signin from "@/pages/signin/signin";
import Registration from "@/pages/registration/registration";

const Header: React.FunctionComponent<ElementsForLogInLogOut> = function ({
  controllModalHeader,
  modalActive,
  setModalActive,
  checkAuthorized,
  setCheckAuthorized,
  userName,
  setUserName,
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [checkRegister, setRegister] = useState<boolean>(false);
  const [checkSignIn, setCheckSignIn] = useState<boolean>(false);
  const [registraionModal, setRegistrationModal] = useState<boolean>(false);
  const signIn = () => {
    setModalActive(true);
    setCheckSignIn(true);
  };

  const register = () => {
    setRegister(true);
    setRegistrationModal(true);
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
        {checkAuthorized ? (
          <>
            <li className={header.dropdown}>{userName}</li>
            <li className={header.dropdown} onClick={logOut}>Log Out</li>
          </>
        ) : (
          <>
            <li className={header.dropdown} onClick={signIn}>Sign In</li>
            <li className={header.dropdown} onClick={register}>Registration</li>
          </>
        )}
      </ul>
      {(checkRegister) ? (
        <Registration
          active={registraionModal}
          userLoggedIn={controllModalHeader}
          setRegistrationModal={setRegistrationModal}
          setUserName={setUserName} />
      ) : (
        ""
      )}
      {(checkSignIn) ? (
        <Signin
          active={modalActive}
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
