import React from 'react';
import { Wrapper } from './style';
import { FaPlus, FaMinus } from 'react-icons/fa';

export type AmountButtonsProps = {
  amount: number;
  increase: () => void;
  decrease: () => void;
};
const AmountButtons = ({ amount, increase, decrease }: AmountButtonsProps) => {
  return (
    <Wrapper className='amount-btns'>
      <button onClick={decrease} className='amount-btn'>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button onClick={increase} className='amount-btn'>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
