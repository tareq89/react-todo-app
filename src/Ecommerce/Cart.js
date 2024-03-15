import React from "react";
import { CartItem } from "./CartItem";
import { useCartStore } from "./store";
// const cartItems = [
//   {
//     id: 1,
//     name: "Karlen",
//     price: "$897.21",
//     image: "http://dummyimage.com/144x100.png/ff4444/ffffff",
//     availableQty: 3,
//     quantity: 1,
//   },
// ];
export const Cart = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="col-4 border">
      {cartItems.map((x, i) => (
        <CartItem {...x} />
      ))}
    </div>
  );
};
