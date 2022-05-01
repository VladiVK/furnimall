import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/protagonist-logo-2.svg';
import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/constants.js';
import { SidebarContainer } from './styles.js';
import CartButtons from '../cartButtons';

// import { useProductsContext } from '../context/products_context';
// import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const isOpen = true;
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isOpen && 'show-sidebar'}`}>
        <div className='sidebar__header'>
          <img className='logo' src={logo} alt='furnimall' />
          <button className='close-btn' type='button'>
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
