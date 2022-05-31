import React from 'react';
import {
  CartActionUI,
  CartProductUI,
  CartUI,
  SingleProductUI,
} from '../global-types';

const cart_reducer = (state: CartUI, action: CartActionUI): CartUI => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, color, amount, product } = action.payload;

      const tempItem = state.cart.find((item) => item.id === item.id + color);
      if (tempItem) {
        // increase amount
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) newAmount = cartItem.max;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem: CartProductUI = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };

        return { ...state, cart: [...state.cart, newItem] };
      }
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'TOGGLE_CART_ITEM_AMOUNT':
      const { id: ID, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item.id === ID) {
          if (value === 'increase') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }

            return { ...item, amount: newAmount };
          } else {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });

      return {
        ...state,
        cart: tempCart,
      };

    case 'COUNT_CART_TOTALS':
      const { total_items, total_amount } = state.cart.reduce(
        (total, item) => {
          total.total_items += item.amount;
          total.total_amount += item.amount * item.price;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_amount, total_items };

    default:
      return state;
  }
};
export default cart_reducer;
