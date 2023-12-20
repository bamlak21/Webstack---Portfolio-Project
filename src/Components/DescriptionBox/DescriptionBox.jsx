import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-nav">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website, also known as an online store or online shop,
          is a website that enables businesses to sell products or services over
          the internet. It allows customers to browse through a catalog of
          products or services, select items they want to purchase, add them to
          a virtual shopping cart, and proceed to checkout to complete the
          transaction.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
