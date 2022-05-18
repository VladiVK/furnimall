import React from 'react';
import GridView from '../gridView';
import ListView from '../listView';
import { useFilterContext } from '../../context/filters-context/filter_context';

const ProductList = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const { filtered_products: products, grid_view } = filterState;

  if (products.length < 1) {
    return <h5>Sorry, no products matched your search!</h5>;
  }
  if (!grid_view) return <ListView products={products} />;

  return <GridView products={products} />;
};

export default ProductList;
