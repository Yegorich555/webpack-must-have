import { ReactChild, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

interface MyState {
  onClose: () => void;
  isOpen: boolean;
  children: ReactChild | ReactNode;
}

const Modal = ({ onClose, isOpen, children }: MyState): JSX.Element | null => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <button type="button" className={styles.modal} onClick={onClose}>
      <button type="button" className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </button>
    </button>,
    document.body
  );
};
export default Modal;
