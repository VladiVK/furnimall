import { FilterActionUI, FilterUI } from '../global-types';

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

    default:
      return state;
  }
};
export default filter_reducer;
