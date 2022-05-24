import React from 'react';
import { useFilterContext } from '../../context/filters-context/filter_context';
import { Wrapper } from './style';

import { getUniqueValues, formatPrice } from '../../utils/helpers';
// import { FaCheck } from 'react-icons/fa';

const Filters = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const {
    all_products,
    filters: {
      text,
      category,
      color,
      company,
      max_price,
      min_price,
      price,
      shipping,
    },
  } = filterState;

  const updateFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    filterDispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };
  const clearFilters = () => {};

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              className='search-input'
              placeholder='search'
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search input */}
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;
