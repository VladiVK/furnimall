import styled from 'styled-components';

export const SidebarContainer = styled.div`
  text-align: center;
  background: var(--clr-white);
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
  .sidebar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1rem 1.5rem; */
    padding: 1rem 2.5rem 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    /* padding: 1rem 1.5rem; */
    padding: 1rem 2.5rem 1rem 1.5rem;
    color: var(--clr-primary-4);
    transition: var(--transition);
    letter-spacing: var(--spacing);

    &.active {
      color: var(--clr-yellow);
    }
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-primary-9);
    color: var(--clr-primary-2);
  }
`;
