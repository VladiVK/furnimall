import React, { MouseEventHandler } from 'react';
import { useFilterContext } from '../../context/filters-context/filter_context';
import { Wrapper } from './style';

import { getUniqueValues, formatPrice } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';

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

  const updateFilters = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    filterDispatch({ type: 'UPDATE_FILTERS', payload: { name, value } });
  };
  const clearFilters = () => {
    filterDispatch({ type: 'CLEAR_FILTERS' });
  };

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
          {/* categories */}
          <div className='form-control'>
            <h5>categories</h5>
            <div>
              {categories.map((c, i) => {
                return (
                  <button
                    key={i}
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    }`}
                    name='category'
                    type='button'
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* company */}
          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              value={company}
              className='company'
              onChange={updateFilters}
            >
              {companies.map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* enf of company */}
          {/* colors */}
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      data-color={c}
                      name='color'
                      key={index}
                      className={`${
                        c === color ? 'all-btn active' : 'all-btn'
                      }`}
                      onClick={updateFilters}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    data-color={c}
                    name='color'
                    key={index}
                    className={`${
                      c === color ? 'color-btn active' : 'color-btn'
                    }`}
                    style={{ background: c }}
                    onClick={updateFilters}
                  >
                    {c === color && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              id='price'
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
            />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
