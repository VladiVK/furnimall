import styled from 'styled-components';
export const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-yellow);
    color: var(--clr-primary-4);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--clr-white);
    }
  }
  .clear-btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
`;
