import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { CartActionUI, CartProviderProps, CartUI } from '../../global-types';
import reducer from '../../reducers/cart_reducer';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('cart'));
    // or
    // return JSON.parse(localStorage.getItem('cart') || '');
  } else {
    return [];
  }
};
const initialState: CartUI = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext<{
  cartState: CartUI;
  cartDispatch: React.Dispatch<CartActionUI>;
}>({ cartState: initialState, cartDispatch: () => {} });

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    cartDispatch({ type: 'COUNT_CART_TOTALS' });
    // watch local storage
    localStorage.setItem('cart', JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
