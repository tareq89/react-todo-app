import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addItem: (product) =>
    set((state) => {
      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),
  increase: (id) =>
    set((state) => {
      return {
        cartItems: state.cartItems.map((item) => {
          if (item.id === id && item.availableQty > item.quantity) {
            item.quantity += 1;
          }
          return item;
        }),
      };
    }),
  decrease: (id) =>
    set((state) => {
      return {
        cartItems: state.cartItems.map((item) => {
          if (item.id === id && item.quantity > 1) {
            item.quantity -= 1;
          }
          return item;
        }),
      };
    }),
  remove: (id) =>
    set((state) => {
      return {
        cartItems: state.cartItems.filter((item) => {
          return item.id !== id;
        }),
      };
    }),
}));
