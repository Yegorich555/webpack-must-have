import InputText from "@/elements/inputText/inputText";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "@/components/store/reducers/userReducer";

import styles from "./newImageModal.module.scss";
import Modal from "../../../../modal/modal";
import "react-toastify/dist/ReactToastify.css";
import { changeUser } from "../../../../utils/network";

interface RootState {
  user: {
    userName: string;
    id: number;
    email: string;
    description: string;
    password: string;
    image: string;
  };
  closeModal: () => void;
}

const NewImageModal = ({ user, closeModal }: RootState): JSX.Element | null => {
  const { userName, description, email, id, password } = user;

  const [imageLink, setImageLink] = useState("");

  const dispatch = useDispatch();

  const notify = (errorMessage = "something error") => {
    toast(errorMessage, {
      className: "custom_toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const submitImage = async () => {
    closeModal();
    try {
      dispatch(
        setUser({
          id,
          email,
          userName,
          description,
          password,
          image: imageLink,
        })
      );
      await changeUser(`http://localhost:3000/users/${id}`, {
        email,
        password,
        userName,
        description,
        image: imageLink,
      });
    } catch (error) {
      notify();
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal onClose={closeModal} isOpen>
        <form action="submit" className={styles.submitForm}>
          <div className={styles.header_modal}>
            <span>Link to your image</span>
            <button type="button" onClick={closeModal} className={styles.close_icon}>
              <FaTimes />
            </button>
          </div>
          <div className={styles.inputBlock}>
            <InputText
              message="New Image"
              inputType="text"
              value={imageLink}
              onChange={(value: string) => {
                setImageLink(value);
              }}
            />
          </div>
          <div className={styles.button_block}>
            <button type="button" className={styles.buttonSubmit} onClick={() => submitImage()}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default NewImageModal;
