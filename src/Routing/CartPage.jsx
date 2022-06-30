import React from "react";
import { useContext } from "react";
import "./CartPage.css";

import CartContext from "../Store/CartContext.js";

export default function CartPage() {
  const cartContext = useContext(CartContext);

  const items = cartContext.items;
  const taxes=5;

  return (
    <section className="cart-page row m-0 p-0 p-lg-5 ">
      <div className="p-2 p-lg-4 col-12 col-lg-8">
        <div className="d-flex flex-column gap-2">
          <h5 className="mb-4 fw-bold">Shopping Cart</h5>
          <div className="cart-header row m-0 text-uppercase fw-bold border-bottom pb-1">
            <div className="p-0 col-3 col-lg-6">Item</div>
            <div className="p-0 col-3 col-lg-2">Price</div>
            <div className="p-0 col-3 col-lg-2">Qty</div>
            <div className="p-0 col-3 col-lg-2">Subtotal</div>
          </div>

          <div className="cart-items shadow">
            {items.map((item) => {
              function increaseAmountHanlder() {
                cartContext.changeAmount(item.id, 1);
              }
              function decreaseAmountHanlder() {
                cartContext.changeAmount(item.id, -1);
              }

              return (
                <div className="row m-0 py-3 border-bottom" key={item.id}>
                  <div className="p-0 col-2 col-lg-6 d-flex gap-3 flex-column flex-lg-row justify-content-center align-items-center">
                    <img
                      src={item.imageSrc}
                      alt=""
                      className="col-10 col-lg-3"
                    />
                    <div className="text col-10 col-lg-9 pe-5 ">
                      <h5 className="col-12 col-lg-9">{item.name}</h5>
                    </div>
                  </div>

                  <div className="p-0 col-3 col-lg-2 text-center text-lg-start">
                    $ {item.price.toFixed(2)}
                  </div>
                  <div className="p-0 col-3 col-lg-2 text-center ">
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                      <button
                        className="cart-btn"
                        onClick={decreaseAmountHanlder}
                      >
                        -
                      </button>
                      <span>{item.amount}</span>
                      <button
                        className="cart-btn"
                        onClick={increaseAmountHanlder}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="p-0 col-4 col-lg-2 text-center text-lg-start">
                    $ {(item.price * item.amount).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-header row m-0 text-uppercase fw-bold  pt-2"></div>
        </div>
      </div>
      <div className="py-4 px-3 col-12 col-lg-4 mt-0 mt-lg-5">
        <div className=" border border-2 p-3 mt-4 ">
          <h5 className="mb-4 fw-bold text-uppercase">Summary</h5>
          <hr />
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$ {cartContext.totalAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Tax.. <span className="fw-bold text-danger"> {taxes}% </span> </span>
              <span>$ {(cartContext.totalAmount*taxes/100).toFixed(2)}</span>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h6 className="mb-4 fw-bold text-uppercase">Order Total</h6>
            <h6 className="mb-4 fw-bold text-uppercase">$ {(cartContext.totalAmount*(1+(taxes/100))).toFixed(2)}</h6>

            </div>
          <button className="btn btn-dark rounded-0 col-12">Check Out</button>
        </div>
      </div>
    </section>
  );
}
