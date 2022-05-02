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
  const { state, dispatch } = useProductsContext();

  const closeSidebar = () => dispatch({ type: 'SIDEBAR_CLOSE' });

  return (
    <SidebarContainer>
      <aside className={`sidebar ${state.isSidebarOpen && 'show-sidebar'}`}>
        <div className='sidebar__header'>
          <img className='logo' src={logo} alt='furnimall' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          ))}
          {/* checkout */}
          <li>
            <NavLink to='/checkout'>checkout</NavLink>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
