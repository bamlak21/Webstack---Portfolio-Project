import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Lazy = ({ img, className }) => {
  return (
    <div>
      <LazyLoadImage className={className} alt="" src={img} effect="blur" />
    </div>
  );
};

export default Lazy;
