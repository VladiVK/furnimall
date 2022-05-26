import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products-context/products_context';
import { FilterProvider } from './context/filters-context/filter_context';
import App from './App';
import { CartProvider } from './context/cart-context/cart_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
