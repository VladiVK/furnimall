// domain/.netlify/functions/create-payment-intent
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    const calculateOrderAmount = () => shipping_fee + total_amount;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }

  // not for production
  // just for fix bug:
  // we in in browser and it is not "POST" but "GET" request
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
