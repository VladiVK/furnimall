import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUserContext } from './context/user-context/user_context';

// Pages
import {
  HomePage,
  AboutPage,
  ProductsPage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  SharedLayout,
} from './pages';

function App() {
  const { myUser } = useUserContext();

  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />
          {/* Private route: Auth protected */}
          <Route
            path='checkout'
            element={myUser ? <CheckoutPage /> : <Navigate replace to='/' />}
          />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
