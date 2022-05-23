import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../../context/filters-context/filter_context';
import { SortUI } from '../../global-types';
import { Wrapper } from './style';

const Sort = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const { filtered_products: products, grid_view, sort } = filterState;

  const showGridView = () => {
    filterDispatch({ type: 'SET_GRIDVIEW' });
  };
  const showListView = () => {
    filterDispatch({ type: 'SET_LISTVIEW' });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // for reference name must be the same as in state (sort)
    // const name = e.target.name;
    const value: SortUI = e.target.value as SortUI;
    filterDispatch({ type: 'UPDATE_SORT', payload: value });
  };
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view && 'active'}`}
          onClick={showGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          className={`${!grid_view && 'active'}`}
          onClick={showListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
