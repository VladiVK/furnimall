import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, StripeCheckout } from '../../components';
// cart constext
import { useCartContext } from '../../context/cart-context/cart_context';
// style
import { Wrapper } from './style';

const CheckoutPage = () => {
  const {
    cartState: { cart },
  } = useCartContext();
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2 className='empty__title'>your bag is empty</h2>
            <Link to='/products' className='btn'>
              start shopping
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

export default CheckoutPage;
