import React from "react";

const Modal = ({ largeImageURL, handleClose }) => {
  <div>
    <button></button>
  </div>;

  return (
    <div className="Overlay">
      <div className="Modal">
        <button onClick={handleClose}>X</button>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
