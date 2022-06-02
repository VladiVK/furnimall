import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserUI } from '../../global-types';

export type UserStateModel = {
  loginWithRedirect: () => any;
  logout: (arg: any) => any;
  myUser: UserUI;
};

const UserContext = createContext<UserStateModel>({} as UserStateModel);

type UserProviderProps = {
  children: React.ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const { isAuthenticated, loginWithRedirect, user, logout, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // @ts-ignore
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
