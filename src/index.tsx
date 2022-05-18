import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products-context/products_context';
import { FilterProvider } from './context/filters-context/filter_context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
