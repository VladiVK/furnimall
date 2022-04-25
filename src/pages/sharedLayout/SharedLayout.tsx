import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
