import React from 'react';
import { useCartContext } from '../../context/cart-context/cart_context';
import CartColumns from '../cartColumns';
import CartItem from '../cartItem';
import { Wrapper } from './style';

const CartContent = () => {
  const { cartState, cartDispatch } = useCartContext();
  const clearCart = () => {
    cartDispatch({ type: 'CLEAR_CART' });
  };
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cartState.cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </Wrapper>
  );
};

export default CartContent;
