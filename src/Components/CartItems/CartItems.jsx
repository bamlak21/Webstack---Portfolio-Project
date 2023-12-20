import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qunatity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_product.map((item, id) => {
        if (cartItem[item.id] > 0) {
          return (
            <>
              <hr />
              <div>
                <div className="format main">
                  <img src={item.image} alt="" className="product-img" />
                  <p>{item.name}</p>
                  <p>${item.new_price}</p>
                  <button className="items-quantity">
                    {cartItem[item.id]}
                  </button>
                  <p>${item.new_price * cartItem[item.id]}</p>
                  <img
                    src={remove_icon}
                    onClick={() => removeFromCart(item.id)}
                    alt=""
                    className="cart-remove-icon"
                  />
                </div>
              </div>
            </>
          );
        }
        return null;
      })}

      <div className="cart-down">
        <div className="total">
          <h1>Cart total</h1>
          <div>
            <div className="total-item">
              <p>Sub-total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Check-Out</button>
        </div>
        <div className="promocode">
          <p>If you have a Promo code, Use it here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
