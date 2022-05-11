import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style.js';

type PageHeroPropsUI = {
  title: string;
  product?: boolean;
};
const PageHero = ({ title, product }: PageHeroPropsUI) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3 className='page-hero__title'>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
