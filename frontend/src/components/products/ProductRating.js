import React from "react";

const ProductRating = ({value}) => {
  return (
    <>
      {[...Array(5)].map((el, i) => {
        let index = i + 1;
        let className = "fa-solid fa-star";

        if (index > value && index - value === 0.5) {
          className = "fa-regular fa-star-half-stroke";
        }
        if (index > value && index - value !== 0.5) {
          className = "fa-regular fa-star"
        }

        return <i key={i}  className={className}></i>;
      })}
    </>
  )

};

export default ProductRating;
