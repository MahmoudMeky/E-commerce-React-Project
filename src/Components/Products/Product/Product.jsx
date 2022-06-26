import React from "react";
import { useContext } from "react";
import "./Product.css";
import CartContext from "../../../Store/CartContext";
import { useEffect } from "react";
import { useState } from "react";

export default function Product(props) {

  const cartContext=useContext(CartContext);


  const addToCartHandler=()=>{
    cartContext.addItem({id:props.id,name:props.prodName,price:props.prodPrice,imageSrc:props.imageSrc,amount:1});
    
    // Animation Part
    setIsBtnClicked(true);
  }
  
  let [isBtnClicked,setIsBtnClicked]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsBtnClicked(false);
    },500)
  },[isBtnClicked])


  return (
    
    <div className="item">
      <div className="img">
        <img
          src={props.imageSrc}
          className="img-fluid"
          alt={props.imageAlt}
        />

        <div className={`animation-text ${isBtnClicked?"show":""}`}>
            <h6 className="m-0">Item Added!</h6>
        </div>
        
        <div className="add-to-cart" onClick={addToCartHandler}>
            <img src="/icons/cart-add.svg" alt="add to cart" />
            <h5>Add to Cart</h5>
        </div>

      </div>
      <div className="text p-3  mt-2 d-flex justify-content-between">
        <h5 className=" m-0">{props.prodName}</h5>
        <h5 className=" m-0">${Number(props.prodPrice).toFixed(2)}</h5>
      </div>
    </div>
  );
}
