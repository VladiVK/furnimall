import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';
import BgImg1 from '../../assets/protagonist-bg-1.jpg';
import BgImg2 from '../../assets/protagonist-bg-2.jpg';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          feel yourself. <br />
          design your style
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          mollitia earum ducimus ipsa illo voluptates autem veritatis quisquam
          quia quidem voluptate amet quas, eos, est vitae vel quae maiores
          deserunt.
        </p>
        <Link to='/products' className='btn hero-btn'>
          buy now
        </Link>
      </article>
      <article className='img-container'>
        <img className='main-img' src={BgImg1} alt='furniture' />
        <img className='accent-img' src={BgImg2} alt='table' />
      </article>
    </Wrapper>
  );
};

export default Hero;
