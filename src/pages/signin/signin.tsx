import React, { useState } from "react";
import axios from "axios";
import Modal from "@/components/modal/modal";
import signin from "../../components/input/input.module.scss";
import { Signin } from "@/types/types";
import Input from "@/components/input/input";

const Signin: React.FunctionComponent<Signin> = function ({ active, userLoggedIn, setUserName }) {
  const [checkField, setCheckField] = useState(false);

  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    const formData = {
      name: input.name,
      password: input.password,
    };
    axios
      .post("/api/auth/signIn/", formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data));
        const info: object = JSON.parse(localStorage.getItem("token") as string);
        // @ts-ignore
        setUserName(info.name);
        userLoggedIn();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const enabled = input.name.length > 0 && input.password.length > 0 && !checkField;
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
        <button type="button" className={signin.but} onClick={handleClick} disabled={!enabled}>
          Отправить
        </button>
      </form>
    </Modal>
  );
};
export default Signin;
