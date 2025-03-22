import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from './EmptyCart'
import { clearItem, getCart } from "./CartSlice";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((store)=>store.user.username)
  const cart = useSelector(getCart)
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart />
  // const cart = fakeCart;

  return (
    <div className="py-4 px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 border-b-amber-100 divide-y divide-stone-200 ">
        {cart.map((item)=> <CartItem item={item} key={item.pizzaId}/>)}
      </ul>

      <div className="mt-6 space-x-3">
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type='secondary' onClick={()=>dispatch(clearItem())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
