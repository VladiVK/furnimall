import { BasicProductUI, FilterActionUI, FilterUI } from '../global-types';

const filter_reducer = (state: FilterUI, action: FilterActionUI): FilterUI => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      let maxPrice = Math.max(...action.payload.map((p) => p.price));
      return {
        ...state,
        // we need spred operator because we should use it for reset
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case 'SET_GRIDVIEW':
      return {
        ...state,
        grid_view: true,
      };
    case 'SET_LISTVIEW':
      return {
        ...state,
        grid_view: false,
      };
    case 'UPDATE_SORT':
      return { ...state, sort: action.payload };
    case 'SORT_PRODUCTS':
      const { sort, filtered_products } = state;

      const sortBank = {
        'price-lowest': (arr: BasicProductUI[]) =>
          [...arr].sort((a, b) => a.price - b.price),
        'price-highest': (arr: BasicProductUI[]) =>
          [...arr].sort((a, b) => b.price - a.price),
        'name-a': (arr: BasicProductUI[]) =>
          [...arr].sort((a, b) => a.name.localeCompare(b.name)),
        'name-z': (arr: BasicProductUI[]) =>
          [...arr].sort((a, b) => b.name.localeCompare(a.name)),
      };

      return {
        ...state,
        filtered_products: sortBank[sort](
          filtered_products
        ) as BasicProductUI[],
      };

    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };

    case 'FILTER_PRODUCTS':
      const { all_products } = state;
      const { category, color, company, text, price, shipping } = state.filters;
      let tempProducts = [...all_products];
      // search input text
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }
      // category
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      // company
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      // color
      if (color !== 'all') {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      // price
      tempProducts = tempProducts.filter((p) => p.price <= price);
      // shipping
      if (shipping) {
        tempProducts = tempProducts.filter((p) => p.shipping === true);
      }
      return {
        ...state,
        filtered_products: tempProducts,
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          category: 'all',
          color: 'all',
          company: 'all',
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      return state;
  }
};
export default filter_reducer;
