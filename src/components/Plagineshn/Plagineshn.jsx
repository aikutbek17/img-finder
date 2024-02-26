import React from "react";
import arrowRight from "../../assets/arrow_right.png";
import arrowLeft from "../../assets/arrow_left.png";

const Plagineshn = ({ chanhePage, page, count }) => {
  return (
    <div className="group_btn">
      <button onClick={() => chanhePage("minus")}>
        <img width={"30px"} src={arrowLeft} alt="arrow left" />
      </button>

      <span>
        {page}... {Math.round(count)}
      </span>
      <button onClick={() => chanhePage("plus")}>
        <img width={"30px"} src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default Plagineshn;
