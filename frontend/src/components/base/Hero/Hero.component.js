import React from "react";
import {Link} from "react-router-dom";
import './Hero.styles.css';

const Hero = ({eyebrow, title, copy, image, url, btnText}) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 offset-2">
            <div className="content">
              <h5>{eyebrow}</h5>
              <h1>{title}</h1>
              <p>{copy}</p>
              <Link to={url} className="btn btn-main">{btnText}</Link>
            </div>
          </div>
          <div className="col-4">
            <div className="image">
              <img src={image} alt={title} className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;
