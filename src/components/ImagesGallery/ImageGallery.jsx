import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, handleChangeModal }) => {
  const imageElem = images.map((image) => (
    <ImageGalleryItem key={image.id} {...image} handleChangeModal={handleChangeModal} />
  ));

  return (
    <>
      <ul className="ImageGallery">{imageElem}</ul>
    </>
  );
};

export default ImageGallery;