import React, { useState } from "react";
import axios from "axios";
import Modal from "@/components/modal/modal";
import signin from "./signin.module.scss";
import { Signin } from "@/types/types";

const Signin: React.FunctionComponent<Signin> = function ({ active, userLoggedIn, setUserName }) {
  const [nameDirty, setNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Field is empty!");
  const [passwordError, setPasswordError] = useState("Field is empty!");
  const [checkField, setCheckField]=useState(false);
  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        console.log("check");
    }
  };

  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const nameCheck = /^(\S+)[,\s]*$/;
  const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "password") {
      if (!passwordCheck.test(String(e.target.value).toLowerCase())) {
        setPasswordError(
          "Password should start from number, include at least 1 number [0-9], at least one letter in lower and one in upper case and at least one symbol "
        );
        setCheckField(true);
      } else {
        setPasswordError("");
        setCheckField(false);
      }
    }
    if (e.target.name === "name") {
      if(!nameCheck.test(String(e.target.value).toLowerCase())) {
        setNameError("Login should start with letter in uppercase and then letters lower case");
        setCheckField(true);
      }
      else{
        setNameError("");
        setCheckField(false);
      }
    }


    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

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
        <div className={signin.wrapper}>
          <span className={signin.title}>Login</span>
          {nameDirty && nameError && <div style={{ color: "red" }}>{nameError}</div>}
          <input
            type="text"
            name="name"
            value={input.name}
            data-rule="text"
            required
            onChange={(e) => handleChange(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </div>

        <br />
        <div className={signin.wrapper}>
          <span className={signin.title}>Password</span>
          {passwordDirty && passwordError && <div style={{ color: "red" }}>{passwordError}</div>}
          <input
            type="password"
            name="password"
            value={input.password}
            data-rule="password"
            required
            onChange={(e) => handleChange(e)}
            onBlur={(e) => blurHandler(e)}
          />
        </div>
        <br />
        <button type="button" className={signin.but} onClick={handleClick} disabled={!enabled}>
          Отправить
        </button>
      </form>
    </Modal>
  );
};
export default Signin;
