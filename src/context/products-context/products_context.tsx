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
  productsState: ProductsUI;
  productsDispatch: React.Dispatch<ProductsActionUI>;
}>({ productsState: initialState, productsDispatch: () => {} });

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsState, productsDispatch] = useReducer(reducer, initialState);
  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

// important
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
