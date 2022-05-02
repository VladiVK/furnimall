import React, { useContext, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import reducer from '../../reducers/products_reducer';

// types
import {
  ProductsUI,
  ProductsProviderProps,
  ProductsActionUI,
} from '../../global-types';

const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = createContext<{
  state: ProductsUI;
  dispatch: React.Dispatch<ProductsActionUI>;
}>({ state: initialState, dispatch: () => {} });

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

// important
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
