import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from "@/components/modal/modal";
import signin from "../../components/input/input.module.scss";
import { Registration } from "../../types/types";
import Input from "../../components/input/input";

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

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    const formData = {
      name: input.name,
      password: input.password,
    };
    axios
      .put("/api/auth/signUp", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("token", JSON.stringify(res.data));
          const info: object = JSON.parse(localStorage.getItem("token") as string);
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
