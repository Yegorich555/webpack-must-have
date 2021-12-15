import InputText from "@/elements/inputText/inputText";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaTimes } from "react-icons/fa";

import styles from "./newPasswordModal.module.scss";
import Modal from "../../../modal/modal";
import "react-toastify/dist/ReactToastify.css";
import { changeUser } from "../../../utils/network";

interface RootState {
  user: {
    userName: string;
    id: number;
    email: string;
    description: string;
  };
  closeModal: () => void;
}

const NewPasswordModal = ({ user, closeModal }: RootState): JSX.Element | null => {
  const { userName, email, id, description } = user;
  console.log(user);

  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const notify = (errorMessage = "something error") => {
    toast(errorMessage, {
      className: "custom_toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const changeUserPassword = async () => {
    console.log(id, email, userName, description);
    if (firstPassword === secondPassword) {
      try {
        await changeUser(`http://localhost:3000/users/${id}`, {
          email,
          password: firstPassword,
          userName,
        });
      } catch (error) {
        notify();
      }
    } else notify("Password mismatch");
  };

  return (
    <>
      <ToastContainer />
      <Modal onClose={closeModal} isOpen>
        <form action="submit" className={styles.submitForm}>
          <div className={styles.header_modal}>
            <span>Change password</span>
            <button type="button" onClick={closeModal} className={styles.close_icon}>
              <FaTimes />
            </button>
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="new password"
              inputType="text"
              value={firstPassword}
              onChange={(value: string) => {
                setFirstPassword(value);
              }}
            />
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="Update password"
              inputType="text"
              value={secondPassword}
              onChange={(value: string) => {
                setSecondPassword(value);
              }}
            />
          </div>
          <div className={styles.button_block}>
            <button type="button" className={styles.buttonSubmit} onClick={() => changeUserPassword()}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default NewPasswordModal;
