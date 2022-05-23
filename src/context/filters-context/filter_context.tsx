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
    filterDispatch({ type: 'SORT_PRODUCTS' });
  }, [products, filterState.sort]);
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};