import React from "react";
import style from "./Modal.module.css";

const Modal = ({ children, onAction, onHide }) => {
  return (
    <div className={style.modal}>
      <div>
        <div>
          <div className={style["modal-content"]}>
            <h2>{children}</h2>
            <div>
              <button onClick={onAction} style={{ backgroundColor: "red" }}>
                delete
              </button>
              <button onClick={onHide}>cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
