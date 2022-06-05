import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper } from './style';

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

export default AuthWrapper;
