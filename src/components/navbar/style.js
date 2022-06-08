import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav__center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 150px;
      /* margin-left: -15px; */
    }
  }

  .nav__toggle {
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--clr-primary-4);

    svg {
      font-size: 1.8rem;
    }
  }

  .nav__links {
    display: none;
  }

  .cart-btn__wrapper {
    display: none;
  }

  @media (min-width: 900px) {
    .nav__header img {
      margin-left: -20px;
    }
  }
  @media (min-width: 1000px) {
    .nav__header img {
      margin-left: -25px;
    }
  }
  @media (min-width: 1200px) {
    .nav__header img {
      margin-left: 0;
    }
  }
  @media (min-width: 992px) {
    .nav__toggle {
      display: none;
    }
    .nav__center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav__links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-primary-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-yellow);
        }
      }
      a.active {
        color: var(--clr-yellow);
        /* background: var(--clr-black);
        border-radius: 10px;
        padding: 0.3rem 0.9rem; */
      }
    }
    .cart-btn__wrapper {
      display: grid;
    }
  }
`;
