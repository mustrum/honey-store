import React from "react";

const TitleComponent = ({title, copy, alignment, background}) => {
  const className = alignment === "left"
    ? "align-items-start"
    : alignment === "center"
      ? "align-items-center"
      : "align-items-end";
  return (
    <div className="py-5" style={{backgroundColor: background}}>
      <div className="container">
        <div className={`d-flex flex-column ${className}`}>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
      </div>
    </div>
  )
};

export default TitleComponent;
