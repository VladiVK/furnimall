import React from 'react';
import { IconType } from 'react-icons';

// PRODUCTS
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
  products_loading: boolean;
  products_error: boolean;
  products: BasicProductUI[];
  featured_products: BasicProductUI[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: SingleProductUI;
};
export type ProductsProviderProps = {
  children: React.ReactNode;
};

// export type ProductsActions = {
//   type: keyof typeof ProductsActionsList;
// };
export type ProductsActionUI =
  | { type: 'SIDEBAR_OPEN' }
  | { type: 'SIDEBAR_CLOSE' }
  | { type: 'GET_PRODUCTS_BEGIN' }
  | { type: 'GET_PRODUCTS_SUCCESS'; payload: BasicProductUI[] }
  | { type: 'GET_PRODUCTS_ERROR' }
  | { type: 'GET_SINGLE_PRODUCT_BEGIN' }
  | { type: 'GET_SINGLE_PRODUCT_SUCCESS'; payload: SingleProductUI }
  | { type: 'GET_SINGLE_PRODUCT_ERROR' };

export type BasicProductUI = {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
};

export type SingleProductImgUI =
  | {
      filename: string;
      height: number;
      id: string;
      size: number;
      type: string;
      url: string;
      width: number;
      thumbnails: {
        full: { height: number; width: number; url: string };
        large: { height: number; width: number; url: string };
        small: { height: number; width: number; url: string };
      };
    }
  | {
      filename?: string;
      height?: number;
      id?: string;
      size?: number;
      type?: string;
      url: '';
      width?: number;
      thumbnails?: {
        full: { height: number; width: number; url: string };
        large: { height: number; width: number; url: string };
        small: { height: number; width: number; url: string };
      };
    };

export type SingleProductUI = {
  id: string;
  name: string;
  price: number;
  images: SingleProductImgUI[];
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping?: boolean;
  featured?: boolean;
  reviews: number;
  stars: number;
  stock: number;
};

// FILTERS

export type FilterProviderProps = {
  children: React.ReactNode;
};
export type FilterUI = {
  filtered_products: BasicProductUI[];
  all_products: BasicProductUI[];
  grid_view: boolean;
};
export type FilterActionUI =
  | { type: 'LOAD_PRODUCTS'; payload: BasicProductUI[] }
  | { type: 'SET_GRIDVIEW' }
  | { type: 'SET_LISTVIEW' }
  | { type: 'UPDATE_SORT' }
  | { type: 'SORT_PRODUCTS' }
  | { type: 'UPDATE_FILTERS' }
  | { type: 'FILTER_PRODUCTS' }
  | { type: 'CLEAR_FILTERS' };
