import { CartActionUI, CartUI } from '../global-types';

const cart_reducer = (state: CartUI, action: CartActionUI): CartUI => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state };

    default:
      return state;
  }
};
export default cart_reducer;
