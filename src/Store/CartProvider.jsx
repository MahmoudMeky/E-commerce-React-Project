import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
import { ReactReduxContext } from "react-redux";
import CartContext from "./CartContext";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = function (state, action) {
  let updatedTotalAmout;
  switch (action.type) {
    case "ADD":
      let item = action.payload;
      updatedTotalAmout = state.totalAmount + item.amount * item.price;
      let existingItemIndex = state.items.findIndex((el) => el.id == item.id); // -1 Not Found , other wise index

      if (existingItemIndex !== -1) {
        // Item Found
        let existingItem = state.items[existingItemIndex];
        let updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        return { items: updatedItems, totalAmount: updatedTotalAmout };
      } else {
        // Item Not Found
        const updatedItems = state.items.concat(item);
        return { items: updatedItems, totalAmount: updatedTotalAmout };
      }
      break;

    case "CHANGE_AMOUNT":
      let itemIndex = state.items.findIndex((el) => el.id == action.payload.id);
      let oldItem = state.items[itemIndex]; // {...}

      let updatedItems = [...state.items];
      updatedTotalAmout = state.totalAmount;

      let updatedItem = {
        ...oldItem,
        amount: oldItem.amount + action.payload.change,
      };
      updatedItems[itemIndex] = updatedItem;
      updatedTotalAmout =
        state.totalAmount + updatedItem.price * action.payload.change;

      if (oldItem.amount == 1 && action.payload.change == -1) {
        //Last Item
        updatedItems = state.items.filter((el) => el.id !== action.payload.id);
      }

      return { items: updatedItems, totalAmount: updatedTotalAmout };
      break;

    default:
      break;
  }

  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemHalnder(item) {
    // console.log(item);
    dispatchCartAction({ type: "ADD", payload: item });
  }

  function removeItemHalnder(id) {
    dispatchCartAction({ type: "REMOVE", payload: id });
  }

  function changeAmountHandler(id, change) {
    dispatchCartAction({
      type: "CHANGE_AMOUNT",
      payload: { id: id, change: change },
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHalnder,
    removeItem: removeItemHalnder,
    changeAmount: changeAmountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
