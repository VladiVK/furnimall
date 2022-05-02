import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>The page cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;
