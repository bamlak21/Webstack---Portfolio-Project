import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Contexts/ShopContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="display-left">
        <div className="display-img-list">
          <LazyLoadImage effect="blur" src={product.image} alt="" />
          <LazyLoadImage effect="blur" src={product.image} alt="" />
          <LazyLoadImage effect="blur" src={product.image} alt="" />
          <LazyLoadImage effect="blur" src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img src={product.image} className="display-main-img" alt="" />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>Rating (220)</p>
        </div>
        <div className="display-right-prices">
          <div className="display-right-prices-old">${product.old_price}</div>
          <div className="display-right-prices-new">${product.new_price}</div>
        </div>
        <div className="display-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore
          corrupti placeat ad quibusdam. Ex facilis dolores natus commodi
          ratione laborum suscipit.
        </div>
        <div className="display-right-size">
          <h1>Select Size</h1>
          <div className="display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="display-right-category">
          <span>Category: </span>
          {product.category}
        </p>
        <p className="display-right-category">
          <span>Tag: </span>
          {product.tag}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
