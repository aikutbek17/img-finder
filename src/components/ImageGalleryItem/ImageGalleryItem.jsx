import React from "react";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  handleChangeModal,
}) => {
  return (
    <>
      <li
        onClick={() => handleChangeModal(largeImageURL)}
        className="ImageGalleryItem"
      >
        <img className="ImageGalleryItemImage" src={webformatURL} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
