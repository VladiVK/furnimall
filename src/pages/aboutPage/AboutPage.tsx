import React from 'react';
import PageHero from '../../components/pageHero';
import { Wrapper } from './style';

import aboutImg from '../../assets/protagonist-bg-1.jpg';
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img className='about__img' src={aboutImg} alt='furniture' />
        <article>
          <div className='title'>
            <h2>our mission</h2>
            <div className='underline'></div>
          </div>

          <p className='about__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
            dolorum dolores. Tenetur, quibusdam ullam modi, laboriosam corporis
            voluptatum corrupti possimus at iusto aliquam illum. Beatae est
            repellat minima, voluptas enim ea necessitatibus amet accusantium
            provident tenetur fugit veritatis. Autem quia quam voluptates, porro
            non obcaecati repellat deleniti veritatis nemo laboriosam.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
