import React from 'react';
import { useProductsContext } from '../../context/products-context/products_context';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';
import Loading from '../loading';
import Error from '../error';
import Product from '../product';
// import Error from './Error';
// import Loading from './Loading';
// import Product from './Product';

const FeaturedProducts = () => {
  const { productsState } = useProductsContext();
  const {
    featured_products: featured,
    products_loading: loading,
    products_error: error,
  } = productsState;

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
