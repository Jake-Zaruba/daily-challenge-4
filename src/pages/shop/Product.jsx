import React from "react";

export default function Product({ data }) {
  const { productName, id, productImage, price } = data;

  return (
    <div className="product-container">
      <div className="product">
        <img className="img" src={productImage} />
        <div className="product-description">
          <p>
            <b>{productName}</b>
          </p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}
