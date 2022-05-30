import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../context/cart-context/cart_context';
import AmountButtons from '../amountButtons';

import { SingleProductUI } from '../../global-types';
import { Wrapper } from './style';

type AddToCartProps = {
  product: SingleProductUI;
};
const AddToCart = ({ product }: AddToCartProps) => {
  const { cartState, cartDispatch } = useCartContext();

  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: SingleProductUI
  ) => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: { id, color, amount, product },
    });
  };

  const increase = () => setAmount((prev) => (prev >= stock ? prev : prev + 1));
  const decrease = () => setAmount((prev) => (prev === 1 ? prev : prev - 1));

  return (
    <Wrapper>
      <div className='colors'>
        <span>colors:</span>
        <div>
          {colors.map((color, i) => (
            <button
              key={i}
              className={`color-btn ${mainColor === color && 'active'}`}
              style={{ background: color }}
              onClick={() => setMainColor(color)}
            >
              {color === mainColor && <FaCheck />}
            </button>
          ))}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          onClick={() => addToCart(id, mainColor, amount, product)}
          className='btn'
          to='/cart'
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
