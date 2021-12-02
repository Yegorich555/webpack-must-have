import React, { ReactElement } from "react";
import modal from "./modal.module.scss";
interface Modal {
  isActive: boolean;
  children: ReactElement;
}
const Modal: React.FunctionComponent<Modal> = function ({ isActive, children }) {
  return (
    <div className={isActive ? modal.active : modal.modal}>
      <div className={isActive ? modal.modalContent : modal.content}>{children}</div>
    </div>
  );
};
export default Modal;
