import React from "react";
import "./Cart.css";
import Model from "../UI/Model";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
  const hasItem = CartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    CartCtx.addItem({...item , amount : 1})
  };

  const CartItems = (
    <ul className="cart-items">
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null , item.id)}
          onAdd={cartItemAddHandler.bind(null , item)}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onClose}>
      {CartItems}
      <div className="total">
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          CLose
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
