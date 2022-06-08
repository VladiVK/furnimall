import React, { useState, useEffect } from 'react';
// router
import { useNavigate } from 'react-router-dom';
// stripe
import {
  loadStripe,
  PaymentIntentResult,
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
import { UserUI } from '../../global-types';

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
    try {
      const { data } = await axios.post(
        '/.netlify/functions/create-payment-intent',
        JSON.stringify({ cart, shipping_fee, total_amount })
      );

      setClientSecret(data.clientSecret);
    } catch (error) {
      // @ts-ignore
      // console.log(error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);
  const handleChange = async (e: StripeCardElementChangeEvent) => {
    setdisabled(e.empty);
    // setError(e.error ? e.error.message : null)
    setError(e.error ? e.error : null);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      setProcessing(true);
      const payload = stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
      // @ts-ignore
      if (payload.error) {
        // @ts-ignore
        setError(`Payment failed ${payload.error}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);

        // optional approach
        setTimeout(() => {
          clearCart();
          navigate('/');
        }, 10000);
      }
    }
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successeful</h4>
          <h4>Redirect to home page shortly</h4>
        </article>
      ) : (
        <article>
          {/* @ts-ignore */}
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total sum is {formatPrice(total_amount + shipping_fee)}</p>
          <p>Test card number: 4242 4242 4242 4242</p>
        </article>
      )}
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
