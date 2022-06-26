import React, { createContext } from 'react'

const CartContext=createContext({
  items:[],
  totalAmount:0,
  addItem:function(item){},
  removeItem:function(id){},
  changeAmount: function(id){},
    // decreaseAmount: function(id){}
})

export default CartContext