import React, { useContext, useState } from "react";
import Modal from "@/components/modal/modal";
import signin from "../../components/input/input.module.scss";
import { SignIn } from "@/types/types";
import Input from "@/components/input/input";
import { signInPostData } from "@/api/signInRegistrationQuery";
import localStorageService from "@/localStorageService/localStorageService";
import { Context } from "@/constants/context";

const SignIn: React.FunctionComponent<SignIn> = function () {
  const [checkField, setCheckField] = useState(false);
  const { changeState, modalActive, setUserName } = useContext(Context);
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
    signInPostData({ formData })
      .then((res) => {
        localStorageService.setToken(res.data);
        const dataUser = localStorageService.getToken();
        // @ts-ignore
        setUserName(dataUser.name);
        changeState();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const enabled = input.name.length > 0 && input.password.length > 0 && !checkField;
  return (
    <Modal isActive={modalActive}>
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
export default SignIn;
