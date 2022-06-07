// domain/.netlify/functions/create-payment-intent

exports.handler = async function(event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    console.log(cart);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  // not for production
  // just for fix bug:
  // we in in browser and it is not "POST" but "GET" request
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
