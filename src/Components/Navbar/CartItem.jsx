import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

import "./CartItem.css";

export default function CartItem(props) {

  const cartContext=useContext(CartContext);

  function increaseAmountHanlder(){
    cartContext.changeAmount(props.itemContent.id,1)
  }
  function decreaseAmountHanlder(){
    cartContext.changeAmount(props.itemContent.id,-1)
  }



  return (
    <div className="cart__item">
      <div className="content">
        <h6>{props.itemContent.name}</h6>
        <span>$ {Number(props.itemContent.price).toFixed(2)}</span>
        <div className="qty">
          <span>Qty: {props.itemContent.amount}</span>
          <div>
            <button className="cart-btn" onClick={increaseAmountHanlder}>+</button>
            <button className="cart-btn"  onClick={decreaseAmountHanlder}>-</button>
          </div>
        </div>
      </div>
      <div className="image">
        {/* <button className="remove-item" onClick={cartContext.removeItem}>x</button> */}
        <img src={props.itemContent.imageSrc} alt="Cart-Item" />
      </div>
    </div>
  );
}
