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

    default:
      return state;
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
