import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CartItem from "./CartItem";

import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const cartContext = useContext(CartContext);

  // Showing and Hiding Cart
  const [isCartShown, setIsCartShown] = useState(false);

  function showCart() {
    setIsCartShown(!isCartShown);
  }

  let numberOfCartItems = cartContext.items.reduce((acc, item) => {
    return acc + item.amount
  }, 0);

  let [counterAnimated, setCounterAnimated] = useState(false);

  let counterClasses = `counter ${counterAnimated ? "animate" : ""}`

  // Animation Part
  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setCounterAnimated(true);
    setTimeout(() => {
      setCounterAnimated(false)
    }, 600)
  }, [cartContext.items])


  // End
  return (
    <div className="cart-container">
      <span className={counterClasses}>{numberOfCartItems}</span>
      <img src="/icons/bag.svg" width="25px" alt="" onClick={showCart} />

      {isCartShown && (
        <div className="cart p-3 d-flex  flex-column justify-content-start shadow" >
          <div className="top d-flex m-0 justify-content-between w-100 pb-2 border-bottom">
            <span className="text-uppercase">{numberOfCartItems} Items</span>
            {/* <a className="text-uppercase" href="/cart">View Cart</a> */}
            <NavLink to="/cart" className="text-uppercase" onClick={showCart}>
              View Cart
            </NavLink>
          </div>

          {cartContext.items.map((item) => {
            return (
              <CartItem
                key={item.id * Math.random()}
                itemContent={{
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  amount: item.amount,
                  imageSrc: item.imageSrc,
                }}
              />
            );
          })}
          {numberOfCartItems ? (
            <div className="items d-flex justify-content-between py-2 pe-3 ">
              <h5 className="m-0">Total:</h5>
              <h5 className="m-0 text-danger">
                $ {cartContext.totalAmount.toFixed(2)}
              </h5>
            </div>
          ) : (
            <h6 className="text-center my-3">You have no items added!</h6>
          )}

          <NavLink to="/cart" className="nav-link checkout  btn bg-black px-3 rounded-0" onClick={showCart}>
            <span className="  text-white">
              Checkout
            </span>
          </NavLink>
        </div>
      )}
    </div>
  );
}
