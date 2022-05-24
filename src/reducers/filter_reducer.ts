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
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default filter_reducer;
