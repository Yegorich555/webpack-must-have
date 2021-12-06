import React, { ReactElement } from "react";
import ReactDom from "react-dom";
import modal from "./modal.module.scss";

interface Modal {
  isActive: boolean;
  children: ReactElement;
}

const Modal: React.FunctionComponent<Modal> = function ({ isActive, children }) {
  return ReactDom.createPortal(
    <div className={isActive ? modal.active : modal.modal}>
      <div className={isActive ? modal.modalContent : modal.content}>{children}</div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};
export default Modal;
