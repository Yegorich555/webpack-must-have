import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "@/components/modal/modal";
import signin from "../../components/input/input.module.scss";
import { Registration, HandleClickTypes } from "../../types/types";
import Input from "../../components/input/input";
import { registrationPostData } from "@/api/signInRegistrationQuery";
import SERVISE from "@/localStorageService/localStorageService";

const Registration: React.FunctionComponent<Registration> = function ({
  active,
  userLoggedIn,
  setRegistrationModal,
  setUserName,
}) {
  const [checkField, setCheckField] = useState(false);
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    password: "",
    passwordDuplicate: "",
  });

  const redirect = () => {
    history.push("/profile");
  };

  function handleClick(e: HandleClickTypes) {
    e.preventDefault();
    const formData = {
      name: input.name,
      password: input.password,
    };
    registrationPostData({ formData })
      .then((res) => {
        if (res.data) {
          SERVISE.setToken(res.data);
          const info = SERVISE.getToken();
          // @ts-ignore
          setUserName(info.name);
          redirect();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setRegistrationModal(false);
    userLoggedIn();
  }
  const enabled =
    input.name.length > 0 && input.password.length > 0 && input.passwordDuplicate.length > 0 && !checkField;
  return (
    <Modal isActive={active}>
      <form className={signin.formData}>
        <Input
          type="text"
          name="name"
          text="Login"
          value={input.name}
          setElem={setInput}
          setCheckField={setCheckField}
          input={input}
        />
        <br />
        <Input
          type="password"
          name="password"
          text="Password"
          value={input.password}
          setElem={setInput}
          setCheckField={setCheckField}
          input={input}
        />
        <br />
        <Input
          type="password"
          name="passwordDuplicate"
          text="Repeat your password"
          value={input.passwordDuplicate}
          setElem={setInput}
          setCheckField={setCheckField}
          input={input}
        />
        <br />
        <button type="button" className={signin.but} onClick={handleClick} disabled={!enabled}>
          Отправить
        </button>
      </form>
    </Modal>
  );
};
export default Registration;
