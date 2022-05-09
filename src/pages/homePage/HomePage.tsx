import React from 'react';

import { Contact, Hero, Services, FeaturedProducts } from '../../components';
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
