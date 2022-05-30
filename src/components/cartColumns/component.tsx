import React from 'react';
import { Wrapper } from './style';
const CartColumns = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        {/* just for good colums look */}
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

export default CartColumns;
