import React from 'react';
import { BasicProductUI, ProductsUI } from '../../global-types';
import Product from '../product';
import { Wrapper } from './style';

type GridViewProps = {
  products: BasicProductUI[];
};
const GridView = ({ products }: GridViewProps) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default GridView;
