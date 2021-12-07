import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import header from "./header.module.scss";
import { links, headerData } from "../../constants/constants";
import { ElementsForLogInLogOut } from "../../types/types";
import SignIn from "@/pages/signIn/signIn";
import Registration from "@/pages/registration/registration";
import HeaderList from "@/components/header/headerList";
import SERVISE from "@/localStorageService/localStorageService";

const Header: React.FunctionComponent<ElementsForLogInLogOut> = function ({
  controllModalHeader,
  modalActive,
  setModalActive,
  checkAuthorized,
  setCheckAuthorized,
  userName,
  setUserName,
}) {
  const [userRegister, setRegister] = useState<boolean>(false);
  const [userSignIn, setCheckSignIn] = useState<boolean>(false);
  const [registraionModal, setRegistrationModal] = useState<boolean>(false);
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
    if (setCheckAuthorized) {
      setCheckAuthorized(false);
    }
    SERVISE.removeToken();
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
          {checkAuthorized ? (
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
        {userRegister ? (
          <Registration
            active={registraionModal}
            userLoggedIn={controllModalHeader}
            setRegistrationModal={setRegistrationModal}
            setUserName={setUserName}
          />
        ) : (
          ""
        )}
      </div>
      {userSignIn ? <SignIn active={modalActive} userLoggedIn={controllModalHeader} setUserName={setUserName} /> : ""}
    </header>
  );
};
export default Header;
