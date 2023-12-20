import React from "react";
import "./RelatedProducts.css";
import related_products from "../assets/related_products";
import Items from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="related-items">
        {related_products.map((item, i) => {
          if (item.category === "men") {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
