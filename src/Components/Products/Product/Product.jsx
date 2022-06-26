import React from "react";
import { useContext } from "react";
import "./Product.css";
import CartContext from "../../../Store/CartContext";
import { useEffect } from "react";
import { useState } from "react";

export default function Product(props) {

  const cartContext = useContext(CartContext);


  const addToCartHandler = () => {
    cartContext.addItem({ id: props.id, name: props.prodName, price: props.prodPrice, imageSrc: props.imageSrc, amount: 1 });

    // Animation Part
    setIsBtnClicked(true);
  }

  let [isBtnClicked, setIsBtnClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsBtnClicked(false);
    }, 500)
  }, [isBtnClicked])


  return (

    <div className="item">
      <div className="img">
        <img
          src={props.imageSrc}
          className="img-fluid"
          alt={props.imageAlt}
        />

        <div className={`animation-text ${isBtnClicked ? "show" : ""}`}>
          <h6 className="m-0">Item Added!</h6>
        </div>

        <a className="view-item" href={`/products/${props.id}`}>
          <h5>View Item</h5>
        </a>
        {/* <div className="add-to-cart" onClick={addToCartHandler}>
            <img src="/icons/cart-add.svg" alt="add to cart" />
            <h5>Add to Cart</h5>
        </div> */}
      </div>
      <div className="add-to-cart" onClick={addToCartHandler} title="Add to cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>

      </div>
      <div className="text p-3  mt-2 d-flex justify-content-between">
        <h5 className=" m-0">{props.prodName}</h5>
        <h5 className=" m-0">${Number(props.prodPrice).toFixed(2)}</h5>
      </div>
    </div>
  );
}
