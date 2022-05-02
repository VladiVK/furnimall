import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-7);

 

  .page-hero__title {
    font-size: 1rem;
    font-weight: 400;
  } a {
    color: var(--clr-primary-7);
    /* color: var(--clr-primary-4); */
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }

  @media screen and (min-width: 800px) {
  .page-hero__title {
    font-size: 1.5rem;
  }
`;
