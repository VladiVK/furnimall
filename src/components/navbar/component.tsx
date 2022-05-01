// import React from 'react';
// import styled from 'styled-components';

import { links } from '../../utils/constants.js';

import logo from '../../assets/protagonist-logo-2.svg';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
// Styles
import { NavContainer } from './style.js';
import CartButtons from '../cartButtons';

// import { useProductsContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';

const Navbar = () => {
  return (
    <NavContainer>
      <div className='nav__center'>
        <div className='nav__header'>
          <Link to='/'>
            <img src={logo} alt='furnimall' />
          </Link>
          <button className='nav__toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav__links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

export default Navbar;
