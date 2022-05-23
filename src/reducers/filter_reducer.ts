import { BasicProductUI, FilterActionUI, FilterUI } from '../global-types';

const filter_reducer = (state: FilterUI, action: FilterActionUI): FilterUI => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        // we need spred operator because we should use it for reset
        all_products: [...action.payload],
        filtered_products: [...action.payload],
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

    default:
      return state;
  }
};
export default filter_reducer;
