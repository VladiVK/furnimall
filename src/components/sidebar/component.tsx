import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/protagonist-logo-2.svg';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/constants.js';
import { SidebarContainer } from './styles.js';
import CartButtons from '../cartButtons';

import { useProductsContext } from '../../context/products-context/products_context';
import { SIDEBAR_CLOSE } from '../../actions';
// import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const { productsState, productsDispatch } = useProductsContext();

  const closeSidebar = () => productsDispatch({ type: 'SIDEBAR_CLOSE' });

  return (
    <SidebarContainer>
      <aside
        className={`sidebar ${productsState.isSidebarOpen && 'show-sidebar'}`}
      >
        <div className='sidebar__header'>
          <img className='logo' src={logo} alt='furnimall' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <NavLink to={url} onClick={closeSidebar}>
                {text}
              </NavLink>
            </li>
          ))}
          {/* checkout */}
          <li>
            <NavLink to='/checkout' onClick={closeSidebar}>
              checkout
            </NavLink>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
