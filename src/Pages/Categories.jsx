import React, { useContext } from "react";
import "./CSS/Categories.css";
import { ShopContext } from "../Contexts/ShopContext";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const Categories = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="banner" src={banner} alt="" />
      <div className="category-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by&nbsp;
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">Explore More</div>
    </div>
  );
};

export default Categories;
