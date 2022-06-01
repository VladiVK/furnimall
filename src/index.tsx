import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products-context/products_context';
import { FilterProvider } from './context/filters-context/filter_context';
import App from './App';
import { CartProvider } from './context/cart-context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user-context/user_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-dpiqs9s8.us.auth0.com'
      clientId='Kie3C9b7sBuzNvXK0Vot3pGBGDTiY3LI'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <BrowserRouter>
              <CartProvider>
                <App />
              </CartProvider>
            </BrowserRouter>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
    ,
  </React.StrictMode>
);
