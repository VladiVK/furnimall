import React, { createContext, useContext, useReducer } from 'react';
import { CartActionUI, CartProviderProps, CartUI } from '../../global-types';
import reducer from '../../reducers/cart_reducer';

const initialState: CartUI = {
  cart: [],
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

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
