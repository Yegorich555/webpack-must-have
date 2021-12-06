import { FaTimes } from "react-icons/fa";
import InputText from "@/elements/inputText/inputText";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./signUpModal.module.scss";
import Modal from "../../../modal/modal";
import { getApiResourse } from "../../../utils/network";
import { API_SIGN_UP } from "../../../constants/api";
import "react-toastify/dist/ReactToastify.css";

interface MyState {
  isOpen: boolean;
  onClose: () => void;
  checkIfAuth: () => void;
  createUserName: (name: string) => void;
}

const SignUpModal = ({ isOpen, onClose, checkIfAuth, createUserName }: MyState): JSX.Element | null => {
  const [login, setLogin] = useState("");
  // const [userName, setUserName] = useState("");
  const [firstUserPassword, setFirstUserPassword] = useState("");
  const [secondUserPassword, setSecondUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const updateUserName = (value: string) => {
    setUserName(value);
  };
  const updateLogin = (value: string) => {
    setLogin(value);
  };
  const firstPassword = (value: string) => {
    setFirstUserPassword(value);
  };
  const secondPassword = (value: string) => {
    setSecondUserPassword(value);
  };

  const notify = (textError = "something error") => {
    toast(textError, {
      className: "custom_toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };
  const signUp = async (param: string, data = {}) => {
    try {
      await getApiResourse(param, data);
      checkIfAuth();
    } catch (error) {
      notify();
    }
  };

  const submitUser = () => {
    if (firstUserPassword === secondUserPassword) {
      signUp(API_SIGN_UP, {
        userName,
        email: login,
        password: firstUserPassword,
      });
      createUserName(userName);
    } else notify("Password mismatch");
  };

  return (
    <>
      <ToastContainer />
      <Modal onClose={onClose} isOpen={isOpen}>
        <form action="submit" className={styles.submitForm}>
          <div className={styles.header_modal}>
            <span>Registration</span>
            <button type="button" onClick={onClose} className={styles.close_icon}>
              <FaTimes />
            </button>
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="User Name"
              inputType="text"
              value={userName}
              inputPlaceHolder="enter your user name"
              onChange={updateUserName}
            />
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="Login"
              inputType="text"
              value={login}
              inputPlaceHolder="enter login"
              onChange={updateLogin}
            />
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="Password"
              inputType="text"
              value={firstUserPassword}
              inputPlaceHolder="enter password"
              onChange={firstPassword}
            />
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="Repeat Password"
              inputType="text"
              value={secondUserPassword}
              inputPlaceHolder="enter password"
              onChange={secondPassword}
            />
          </div>
          <div className={styles.button_block}>
            <button type="button" className={styles.buttonSubmit} onClick={submitUser}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SignUpModal;
