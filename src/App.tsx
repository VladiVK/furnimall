import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useUserContext } from './context/user-context/user_context';
import { useAuth0 } from '@auth0/auth0-react';

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
  AuthWrapper,
} from './pages';

function App() {
  // const { myUser } = useUserContext();
  const { user } = useAuth0();

  return (
    <div>
      <AuthWrapper>
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
              element={user ? <CheckoutPage /> : <Navigate replace to='/' />}
            />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </AuthWrapper>
    </div>
  );
}

export default App;
