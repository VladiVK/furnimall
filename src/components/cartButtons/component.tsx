import React from 'react';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './style.js';
import { useProductsContext } from '../../context/products-context/products_context';
import { useCartContext } from '../../context/cart-context/cart_context';

const CartButtons = () => {
  const { productsDispatch } = useProductsContext();

  const {
    cartState: { total_items },
  } = useCartContext();

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
      <button type='button' className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};

export default CartButtons;
