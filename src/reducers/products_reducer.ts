import { ProductsUI, ProductsActionUI } from '../global-types';

const products_reducer = (
  state: ProductsUI,
  action: ProductsActionUI
): ProductsUI => {
  switch (action.type) {
    case 'SIDEBAR_OPEN':
      return { ...state, isSidebarOpen: true };
    case 'SIDEBAR_CLOSE':
      return { ...state, isSidebarOpen: false };
    case 'GET_PRODUCTS_BEGIN':
      return { ...state, products_loading: true };
    case 'GET_PRODUCTS_SUCCESS':
      const products = action.payload;
      const featured_products = products.filter((p) => p.featured === true);
      return {
        ...state,
        products_loading: false,
        featured_products,
        products,
      };
    case 'GET_PRODUCTS_ERROR':
      return { ...state, products_error: true, products_loading: false };

    default:
      return state;
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
