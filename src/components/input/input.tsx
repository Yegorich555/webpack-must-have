import React, { useState } from "react";
import signin from "./input.module.scss";
import { InputTypes } from "../../types/types";

const Input: React.FunctionComponent<InputTypes> = function ({
  type,
  name,
  text,
  value,
  setElem,
  setCheckField,
  input,
}) {
  const [nameDirty, setNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Field is empty!");
  const [passwordError, setPasswordError] = useState("Field is empty!");

  const nameCheck = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  const passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "passwordDuplicate":
        setPasswordDirty(true);
        break;
      default:
        console.log("check");
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "password") {
      if (!passwordCheck.test(String(e.target.value).toLowerCase())) {
        setPasswordError(
          "Password should start from number, include at least 1 number [0-9], at least one letter in lower and one in upper case and at least one symbol "
        );
        setCheckField(true);
      } else {
        setPasswordError("");
      }
    }

    if (e.target.name === "name") {
      if (!nameCheck.test(String(e.target.value).toLowerCase())) {
        setNameError("Login should start with letter in uppercase and then letters lower case");
        setCheckField(true);
      } else {
        setNameError("");
      }
    }
    if (e.target.name === "passwordDuplicate") {

      if (e.target.value !== input.password) {
        setPasswordError("passwords don't match");
        setCheckField(true);
      } else {
        setCheckField(false);
        setPasswordError("");
      }
    }
    if ((nameError && passwordError) === "") {
      setCheckField(false);
    }

    const { name, value } = e.target;
    setElem((prevInput:any) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <label className={signin.wrapper}>
      <span className={signin.title}>{text}</span>
      {nameDirty && nameError && <div className={signin.invalid}>{nameError}</div>}
      {passwordDirty && passwordError && <div className={signin.invalid}>{passwordError}</div>}
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={(e) => handleChange(e)}
        onBlur={(e) => blurHandler(e)}
      />
    </label>
  );
};
export default Input;
