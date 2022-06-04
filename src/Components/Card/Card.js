import React from "react";
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`${product.img}`} alt="card" />
      </div>
      <div className="card-data">
        <div className="card-title">{product.name}</div>
        <div className="card-price">Price: {`${product.price}Rs`}</div>
        <div className="extra-details">
          <div className="card-brand">Brand: {product.brand}</div>
          <div className="card-size">Size: {product.size}</div>
          <div className="card-for">Ideal For: {product.for}</div>
        </div>
        <div>
          <button className="card-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
