import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./modal.module.scss";

interface MyState {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  isSignIn: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ isOpen, onClose, isSignIn }: MyState): JSX.Element | null => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <button type="button" className={styles.modal} onClick={onClose}>
      <button type="button" className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <form action="submit" className={styles.submitForm}>
          <div className={styles.header_modal}>
            <p>Authorization</p>
            <button type="button" onClick={onClose} className={styles.close_icon}>
              <FaTimes />
            </button>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="flogin">
              First name:
              <input type="text" placeholder="enter login" name="flogin" />
            </label>
          </div>
          <div className={styles.inputBlock}>
            <span>Password</span>
            <input type="text" placeholder="enter password" />
          </div>
          <div className={styles.button_block}>
            <button type="submit" className={styles.buttonSubmit} onClick={isSignIn}>
              Submit
            </button>
          </div>
        </form>
      </button>
    </button>,
    document.body
  );
};

export default Modal;
