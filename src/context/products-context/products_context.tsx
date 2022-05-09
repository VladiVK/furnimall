import React, { useContext, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import reducer from '../../reducers/products_reducer';
import { products_url as url } from '../../utils/constants';
// types
import {
  ProductsUI,
  ProductsProviderProps,
  ProductsActionUI,
} from '../../global-types';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};

const ProductsContext = createContext<{
  productsState: ProductsUI;
  productsDispatch: React.Dispatch<ProductsActionUI>;
}>({ productsState: initialState, productsDispatch: () => {} });

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [productsState, productsDispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url: string) => {
    productsDispatch({ type: 'GET_PRODUCTS_BEGIN' });

    try {
      const response = await axios.get(url);
      const products = await response.data;
      productsDispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products });
    } catch (error) {
      productsDispatch({ type: 'GET_PRODUCTS_ERROR' });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
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
