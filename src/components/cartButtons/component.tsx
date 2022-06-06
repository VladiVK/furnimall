import React from 'react';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './style.js';
import { useProductsContext } from '../../context/products-context/products_context';
import { useCartContext } from '../../context/cart-context/cart_context';
import { useUserContext } from '../../context/user-context/user_context';
const CartButtons = () => {
  // Product Context
  const { productsDispatch } = useProductsContext();
  // Cart Context
  const {
    cartState: { total_items },
    cartDispatch,
  } = useCartContext();
  // User Context
  const { loginWithRedirect, logout, myUser } = useUserContext();

  const closeSidebar = () => productsDispatch({ type: 'SIDEBAR_CLOSE' });
  return (
    <Wrapper className='cart-btn__wrapper'>
      <Link to='/cart' className='cart__btn' onClick={closeSidebar}>
        Cart
        <span className='cart__container'>
          <FaShoppingCart />
          <span className='cart__value'>{total_items}</span>
        </span>
      </Link>

      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            cartDispatch({ type: 'CLEAR_CART' });
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default CartButtons;
