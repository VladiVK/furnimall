import {
  CartActionUI,
  CartProductUI,
  CartUI,
  SingleProductUI,
} from '../global-types';

const cart_reducer = (state: CartUI, action: CartActionUI): CartUI => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, color, amount, product } = action.payload;

      const tempItem = state.cart.find((item) => item.id === item.id + color);
      if (tempItem) {
        // increase amount
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) newAmount = cartItem.max;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem: CartProductUI = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };

        return { ...state, cart: [...state.cart, newItem] };
      }
    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};
export default cart_reducer;
