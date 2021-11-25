import { FaTimes } from "react-icons/fa";
import InputText from "@/elements/inputText/inputText";
import { useState } from "react";
import styles from "./signUpModal.module.scss";
import Modal from "../../../modal/modal";
import { getApiResourse } from "../../../utils/network";
import { API_SIGN_UP } from "../../../constants/api";

interface MyState {
  isOpen: boolean;
  onClose: () => void;
  isSignIn: () => void;
}

const SignUpModal = ({ isOpen, onClose, isSignIn }: MyState): JSX.Element | null => {
  console.log("sign-up");

  const [login, setlogin] = useState("");
  const [firstUserPassword, setFirstUserPassword] = useState("");
  const [secondUserPassword, setSecondUserPassword] = useState("");
  const updateLogin = (value: string) => {
    setlogin(value);
  };
  const firstPassword = (value: string) => {
    setFirstUserPassword(value);
  };
  const secondPassword = (value: string) => {
    setSecondUserPassword(value);
  };

  const signUp = async (param: string, data = {}) => {
    try {
      const res = await getApiResourse(param, data);
      if (res) {
        isSignIn();
      }
    } catch (error) {
      alert(error);
    }
  };

  const submitUser = () => {
    if (firstUserPassword === secondUserPassword) {
      signUp(API_SIGN_UP, {
        email: login,
        password: firstUserPassword,
      });
    } else alert("Password mismatch");
  };

  // useEffect(() => {
  //   getResponse("http://localhost:3000/register", {
  //     email: "nils123on@email.com",
  //     password: "nil123",
  //   });
  // }, []);

  return (
    <>
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
