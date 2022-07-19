import React from "react";
import {Link} from "react-router-dom";


const ProductItem = ({product}) => {
  return (
    <div className='product-list-item'>
      <Link to={`/products/${product._id}`}>
        <img className="img-fluid" src={product.image}/>
        <h3>{product.name}</h3>
        <p>{product.notes}</p>
        <div className="my-1">{product.price}</div>
      </Link>
      <button className="btn btn-sm btn-dark">добави</button>
    </div>
  )
};

export default ProductItem;
