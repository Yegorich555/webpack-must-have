import { FaTimes } from "react-icons/fa";
import InputText from "@/elements/inputText/inputText";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { API_SIGN_IN } from "../../../constants/api";

import styles from "./signInModal.module.scss";
import Modal from "../../../modal/modal";
import { getApiResourse } from "../../../utils/network";
import "react-toastify/dist/ReactToastify.css";

interface MyState {
  isOpen: boolean;
  onClose: () => void;
  isSignIn: () => void;
}

const SignInModal = ({ isOpen, onClose, isSignIn }: MyState): JSX.Element | null => {
  toast.error("something wrong");
  toast.success("well");
  console.log("signin");
  const [login, setlogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const updateLogin = (value: string) => {
    setlogin(value);
  };
  const updatePassword = (value: string) => {
    setUserPassword(value);
  };

  const signIn = async (param: string, data = {}) => {
    const res = await getApiResourse(param, data);
    console.log(res);

    if (res[0]) {
      isSignIn();
    }
    if (!res[0]) {
      setError(true);
    }
  };

  const submitUser = () => {
    signIn(API_SIGN_IN, {
      email: login,
      password: userPassword,
    });
  };

  // useEffect(() => {
  //   getResponse("http://localhost:3000/register", {
  //     email: "nils123on@email.com",
  //     password: "nil123",
  //   });
  // }, []);

  if (error) {
    return <ToastContainer draggable={false} />; // problems with ToastContainer, I believe it should be implemented in network.tsx,
    // but i ran into problems and tried to implement it here. Here's the problem with re-rendering
  }
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <form action="submit" className={styles.submitForm}>
        <div className={styles.header_modal}>
          <span>Authorization</span>
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
            value={userPassword}
            inputPlaceHolder="enter password"
            onChange={updatePassword}
          />
        </div>
        <div className={styles.button_block}>
          <button type="button" className={styles.buttonSubmit} onClick={submitUser}>
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default React.memo(SignInModal);
