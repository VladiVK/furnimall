import React from 'react';
import { useCartContext } from '../../context/cart-context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from '../cartColumns';
import CartItem from '../cartItem';
import { Wrapper } from './style';
import CartTotals from '../cartTotals';

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
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear bag
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
