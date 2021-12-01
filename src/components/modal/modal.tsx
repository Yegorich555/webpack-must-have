import React, { Dispatch, ReactElement, SetStateAction } from "react";
import modal from "./modal.module.scss";
interface Modal {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}
const Modal: React.FunctionComponent<Modal> = function ({ isActive, setIsActive, children }) {
  const modalShow = () => {
    setIsActive(true);
  };
  return (
    <div className={isActive ? modal.active : modal.modal} onClick={modalShow}>
      <div className={isActive ? "modal content" : "content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
