import React from "react";
import "./BreadCrum.css";
import arrow from "../assets/breadcrum_arrow.png";

const BreadCrum = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{" "}
      {product.category} <img src={arrow} alt="" /> {product.name}{" "}
    </div>
  );
};

export default BreadCrum;
