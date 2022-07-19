import React from "react";
import {Link} from "react-router-dom";
import './Header.styles.css';


const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container justify-content-end">
          <Link className="navbar-brand" to="/">
            <img src="./logo.png" alt="logo" width="150" height="150"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">начало</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/products">продукти</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">за нас</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contacts">контакти</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default HeaderComponent;
