import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import header from "./header.module.scss";
import { links, headerData } from "../../constants/constants";
import { ElementsForLogInLogOut } from "../../types/types";
import Signin from "@/pages/signin/signin";
import Registration from "@/pages/registration/registration";
import HeaderList from "@/components/header/headerList";

const Header: React.FunctionComponent<ElementsForLogInLogOut> = function ({
  controllModalHeader,
  modalActive,
  setModalActive,
  checkAuthorized,
  setCheckAuthorized,
  userName,
  setUserName,
}) {
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
    setCheckSignIn(false);
  };
  const history = useHistory();
  const logOut = () => {
    if (setCheckAuthorized) {
      setCheckAuthorized(false);
    }
    window.history.replaceState({}, document.title);
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <header className={header.main}>
      <Link to={links.home} className={header.logo}>
        Game Store
      </Link>
      <div>
        <HeaderList headerMenuArr={headerData} root />
        <ul>
          {checkAuthorized ? (
            <>
              <li className={header.dropdown}>{userName}</li>
              <li className={header.dropdown} onClick={logOut}>
                Log Out
              </li>
            </>
          ) : (
            <>
              <li className={header.dropdown} onClick={signIn}>
                Sign In
              </li>
              <li className={header.dropdown} onClick={register}>
                Registration
              </li>
            </>
          )}
        </ul>
        {checkRegister ? (
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
      {checkSignIn ? <Signin active={modalActive} userLoggedIn={controllModalHeader} setUserName={setUserName} /> : ""}
    </header>
  );
};
export default Header;
