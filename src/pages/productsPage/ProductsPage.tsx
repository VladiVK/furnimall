import React from 'react';
import { Filters, PageHero, ProductList, Sort } from '../../components';
import { Wrapper } from './style';

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper className='page'>
        <section className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </section>
      </Wrapper>
    </main>
  );
};

export default ProductsPage;
