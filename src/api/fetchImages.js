import axios from "axios";

const fetchImages = async (setImages, query, page, setTotalHits) => {
  try {
    await axios
      .get(
        `https://pixabay.com/api/?key=42470916-40fee0344bf632c8bc75392aa&q=${query}&image_type=photo&lang=ru&page=${page}`
      )
      .then((res) => {
        setImages(res.data.hits);
        setTotalHits(res.data.total);
      });
  } catch (err) {
    console.log("Failed to fetch images from" + err);
  }
};

export default fetchImages;
