import React from 'react';
import { Wrapper } from './style';

const CheckoutForm = () => {
  return <h2>greetings from stripe checkout</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

export default StripeCheckout;
