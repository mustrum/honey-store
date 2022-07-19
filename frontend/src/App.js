import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components";
import {HomePage, ProductsPage, ProductPage} from './screens/_index'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route element={<HomePage/>} exact path="/"/>
          <Route element={<ProductsPage/>} path="/products"/>
          <Route element={<ProductPage/>} path="/products/:id"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
