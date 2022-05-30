import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cart-context/cart_context';
import { formatPrice } from '../../utils/helpers';
import AmountButtons from '../amountButtons';
import { Wrapper } from './style';

type CartItemProps = {
  id: string;
  name: string;
  color: string;
  image: string;
  price: number;
  amount: number;
};
const CartItem = ({ id, amount, color, image, name, price }: CartItemProps) => {
  const { cartState, cartDispatch } = useCartContext();

  const removeItem = (id: string) => {
    cartDispatch({ type: 'REMOVE_CART_ITEM', payload: id });
  };
  const toggleAmount = () => {};
  const increase = () => {};
  const decrease = () => {};

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      {/* big screen price */}
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} decrease={decrease} increase={increase} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

export default CartItem;
