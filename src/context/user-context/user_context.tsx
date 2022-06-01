import React, { useState, useEffect, createContext, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export type UserStateModel = {
  loginWithRedirect: () => any;
  logout: (arg: any) => any;
  myUser: any;
};

// // @ts-ignore
const UserContext = createContext<UserStateModel>({} as UserStateModel);

type UserProviderProps = {
  children: React.ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const { isAuthenticated, loginWithRedirect, user, logout, isLoading } =
    useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      // @ts-ignore
      setMyUser(user);
    } else {
      // @ts-ignore
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
