import React from 'react';
import { IconType } from 'react-icons';

enum ProductsActionsList {
  SIDEBAR_OPEN = 'SIDEBAR_OPEN',
  SIDEBAR_CLOSE = 'SIDEBAR_CLOSE',
  GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN',
  GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR',
}

export type ProductsUI = {
  isSidebarOpen: boolean;
};
export type ProductsProviderProps = {
  children: React.ReactNode;
};

// export type ProductsActions = {
//   type: keyof typeof ProductsActionsList;
// };
export type ProductsActionUI =
  | { type: 'SIDEBAR_OPEN' }
  | { type: 'SIDEBAR_CLOSE' };
