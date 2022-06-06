import React, { useState, useEffect } from 'react';
// router
import { useNavigate } from 'react-router-dom';
// stripe
import {
  loadStripe,
  StripeCardElementChangeEvent,
  StripeError,
} from '@stripe/stripe-js';
import {
  useStripe,
  CardElement,
  Elements,
  useElements,
} from '@stripe/react-stripe-js';
// axios
import axios from 'axios';
// constexts
import { useCartContext } from '../../context/cart-context/cart_context';
import { useUserContext } from '../../context/user-context/user_context';
// utils
import { formatPrice } from '../../utils/helpers';
// style
import { Wrapper } from './style';
import { captureRejectionSymbol } from 'events';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY as string);

const CheckoutForm = () => {
  // cart
  const { cartState, cartDispatch } = useCartContext();
  const { cart, shipping_fee, total_amount } = cartState;
  const clearCart = () => {
    cartDispatch({ type: 'CLEAR_CART' });
  };
  // user
  const { myUser } = useUserContext();
  // navigation
  const navigate = useNavigate();
  // stripe stuff
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [error, setError] = useState<StripeError | null | undefined>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [disabled, setdisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };
  const createPaymentIntent = async () => {
    console.log('greetings from stripe checkout');
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);
  const handleChange = async (e: StripeCardElementChangeEvent) => {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div>
      {/* all structure is from stripe setup */}
      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement options={cardStyle} onChange={handleChange} />

        <button disabled={disabled || processing || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* show any error during payment */}
        {error && (
          <div className='card-error' id='card-error' role='alert'>
            {error.message}
          </div>
        )}
        {/* show success message */}
        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded. See the result in your {'  '}
          <a href='https://dashboard.stripe.com/test/payments'>
            Stripe dashboard
          </a>
          {/* refresh a page with navigation */}
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

export default StripeCheckout;
