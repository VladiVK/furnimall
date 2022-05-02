import React from 'react';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './style.js';
import { useProductsContext } from '../../context/products-context/products_context';

const CartButtons = () => {
  const { productsDispatch } = useProductsContext();

  const closeSidebar = () => productsDispatch({ type: 'SIDEBAR_CLOSE' });
  return (
    <Wrapper className='cart-btn__wrapper'>
      <Link to='/cart' className='cart__btn' onClick={closeSidebar}>
        Cart
        <span className='cart__container'>
          <FaShoppingCart />
          <span className='cart__value'>21</span>
        </span>
      </Link>
      <button type='button' className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  );
};

export default CartButtons;
