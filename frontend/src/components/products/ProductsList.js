import React from "react";
import ProductItem from "./ProductItem";
import './Products.styles.css';

const ProductsList = ({products, type}) => {
  return (
    <div className="products-list">
      {
        products.map(product => {
          return <ProductItem key={product._id} product={product} />
        })
      }
    </div>
  )
};

export default ProductsList;
