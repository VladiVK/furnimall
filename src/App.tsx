import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoutePage,
  SharedLayout,
} from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
