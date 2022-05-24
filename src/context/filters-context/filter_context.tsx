import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  FilterProviderProps,
  FilterUI,
  FilterActionUI,
} from '../../global-types';
import reducer from '../../reducers/filter_reducer';
// Products Context
import { useProductsContext } from '../products-context/products_context';

const initialState: FilterUI = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    color: 'all',
    company: 'all',
    max_price: 0,
    min_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext<{
  filterState: FilterUI;
  filterDispatch: React.Dispatch<FilterActionUI>;
}>({ filterState: initialState, filterDispatch: () => {} });

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const { productsState } = useProductsContext();

  const products = productsState.products;

  const [filterState, filterDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    filterDispatch({ type: 'LOAD_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
    filterDispatch({ type: 'FILTER_PRODUCTS' });
    filterDispatch({ type: 'SORT_PRODUCTS' });
  }, [products, filterState.sort, filterState.filters]);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
