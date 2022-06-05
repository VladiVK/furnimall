import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  margin: 0 auto;

  .cart__btn {
    color: var(--clr-primary-4);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;

    align-items: center;
  }
  .cart__container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart__value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-yellow);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-primary-4);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-primary-4);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
