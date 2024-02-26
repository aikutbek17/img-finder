import { useState, useEffect } from "react";
import ImageGallery from "./components/ImagesGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Plagineshn from "./components/Plagineshn/Plagineshn";
import fetchImages from "./api/fetchImages";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("bmw");
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState(null);

  useEffect(() => {
    fetchImages(setImages, query, page, setTotalHits);
  }, [query, page]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleSubmit = (value) => {
    setQuery(value);
  };

  const count = totalHits / 200;
  const changePege = (value) => {
    if (value === "plus" && page <= count) {
      setPage(page + 1);
    }

    if (value === "minus" && page > 1) {
      setPage(page - 1);
    }
  };

  const handleChangeModal = (largeImageURL) => {
    setShowModal(true);
    setImg(largeImageURL);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Searchbar handleSubmit={handleSubmit} />

      {images.length > 0 ? (
        <>
          {" "}
          <ImageGallery handleChangeModal={handleChangeModal} images={images} />
          <Plagineshn changePage={changePege} page={page} count={count} />
        </>
      ) : (
        <div>
          <p className=""></p>
        </div>
      )}

      {showModal && <Modal largeImageURL={img} handleClose={handleClose} />}
    </div>
  );
};

export default App;
