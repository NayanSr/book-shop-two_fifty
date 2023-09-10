// import React from 'react';
import "./Product.css";

const Product = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, id, img, price } = props.product;

  return (
    <div style={{ borderRadius: "20px", border: "1px solid teal" }}>
      <div className="product-container">
        <img className="product-image" src={img} alt="" />
        <p style={{ color: "brown", fontSize: "1.4em", margin: "2px 0" }}>
          {title}
        </p>
        <p style={{ color: "blue", fontSize: "1.1em", margin: "2px 0" }}>
          Price: ${price}
        </p>
      </div>
      <button className="button-add-to-cart">
        <small>Add to Cart ${id}</small>
        <small>🎁</small>
      </button>
    </div>
  );
};

export default Product;
