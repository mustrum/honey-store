import React from "react";

const Section = (props) => {
  const {title, copy, alignment, background} = props;
  const className = alignment === "left"
    ? "align-items-start"
    : alignment === "center"
      ? "align-items-center"
      : "align-items-end";
  return (
    <section className="py-5" style={{backgroundColor: background}}>
      <div className="container">
        <div className={`d-flex flex-column ${className}`}>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div>
          {props.children}
        </div>
      </div>
    </section>
  )
};

export default Section;
