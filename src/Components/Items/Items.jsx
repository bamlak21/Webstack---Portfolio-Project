import React from "react";
import { Link } from "react-router-dom";
import "./items.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <LazyLoadImage
          effect="blur"
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Items;
