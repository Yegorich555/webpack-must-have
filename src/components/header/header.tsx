import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import header from "./header.module.scss";
import { links, headerData } from "../../constants/constants";
import { ElementsForLogInLogOut } from "../../types/types";
import SignIn from "@/pages/signIn/signIn";
import Registration from "@/pages/registration/registration";
import HeaderList from "@/components/header/headerList";
import localStorageService from "@/localStorageService/localStorageService";
import { Context } from "@/constants/context";

const Header: React.FunctionComponent = function () {
  const [userRegister, setRegister] = useState<boolean>(false);
  const [userSignIn, setCheckSignIn] = useState<boolean>(false);
  const [registraionModal, setRegistrationModal] = useState<boolean>(false);
  const { setModalActive, authorized, setAuthorized, userName } = useContext<ElementsForLogInLogOut>(Context);
  const signIn = () => {
    setModalActive(true);
    setCheckSignIn(true);
  };

  const register = () => {
    setRegister(true);
    setRegistrationModal(true);
    setCheckSignIn(false);
  };
  const history = useHistory();
  const logOut = () => {
    setAuthorized(false);
    localStorageService.removeToken();
    history.push("/");
    window.history.replaceState({}, document.title);
  };

  return (
    <header className={header.main}>
      <Link to={links.home} className={header.logo}>
        Game Store
      </Link>
      <div className={header.wrapper}>
        <HeaderList headerMenuArr={headerData} root />
        <ul className={header.menu}>
          {authorized ? (
            <>
              <li className={header.buttons}>{userName}</li>
              <li className={header.buttons} onClick={logOut}>
                Log Out
              </li>
            </>
          ) : (
            <>
              <li className={header.buttons} onClick={signIn}>
                Sign In
              </li>
              <li className={header.buttons} onClick={register}>
                Registration
              </li>
            </>
          )}
        </ul>
        {userRegister ? <Registration active={registraionModal} setRegistrationModal={setRegistrationModal} /> : ""}
      </div>
      {userSignIn ? <SignIn /> : ""}
    </header>
  );
};
export default Header;
