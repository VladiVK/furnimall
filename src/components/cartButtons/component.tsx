import React from 'react';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Wrapper } from './style.js';

const CartButtons = () => {
  return (
    <Wrapper className='cart-btn__wrapper'>
      <Link to='/cart' className='cart__btn'>
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
